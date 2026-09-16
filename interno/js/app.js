// ── Dados do atendente (aparecem no rodapé do PDF) ──────
const ATENDENTE = {
  nome: "Leonam Kikos",
  email: "vendas5rj@kikos.com.br",
  telefone: "(21) 98386-0369"
};

let gruposParseados = []; // [{ linha: "Monster", itens: [{qtd, nome, peso, codigo}] }]

// ── Utilidades ───────────────────────────────────────────
function removerAcentos(s) {
  return (s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function normalizar(s) {
  return removerAcentos(String(s || "")).toLowerCase().trim();
}
function formatarMoeda(v) {
  return (v || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// ── Busca de preço na base (por SKU exato, depois por código dentro da descrição, depois por nome) ──
function buscarPreco(nome, codigo) {
  if (codigo) {
    const codigoNorm = normalizar(codigo);
    // 1. SKU exato
    let achado = precos.find(p => normalizar(p.sku) === codigoNorm);
    if (achado) return { ...achado, metodo: "sku" };
    // 2. código aparecendo dentro da descrição da planilha (ex: "TTDS7172i", "MD1032")
    achado = precos.find(p => normalizar(p.descricao).includes(codigoNorm));
    if (achado) return { ...achado, metodo: "descricao" };
  }
  // 3. por nome do produto (mais arriscado, só como último recurso)
  const nomeNorm = normalizar(nome);
  if (nomeNorm.length > 3) {
    const achado = precos.find(p => normalizar(p.descricao).includes(nomeNorm));
    if (achado) return { ...achado, metodo: "nome" };
  }
  return null;
}

// ── Parsing da mensagem de WhatsApp ──────────────────────
function processarMensagem() {
  const texto = document.getElementById("input-mensagem").value;
  const erroEl = document.getElementById("erro-parse");
  erroEl.textContent = "";

  if (!texto.trim()) {
    erroEl.textContent = "Cole a mensagem antes de processar.";
    return;
  }

  const nomeMatch = texto.match(/Meu nome é (.+?)\./);
  const nome = nomeMatch ? nomeMatch[1].trim() : "";

  // Tudo entre "para os seguintes equipamentos:" e "Pode me ajudar?" (ou o resto do texto)
  const inicioItens = texto.indexOf("equipamentos:");
  const fimItens = texto.indexOf("Pode me ajudar?");
  const blocoItens = inicioItens >= 0
    ? texto.slice(inicioItens, fimItens >= 0 ? fimItens : undefined)
    : texto;

  // Documento: tudo entre o nome e "Gostaria de um orçamento"
  let documento = "";
  const finalNome = nomeMatch ? nomeMatch.index + nomeMatch[0].length : 0;
  const inicioGostaria = texto.indexOf("Gostaria de um orçamento");
  if (inicioGostaria > finalNome) {
    documento = texto.slice(finalNome, inicioGostaria).trim();
  }

  // Quebra em blocos por linha (separados por linha em branco), cada um começando com *Linha X*
  const blocos = blocoItens.split(/\n\s*\n/).map(b => b.trim()).filter(Boolean);
  const grupos = [];

  blocos.forEach(bloco => {
    const linhas = bloco.split("\n").map(l => l.trim()).filter(Boolean);
    const tituloMatch = linhas[0] && linhas[0].match(/^\*{0,2}Linha (.+?)\*{0,2}$/i);
    if (!tituloMatch) return; // ignora blocos que não são de itens (ex: cabeçalho "equipamentos:")

    const nomeLinha = tituloMatch[1];
    const itens = [];

    linhas.slice(1).forEach(l => {
      const m = l.match(/^(?:[•*\-]\s*)?(\d+)x\s+(.*?)(?:\s+([\d.,]+)\s*kg)?(?:\s+\(([^)]+)\))?\s*$/i);
      if (!m) return;
      itens.push({
        qtd: parseInt(m[1], 10),
        nome: m[2].trim(),
        peso: m[3] ? m[3].replace(",", ".") : null,
        codigo: m[4] ? m[4].trim() : null
      });
    });

    if (itens.length > 0) grupos.push({ linha: nomeLinha, itens });
  });

  if (grupos.length === 0) {
    erroEl.textContent = "Não consegui identificar os itens na mensagem. Confira o formato e tente de novo.";
    return;
  }

  gruposParseados = grupos;

  document.getElementById("campo-nome").value = nome;
  document.getElementById("campo-documento").value = documento;
  document.getElementById("campo-data").valueAsDate = new Date();

  renderizarItens(grupos);

  document.getElementById("secao-cliente").style.display = "block";
  document.getElementById("secao-itens").style.display = "block";
  document.getElementById("secao-condicoes").style.display = "block";
  document.getElementById("secao-total").style.display = "block";
}

// ── Renderiza os grupos de itens com preço/desconto editáveis ──
function renderizarItens(grupos) {
  const container = document.getElementById("grupos-itens");
  container.innerHTML = "";

  grupos.forEach((grupo, gi) => {
    const divGrupo = document.createElement("div");
    divGrupo.className = "grupo-linha";

    const titulo = document.createElement("div");
    titulo.className = "grupo-linha-titulo";
    titulo.textContent = `Linha ${grupo.linha}`;
    divGrupo.appendChild(titulo);

    grupo.itens.forEach((item, ii) => {
      const resultado = buscarPreco(item.nome, item.codigo);
      item._precoEncontrado = !!resultado;
      item._valorUnit = resultado ? resultado.unitario : 0;
      item._desconto = 0;

      const div = document.createElement("div");
      div.className = "item-linha";

      const metaTexto = [
        item.codigo ? `Código: ${item.codigo}` : null,
        item.peso ? `Peso: ${item.peso}kg` : null,
        resultado ? `Encontrado na planilha (${resultado.metodo})` : "Não encontrado — preencha o valor manualmente"
      ].filter(Boolean).join(" · ");

      div.innerHTML = `
        <div class="item-nome">${item.qtd}x ${item.nome}</div>
        <div class="item-meta ${resultado ? "preco-encontrado" : "preco-nao-encontrado"}">${metaTexto}</div>
        <div class="item-campos">
          <div>
            <label>Valor unitário (R$)</label>
            <input type="number" step="0.01" class="input-valor" data-gi="${gi}" data-ii="${ii}" value="${item._valorUnit}">
          </div>
          <div>
            <label>Desconto (R$)</label>
            <input type="number" step="0.01" class="input-desconto" data-gi="${gi}" data-ii="${ii}" value="0">
          </div>
          <div>
            <label>Total (qtd incluída)</label>
            <input type="text" class="output-total" data-gi="${gi}" data-ii="${ii}" value="${formatarMoeda(item._valorUnit * item.qtd)}" readonly>
          </div>
        </div>
      `;
      divGrupo.appendChild(div);
    });

    container.appendChild(divGrupo);
  });

  container.querySelectorAll(".input-valor, .input-desconto").forEach(input => {
    input.addEventListener("input", atualizarTotais);
  });

  atualizarTotais();
}

document.getElementById("input-desconto-geral").addEventListener("input", atualizarTotais);
document.getElementById("tipo-desconto-geral").addEventListener("change", atualizarTotais);

// ── Recalcula totais por item e o grande total ──────────
function atualizarTotais() {
  let totalSemDesconto = 0;
  let totalDesconto = 0;

  document.querySelectorAll(".input-valor").forEach(input => {
    const gi = input.dataset.gi, ii = input.dataset.ii;
    const item = gruposParseados[gi].itens[ii];
    const valorUnit = parseFloat(input.value) || 0;
    const descontoInput = document.querySelector(`.input-desconto[data-gi="${gi}"][data-ii="${ii}"]`);
    const desconto = parseFloat(descontoInput.value) || 0;

    item._valorUnit = valorUnit;
    item._desconto = desconto;

    const totalItem = (valorUnit * item.qtd) - desconto;
    const outputEl = document.querySelector(`.output-total[data-gi="${gi}"][data-ii="${ii}"]`);
    if (outputEl) outputEl.value = formatarMoeda(totalItem);

    totalSemDesconto += valorUnit * item.qtd;
    totalDesconto += desconto;
  });

  const subtotalComDescontoItens = totalSemDesconto - totalDesconto;

  // Desconto adicional sobre o total: em % (sobre o subtotal já com desconto de item)
  // ou em R$ fixo, o que o Victor escolher no seletor.
  const tipoDescontoGeral = document.getElementById("tipo-desconto-geral").value;
  const valorDescontoGeralInput = parseFloat(document.getElementById("input-desconto-geral").value) || 0;
  let descontoGeral = tipoDescontoGeral === "percentual"
    ? subtotalComDescontoItens * (valorDescontoGeralInput / 100)
    : valorDescontoGeralInput;

  // Nunca deixa o desconto geral passar do subtotal (evita total negativo)
  descontoGeral = Math.min(Math.max(descontoGeral, 0), subtotalComDescontoItens);

  const totalAPagar = subtotalComDescontoItens - descontoGeral;

  document.getElementById("total-sem-desconto").textContent = formatarMoeda(totalSemDesconto);
  document.getElementById("total-desconto").textContent = formatarMoeda(totalDesconto);
  document.getElementById("total-desconto-geral").textContent = formatarMoeda(descontoGeral);
  document.getElementById("total-a-pagar").textContent = formatarMoeda(totalAPagar);
}

// ── Desenha um degradê horizontal simples (jsPDF não tem gradiente nativo) ──
function desenharGradienteHorizontal(doc, x, y, w, h, corInicio, corFim, passos = 40) {
  for (let i = 0; i < passos; i++) {
    const t = i / (passos - 1);
    const r = Math.round(corInicio[0] + (corFim[0] - corInicio[0]) * t);
    const g = Math.round(corInicio[1] + (corFim[1] - corInicio[1]) * t);
    const b = Math.round(corInicio[2] + (corFim[2] - corInicio[2]) * t);
    doc.setFillColor(r, g, b);
    doc.rect(x + (w / passos) * i, y, w / passos + 0.5, h, "F");
  }
}

// ── Geração do PDF ───────────────────────────────────────
function gerarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "pt", format: "a4" });

  const corDestaque = [229, 35, 34];
  const corEscura = [31, 31, 31];
  const margemEsq = 40;
  let y = 50;

  const nome = document.getElementById("campo-nome").value || "";
  const documento = document.getElementById("campo-documento").value || "";
  const numero = document.getElementById("campo-numero").value || "—";
  const dataInput = document.getElementById("campo-data").value;
  const dataFormatada = dataInput ? new Date(dataInput + "T00:00:00").toLocaleDateString("pt-BR") : "";
  const condicoesTexto = document.getElementById("campo-condicoes").value || "";
  const validadeInput = document.getElementById("campo-validade").value;
  const validadeFormatada = validadeInput ? new Date(validadeInput + "T00:00:00").toLocaleDateString("pt-BR") : "";

  // Cabeçalho
  doc.setFillColor(...corEscura);
  doc.rect(0, 0, 595, 70, "F");

  // Logo (proporção original ~876x148)
  const logoLargura = 130;
  const logoAltura = logoLargura * (148 / 876);
  doc.addImage(LOGO_KIKOS_BASE64, "PNG", margemEsq, (70 - logoAltura) / 2, logoLargura, logoAltura);

  doc.setTextColor(200, 200, 200);
  doc.setFontSize(8);
  doc.text("HÁ 35 ANOS JUNTOS PELA SAÚDE", margemEsq, 62);

  desenharGradienteHorizontal(doc, 0, 70, 595, 4, [255, 59, 58], [200, 22, 21]);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text(`Data: ${dataFormatada}`, 595 - margemEsq, 32, { align: "right" });
  doc.text(`Nº: ${numero}`, 595 - margemEsq, 46, { align: "right" });

  y = 100;
  doc.setTextColor(...corEscura);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("PROPOSTA COMERCIAL", margemEsq, y);
  y += 20;
  doc.setFontSize(12);
  doc.text(nome, margemEsq, y);
  y += 16;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  const linhasDoc = doc.splitTextToSize(documento, 515);
  doc.text(linhasDoc, margemEsq, y);
  y += linhasDoc.length * 12 + 16;

  // Tabela de itens (uma por linha de produto, com cabeçalho "LINHA X" antes de cada grupo)
  const linhasPremium = [];
  gruposParseados.forEach(grupo => {
    linhasPremium.push([{ content: `LINHA ${grupo.linha.toUpperCase()}`, colSpan: 5, styles: { fillColor: corEscura, textColor: 255, fontStyle: "bold" } }]);
    grupo.itens.forEach(item => {
      linhasPremium.push([
        item.codigo || "-",
        item.nome + (item.peso ? ` ${item.peso}kg` : ""),
        item.qtd,
        formatarMoeda(item._valorUnit),
        formatarMoeda((item._valorUnit * item.qtd) - item._desconto)
      ]);
    });
  });

  doc.autoTable({
    startY: y,
    head: [["SKU", "Item", "Qtd", "Valor unit.", "Total"]],
    body: linhasPremium,
    margin: { left: margemEsq, right: margemEsq },
    styles: { fontSize: 9, cellPadding: 6 },
    headStyles: { fillColor: corDestaque, textColor: 255 },
    didParseCell: function (data) {
      // Linhas de título de grupo já vêm com estilo definido acima; não sobrescreve
      if (data.row.raw.length === 1) {
        data.cell.styles.fillColor = [26, 13, 12];
        data.cell.styles.textColor = 255;
      }
    }
  });

  y = doc.lastAutoTable.finalY + 24;

  const totalSemDesconto = document.getElementById("total-sem-desconto").textContent;
  const totalDesconto = document.getElementById("total-desconto").textContent;
  const totalDescontoGeral = document.getElementById("total-desconto-geral").textContent;
  const totalAPagar = document.getElementById("total-a-pagar").textContent;

  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text("Valor total sem desconto:", margemEsq, y);
  doc.text(totalSemDesconto, 595 - margemEsq, y, { align: "right" });
  y += 16;
  doc.text("Valor de desconto:", margemEsq, y);
  doc.text(totalDesconto, 595 - margemEsq, y, { align: "right" });
  y += 16;
  doc.text("Desconto adicional:", margemEsq, y);
  doc.text(totalDescontoGeral, 595 - margemEsq, y, { align: "right" });
  y += 18;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(...corDestaque);
  doc.text("Valor total a pagar:", margemEsq, y);
  doc.text(totalAPagar, 595 - margemEsq, y, { align: "right" });
  y += 30;

  // Condições de pagamento
  doc.setTextColor(...corEscura);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Observações", margemEsq, y);
  y += 18;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);

  const linhasCondicoes = condicoesTexto.split("\n").map(l => l.trim()).filter(Boolean);
  linhasCondicoes.forEach((linha, i) => {
    const textoNumerado = `${i + 1}- ${linha}`;
    const quebrado = doc.splitTextToSize(textoNumerado, 515);
    doc.text(quebrado, margemEsq, y);
    y += quebrado.length * 13 + 4;
  });

  if (validadeFormatada) {
    y += 8;
    doc.setFont("helvetica", "bold");
    doc.text(`Condições válidas até ${validadeFormatada}`, margemEsq, y);
    y += 20;
  }

  // Rodapé com contato
  const alturaPagina = doc.internal.pageSize.height;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(120, 120, 120);
  doc.text(
    `${ATENDENTE.nome}  ·  ${ATENDENTE.email}  ·  ${ATENDENTE.telefone}`,
    margemEsq,
    alturaPagina - 30
  );

  const nomeArquivo = `Orcamento_Kikos_${numero !== "—" ? numero : "sem_numero"}.pdf`;
  doc.save(nomeArquivo);
}

document.getElementById("btn-processar").addEventListener("click", processarMensagem);
document.getElementById("btn-gerar-pdf").addEventListener("click", gerarPDF);
