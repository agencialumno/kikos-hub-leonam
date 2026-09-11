// Base de preços — extraída da planilha COMERCIAL (atualizar periodicamente reexportando)
// Cada item: sku (código interno Kikos), descricao (texto da planilha, contém o modelo/código de linha), unitario (tabela), aVista (à vista)
const precos = [
  {
    "sku": "i012135",
    "descricao": "ESCADA PROFISSIONAL COM DISPLAY LED KE17.0i",
    "unitario": 49900.0,
    "aVista": 43413.0
  },
  {
    "sku": "i027769",
    "descricao": "ESCADA PROFISSIONAL COM DISPLAY LED KE18.0",
    "unitario": 49900.0,
    "aVista": 43413.0
  },
  {
    "sku": "i013274",
    "descricao": "ESCADA PROFISSIONAL LED KE19.0",
    "unitario": 77190.0,
    "aVista": 67155.3
  },
  {
    "sku": "i013275",
    "descricao": "ESCADA PROFISSIONAL  INTERATIVA T20.0",
    "unitario": 90790.0,
    "aVista": 78987.3
  },
  {
    "sku": "i013257",
    "descricao": "BIKE KIKOS KV3.0",
    "unitario": 2590.0,
    "aVista": 2253.3
  },
  {
    "sku": "i000002",
    "descricao": "BIKE KIKOS KV3.1i",
    "unitario": 2949.0,
    "aVista": 2565.63
  },
  {
    "sku": "i015555",
    "descricao": "BIKE KIKOS KV3.1iX",
    "unitario": 2949.0,
    "aVista": 2565.63
  },
  {
    "sku": "i001312",
    "descricao": "BIKE AIR KIKOS A5",
    "unitario": 3090.0,
    "aVista": 2688.3
  },
  {
    "sku": "i002105",
    "descricao": "BIKE SPINNING KIKOS MAX-KS2",
    "unitario": 3790.0,
    "aVista": 3297.3
  },
  {
    "sku": "i021784",
    "descricao": "BIKE BOLT 3016",
    "unitario": 1720.0,
    "aVista": 1496.4
  },
  {
    "sku": "i021783",
    "descricao": "BIKE SPINNING BOLT F1",
    "unitario": 2440.0,
    "aVista": 2122.8
  },
  {
    "sku": "i002150",
    "descricao": "BIKE SPINNING KIKOS F2i",
    "unitario": 3790.0,
    "aVista": 3297.3
  },
  {
    "sku": "i013276",
    "descricao": "BIKE KIKOS KV6.2",
    "unitario": 3590.0,
    "aVista": 3123.3
  },
  {
    "sku": "i001335",
    "descricao": "BIKE SPINNING KIKOS F3i",
    "unitario": 4090.0,
    "aVista": 3558.3
  },
  {
    "sku": "i000009",
    "descricao": "BIKE KIKOS KR3.8",
    "unitario": 4290.0,
    "aVista": 3732.3
  },
  {
    "sku": "i002108",
    "descricao": "BIKE SPINNING KIKOS MAX-KS5",
    "unitario": 4890.0,
    "aVista": 4254.3
  },
  {
    "sku": "i001336",
    "descricao": "BIKE SPINNING KIKOS F5i",
    "unitario": 4890.0,
    "aVista": 4254.3
  },
  {
    "sku": "i027328",
    "descricao": "BIKE SPINNING KIKOS S1200",
    "unitario": 4490.0,
    "aVista": 3906.3
  },
  {
    "sku": "i000003",
    "descricao": "BIKE KIKOS KV6.3i",
    "unitario": 4190.0,
    "aVista": 3645.3
  },
  {
    "sku": "i015556",
    "descricao": "BIKE KIKOS KR5.6Bi - BIVOLT",
    "unitario": 6849.0,
    "aVista": 5958.63
  },
  {
    "sku": "i001801",
    "descricao": "BIKE SPINNING KIKOS F7i",
    "unitario": 7290.0,
    "aVista": 6342.3
  },
  {
    "sku": "i000004",
    "descricao": "BIKE KIKOS KV8.7i - BIVOLT",
    "unitario": 7549.0,
    "aVista": 6567.63
  },
  {
    "sku": "i013262",
    "descricao": "BIKE KIKOS GAME BG Bluetooth",
    "unitario": 7890.0,
    "aVista": 6864.3
  },
  {
    "sku": "i013258",
    "descricao": "BIKE KIKOS KV9.3",
    "unitario": 11590.0,
    "aVista": 10083.3
  },
  {
    "sku": "i000016",
    "descricao": "BIKE SPINNING KIKOS F9",
    "unitario": 12190.0,
    "aVista": 10605.3
  },
  {
    "sku": "i000011",
    "descricao": "BIKE KIKOS KR9.1 - BIVOLT",
    "unitario": 11490.0,
    "aVista": 9996.3
  },
  {
    "sku": "i002106",
    "descricao": "MAGNETIC SYSTEM BIKE KIKOS MS2000",
    "unitario": 13990.0,
    "aVista": 12171.3
  },
  {
    "sku": "i013259",
    "descricao": "BIKE KIKOS KR9.4",
    "unitario": 14590.0,
    "aVista": 12693.3
  },
  {
    "sku": "i001332",
    "descricao": "BIKE KIKOS KV9.5iX",
    "unitario": 15390.0,
    "aVista": 13389.3
  },
  {
    "sku": "i013277",
    "descricao": "AIRBIKE KIKOS PRO ARXi",
    "unitario": 15290.0,
    "aVista": 13302.3
  },
  {
    "sku": "i013278",
    "descricao": "MAGNETIC SYSTEM BIKE KIKOS MS4000i",
    "unitario": 16790.0,
    "aVista": 14607.3
  },
  {
    "sku": "i001331",
    "descricao": "BIKE KIKOS KR9.6iX",
    "unitario": 18990.0,
    "aVista": 16521.3
  },
  {
    "sku": "i013253",
    "descricao": "BIKE SPINNING KIKOS PRO F13",
    "unitario": 22090.0,
    "aVista": 19218.3
  },
  {
    "sku": "i027916",
    "descricao": "BIKE SPINNING KIKOS PRO F12iX",
    "unitario": 13490.0,
    "aVista": 11736.3
  },
  {
    "sku": "i014891",
    "descricao": "BIKE KIKOS KV9.8iX  - NEW",
    "unitario": 22090.0,
    "aVista": 19218.3
  },
  {
    "sku": "i014892",
    "descricao": "BIKE KIKOS KR9.9iX - NEW",
    "unitario": 28790.0,
    "aVista": 25047.3
  },
  {
    "sku": "i013311",
    "descricao": "BIKE KIKOS GAME BW - POTENCIA EM WATTS",
    "unitario": 40990.0,
    "aVista": 35661.3
  },
  {
    "sku": "i013317",
    "descricao": "BIKE KIKOS KV10.0",
    "unitario": 23190.0,
    "aVista": 20175.3
  },
  {
    "sku": "i013318",
    "descricao": "BIKE KIKOS KR11.0",
    "unitario": 30290.0,
    "aVista": 26352.3
  },
  {
    "sku": "i000018",
    "descricao": "ELIPTICO KIKOS 4004",
    "unitario": 3090.0,
    "aVista": 2688.3
  },
  {
    "sku": "i000020",
    "descricao": "ELIPTICO KIKOS 2.0",
    "unitario": 3990.0,
    "aVista": 3471.3
  },
  {
    "sku": "i000021",
    "descricao": "ELIPTICO KIKOS 8703",
    "unitario": 6890.0,
    "aVista": 5994.3
  },
  {
    "sku": "i013279",
    "descricao": "ELIPTICO KIKOS 8704",
    "unitario": 7890.0,
    "aVista": 6864.3
  },
  {
    "sku": "i000022",
    "descricao": "ELIPTICO KIKOS 9200 - BIVOLT",
    "unitario": 10390.0,
    "aVista": 9039.3
  },
  {
    "sku": "i014380",
    "descricao": "ELIPTICO KIKOS KE4.4",
    "unitario": 14790.0,
    "aVista": 12867.3
  },
  {
    "sku": "i000024",
    "descricao": "ELIPTICO KIKOS KE5.5",
    "unitario": 20790.0,
    "aVista": 18087.3
  },
  {
    "sku": "i013280",
    "descricao": "ELIPTICO KIKOS KE7.7",
    "unitario": 25990.0,
    "aVista": 22611.3
  },
  {
    "sku": "i001811",
    "descricao": "ESTAÇÃO DE MUSCULAÇÃO GX POWER FIT 3CX",
    "unitario": 5290.0,
    "aVista": 4602.3
  },
  {
    "sku": "i000032",
    "descricao": "ESTACAO DE MUSCULACAO KIKOS GX SUPREME - 3CX",
    "unitario": 6190.0,
    "aVista": 5385.3
  },
  {
    "sku": "i000034",
    "descricao": "ESTACAO DE MUSCULACAO KIKOS GX1 - 3CX",
    "unitario": 9990.0,
    "aVista": 8691.3
  },
  {
    "sku": "i002084",
    "descricao": "ESTACAO DE MUSCULACAO KIKOS GX2i - 3CX",
    "unitario": 12490.0,
    "aVista": 10866.3
  },
  {
    "sku": "i001337",
    "descricao": "ESTACAO DE MUSCULACAO KIKOS GX4i - 5CX",
    "unitario": 22990.0,
    "aVista": 20001.3
  },
  {
    "sku": "i002111",
    "descricao": "ESTACAO DE MUSCULACAO KIKOS GX6i - 7CX",
    "unitario": 27990.0,
    "aVista": 24351.3
  },
  {
    "sku": "i017532",
    "descricao": "ESTAÇÃO MULTIFUNCIONAL KIKOS 515BF",
    "unitario": 19290.0,
    "aVista": 16782.3
  },
  {
    "sku": "i000038",
    "descricao": "ESTACAO DE MUSCULACAO KIKOS 518EX - 5CX",
    "unitario": 19790.0,
    "aVista": 17217.3
  },
  {
    "sku": "i000039",
    "descricao": "ESTACAO DE MUSCULACAO KIKOS 518FX - 6CX",
    "unitario": 24190.0,
    "aVista": 21045.3
  },
  {
    "sku": "i001338",
    "descricao": "ESTACAO DE MUSCULACAO KIKOS 518BLi - 12CX",
    "unitario": 62990.0,
    "aVista": 54801.3
  },
  {
    "sku": "i001339",
    "descricao": "ESTACAO DE MUSCULACAO KIKOS 518BKi - 20CX",
    "unitario": 99990.0,
    "aVista": 86991.3
  },
  {
    "sku": "i012534",
    "descricao": "ESTAÇÃO MULTIFUNCIONAL KIKOS 519BF",
    "unitario": 55990.0,
    "aVista": 48711.3
  },
  {
    "sku": "i001369",
    "descricao": "ESTAÇÃO KIKOS HG1505",
    "unitario": 192900.0,
    "aVista": 167823.0
  },
  {
    "sku": "i021785",
    "descricao": "ESTEIRA BOLT E300 110V",
    "unitario": 3650.0,
    "aVista": 3175.5
  },
  {
    "sku": "i021787",
    "descricao": "ESTEIRA BOLT E300C 220V",
    "unitario": 3650.0,
    "aVista": 3175.5
  },
  {
    "sku": "i013263",
    "descricao": "ESTEIRA KIKOS E700 - 110v",
    "unitario": 5390.0,
    "aVista": 4689.3
  },
  {
    "sku": "i013264",
    "descricao": "ESTEIRA KIKOS E700C - 220v",
    "unitario": 5390.0,
    "aVista": 4689.3
  },
  {
    "sku": "i013265",
    "descricao": "ESTEIRA KIKOS E900 - 110v",
    "unitario": 6790.0,
    "aVista": 5907.3
  },
  {
    "sku": "i013266",
    "descricao": "ESTEIRA KIKOS E900C - 220v",
    "unitario": 6790.0,
    "aVista": 5907.3
  },
  {
    "sku": "i013267",
    "descricao": "ESTEIRA KIKOS E1200 - 110v",
    "unitario": 10690.0,
    "aVista": 9300.3
  },
  {
    "sku": "i013268",
    "descricao": "ESTEIRA KIKOS E1200C - 220v",
    "unitario": 10690.0,
    "aVista": 9300.3
  },
  {
    "sku": "i014099",
    "descricao": "ESTEIRA KIKOS MAX K3i BIVOLT",
    "unitario": 12090.0,
    "aVista": 10518.3
  },
  {
    "sku": "i013269",
    "descricao": "ESTEIRA KIKOS KS2302 - 110v",
    "unitario": 15390.0,
    "aVista": 13389.3
  },
  {
    "sku": "i013270",
    "descricao": "ESTEIRA KIKOS KS2302C - 220v",
    "unitario": 15390.0,
    "aVista": 13389.3
  },
  {
    "sku": "i013441",
    "descricao": "ESTEIRA KIKOS KS4203 - 110V",
    "unitario": 19590.0,
    "aVista": 17043.3
  },
  {
    "sku": "i013442",
    "descricao": "ESTEIRA KIKOS KS4203C- 220V",
    "unitario": 19590.0,
    "aVista": 17043.3
  },
  {
    "sku": "i013271",
    "descricao": "ESTEIRA KIKOS KS5405 110V",
    "unitario": 22190.0,
    "aVista": 19305.3
  },
  {
    "sku": "i013272",
    "descricao": "ESTEIRA KIKOS KS5405C 220V",
    "unitario": 22190.0,
    "aVista": 19305.3
  },
  {
    "sku": "i013312",
    "descricao": "ESTEIRA KIKOS KS5406 - 110V",
    "unitario": 28990.0,
    "aVista": 25221.3
  },
  {
    "sku": "i013313",
    "descricao": "ESTEIRA KIKOS KS5406C - 220V",
    "unitario": 28990.0,
    "aVista": 25221.3
  },
  {
    "sku": "I027919",
    "descricao": "ESTEIRA ERGOMÉTRICA ULTRARUN 140 UR140 - 110v",
    "unitario": null,
    "aVista": 0.0
  },
  {
    "sku": "I027920",
    "descricao": "ESTEIRA ERGOMÉTRICA ULTRARUN 140 UR140C - 220v",
    "unitario": null,
    "aVista": 0.0
  },
  {
    "sku": "i017514",
    "descricao": "ESTEIRA KIKOS KX8400 - 110v",
    "unitario": 18790.0,
    "aVista": 16347.3
  },
  {
    "sku": "i017515",
    "descricao": "ESTEIRA KIKOS KX8400C - 220v",
    "unitario": 18790.0,
    "aVista": 16347.3
  },
  {
    "sku": "i001255",
    "descricao": "ESTEIRA KIKOS KX8500i - 110v",
    "unitario": 28390.0,
    "aVista": 24699.3
  },
  {
    "sku": "i001256",
    "descricao": "ESTEIRA KIKOS KX8500iC - 220v",
    "unitario": 28390.0,
    "aVista": 24699.3
  },
  {
    "sku": "I027922",
    "descricao": "ESTEIRA KIKOS T-KX8500C COM TELA - 220v",
    "unitario": 40990.0,
    "aVista": 35661.3
  },
  {
    "sku": "I027923",
    "descricao": "ESTEIRA KIKOS T-KX8500 COM TELA - 110v",
    "unitario": 40990.0,
    "aVista": 35661.3
  },
  {
    "sku": "i014357",
    "descricao": "ESTEIRA KIKOS PRO RUN - 110V",
    "unitario": 36890.0,
    "aVista": 32094.3
  },
  {
    "sku": "i014358",
    "descricao": "ESTEIRA KIKOS PRO RUN - 220V",
    "unitario": 36890.0,
    "aVista": 32094.3
  },
  {
    "sku": "i013255",
    "descricao": "ESTEIRA KIKOS KX8600C - 220v",
    "unitario": 42490.0,
    "aVista": 36966.3
  },
  {
    "sku": "i014371",
    "descricao": "ESTEIRA KIKOS T-PRO RUN - 110V",
    "unitario": 46790.0,
    "aVista": 40707.3
  },
  {
    "sku": "I027327",
    "descricao": "ESTEIRA KIKOS T-PRO RUNi - 110V",
    "unitario": 46790.0,
    "aVista": 40707.3
  },
  {
    "sku": "I026434",
    "descricao": "ESTEIRA KIKOS T-PRO RUNi - 220V",
    "unitario": 46790.0,
    "aVista": 40707.3
  },
  {
    "sku": "i014372",
    "descricao": "ESTEIRA KIKOS T-PRO RUN - 220V",
    "unitario": 46790.0,
    "aVista": 40707.3
  },
  {
    "sku": "i014942",
    "descricao": "ESTEIRA KIKOS KX9000i - 110V -",
    "unitario": 46990.0,
    "aVista": 40881.3
  },
  {
    "sku": "i014943",
    "descricao": "ESTEIRA KIKOS KX9000iC - 220V",
    "unitario": 46990.0,
    "aVista": 40881.3
  },
  {
    "sku": "i014944",
    "descricao": "ESTEIRA KIKOS KX10000i - 110V",
    "unitario": 75990.0,
    "aVista": 66111.3
  },
  {
    "sku": "i014945",
    "descricao": "ESTEIRA KIKOS KX10000iC - 220V",
    "unitario": 75990.0,
    "aVista": 66111.3
  },
  {
    "sku": "i012467",
    "descricao": "ESTEIRA CURVA KIKOS - ECK",
    "unitario": 57490.0,
    "aVista": 50016.3
  },
  {
    "sku": "I026308",
    "descricao": "ESTEIRA VIBRATÓRIA 2X1 BOLT E-350 - 110V",
    "unitario": 5190.0,
    "aVista": 4515.3
  },
  {
    "sku": "I022942",
    "descricao": "ESTEIRA VIBRATÓRIA 2X1 BOLT E-350C - 220V",
    "unitario": 5190.0,
    "aVista": 4515.3
  },
  {
    "sku": "I023044",
    "descricao": "ESTEIRA PET BOLT E50 - 110V",
    "unitario": 4750.0,
    "aVista": 4132.5
  },
  {
    "sku": "I023045",
    "descricao": "ESTEIRA PET BOLT E50C - 220V",
    "unitario": 4750.0,
    "aVista": 4132.5
  },
  {
    "sku": "i002112",
    "descricao": "PLATAFORMA VIBRATORIA KIKOS P200iX - 110V",
    "unitario": 4090.0,
    "aVista": 3558.3
  },
  {
    "sku": "i002113",
    "descricao": "PLATAFORMA VIBRATORIA KIKOS P200iXC - 220V",
    "unitario": 4090.0,
    "aVista": 3558.3
  },
  {
    "sku": "i001834",
    "descricao": "PLATAFORMA VIBRATORIA KIKOS P201iX - 110V",
    "unitario": 6290.0,
    "aVista": 5472.3
  },
  {
    "sku": "i001835",
    "descricao": "PLATAFORMA VIBRATORIA KIKOS P201iXC - 220V",
    "unitario": 6290.0,
    "aVista": 5472.3
  },
  {
    "sku": "i001838",
    "descricao": "PLATAFORMA VIBRATORIA KIKOS P204iX - 110V - 2CX",
    "unitario": 13890.0,
    "aVista": 12084.3
  },
  {
    "sku": "i001839",
    "descricao": "PLATAFORMA VIBRATORIA KIKOS P204iXC - 220V - 2CX",
    "unitario": 13890.0,
    "aVista": 12084.3
  },
  {
    "sku": "i000093",
    "descricao": "BANCO RETO KIKOS BR-21",
    "unitario": 1490.0,
    "aVista": 1296.3
  },
  {
    "sku": "i000094",
    "descricao": "BANCO REGULAVEL KIKOS BR-508",
    "unitario": 1990.0,
    "aVista": 1731.3
  },
  {
    "sku": "i000095",
    "descricao": "BANCO DE SUPINO REGULAVEL KIKOS BSR-206",
    "unitario": 2190.0,
    "aVista": 1905.3
  },
  {
    "sku": "i000096",
    "descricao": "BANCO ACADEMIA KIKOS BAK-80",
    "unitario": 6290.0,
    "aVista": 5472.3
  },
  {
    "sku": "i001261",
    "descricao": "BANCO MULTI POSICOES KIKOS A84",
    "unitario": 3990.0,
    "aVista": 3471.3
  },
  {
    "sku": "I022943",
    "descricao": "BANCO MULTI POSICOES DOBRAVEL COM PUXADORES  KIKOS A85",
    "unitario": 1650.0,
    "aVista": 1435.5
  },
  {
    "sku": "i002143",
    "descricao": "REMO KIKOS CK2000",
    "unitario": 3990.0,
    "aVista": 3471.3
  },
  {
    "sku": "i000099",
    "descricao": "REMO KIKOS 218CA",
    "unitario": 7790.0,
    "aVista": 6777.3
  },
  {
    "sku": "i001812",
    "descricao": "REMO SECO PROFISSIONAL KIKOS WR100 ELETROMAGNÉTICO",
    "unitario": 11690.0,
    "aVista": 10170.3
  },
  {
    "sku": "i001760",
    "descricao": "REMO KIKOS PRO WR200 - 2CX",
    "unitario": 26390.0,
    "aVista": 22959.3
  },
  {
    "sku": "i013273",
    "descricao": "REMO KIKOS GAME Bluetooth",
    "unitario": 9690.0,
    "aVista": 8430.3
  },
  {
    "sku": "i013281",
    "descricao": "CADEIRA DE MASSAGEM G2000",
    "unitario": 17990.0,
    "aVista": 15651.3
  },
  {
    "sku": "i013282",
    "descricao": "CADEIRA DE MASSAGEM H2000",
    "unitario": 17990.0,
    "aVista": 15651.3
  },
  {
    "sku": "i002144",
    "descricao": "CADEIRA FLEXORA E EXTENSORA - LINHA DUAL TTDS7172i - KIKOS PRO",
    "unitario": 37090.0,
    "aVista": 32268.3
  },
  {
    "sku": "i001959",
    "descricao": "CADEIRA FLEXORA E EXTENSORA - LINHA DUAL TTDS7172 - KIKOS PRO",
    "unitario": 24190.0,
    "aVista": 21045.3
  },
  {
    "sku": "i001957",
    "descricao": "MULT PRESS  - LINHA DUAL - KIKOS PRO - TTDS13",
    "unitario": 30790.0,
    "aVista": 26787.3
  },
  {
    "sku": "i001958",
    "descricao": "PULLEY COM REMADA  - LINHA DUAL - KIKOS PRO - TTDS3031",
    "unitario": 27790.0,
    "aVista": 24177.3
  },
  {
    "sku": "i001960",
    "descricao": "BICEPS E TRICEPS PRESS TTDS4042  - LINHA DUAL - KIKOS PRO",
    "unitario": 30790.0,
    "aVista": 26787.3
  },
  {
    "sku": "i001961",
    "descricao": "CADEIRA ADUTORA E ABDUTORA  - LINHA DUAL - KIKOS PRO - TTDS7475",
    "unitario": 30790.0,
    "aVista": 26787.3
  },
  {
    "sku": "i012703",
    "descricao": "CROSS COM SMITH - LINHA DUAL - KIKOS PRO - TTMS22",
    "unitario": 56290.0,
    "aVista": 48972.3
  },
  {
    "sku": "i002114",
    "descricao": "MESA FLEXORA 135KG -LINHA CONCEPT II KIKOS PRO - C2S73",
    "unitario": 34190.0,
    "aVista": 29745.3
  },
  {
    "sku": "i002115",
    "descricao": "CADEIRA EXTENSORA 135KG C2S71 - LINHA CONCEPT II KIKOS PRO",
    "unitario": 32490.0,
    "aVista": 28266.3
  },
  {
    "sku": "i002116",
    "descricao": "LEG PRESS 115KG C2S70 - LINHA CONCEPT II KIKOS PRO",
    "unitario": 29490.0,
    "aVista": 25656.3
  },
  {
    "sku": "i002093",
    "descricao": "PEITORAL (PECK DECK) 135KG -LINHA CONCEPT II KIKOS PRO - C2S12",
    "unitario": 32490.0,
    "aVista": 28266.3
  },
  {
    "sku": "i002092",
    "descricao": "DELTOIDE 56KG -LINHA CONCEPT II KIKOS PRO - C2S21",
    "unitario": 29490.0,
    "aVista": 25656.3
  },
  {
    "sku": "i002094",
    "descricao": "DESENVOLVIMENTO DE OMBRO 135KG -LINHA CONCEPT II KIKOS PRO - C2S23",
    "unitario": 32490.0,
    "aVista": 28266.3
  },
  {
    "sku": "i002095",
    "descricao": "PEITORAL FLY / DORSAL 109KG C2S22 - LINHA CONCEPT II KIKOS PRO",
    "unitario": 29490.0,
    "aVista": 25656.3
  },
  {
    "sku": "i002098",
    "descricao": "ABDUTORA 109KG C2S74 - LINHA CONCEPT II KIKOS PRO",
    "unitario": 29490.0,
    "aVista": 25656.3
  },
  {
    "sku": "i002099",
    "descricao": "ADUTORA 109KG -LINHA CONCEPT II KIKOS PRO C2S75",
    "unitario": 29490.0,
    "aVista": 25656.3
  },
  {
    "sku": "i002100",
    "descricao": "CADEIRA FLEXORA 135KG -LINHA CONCEPT II KIKOS PRO C2S72",
    "unitario": 32390.0,
    "aVista": 28179.3
  },
  {
    "sku": "i002101",
    "descricao": "TRICEPS PRC2SS 135KG -LINHA CONCEPT II KIKOS PRO C2S42",
    "unitario": 33190.0,
    "aVista": 28875.3
  },
  {
    "sku": "i002102",
    "descricao": "SCOTT MAQUINA 105KG -LINHA CONCEPT II KIKOS PRO - C2S40",
    "unitario": 34190.0,
    "aVista": 29745.3
  },
  {
    "sku": "i012193",
    "descricao": "LOMBAR 109KG -LINHA CONCEPT II KIKOS PRO - C2S52",
    "unitario": 29490.0,
    "aVista": 25656.3
  },
  {
    "sku": "i002103",
    "descricao": "REMADA BAIXA 135KG C2S31 - LINHA CONCEPT II KIKOS PRO",
    "unitario": 29490.0,
    "aVista": 25656.3
  },
  {
    "sku": "i002117",
    "descricao": "REMADA 105KG -LINHA CONCEPT II KIKOS PRO C2S34",
    "unitario": 30990.0,
    "aVista": 26961.3
  },
  {
    "sku": "i002120",
    "descricao": "PUXADOR COSTAS 109KG -LINHA CONCEPT II KIKOS PRO - C2S33",
    "unitario": 29490.0,
    "aVista": 25656.3
  },
  {
    "sku": "i002104",
    "descricao": "ABDOMINAL 95KG -LINHA CONCEPT II KIKOS PRO C2S51",
    "unitario": 22390.0,
    "aVista": 19479.3
  },
  {
    "sku": "i013828",
    "descricao": "MESA FLEXORA 120KG -LINHA ALFA KIKOS PRO - CAS73",
    "unitario": 34690.0,
    "aVista": 30180.3
  },
  {
    "sku": "i013829",
    "descricao": "CADEIRA EXTENSORA 140KG  - LINHA ALFA KIKOS PRO CAS71",
    "unitario": 35690.0,
    "aVista": 31050.3
  },
  {
    "sku": "i013831",
    "descricao": "LEG PRESS 140KG - LINHA ALFA KIKOS PRO CAS70",
    "unitario": 35690.0,
    "aVista": 31050.3
  },
  {
    "sku": "i013833",
    "descricao": "DESENVOLVIMENTO DE OMBRO 140KG -LINHA ALFA KIKOS PRO CAS23",
    "unitario": 35890.0,
    "aVista": 31224.3
  },
  {
    "sku": "i013835",
    "descricao": "PEITORAL / DORSAL 140KG - LINHA ALFA KIKOS PRO CAS22",
    "unitario": 36490.0,
    "aVista": 31746.3
  },
  {
    "sku": "i013837",
    "descricao": "SUPINO MAQUINA 140KG -LINHA ALFA KIKOS PRO  - CAS10",
    "unitario": 33890.0,
    "aVista": 29484.3
  },
  {
    "sku": "i013838",
    "descricao": "GRAVITON 120KG -LINHA ALFA KIKOS PRO CAS60",
    "unitario": 38890.0,
    "aVista": 33834.3
  },
  {
    "sku": "i013840",
    "descricao": "SUPINO INCLINADO 140KG -LINHA ALFA KIKOS PRO - CAS13",
    "unitario": 39790.0,
    "aVista": 34617.3
  },
  {
    "sku": "i013842",
    "descricao": "ABDUTORA 120KG  - LINHA ALFA KIKOS PRO CAS74",
    "unitario": 38590.0,
    "aVista": 33573.3
  },
  {
    "sku": "i013843",
    "descricao": "ADUTORA  120KG - LINHA ALFA KIKOS PRO CAS75",
    "unitario": 38590.0,
    "aVista": 33573.3
  },
  {
    "sku": "i013847",
    "descricao": "CADEIRA FLEXORA 140KG -LINHA ALFA KIKOS PRO CAS72",
    "unitario": 36490.0,
    "aVista": 31746.3
  },
  {
    "sku": "i013846",
    "descricao": "GLUTEO 120KG -LINHA ALFA KIKOS PRO - CAS78",
    "unitario": 31090.0,
    "aVista": 27048.3
  },
  {
    "sku": "i013845",
    "descricao": "TRICEPS 140KG -LINHA ALFA KIKOS PRO CAS42",
    "unitario": 33990.0,
    "aVista": 29571.3
  },
  {
    "sku": "i013844",
    "descricao": "SCOTT MAQUINA 140KG -LINHA ALFA KIKOS PRO - CAS40",
    "unitario": 34890.0,
    "aVista": 30354.3
  },
  {
    "sku": "i013841",
    "descricao": "LOMBAR 140KG -LINHA ALFA KIKOS PRO - CAS52",
    "unitario": 34390.0,
    "aVista": 29919.3
  },
  {
    "sku": "i013839",
    "descricao": "REMADA 140KG -LINHA ALFA KIKOS PRO CAS34",
    "unitario": 32990.0,
    "aVista": 28701.3
  },
  {
    "sku": "i013836",
    "descricao": "PUXADOR COSTAS 140KG -LINHA ALFA KIKOS PRO - CAS33",
    "unitario": 32790.0,
    "aVista": 28527.3
  },
  {
    "sku": "i013834",
    "descricao": "ABDOMINAL 140KG -LINHA ALFA KIKOS PRO - CAS51",
    "unitario": 28490.0,
    "aVista": 24786.3
  },
  {
    "sku": "i013832",
    "descricao": "PEITORAL (PECK DECK) 140KG -LINHA ALFA KIKOS PRO - CAS12",
    "unitario": 41190.0,
    "aVista": 35835.3
  },
  {
    "sku": "i013830",
    "descricao": "REMADA BAIXA 140KG - LINHA ALFA KIKOS PRO CAS31",
    "unitario": 35190.0,
    "aVista": 30615.3
  },
  {
    "sku": "i014395",
    "descricao": "SUPINO MAQUINA 120KG -LINHA CLASSIC KIKOS PRO  - CLS13",
    "unitario": 26790.0,
    "aVista": 23307.3
  },
  {
    "sku": "i014396",
    "descricao": "PEITORAL / DORSAL 80KG - LINHA CLASSIC KIKOS PRO CLS22",
    "unitario": 31590.0,
    "aVista": 27483.3
  },
  {
    "sku": "i014397",
    "descricao": "DESENVOLVIMENTO DE OMBRO 100KG -LINHA CLASSIC KIKOS PRO CLS23",
    "unitario": 26790.0,
    "aVista": 23307.3
  },
  {
    "sku": "i014398",
    "descricao": "REMADA 120KG -LINHA CLASSIC KIKOS PRO CLS34",
    "unitario": 26790.0,
    "aVista": 23307.3
  },
  {
    "sku": "i014399",
    "descricao": "SCOTT MAQUINA 100KG -LINHA CLASSIC KIKOS PRO - CLS40",
    "unitario": 26790.0,
    "aVista": 23307.3
  },
  {
    "sku": "i014400",
    "descricao": "TRICEPS 120KG -LINHA CLASSIC KIKOS PRO CLS42",
    "unitario": 26790.0,
    "aVista": 23307.3
  },
  {
    "sku": "i014401",
    "descricao": "GRAVITON 120KG -LINHA CLASSICA KIKOS PRO CLS60",
    "unitario": 31590.0,
    "aVista": 27483.3
  },
  {
    "sku": "i014402",
    "descricao": "LOMBAR 120KG -LINHA CLASSIC KIKOS PRO - CLS52",
    "unitario": 26790.0,
    "aVista": 23307.3
  },
  {
    "sku": "i014403",
    "descricao": "ABDOMINAL 100KG -LINHA CLASSIC KIKOS PRO - CLS51",
    "unitario": 26790.0,
    "aVista": 23307.3
  },
  {
    "sku": "i014404",
    "descricao": "REMADA BAIXA 120KG - LINHA CLASSIC KIKOS PRO CLS31",
    "unitario": 26790.0,
    "aVista": 23307.3
  },
  {
    "sku": "i014405",
    "descricao": "PUXADOR COSTAS 120KG -LINHA CLASSIC KIKOS PRO - CLS30",
    "unitario": 26790.0,
    "aVista": 23307.3
  },
  {
    "sku": "i014406",
    "descricao": "CADEIRA FLEXORA 100KG -LINHA CLASSIC KIKOS PRO CLS72",
    "unitario": 26790.0,
    "aVista": 23307.3
  },
  {
    "sku": "i014407",
    "descricao": "MESA FLEXORA 100KG -LINHA CLASSIC KIKOS PRO - CLS73",
    "unitario": 26790.0,
    "aVista": 23307.3
  },
  {
    "sku": "i014408",
    "descricao": "CADEIRA EXTENSORA 120KG  - LINHA CLASSIC KIKOS PRO CLS71",
    "unitario": 31590.0,
    "aVista": 27483.3
  },
  {
    "sku": "i014409",
    "descricao": "LEG PRESS 140KG - LINHA CLASSIC KIKOS PRO CLS70",
    "unitario": 31590.0,
    "aVista": 27483.3
  },
  {
    "sku": "i014410",
    "descricao": "GLUTEO 100KG -LINHA CLASSIC KIKOS PRO - CLS78",
    "unitario": 26790.0,
    "aVista": 23307.3
  },
  {
    "sku": "i014411",
    "descricao": "PANTURRILHA 120KG - LINHA CLASSIC KIKOS PRO CLS77",
    "unitario": 31590.0,
    "aVista": 27483.3
  },
  {
    "sku": "i014412",
    "descricao": "ADUTORA  120KG - LINHA CLASSIC KIKOS PRO CLS75",
    "unitario": 31590.0,
    "aVista": 27483.3
  },
  {
    "sku": "i014413",
    "descricao": "ABDUTORA 120KG  - LINHA CLASSIC KIKOS PRO CLS74",
    "unitario": 31590.0,
    "aVista": 27483.3
  },
  {
    "sku": "i000225",
    "descricao": "MESA FLEXORA TTS73 80KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 22190.0,
    "aVista": 19305.3
  },
  {
    "sku": "i000227",
    "descricao": "EXTENSORA TTS71 80KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 22190.0,
    "aVista": 19305.3
  },
  {
    "sku": "i001290",
    "descricao": "LEG PRESS HORIZONTAL TTS70 80KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 22190.0,
    "aVista": 19305.3
  },
  {
    "sku": "i000228",
    "descricao": "DELTOIDE TTS21 52KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 22190.0,
    "aVista": 19305.3
  },
  {
    "sku": "i012702",
    "descricao": "CADEIRA ADUTORA E ABDUTORA T7475 80KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 23590.0,
    "aVista": 20523.3
  },
  {
    "sku": "i000229",
    "descricao": "DESENVOLVIMENTO TTS23 80KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 22190.0,
    "aVista": 19305.3
  },
  {
    "sku": "i000230",
    "descricao": "PEITORAL DORSAL TTS22 80KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 22190.0,
    "aVista": 19305.3
  },
  {
    "sku": "i000231",
    "descricao": "SUPINO RETO TTS13 80KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 22190.0,
    "aVista": 19305.3
  },
  {
    "sku": "i000232",
    "descricao": "GRAVITON TTS60 88KG- LINHA TITANIUM KIKOS PRO",
    "unitario": 22190.0,
    "aVista": 19305.3
  },
  {
    "sku": "i000233",
    "descricao": "SUPINO INCLINADO TTS12 80KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 22190.0,
    "aVista": 19305.3
  },
  {
    "sku": "i027367",
    "descricao": "MULT PRESS TTDS14 80KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 23590.0,
    "aVista": 20523.3
  },
  {
    "sku": "i000234",
    "descricao": "CROSS OVER TTMS20 50KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 42990.0,
    "aVista": 37401.3
  },
  {
    "sku": "i000235",
    "descricao": "ABDOMINAL TTS51 80KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 22190.0,
    "aVista": 19305.3
  },
  {
    "sku": "i000236",
    "descricao": "ABDUTOR TTS74 80KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 22190.0,
    "aVista": 19305.3
  },
  {
    "sku": "i000237",
    "descricao": "ADUTOR TTS75 80KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 22190.0,
    "aVista": 19305.3
  },
  {
    "sku": "i027366",
    "descricao": "CADEIRA FLEXORA E EXTENSORA TTDS7173 80KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 37090.0,
    "aVista": 32268.3
  },
  {
    "sku": "i000238",
    "descricao": "FLEXORA TTS72 80KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 22190.0,
    "aVista": 19305.3
  },
  {
    "sku": "i001318",
    "descricao": "APOLETE KIKOS TTS76 80KG  - LINHA TITANIUN KIKOS PRO",
    "unitario": 22190.0,
    "aVista": 19305.3
  },
  {
    "sku": "i000239",
    "descricao": "GLUTEO TTS78 49KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 22190.0,
    "aVista": 19305.3
  },
  {
    "sku": "i000240",
    "descricao": "TRICEPS PARALELA TTS42 80KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 22190.0,
    "aVista": 19305.3
  },
  {
    "sku": "i000241",
    "descricao": "TRICEPS TESTA TTS43 49KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 22190.0,
    "aVista": 19305.3
  },
  {
    "sku": "i000242",
    "descricao": "TRICEPS TTS45 49KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 22190.0,
    "aVista": 19305.3
  },
  {
    "sku": "i000243",
    "descricao": "BICEPS TTS40 49KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 22190.0,
    "aVista": 19305.3
  },
  {
    "sku": "i027368",
    "descricao": "BICEPS E TRICEPS PRESS TTDS4043 80KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 30790.0,
    "aVista": 26787.3
  },
  {
    "sku": "i000244",
    "descricao": "LOMBAR TTS52 80KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 22190.0,
    "aVista": 19305.3
  },
  {
    "sku": "i000245",
    "descricao": "REMADA BAIXA TTS31 80KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 22190.0,
    "aVista": 19305.3
  },
  {
    "sku": "i000246",
    "descricao": "REMADA TTS34 80KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 22190.0,
    "aVista": 19305.3
  },
  {
    "sku": "i027388",
    "descricao": "PULLEY COM REMADA TTDS3032 - LINHA TITANIUM KIKOS PRO",
    "unitario": 46990.0,
    "aVista": 40881.3
  },
  {
    "sku": "i000247",
    "descricao": "PUXADOR TTS30 80KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 22190.0,
    "aVista": 19305.3
  },
  {
    "sku": "i014548",
    "descricao": "SUPINO COM PUXADA HF 2002 - LINHA HAMMER FORCE KIKOS PRO",
    "unitario": 24490.0,
    "aVista": 21306.3
  },
  {
    "sku": "i014549",
    "descricao": "REMADA DIVERGENTE HF 2004 - LINHA HAMMER FORCE KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i014550",
    "descricao": "PUXADA FRONTAL INVERTIDA HF 2005 - LINHA HAMMER FORCE KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i014551",
    "descricao": "PUXADA ALTA HF 2006 - LINHA HAMMER FORCE KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i014552",
    "descricao": "SUPINO HORIZONTAL  HF 2007 - LINHA HAMMER FORCE KIKOS PRO",
    "unitario": 20190.0,
    "aVista": 17565.3
  },
  {
    "sku": "i014553",
    "descricao": "REMADA BAIXA HF 2009 - LINHA HAMMER FORCE KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i014554",
    "descricao": "REMADA HF 2011 - LINHA HAMMER FORCE KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i014555",
    "descricao": "DESENVOLVIMENTO GAIOLA HF 2012 - LINHA HAMMER FORCE KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i014556",
    "descricao": "SUPINO INCLINADO HF 2013 - LINHA HAMMER FORCE KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i014557",
    "descricao": "SUPINO GAIOLA DECLINADO HF 2014 - LINHA HAMMER FORCE KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i014558",
    "descricao": "PULLDOWN HF 2015 - LINHA HAMMER FORCE KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i014559",
    "descricao": "TRÍCEPS HF 2018 - LINHA HAMMER FORCE KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i014560",
    "descricao": "EXTENSORA UNILATERAL HF 2022 - LINHA HAMMER FORCE KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i014561",
    "descricao": "PANTURRILHA HORIZONTAL HF 2026 - LINHA HAMMER FORCE KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i014562",
    "descricao": "BASE TERRESTRE GAIOLA HF 2028 - LINHA HAMMER FORCE KIKOS PRO",
    "unitario": 21890.0,
    "aVista": 19044.3
  },
  {
    "sku": "i014563",
    "descricao": "FLEXORA EM PÉ UNILATERAL HF 2031 - LINHA HAMMER FORCE KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i014564",
    "descricao": "ABDOMINAL COMPLETO HF 2035 - LINHA HAMMER FORCE KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i014565",
    "descricao": "SUPER AGACHAMENTO HF 3017 - LINHA HAMMER FORCE KIKOS PRO",
    "unitario": 29690.0,
    "aVista": 25830.3
  },
  {
    "sku": "I027773",
    "descricao": "BICEPS PM 2037 - LINHA HAMMER FORCE C/ BATERIA DE PESO",
    "unitario": 46990.0,
    "aVista": 40881.3
  },
  {
    "sku": "I027774",
    "descricao": "SUPINO RETO PM 2038 - LINHA HAMMER FORCE C/ BATERIA DE PESO",
    "unitario": 46990.0,
    "aVista": 40881.3
  },
  {
    "sku": "I027775",
    "descricao": "REMADA PM 2039 - LINHA HAMMER FORCE C/ BATERIA DE PESO",
    "unitario": 46990.0,
    "aVista": 40881.3
  },
  {
    "sku": "I027776",
    "descricao": "SUPINO INCLINADO PM 2040 - LINHA HAMMER FORCE C/ BATERIA DE PESO",
    "unitario": 46990.0,
    "aVista": 40881.3
  },
  {
    "sku": "I027777",
    "descricao": "DESENVOLVIMENTO DE OMBRO PM 2041 - LINHA HAMMER FORCE C/ BATERIA DE PESO",
    "unitario": 46990.0,
    "aVista": 40881.3
  },
  {
    "sku": "I027778",
    "descricao": "SUPINO DECLINADO PM 2042 - LINHA HAMMER FORCE C/ BATERIA DE PESO",
    "unitario": 46990.0,
    "aVista": 40881.3
  },
  {
    "sku": "I027779",
    "descricao": "TRICEPS PM 2043  - LINHA HAMMER FORCE C/ BATERIA DE PESO",
    "unitario": 46990.0,
    "aVista": 40881.3
  },
  {
    "sku": "I027780",
    "descricao": "PUXADA FRONTAL INVERTIDA PM 2044 - LINHA HAMMER FORCE C/ BATERIA DE PESO",
    "unitario": 46990.0,
    "aVista": 40881.3
  },
  {
    "sku": "I027781",
    "descricao": "PUXADA ALTA PM 2045 - LINHA HAMMER FORCE C/ BATERIA DE PESO",
    "unitario": 46990.0,
    "aVista": 40881.3
  },
  {
    "sku": "I027782",
    "descricao": "ABDOMINAL PM-2046 - LINHA HAMMER FORCE C/ BATERIA DE PESO",
    "unitario": 46990.0,
    "aVista": 40881.3
  },
  {
    "sku": "I027783",
    "descricao": "FLEXORA  EM PÉ UNILATERAL PM 2047 - LINHA HAMMER FORCE C/ BATERIA DE PESO",
    "unitario": 46990.0,
    "aVista": 40881.3
  },
  {
    "sku": "I027784",
    "descricao": "CADEIRA EXTENSORA PM 2048 - LINHA HAMMER FORCE C/ BATERIA DE PESO",
    "unitario": 46990.0,
    "aVista": 40881.3
  },
  {
    "sku": "i014579",
    "descricao": "SUPINO RETO TITAN Y905",
    "unitario": 42390.0,
    "aVista": 36879.3
  },
  {
    "sku": "i014580",
    "descricao": "SUPINO DECLINADO TITAN Y910",
    "unitario": 42390.0,
    "aVista": 36879.3
  },
  {
    "sku": "i014581",
    "descricao": "SUPINO INCLINADO TITAN Y915",
    "unitario": 42390.0,
    "aVista": 36879.3
  },
  {
    "sku": "i014582",
    "descricao": "PUXADA ALTA TITAN Y920",
    "unitario": 42390.0,
    "aVista": 36879.3
  },
  {
    "sku": "i014583",
    "descricao": "REMADA BAIXA TITAN Y925",
    "unitario": 42390.0,
    "aVista": 36879.3
  },
  {
    "sku": "i014584",
    "descricao": "REMADA TITAN Y930",
    "unitario": 42390.0,
    "aVista": 36879.3
  },
  {
    "sku": "i014585",
    "descricao": "DESENVOLVIMENTO OMBRO TITAN Y935",
    "unitario": 42390.0,
    "aVista": 36879.3
  },
  {
    "sku": "i014586",
    "descricao": "GLUTEO TITAN Y940",
    "unitario": 39190.0,
    "aVista": 34095.3
  },
  {
    "sku": "i014587",
    "descricao": "EXTENSORA TITAN Y960",
    "unitario": 39190.0,
    "aVista": 34095.3
  },
  {
    "sku": "i014588",
    "descricao": "TRÍCEPS TITAN Y965",
    "unitario": 39190.0,
    "aVista": 34095.3
  },
  {
    "sku": "i014589",
    "descricao": "BÍCEPS TITAN Y970",
    "unitario": 39190.0,
    "aVista": 34095.3
  },
  {
    "sku": "i014905",
    "descricao": "SUPER HORIZONTAL MULTI PRESS - LINHA MONSTER KIKOS PRO",
    "unitario": 83990.0,
    "aVista": 73071.3
  },
  {
    "sku": "i014906",
    "descricao": "SUPER VERTICAL CHEST PRESS - LINHA MONSTER KIKOS PRO",
    "unitario": 83990.0,
    "aVista": 73071.3
  },
  {
    "sku": "i014907",
    "descricao": "SUPER ROWING - LINHA MONSTER KIKOS PRO",
    "unitario": 75490.0,
    "aVista": 65676.3
  },
  {
    "sku": "i014908",
    "descricao": "T-BAR ROW - LINHA MONSTER KIKOS PRO",
    "unitario": 75490.0,
    "aVista": 65676.3
  },
  {
    "sku": "i014909",
    "descricao": "FRENCH PRESS MACHINE - LINHA MONSTER KIKOS PRO",
    "unitario": 82490.0,
    "aVista": 71766.3
  },
  {
    "sku": "i014910",
    "descricao": "SUPER POWER ROW - LINHA MONSTER KIKOS PRO",
    "unitario": 82490.0,
    "aVista": 71766.3
  },
  {
    "sku": "i014911",
    "descricao": "SUPER LAT MACHINE CONVERGENT - LINHA MONSTER KIKOS PRO",
    "unitario": 75490.0,
    "aVista": 65676.3
  },
  {
    "sku": "i014912",
    "descricao": "SUPER HIGH ROW - LINHA MONSTER KIKOS PRO",
    "unitario": 83990.0,
    "aVista": 73071.3
  },
  {
    "sku": "i014913",
    "descricao": "SUPER PENDULUM SQUAT - LINHA MONSTER KIKOS PRO",
    "unitario": 83990.0,
    "aVista": 73071.3
  },
  {
    "sku": "i014914",
    "descricao": "SUPER LEG PRESS 45° - LINHA MONSTER KIKOS PRO",
    "unitario": 115900.0,
    "aVista": 100833.0
  },
  {
    "sku": "i014915",
    "descricao": "STANDING ABDUCTOR - LINHA MONSTER KIKOS PRO",
    "unitario": 73990.0,
    "aVista": 64371.3
  },
  {
    "sku": "i014916",
    "descricao": "POWER SMITH MACHINE DUAL SYSTEM - LINHA MONSTER KIKOS PRO",
    "unitario": 83990.0,
    "aVista": 73071.3
  },
  {
    "sku": "i014917",
    "descricao": "VERTICAL LEG PRESS - LINHA MONSTER KIKOS PRO",
    "unitario": 115900.0,
    "aVista": 100833.0
  },
  {
    "sku": "i014918",
    "descricao": "HIP THRUST - LINHA MONSTER KIKOS PRO",
    "unitario": 83990.0,
    "aVista": 73071.3
  },
  {
    "sku": "i014919",
    "descricao": "SHOULDER PRESS - LINHA MONSTER KIKOS PRO",
    "unitario": 81990.0,
    "aVista": 71331.3
  },
  {
    "sku": "i014920",
    "descricao": "STANDING HIP THRUST - LINHA MONSTER KIKOS PRO",
    "unitario": 81990.0,
    "aVista": 71331.3
  },
  {
    "sku": "i014921",
    "descricao": "LAT PULL DOWN - LINHA MONSTER KIKOS PRO",
    "unitario": 81990.0,
    "aVista": 71331.3
  },
  {
    "sku": "i014922",
    "descricao": "CHEST PRESS - LINHA MONSTER KIKOS PRO",
    "unitario": 81990.0,
    "aVista": 71331.3
  },
  {
    "sku": "i014923",
    "descricao": "LEG EXTENTION - LINHA MONSTER KIKOS PRO",
    "unitario": 81990.0,
    "aVista": 71331.3
  },
  {
    "sku": "I023047",
    "descricao": "ISO-LATERAL SUPER INCLINE PRESS - LINHA MONSTER SELECT",
    "unitario": 59090.0,
    "aVista": 51408.3
  },
  {
    "sku": "I023048",
    "descricao": "KNEELING LEG CURL - LINHA MONSTER SELECT",
    "unitario": 59090.0,
    "aVista": 51408.3
  },
  {
    "sku": "I023049",
    "descricao": "BICEP TRAINER - LINHA MONSTER SELECT",
    "unitario": 59090.0,
    "aVista": 51408.3
  },
  {
    "sku": "I023050",
    "descricao": "SIDE ARM LIFT TRAINER - LINHA MONSTER SELECT",
    "unitario": 59090.0,
    "aVista": 51408.3
  },
  {
    "sku": "I023051",
    "descricao": "RELOADED ISSO FLAT PRESS - LINHA MONSTER SELECT",
    "unitario": 59090.0,
    "aVista": 51408.3
  },
  {
    "sku": "I023052",
    "descricao": "ARM DOWN BACK MUSCLE TRAINING - LINHA MONSTER SELECT",
    "unitario": 59090.0,
    "aVista": 51408.3
  },
  {
    "sku": "I027854",
    "descricao": "CADEIRA EXTENSORA MONSTER GOAT MG71",
    "unitario": 59990.0,
    "aVista": 52191.3
  },
  {
    "sku": "I027855",
    "descricao": "MESA FLEXORA MONSTER GOAT MG73",
    "unitario": 59990.0,
    "aVista": 52191.3
  },
  {
    "sku": "I027856",
    "descricao": "CADEIRA FLEXORA MONSTER GOAT MG72",
    "unitario": 59990.0,
    "aVista": 52191.3
  },
  {
    "sku": "I027857",
    "descricao": "GLUTEO MONSTER GOAT MG78",
    "unitario": 59990.0,
    "aVista": 52191.3
  },
  {
    "sku": "I027858",
    "descricao": "TOTAL HIP MONSTER GOAT MG53",
    "unitario": 59990.0,
    "aVista": 52191.3
  },
  {
    "sku": "I027859",
    "descricao": "LOMBAR MONSTER GOAT MG52",
    "unitario": 59990.0,
    "aVista": 52191.3
  },
  {
    "sku": "I027860",
    "descricao": "ABDOMINAL MONSTER GOAT MG51",
    "unitario": 59990.0,
    "aVista": 52191.3
  },
  {
    "sku": "I027861",
    "descricao": "BICEPS MONSTER GOAT MG40",
    "unitario": 59990.0,
    "aVista": 52191.3
  },
  {
    "sku": "I027862",
    "descricao": "TRICEPS MONSTER GOAT MG42",
    "unitario": 59990.0,
    "aVista": 52191.3
  },
  {
    "sku": "I027863",
    "descricao": "CROSSOVER MONSTER GOAT MG20",
    "unitario": 59990.0,
    "aVista": 52191.3
  },
  {
    "sku": "I027864",
    "descricao": "DELTOIDE MONSTER GOAT MG21",
    "unitario": 59990.0,
    "aVista": 52191.3
  },
  {
    "sku": "I027865",
    "descricao": "SUPINO RETO MONSTER GOAT MG13",
    "unitario": 59990.0,
    "aVista": 52191.3
  },
  {
    "sku": "I027866",
    "descricao": "GRAVITON  MONSTER GOAT MG60",
    "unitario": 59990.0,
    "aVista": 52191.3
  },
  {
    "sku": "I027867",
    "descricao": "PANTURRILHA EM PÉ  MONSTER GOAT MG77",
    "unitario": 59990.0,
    "aVista": 52191.3
  },
  {
    "sku": "I027868",
    "descricao": "PECK DECK  MONSTER GOAT MG12",
    "unitario": 59990.0,
    "aVista": 52191.3
  },
  {
    "sku": "I027869",
    "descricao": "PEITORAL DORSAL  MONSTER GOAT MG22",
    "unitario": 59990.0,
    "aVista": 52191.3
  },
  {
    "sku": "I027870",
    "descricao": "CADEIRA ABDUTORA  MONSTER GOAT MG74",
    "unitario": 59990.0,
    "aVista": 52191.3
  },
  {
    "sku": "I027871",
    "descricao": "CADEIRA ADUTORA  MONSTER GOAT MG75",
    "unitario": 59990.0,
    "aVista": 52191.3
  },
  {
    "sku": "I027872",
    "descricao": "LEG HORIZONTAL MONSTER GOAT MG70",
    "unitario": 59990.0,
    "aVista": 52191.3
  },
  {
    "sku": "I027873",
    "descricao": "DESENVOLVIMENTO DE OMBROS  MONSTER GOAT MG23",
    "unitario": 59990.0,
    "aVista": 52191.3
  },
  {
    "sku": "I027874",
    "descricao": "REMADA MONSTER GOAT MG34",
    "unitario": 59990.0,
    "aVista": 52191.3
  },
  {
    "sku": "I027875",
    "descricao": "PUXADA ALTA MONSTER GOAT MG33",
    "unitario": 59990.0,
    "aVista": 52191.3
  },
  {
    "sku": "I027876",
    "descricao": "PULL DOWN  MONSTER GOAT MG30",
    "unitario": 59990.0,
    "aVista": 52191.3
  },
  {
    "sku": "I027877",
    "descricao": "REMADA BAIXA MONSTER GOAT MG31",
    "unitario": 59990.0,
    "aVista": 52191.3
  },
  {
    "sku": "i015559",
    "descricao": "BANCO RETO TTFW81i - LINHA KIKOS PRO",
    "unitario": 4490.0,
    "aVista": 3906.3
  },
  {
    "sku": "i000249",
    "descricao": "BANCO DECLINADO TTFW83 - LINHA KIKOS PRO",
    "unitario": 8190.0,
    "aVista": 7125.3
  },
  {
    "sku": "i000250",
    "descricao": "BANCO 90º TTFW84 - LINHA KIKOS PRO",
    "unitario": 4490.0,
    "aVista": 3906.3
  },
  {
    "sku": "i015069",
    "descricao": "BANCO 0 - 90º TTFW80i - LINHA KIKOS PRO",
    "unitario": 8690.0,
    "aVista": 7560.3
  },
  {
    "sku": "i015560",
    "descricao": "BANCO DECLINADO TTFW15i - LINHA KIKOS PRO",
    "unitario": 11190.0,
    "aVista": 9735.3
  },
  {
    "sku": "i015561",
    "descricao": "BANCO INCLINADO TTFW14i- LINHA KIKOS PRO",
    "unitario": 12290.0,
    "aVista": 10692.3
  },
  {
    "sku": "I018795",
    "descricao": "BANCO RETO TTFW13i - LINHA KIKOS PRO",
    "unitario": 10290.0,
    "aVista": 8952.3
  },
  {
    "sku": "i015068",
    "descricao": "BANCO BICEPS TTFW40i - LINHA KIKOS PRO",
    "unitario": 8890.0,
    "aVista": 7734.3
  },
  {
    "sku": "i000256",
    "descricao": "BANCO LOMBAR TTFW52 - LINHA KIKOS PRO",
    "unitario": 7290.0,
    "aVista": 6342.3
  },
  {
    "sku": "i000257",
    "descricao": "ABDOMINAL VERTICAL TTFW60 - LINHA KIKOS PRO",
    "unitario": 9490.0,
    "aVista": 8256.3
  },
  {
    "sku": "i000260",
    "descricao": "AGACHAMENTO LIVRE TTFW72 - LINHA KIKOS PRO",
    "unitario": 14790.0,
    "aVista": 12867.3
  },
  {
    "sku": "i000261",
    "descricao": "BANCO DESENVOLVIMENTO TTFW16 - LINHA KIKOS PRO",
    "unitario": 13390.0,
    "aVista": 11649.3
  },
  {
    "sku": "i000263",
    "descricao": "SUPORTE ANILHA TTFW94 - LINHA KIKOS PRO- MD6122",
    "unitario": 5390.0,
    "aVista": 4689.3
  },
  {
    "sku": "i000264",
    "descricao": "SUPORTE BARRA TTFW96 - LINHA KIKOS PRO",
    "unitario": 8790.0,
    "aVista": 7647.3
  },
  {
    "sku": "i000265",
    "descricao": "LEG PRESS 45º TTPL70 - LINHA KIKOS PRO",
    "unitario": 37190.0,
    "aVista": 32355.3
  },
  {
    "sku": "i012772",
    "descricao": "LEG PRESS 45º TTPL71 COM APOIO - LINHA KIKOS PRO",
    "unitario": 31990.0,
    "aVista": 27831.3
  },
  {
    "sku": "i017405",
    "descricao": "LEG PRESS 45º COM APOIO DE CABEÇA TTPL72 - LINHA KIKOS PRO",
    "unitario": 42990.0,
    "aVista": 37401.3
  },
  {
    "sku": "i014540",
    "descricao": "GLUTEO MÁXIMO TTPL94 - LINHA KIKOS PRO",
    "unitario": 14490.0,
    "aVista": 12606.3
  },
  {
    "sku": "i000258",
    "descricao": "GAIOLA AGACHAMENTO TTFW73 - LINHA KIKOS PRO",
    "unitario": 18490.0,
    "aVista": 16086.3
  },
  {
    "sku": "i000267",
    "descricao": "REMADA CAVALINHO TTPL31 - LINHA KIKOS PRO",
    "unitario": 11590.0,
    "aVista": 10083.3
  },
  {
    "sku": "i000266",
    "descricao": "HACK 45º TTPL79 - LINHA KIKOS PRO",
    "unitario": 37090.0,
    "aVista": 32268.3
  },
  {
    "sku": "i000268",
    "descricao": "PANTURRILHA TTPL77 - LINHA KIKOS PRO",
    "unitario": 9890.0,
    "aVista": 8604.3
  },
  {
    "sku": "i000269",
    "descricao": "SMITH TTPL62 - LINHA KIKOS PRO",
    "unitario": 33990.0,
    "aVista": 29571.3
  },
  {
    "sku": "i012609",
    "descricao": "GAIOLA AGACHAMENTO TTFW74 NEW - LINHA KIKOS PRO",
    "unitario": 37290.0,
    "aVista": 32442.3
  },
  {
    "sku": "i000270",
    "descricao": "RACK AGACHAMENTO TTPL78 - LINHA KIKOS PRO",
    "unitario": 31090.0,
    "aVista": 27048.3
  },
  {
    "sku": "i017406",
    "descricao": "ELEVAÇÃO PÉLVICA 3D TTPL90 - LINHA KIKOS PRO",
    "unitario": 25390.0,
    "aVista": 22089.3
  },
  {
    "sku": "i014539",
    "descricao": "HIPEREXTENSÃO REVERTIDO - KIKOS PRO",
    "unitario": 21290.0,
    "aVista": 18522.3
  },
  {
    "sku": "i014538",
    "descricao": "AGACHAMENTO PÊNDULO - KIKOS PRO",
    "unitario": 19790.0,
    "aVista": 17217.3
  },
  {
    "sku": "i017407",
    "descricao": "CRUCIFIXO ANILHADO TTPL22 KIKOS PRO",
    "unitario": 12990.0,
    "aVista": 11301.3
  },
  {
    "sku": "i001714",
    "descricao": "RACK DE DUMBELL 10 PARES KIKOS - MD6232",
    "unitario": 10590.0,
    "aVista": 9213.3
  },
  {
    "sku": "i001962",
    "descricao": "CROSS ANGULAR TTMS21- LINHA KIKOS PRO",
    "unitario": 42990.0,
    "aVista": 37401.3
  },
  {
    "sku": "i014100",
    "descricao": "VOADOR EM PÉ TTMS25  - LINHA KIKOS PRO",
    "unitario": 39690.0,
    "aVista": 34530.3
  },
  {
    "sku": "I026239",
    "descricao": "SUPER GLUTEO ANILHADO  TTPL91 - LINHA KIKOS PRO",
    "unitario": 14490.0,
    "aVista": 12606.3
  },
  {
    "sku": "I026240",
    "descricao": "PUXADOR CONVERGENTE  ANILHADO  TTPL33 - LINHA KIKOS PRO",
    "unitario": 20790.0,
    "aVista": 18087.3
  },
  {
    "sku": "I026241",
    "descricao": "BANCO ROMANO TURBO    TTPL52 - LINHA KIKOS PRO",
    "unitario": 10290.0,
    "aVista": 8952.3
  },
  {
    "sku": "i000218",
    "descricao": "LEG PRESS IFS70 130KG - LINHA INFINITY KIKOS PRO",
    "unitario": 77890.0,
    "aVista": 67764.3
  },
  {
    "sku": "i000279",
    "descricao": "SUPINO RETO PR13 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i000280",
    "descricao": "SUPINO DECLINADO PR15 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i013869",
    "descricao": "AGACHAMENTO ARTICULADO PR16 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 37590.0,
    "aVista": 32703.3
  },
  {
    "sku": "i013868",
    "descricao": "SUPINO GUIADO PR17 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 29590.0,
    "aVista": 25743.3
  },
  {
    "sku": "i000281",
    "descricao": "SUPINO INCLINADO PR14 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i012607",
    "descricao": "BÍCEPS PR18 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i012735",
    "descricao": "PEITORAL ARTICULADO INCLINADO PR21 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 19290.0,
    "aVista": 16782.3
  },
  {
    "sku": "i000282",
    "descricao": "PUXADA ALTA PR33 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i000283",
    "descricao": "REMADA BAIXA PR31 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i014471",
    "descricao": "REMADA INCLINADA LINEAR  PR32 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 20590.0,
    "aVista": 17913.3
  },
  {
    "sku": "i000284",
    "descricao": "REMADA PR34 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i012837",
    "descricao": "PUXADA ALTA COM SUPINO PR35 DUAL - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 28390.0,
    "aVista": 24699.3
  },
  {
    "sku": "i012838",
    "descricao": "PULLOVER PR36 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 26790.0,
    "aVista": 23307.3
  },
  {
    "sku": "i000285",
    "descricao": "DESENVOLVIMENTO PR23 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i000286",
    "descricao": "GLUTEO PR78 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i000287",
    "descricao": "PANTURRILHA SENTADA PR77 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 26090.0,
    "aVista": 22698.3
  },
  {
    "sku": "i001830",
    "descricao": "FLEXORA DE PE PR72 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i001802",
    "descricao": "EXTENSORA PR71 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i000288",
    "descricao": "LEG PRESS 45° PR70 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 26990.0,
    "aVista": 23481.3
  },
  {
    "sku": "i012701",
    "descricao": "ABDUTORA PR73 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i012737",
    "descricao": "LEG PRESS 90° PR74 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 30690.0,
    "aVista": 26700.3
  },
  {
    "sku": "i012738",
    "descricao": "LEG PRESS UNILATERAL PR75 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 32290.0,
    "aVista": 28092.3
  },
  {
    "sku": "i013256",
    "descricao": "AGACHAMENTO SUMO PR76 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 31490.0,
    "aVista": 27396.3
  },
  {
    "sku": "i013314",
    "descricao": "PANTURRILHA EM PÉ PR79 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 23690.0,
    "aVista": 20610.3
  },
  {
    "sku": "i013543",
    "descricao": "LEVANTAMENTO TERRA OLIMPICO PR91 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 25990.0,
    "aVista": 22611.3
  },
  {
    "sku": "i013320",
    "descricao": "AGACHAMENTO SISSY PR92 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 7290.0,
    "aVista": 6342.3
  },
  {
    "sku": "i017408",
    "descricao": "ELEVAÇÃO PÉLVICA EM PÉ PR93 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 15890.0,
    "aVista": 13824.3
  },
  {
    "sku": "i000438",
    "descricao": "ANILHA 1KG BASIC CEMENT PS - KIKOS - IR91014/1",
    "unitario": 20.9,
    "aVista": 18.18
  },
  {
    "sku": "i000439",
    "descricao": "ANILHA 2KG BASIC CEMENT PS - KIKOS - IR91014/2",
    "unitario": 40.9,
    "aVista": 35.58
  },
  {
    "sku": "i000440",
    "descricao": "ANILHA 5KG BASIC CEMENT PS - KIKOS - IR91014/5",
    "unitario": 109.0,
    "aVista": 94.83
  },
  {
    "sku": "i000441",
    "descricao": "ANILHA 10KG BASIC CEMENT PS - KIKOS - IR91014/10",
    "unitario": 209.0,
    "aVista": 181.83
  },
  {
    "sku": "i000442",
    "descricao": "ANILHA 1KG STYLE CEMENT PS - KIKOS - IR91041/1S",
    "unitario": 49.9,
    "aVista": 43.41
  },
  {
    "sku": "i000443",
    "descricao": "ANILHA 2KG STYLE CEMENT PS - KIKOS - IR91041/2S",
    "unitario": 94.9,
    "aVista": 82.56
  },
  {
    "sku": "i000444",
    "descricao": "ANILHA 5KG STYLE CEMENT PS - KIKOS - IR91041/5S",
    "unitario": 249.0,
    "aVista": 216.63
  },
  {
    "sku": "i000445",
    "descricao": "ANILHA 10KG STYLE CEMENT PS - KIKOS - IR91041/10S",
    "unitario": 479.0,
    "aVista": 416.73
  },
  {
    "sku": "i000446",
    "descricao": "HALTER 1KG OCTOGONAL CEMENT PS - KIKOS - IR92006/1",
    "unitario": 20.9,
    "aVista": 18.18
  },
  {
    "sku": "i000447",
    "descricao": "HALTER 2KG OCTOGONAL CEMENT PS - KIKOS - IR92006/2",
    "unitario": 40.9,
    "aVista": 35.58
  },
  {
    "sku": "i000448",
    "descricao": "HALTER 3KG OCTOGONAL CEMENT PS - KIKOS - IR92006/3",
    "unitario": 60.9,
    "aVista": 52.98
  },
  {
    "sku": "i000449",
    "descricao": "HALTER 4KG OCTOGONAL CEMENT PS - KIKOS - IR92006/4",
    "unitario": 81.9,
    "aVista": 71.25
  },
  {
    "sku": "i000450",
    "descricao": "HALTER 5KG OCTOGONAL CEMENT PS - KIKOS - IR92006/5",
    "unitario": 101.9,
    "aVista": 88.65
  },
  {
    "sku": "i000451",
    "descricao": "KETTLEBELL 4KG CEMENT PS - KIKOS - IR92007C/4",
    "unitario": 119.0,
    "aVista": 103.53
  },
  {
    "sku": "i000452",
    "descricao": "KETTLEBELL 6KG CEMENT PS - KIKOS - IR92007C/6",
    "unitario": 179.0,
    "aVista": 155.73
  },
  {
    "sku": "i000453",
    "descricao": "KETTLEBELL 8KG CEMENT PS - KIKOS - IR92007C/8",
    "unitario": 239.0,
    "aVista": 207.93
  },
  {
    "sku": "i000454",
    "descricao": "KETTLEBELL 10KG CEMENT PS - KIKOS - IR92007C/10",
    "unitario": 289.0,
    "aVista": 251.43
  },
  {
    "sku": "i000455",
    "descricao": "TORRE DE HALTER CEMENT KIT DE 1KG A 3 KG - KIKOS - IR92091",
    "unitario": 349.0,
    "aVista": 303.63
  },
  {
    "sku": "i000456",
    "descricao": "ESTANTE PARA ANILHAS REGULARES - KIKOS - IR96013",
    "unitario": 1790.0,
    "aVista": 1557.3
  },
  {
    "sku": "i000394",
    "descricao": "TORRE DE HALTER SEXTAVADO EMBORRACHADO DE 1 A 10KG - KIKOS - 11CX",
    "unitario": 12290.0,
    "aVista": 10692.3
  },
  {
    "sku": "i012144",
    "descricao": "HALTER SEXTAVADO RUBBER KIKOS 1KG-MD2102/1",
    "unitario": 99.0,
    "aVista": 86.13
  },
  {
    "sku": "i012145",
    "descricao": "HALTER SEXTAVADO RUBBER KIKOS 2KG - MD2102/2",
    "unitario": 189.0,
    "aVista": 164.43
  },
  {
    "sku": "i012146",
    "descricao": "HALTER SEXTAVADO RUBBER KIKOS 3KG - MD2102/3",
    "unitario": 279.0,
    "aVista": 242.73
  },
  {
    "sku": "i012147",
    "descricao": "HALTER SEXTAVADO RUBBER KIKOS 4KG - MD2102/4",
    "unitario": 369.0,
    "aVista": 321.03
  },
  {
    "sku": "i012148",
    "descricao": "HALTER SEXTAVADO RUBBER KIKOS 5KG - MD2102/5",
    "unitario": 469.0,
    "aVista": 408.03
  },
  {
    "sku": "i012149",
    "descricao": "HALTER SEXTAVADO RUBBER KIKOS 6KG - MD2102/6",
    "unitario": 549.0,
    "aVista": 477.63
  },
  {
    "sku": "i012150",
    "descricao": "HALTER SEXTAVADO RUBBER KIKOS 7KG - MD2102/7",
    "unitario": 649.0,
    "aVista": 564.63
  },
  {
    "sku": "i012151",
    "descricao": "HALTER SEXTAVADO RUBBER KIKOS 8KG - MD2102/8",
    "unitario": 749.0,
    "aVista": 651.63
  },
  {
    "sku": "i012152",
    "descricao": "HALTER SEXTAVADO RUBBER KIKOS 9KG -MD2102/9",
    "unitario": 839.0,
    "aVista": 729.93
  },
  {
    "sku": "i012153",
    "descricao": "HALTER SEXTAVADO RUBBER KIKOS 10KG - MD2102/10",
    "unitario": 919.0,
    "aVista": 799.53
  },
  {
    "sku": "i014946",
    "descricao": "DUMBELL RUBBER VERMELHO KIKOS 10KG - MD2104/10",
    "unitario": 919.0,
    "aVista": 799.53
  },
  {
    "sku": "i014947",
    "descricao": "DUMBELL RUBBER VERMELHO KIKOS 12KG - MD2104/12",
    "unitario": 1129.0,
    "aVista": 982.23
  },
  {
    "sku": "i014948",
    "descricao": "DUMBELL RUBBER VERMELHO KIKOS 14KG - MD2104/14",
    "unitario": 1319.0,
    "aVista": 1147.53
  },
  {
    "sku": "i014949",
    "descricao": "DUMBELL RUBBER VERMELHO KIKOS 16KG - MD2104/16",
    "unitario": 1509.0,
    "aVista": 1312.83
  },
  {
    "sku": "i014950",
    "descricao": "DUMBELL RUBBER VERMELHO  KIKOS 18KG - MD2104/18",
    "unitario": 1699.0,
    "aVista": 1478.13
  },
  {
    "sku": "i014951",
    "descricao": "DUMBELL RUBBER VERMELHO KIKOS 20KG - MD2104/20",
    "unitario": 1879.0,
    "aVista": 1634.73
  },
  {
    "sku": "i014952",
    "descricao": "DUMBELL RUBBER VERMELHO KIKOS 22KG - MD2104/22",
    "unitario": 2069.0,
    "aVista": 1800.03
  },
  {
    "sku": "i014953",
    "descricao": "DUMBELL RUBBER VERMELHO KIKOS 24KG - MD 2104/24",
    "unitario": 2259.0,
    "aVista": 1965.33
  },
  {
    "sku": "i014954",
    "descricao": "DUMBELL RUBBER VERMELHO KIKOS 26KG - MD2104/26",
    "unitario": 2439.0,
    "aVista": 2121.93
  },
  {
    "sku": "i014955",
    "descricao": "DUMBELL RUBBER VERMELHO KIKOS 28KG - MD2104/28",
    "unitario": 2629.0,
    "aVista": 2287.23
  },
  {
    "sku": "i014956",
    "descricao": "DUMBELL RUBBER VERMELHO KIKOS 30KG - MD2104/30",
    "unitario": 2819.0,
    "aVista": 2452.53
  },
  {
    "sku": "i014957",
    "descricao": "DUMBELL RUBBER VERMELHO KIKOS 32KG - MD2104/32",
    "unitario": 3009.0,
    "aVista": 2617.83
  },
  {
    "sku": "i014958",
    "descricao": "DUMBELL RUBBER VERMELHO KIKOS 34KG - MD2104/34",
    "unitario": 3199.0,
    "aVista": 2783.13
  },
  {
    "sku": "i014959",
    "descricao": "DUMBELL RUBBER VERMELHO KIKOS 36KG - MD2104/36",
    "unitario": 3389.0,
    "aVista": 2948.43
  },
  {
    "sku": "i014960",
    "descricao": "DUMBELL RUBBER VERMELHO KIKOS 38KG - MD2104/38",
    "unitario": 3589.0,
    "aVista": 3122.43
  },
  {
    "sku": "i014961",
    "descricao": "DUMBELL RUBBER VERMELHO KIKOS 40KG - MD2104/40",
    "unitario": 3759.0,
    "aVista": 3270.33
  },
  {
    "sku": "i014962",
    "descricao": "DUMBELL RUBBER VERMELHO KIKOS 42KG - MD2104/42",
    "unitario": 3949.0,
    "aVista": 3435.63
  },
  {
    "sku": "i014963",
    "descricao": "DUMBELL RUBBER VERMELHO KIKOS 44KG - MD2104/44",
    "unitario": 4129.0,
    "aVista": 3592.23
  },
  {
    "sku": "i014964",
    "descricao": "DUMBELL RUBBER VERMELHO KIKOS 46KG - MD2104/46",
    "unitario": 4319.0,
    "aVista": 3757.53
  },
  {
    "sku": "i014965",
    "descricao": "DUMBELL RUBBER VERMELHO KIKOS 48KG - MD2104/48",
    "unitario": 4519.0,
    "aVista": 3931.53
  },
  {
    "sku": "i014966",
    "descricao": "DUMBELL RUBBER VERMELHO KIKOS 50KG - MD2104/50",
    "unitario": 4699.0,
    "aVista": 4088.13
  },
  {
    "sku": "i015550",
    "descricao": "ANILHA RUBBER VERMELHO KIKOS 2.5KG -MD1032/2.5V",
    "unitario": 209.0,
    "aVista": 181.83
  },
  {
    "sku": "i015551",
    "descricao": "ANILHA RUBBER VERMELHO KIKOS  5KG - MD1032/5V",
    "unitario": 419.0,
    "aVista": 364.53
  },
  {
    "sku": "i015552",
    "descricao": "ANILHA RUBBER VERMELHO KIKOS  10KG - MD1032/10V",
    "unitario": 849.0,
    "aVista": 738.63
  },
  {
    "sku": "i015553",
    "descricao": "ANILHA RUBBER VERMELHO KIKOS  15KG - MD1032/15V",
    "unitario": 1290.0,
    "aVista": 1122.3
  },
  {
    "sku": "i015554",
    "descricao": "ANILHA RUBBER VERMELHO KIKOS 20KG - MD1032/20V",
    "unitario": 1690.0,
    "aVista": 1470.3
  },
  {
    "sku": "i012194",
    "descricao": "KETTLEBELL RUBBER KIKOS 2KG",
    "unitario": 212.99,
    "aVista": 185.3
  },
  {
    "sku": "i012195",
    "descricao": "KETTLEBELL RUBBER KIKOS 4KG",
    "unitario": 429.0,
    "aVista": 373.23
  },
  {
    "sku": "i012191",
    "descricao": "KETTLEBELL RUBBER KIKOS 6KG",
    "unitario": 599.0,
    "aVista": 521.13
  },
  {
    "sku": "I026235",
    "descricao": "KETTLEBELL RUBBER VERMELHO KIKOS 6KG",
    "unitario": 599.0,
    "aVista": 521.13
  },
  {
    "sku": "i012196",
    "descricao": "KETTLEBELL RUBBER KIKOS 8KG",
    "unitario": 859.0,
    "aVista": 747.33
  },
  {
    "sku": "i012197",
    "descricao": "KETTLEBELL RUBBER KIKOS 10KG",
    "unitario": 1069.0,
    "aVista": 930.03
  },
  {
    "sku": "i012198",
    "descricao": "KETTLEBELL RUBBER KIKOS 12KG",
    "unitario": 1279.0,
    "aVista": 1112.73
  },
  {
    "sku": "i012199",
    "descricao": "KETTLEBELL RUBBER KIKOS 16KG",
    "unitario": 1709.0,
    "aVista": 1486.83
  },
  {
    "sku": "i012200",
    "descricao": "KETTLEBELL RUBBER KIKOS 18KG",
    "unitario": 1919.0,
    "aVista": 1669.53
  },
  {
    "sku": "i012201",
    "descricao": "KETTLEBELL RUBBER KIKOS 20KG",
    "unitario": 2139.0,
    "aVista": 1860.93
  },
  {
    "sku": "i012202",
    "descricao": "KETTLEBELL RUBBER KIKOS 22KG",
    "unitario": 2349.0,
    "aVista": 2043.63
  },
  {
    "sku": "i012203",
    "descricao": "KETTLEBELL RUBBER KIKOS 24KG",
    "unitario": 2569.0,
    "aVista": 2235.03
  },
  {
    "sku": "i015532",
    "descricao": "BARRA MONTADA W RUBBER VERMELHO KIKOS 10KG - MD3009A/10V",
    "unitario": 1029.0,
    "aVista": 895.23
  },
  {
    "sku": "i015533",
    "descricao": "BARRA MONTADA W RUBBER VERMELHO KIKOS 15KG - MD3009A/15V",
    "unitario": 1539.0,
    "aVista": 1338.93
  },
  {
    "sku": "i015534",
    "descricao": "BARRA MONTADA W RUBBER VERMELHO KIKOS 20KG - MD3009A/20V",
    "unitario": 2059.0,
    "aVista": 1791.33
  },
  {
    "sku": "i015535",
    "descricao": "BARRA MONTADA W RUBBER VERMELHO KIKOS 25KG - MD3009A/25V",
    "unitario": 2559.0,
    "aVista": 2226.33
  },
  {
    "sku": "i015536",
    "descricao": "BARRA MONTADA W RUBBERVERMELHO KIKOS 30KG - MD3009A/30V",
    "unitario": 3109.0,
    "aVista": 2704.83
  },
  {
    "sku": "i015537",
    "descricao": "BARRA MONTADA W RUBBER VERMELHO KIKOS 35KG - MD3009A/35V",
    "unitario": 3609.0,
    "aVista": 3139.83
  },
  {
    "sku": "i015538",
    "descricao": "BARRA MONTADA W RUBBER VERMELHO KIKOS 40KG - MD3009A/40V",
    "unitario": 4099.0,
    "aVista": 3566.13
  },
  {
    "sku": "i015539",
    "descricao": "BARRA MONTADA W RUBBER VERMELHO KIKOS 45KG - MD3009A/45V",
    "unitario": 4599.0,
    "aVista": 4001.13
  },
  {
    "sku": "i015540",
    "descricao": "BARRA MONTADA W RUBBER VERMELHO KIKOS 50KG - MD3009A/50V",
    "unitario": 5129.0,
    "aVista": 4462.23
  },
  {
    "sku": "i015541",
    "descricao": "BARRA MONTADA RETA RUBBER VERMELHO KIKOS 10KG - MD3009/10V",
    "unitario": 1029.0,
    "aVista": 895.23
  },
  {
    "sku": "i015542",
    "descricao": "BARRA MONTADA RETA RUBBER VERMELHO KIKOS 15KG - MD3009/15V",
    "unitario": 1539.0,
    "aVista": 1338.93
  },
  {
    "sku": "i015543",
    "descricao": "BARRA MONTADA RETA RUBBER VERMELHO KIKOS 20KG - MD3009/20V",
    "unitario": 2059.0,
    "aVista": 1791.33
  },
  {
    "sku": "i015544",
    "descricao": "BARRA MONTADA RETA RUBBER VERMELHO KIKOS 25KG - MD3009/25V",
    "unitario": 2559.0,
    "aVista": 2226.33
  },
  {
    "sku": "i015545",
    "descricao": "BARRA MONTADA RETA RUBBER VERMELHO KIKOS 30KG - MD3009/30V",
    "unitario": 3109.0,
    "aVista": 2704.83
  },
  {
    "sku": "i015546",
    "descricao": "BARRA MONTADA RETA RUBBERVERMELHO  KIKOS 35KG - MD3009/35V",
    "unitario": 3609.0,
    "aVista": 3139.83
  },
  {
    "sku": "i015547",
    "descricao": "BARRA MONTADA RETA RUBBER VERMELHO KIKOS 40KG - MD3009/40V",
    "unitario": 4099.0,
    "aVista": 3566.13
  },
  {
    "sku": "i015548",
    "descricao": "BARRA MONTADA RETA RUBBER VERMELHO KIKOS 45KG - MD3009/45V",
    "unitario": 4599.0,
    "aVista": 4001.13
  },
  {
    "sku": "i015549",
    "descricao": "BARRA MONTADA RETA RUBBER VERMELHO KIKOS 50KG - MD3009/50V",
    "unitario": 5129.0,
    "aVista": 4462.23
  },
  {
    "sku": "i000397",
    "descricao": "BARRA W 1.20M CROMADA COM PRESILHA - KIKOS - IR94006",
    "unitario": 579.0,
    "aVista": 503.73
  },
  {
    "sku": "i000398",
    "descricao": "BARRA RETA 1.20M CROMADA COM PRESILHA - KIKOS - IR94005",
    "unitario": 599.0,
    "aVista": 521.13
  },
  {
    "sku": "i000399",
    "descricao": "BARRA RETA 1.70M CROMADA COM PRESILHA - KIKOS - IR94003",
    "unitario": 799.0,
    "aVista": 695.13
  },
  {
    "sku": "i000400",
    "descricao": "BARRA RETA 2.20M CROMADA COM PRESILHA - KIKOS - IR94001",
    "unitario": 1019.0,
    "aVista": 886.53
  },
  {
    "sku": "i000401",
    "descricao": "BARRA RETA 0.40CM CROMADA COM PRESILHA - KIKOS - IR94020",
    "unitario": 229.0,
    "aVista": 199.23
  },
  {
    "sku": "i000402",
    "descricao": "BARRA H CROMADA COM PRESILHA - KIKOS - IR94009",
    "unitario": 989.0,
    "aVista": 860.43
  },
  {
    "sku": "i012709",
    "descricao": "BARRA RETA 2.20M CROMADA COM PRESILHA OLIMPICA OB86 - KIKOS -  - IR94001 - MD4101CB700lb",
    "unitario": 3049.0,
    "aVista": 2652.63
  },
  {
    "sku": "i000403",
    "descricao": "BARRA W 1.20M CROMADA COM PRESILHA OLIMPICA - KIKOS - OB47",
    "unitario": 1569.0,
    "aVista": 1365.03
  },
  {
    "sku": "i000404",
    "descricao": "BARRA RETA 1.20M CROMADA COM PRESILHA OLIMPICA - KIKOS - OB47S",
    "unitario": 1449.0,
    "aVista": 1260.63
  },
  {
    "sku": "i000405",
    "descricao": "BARRA RETA 1.52M CROMADA COM PRESILHA OLIMPICA - KIKOS - IR94051/OB60",
    "unitario": 1790.0,
    "aVista": 1557.3
  },
  {
    "sku": "i000407",
    "descricao": "BARRA RETA 0.50M CROMADA COM PRESILHA OLIMPICA - KIKOS - IR94045 / OB20",
    "unitario": 1190.0,
    "aVista": 1035.3
  },
  {
    "sku": "i000408",
    "descricao": "BARRA H CROMADA COM PRESILHA OLIMPICA - KIKOS - MD4101/OB34",
    "unitario": 1890.0,
    "aVista": 1644.3
  },
  {
    "sku": "i013321",
    "descricao": "BARRA ARMADILHA MD4111 - KIKOS",
    "unitario": 6790.0,
    "aVista": 5907.3
  },
  {
    "sku": "i013325",
    "descricao": "COLCHONETE DOBRÁVEL MD9013A - KIKOS",
    "unitario": 419.0,
    "aVista": 364.53
  },
  {
    "sku": "i013326",
    "descricao": "RODA DE EXERCICIO MD1485 - KIKOS",
    "unitario": 299.0,
    "aVista": 260.13
  },
  {
    "sku": "i013327",
    "descricao": "STEP AEROBICO MD1712 - KIKOS",
    "unitario": 2390.0,
    "aVista": 2079.3
  },
  {
    "sku": "i013328",
    "descricao": "STEP AEROBICO MD1719 - KIKOS",
    "unitario": 4190.0,
    "aVista": 3645.3
  },
  {
    "sku": "i013329",
    "descricao": "RACK DE DUMBELL 5 PARES MD6208 - KIKOS",
    "unitario": 5690.0,
    "aVista": 4950.3
  },
  {
    "sku": "i012465",
    "descricao": "SUPORTE PARA HALTER 10 PARES MD6217 - KIKOS",
    "unitario": 4990.0,
    "aVista": 4341.3
  },
  {
    "sku": "i001716",
    "descricao": "SUPORTE PARA BARRAS OLIMPICAS LIGHTNING BOLT – KIKOS",
    "unitario": 3559.0,
    "aVista": 3096.33
  },
  {
    "sku": "i026229",
    "descricao": "KIT PUXADORES ANATÔMICOS COM SUPORTE DE CHÃO AB1510 - KIKOS",
    "unitario": 4790.0,
    "aVista": 4167.3
  },
  {
    "sku": "i000290",
    "descricao": "ACADEMIA DE PORTA - KIKOS -AB3306",
    "unitario": 1259.0,
    "aVista": 1095.33
  },
  {
    "sku": "i000292",
    "descricao": "ANEL DE PILATES 39CM - KIKOS - AB3127",
    "unitario": 139.0,
    "aVista": 120.93
  },
  {
    "sku": "i000293",
    "descricao": "APOIO DE FLEXAO - KIKOS - AB3427",
    "unitario": 99.0,
    "aVista": 86.13
  },
  {
    "sku": "i000296",
    "descricao": "BARRA DE PORTA - KIKOS - AB3421",
    "unitario": 199.0,
    "aVista": 173.13
  },
  {
    "sku": "i000297",
    "descricao": "BARRA DE PORTA COMPLETA - KIKOS - AB3420",
    "unitario": 429.0,
    "aVista": 373.23
  },
  {
    "sku": "i000298",
    "descricao": "BLOCO DE YOGA - KIKOS - AB3626",
    "unitario": 49.0,
    "aVista": 42.63
  },
  {
    "sku": "i000301",
    "descricao": "BONECO BOB - KIKOS - 2CX - AB3933",
    "unitario": 11390.0,
    "aVista": 9909.3
  },
  {
    "sku": "i000303",
    "descricao": "CORDA COM CONTADOR DIGITAL - KIKOS - AB3017",
    "unitario": 79.0,
    "aVista": 68.73
  },
  {
    "sku": "i000304",
    "descricao": "CORDA DE PULAR LIGHT - KIKOS - AB3002",
    "unitario": 24.9,
    "aVista": 21.66
  },
  {
    "sku": "i000307",
    "descricao": "DISCO DE EQUILIBRIO - KIKOS - AB3403",
    "unitario": 139.0,
    "aVista": 120.93
  },
  {
    "sku": "i000308",
    "descricao": "DISCO MULTIUSO - KIKOS - AB3638",
    "unitario": 179.0,
    "aVista": 155.73
  },
  {
    "sku": "i000311",
    "descricao": "ESCADA DE TREINAMENTO 6M - KIKOS - AB3313",
    "unitario": 199.0,
    "aVista": 173.13
  },
  {
    "sku": "i000313",
    "descricao": "FITA DE SUSPENSAO - KIKOS - AB3307",
    "unitario": 399.0,
    "aVista": 347.13
  },
  {
    "sku": "i000314",
    "descricao": "HAND GRIP COM CONTADOR - KIKOS - AB3108",
    "unitario": 89.0,
    "aVista": 77.43
  },
  {
    "sku": "i000315",
    "descricao": "KIT DE FAIXAS ELASTICAS 3 TENSOES - KIKOS - AB3202",
    "unitario": 109.9,
    "aVista": 95.61
  },
  {
    "sku": "i000319",
    "descricao": "KIT ELASTIC TRAINING - KIKOS - AB3210",
    "unitario": 119.0,
    "aVista": 103.53
  },
  {
    "sku": "i000321",
    "descricao": "KIT MINI BANDS COM 3 PECAS 50X5CM - KIKOS - AB3218",
    "unitario": 99.0,
    "aVista": 86.13
  },
  {
    "sku": "i000322",
    "descricao": "KIT PISO DE PROTECAO 60x60x1.2CM COM 6 PLACAS - KIKOS - AB3611",
    "unitario": 299.0,
    "aVista": 260.13
  },
  {
    "sku": "i000326",
    "descricao": "PARAQUEDAS PARA RESISTENCIA EM CORRIDAS - KIKOS - AB3312",
    "unitario": 169.0,
    "aVista": 147.03
  },
  {
    "sku": "i000328",
    "descricao": "RODA DE EXERCICIOS ABDOMINAIS - KIKOS - AB3438",
    "unitario": 109.0,
    "aVista": 94.83
  },
  {
    "sku": "i000329",
    "descricao": "ROLO EVA DE PILATES 95x15CM - KIKOS - AB3653-1",
    "unitario": 449.0,
    "aVista": 390.63
  },
  {
    "sku": "i000330",
    "descricao": "ROLO PARA YOGA COM TEXTURA 34x15CM - KIKOS - AB3686",
    "unitario": 149.0,
    "aVista": 129.63
  },
  {
    "sku": "i000332",
    "descricao": "STEP LIGHT - KIKOS - AB3502",
    "unitario": 399.0,
    "aVista": 347.13
  },
  {
    "sku": "i000336",
    "descricao": "TAPETE YOGA MAT - KIKOS - AB3620",
    "unitario": 119.0,
    "aVista": 103.53
  },
  {
    "sku": "i000339",
    "descricao": "TRAMPOLIM - KIKOS - AB3656",
    "unitario": 779.0,
    "aVista": 677.73
  },
  {
    "sku": "i000361",
    "descricao": "PROTETOR ACOLCHOADO PARA BARRA - KIKOS - AB7029",
    "unitario": 129.0,
    "aVista": 112.23
  },
  {
    "sku": "i000378",
    "descricao": "BOLA GIROSCOPIA - KIKOS - AB3119",
    "unitario": 109.0,
    "aVista": 94.83
  },
  {
    "sku": "i000379",
    "descricao": "BOLA DE GINASTICA 55CM - KIKOS - AB3630/55",
    "unitario": 149.0,
    "aVista": 129.63
  },
  {
    "sku": "i000380",
    "descricao": "BOLA DE GINASTICA 65CM - KIKOS - AB3630/65",
    "unitario": 169.0,
    "aVista": 147.03
  },
  {
    "sku": "i000381",
    "descricao": "BOLA DE GINASTICA 75CM - KIKOS - AB3630/75",
    "unitario": 199.0,
    "aVista": 173.13
  },
  {
    "sku": "i000382",
    "descricao": "MEIA BOLA COM ALCAS - KIKOS - AB3635",
    "unitario": 1190.0,
    "aVista": 1035.3
  },
  {
    "sku": "i000388",
    "descricao": "BALANCA ALPHA KIKOS - TY6123",
    "unitario": 139.0,
    "aVista": 120.93
  },
  {
    "sku": "i000389",
    "descricao": "BALANCA DIGITAL ISON PRATA KIKOS -TY5121-S",
    "unitario": 179.0,
    "aVista": 155.73
  },
  {
    "sku": "i000390",
    "descricao": "BALANCA DIGITAL ISON PRETA KIKOS - TY5121-B",
    "unitario": 179.0,
    "aVista": 155.73
  },
  {
    "sku": "i000391",
    "descricao": "BALANCA ORION KIKOS - 2006A1",
    "unitario": 165.49,
    "aVista": 143.98
  },
  {
    "sku": "i000956",
    "descricao": "BALANCA PHOENIX KIKOS - XY6066",
    "unitario": 449.0,
    "aVista": 390.63
  },
  {
    "sku": "i002138",
    "descricao": "BALANCA LÓTUS  KIKOS - TY5135",
    "unitario": 479.0,
    "aVista": 416.73
  },
  {
    "sku": "i012137",
    "descricao": "ESCADA PROFISSIONAL COM DISPLAY INTERATIVO T17.0i",
    "unitario": 64900.0,
    "aVista": 56463.0
  },
  {
    "sku": "i017512",
    "descricao": "ESCADA COM DISPLAY LED KE14.0",
    "unitario": 30490.0,
    "aVista": 26526.3
  },
  {
    "sku": "i001759",
    "descricao": "AIRBIKE KIKOS PRO ARX",
    "unitario": 15290.0,
    "aVista": 13302.3
  },
  {
    "sku": "i000013",
    "descricao": "BIKE KIKOS KR9.9",
    "unitario": 30290.0,
    "aVista": 26352.3
  },
  {
    "sku": "i001195",
    "descricao": "BIKE KIKOS KV9.5 - BIVOLT",
    "unitario": 15390.0,
    "aVista": 13389.3
  },
  {
    "sku": "i000006",
    "descricao": "BIKE KIKOS KV9.8",
    "unitario": 23690.0,
    "aVista": 20610.3
  },
  {
    "sku": "i000010",
    "descricao": "BIKE KIKOS KR5.6B - BIVOLT",
    "unitario": 6849.0,
    "aVista": 5958.63
  },
  {
    "sku": "i001330",
    "descricao": "BIKE KIKOS KV9.8iX",
    "unitario": 22090.0,
    "aVista": 19218.3
  },
  {
    "sku": "i001333",
    "descricao": "BIKE KIKOS KR9.9iX",
    "unitario": 28790.0,
    "aVista": 25047.3
  },
  {
    "sku": "i001286",
    "descricao": "BIKE KIKOS MAX KV",
    "unitario": 1700.85,
    "aVista": 1479.74
  },
  {
    "sku": "i000017",
    "descricao": "BIKE SPINNING KIKOS PRO F12",
    "unitario": 18690.0,
    "aVista": 16260.3
  },
  {
    "sku": "i002076",
    "descricao": "BIKE SPINNING KIKOS S200L",
    "unitario": 3632.85,
    "aVista": 3160.58
  },
  {
    "sku": "i001254",
    "descricao": "BIKE SPINNING KIKOS PRO F12i",
    "unitario": 18690.0,
    "aVista": 16260.3
  },
  {
    "sku": "i000001",
    "descricao": "BIKE KIKOS 3015",
    "unitario": 899.0,
    "aVista": 782.13
  },
  {
    "sku": "i002107",
    "descricao": "MAGNETIC SYSTEM BIKE KIKOS MS4000",
    "unitario": 16790.0,
    "aVista": 14607.3
  },
  {
    "sku": "i001954",
    "descricao": "ULTRA BIKE",
    "unitario": 26499.0,
    "aVista": 23054.13
  },
  {
    "sku": "i000026",
    "descricao": "ELIPTICO KIKOS 6.0 - 2CX - BIVOLT",
    "unitario": 18990.0,
    "aVista": 16521.3
  },
  {
    "sku": "i000027",
    "descricao": "ELIPTICO KIKOS 6.0i - 2CX - BIVOLT",
    "unitario": 18990.0,
    "aVista": 16521.3
  },
  {
    "sku": "i000028",
    "descricao": "ELIPTICO KIKOS 8618",
    "unitario": 16778.5,
    "aVista": 14597.3
  },
  {
    "sku": "i013658",
    "descricao": "ELIPTICO KE15.5 BIVOLT",
    "unitario": 28990.0,
    "aVista": 25221.3
  },
  {
    "sku": "i001370",
    "descricao": "ELIPTICO KIKOS AMX8810",
    "unitario": 66990.0,
    "aVista": 58281.3
  },
  {
    "sku": "i001353",
    "descricao": "ELIPTICO KIKOS KE5.8",
    "unitario": 17590.0,
    "aVista": 15303.3
  },
  {
    "sku": "i002109",
    "descricao": "ELIPTICO KIKOS KE5.8i",
    "unitario": 17590.0,
    "aVista": 15303.3
  },
  {
    "sku": "i000030",
    "descricao": "ELIPTICO KIKOS PRO KE15.0 COM TV",
    "unitario": 49390.0,
    "aVista": 42969.3
  },
  {
    "sku": "i012180",
    "descricao": "ELIPTICO KE15.0i",
    "unitario": 32990.0,
    "aVista": 28701.3
  },
  {
    "sku": "i013542",
    "descricao": "ELIPTICO KE15.5 110 VOLT",
    "unitario": 28990.0,
    "aVista": 25221.3
  },
  {
    "sku": "i013319",
    "descricao": "ELIPTICO KE16.0",
    "unitario": 38290.0,
    "aVista": 33312.3
  },
  {
    "sku": "i000031",
    "descricao": "ELIPTICO KIKOS PRO KE15.0 SEM TV",
    "unitario": 32990.0,
    "aVista": 28701.3
  },
  {
    "sku": "i000275",
    "descricao": "ESTACAO COM 4 TORRES KMS40 - LINHA STATION KIKOS PRO",
    "unitario": 109900.0,
    "aVista": 95613.0
  },
  {
    "sku": "i000276",
    "descricao": "ESTACAO COM 5 TORRES KMS50 - LINHA STATION KIKOS PRO",
    "unitario": 119900.0,
    "aVista": 104313.0
  },
  {
    "sku": "i000277",
    "descricao": "ESTACAO COM 8 TORRES - LINHA STATION KIKOS PRO",
    "unitario": 159900.0,
    "aVista": 139113.0
  },
  {
    "sku": "i001252",
    "descricao": "ESTACAO DE MUSCULACAO KIKOS GX SUPREME BLACK - 3CX",
    "unitario": 6190.0,
    "aVista": 5385.3
  },
  {
    "sku": "i000041",
    "descricao": "ESTACAO DE MUSCULACAO KIKOS 518BK - 24CX",
    "unitario": 99990.0,
    "aVista": 86991.3
  },
  {
    "sku": "i000636",
    "descricao": "ESTACAO DE MUSCULACAO KIKOS 518BK KIT 13 - PESO",
    "unitario": 99990.0,
    "aVista": 86991.3
  },
  {
    "sku": "i000040",
    "descricao": "ESTACAO DE MUSCULACAO KIKOS 518BL - 10CX",
    "unitario": 62990.0,
    "aVista": 54801.3
  },
  {
    "sku": "i000035",
    "descricao": "ESTACAO DE MUSCULACAO KIKOS GX2 - 3CX",
    "unitario": 12490.0,
    "aVista": 10866.3
  },
  {
    "sku": "i001342",
    "descricao": "ESTEIRA KIKOS 1000iX - 110V",
    "unitario": 7569.0,
    "aVista": 6585.03
  },
  {
    "sku": "i001354",
    "descricao": "ESTEIRA KIKOS MAX K3 BIVOLT",
    "unitario": 10990.0,
    "aVista": 9561.3
  },
  {
    "sku": "i001395",
    "descricao": "ESTEIRA KIKOS KX3500iC - 220V  2CX",
    "unitario": 22990.0,
    "aVista": 20001.3
  },
  {
    "sku": "i001343",
    "descricao": "ESTEIRA KIKOS 1000iXC - 220V",
    "unitario": 7569.0,
    "aVista": 6585.03
  },
  {
    "sku": "i001190",
    "descricao": "ESTEIRA KIKOS 300 110V",
    "unitario": 1804.35,
    "aVista": 1569.78
  },
  {
    "sku": "i001340",
    "descricao": "ESTEIRA KIKOS E600iX - BIVOLT",
    "unitario": 4290.0,
    "aVista": 3732.3
  },
  {
    "sku": "i013254",
    "descricao": "ESTEIRA KIKOS KX8600 - 110v",
    "unitario": 42490.0,
    "aVista": 36966.3
  },
  {
    "sku": "i012138",
    "descricao": "ESTEIRA KIKOS KX8700i - 110V",
    "unitario": 45990.0,
    "aVista": 40011.3
  },
  {
    "sku": "i002156",
    "descricao": "ESTEIRA KIKOS KX8700iC - 220V",
    "unitario": 45990.0,
    "aVista": 40011.3
  },
  {
    "sku": "i001350",
    "descricao": "ESTEIRA KIKOS KX9000C - 220V - 2CX",
    "unitario": 61790.0,
    "aVista": 53757.3
  },
  {
    "sku": "i013315",
    "descricao": "ESTEIRA KIKOS KX8500 - 110v",
    "unitario": 28390.0,
    "aVista": 24699.3
  },
  {
    "sku": "i000046",
    "descricao": "ESTEIRA KIKOS 300i",
    "unitario": 1804.35,
    "aVista": 1569.78
  },
  {
    "sku": "i000045",
    "descricao": "ESTEIRA KIKOS BLACK SUPREME - 220V",
    "unitario": 1470.85,
    "aVista": 1279.64
  },
  {
    "sku": "i001135",
    "descricao": "ESTEIRA KIKOS E500i - BIVOLT",
    "unitario": 3890.0,
    "aVista": 3384.3
  },
  {
    "sku": "i001034",
    "descricao": "ESTEIRA KIKOS E500i 110V",
    "unitario": 3890.0,
    "aVista": 3384.3
  },
  {
    "sku": "i001241",
    "descricao": "ESTEIRA KIKOS E500i - BIVOLT",
    "unitario": 3890.0,
    "aVista": 3384.3
  },
  {
    "sku": "i000049",
    "descricao": "ESTEIRA KIKOS E500iC - 220V",
    "unitario": 3890.0,
    "aVista": 3384.3
  },
  {
    "sku": "i001187",
    "descricao": "ESTEIRA KIKOS E600 - BIVOLT",
    "unitario": 4290.0,
    "aVista": 3732.3
  },
  {
    "sku": "i000052",
    "descricao": "ESTEIRA KIKOS E600i - BIVOLT",
    "unitario": 4290.0,
    "aVista": 3732.3
  },
  {
    "sku": "i001341",
    "descricao": "ESTEIRA KIKOS E800iX - BIVOLT",
    "unitario": 5529.0,
    "aVista": 4810.23
  },
  {
    "sku": "i000068",
    "descricao": "ESTEIRA KIKOS KS5404",
    "unitario": 24290.0,
    "aVista": 21132.3
  },
  {
    "sku": "i001359",
    "descricao": "ESTEIRA KIKOS KX3000 PRETA - 110V - 2CX",
    "unitario": 15790.0,
    "aVista": 13737.3
  },
  {
    "sku": "i001397",
    "descricao": "ESTEIRA KIKOS KX3000i - 2CX 110V",
    "unitario": 15790.0,
    "aVista": 13737.3
  },
  {
    "sku": "i001398",
    "descricao": "ESTEIRA KIKOS KX3000iC - 2CX - 220V",
    "unitario": 15790.0,
    "aVista": 13737.3
  },
  {
    "sku": "i001361",
    "descricao": "ESTEIRA KIKOS KX3500i PRETA - 220V 2CX",
    "unitario": 22990.0,
    "aVista": 20001.3
  },
  {
    "sku": "i000067",
    "descricao": "ESTEIRA KIKOS KX5000i - 220V - 2CX",
    "unitario": 18618.5,
    "aVista": 16198.09
  },
  {
    "sku": "i000066",
    "descricao": "ESTEIRA KIKOS KX5000i - 2CX",
    "unitario": 18618.5,
    "aVista": 16198.09
  },
  {
    "sku": "i001362",
    "descricao": "ESTEIRA KIKOS KX5000i - PRETA 220V 2CX",
    "unitario": 18618.5,
    "aVista": 16198.09
  },
  {
    "sku": "i001565",
    "descricao": "ESTEIRA KIKOS KX5000iX - PRETA 110V 2CX",
    "unitario": 18618.5,
    "aVista": 16198.09
  },
  {
    "sku": "i001563",
    "descricao": "ESTEIRA KIKOS KX5000iX - PRETA 220V 2CX",
    "unitario": 18618.5,
    "aVista": 16198.09
  },
  {
    "sku": "i001363",
    "descricao": "ESTEIRA KIKOS KX7500 - PRETA",
    "unitario": 34900.0,
    "aVista": 30363.0
  },
  {
    "sku": "i001364",
    "descricao": "ESTEIRA KIKOS KX7500 - PRETA - 220V",
    "unitario": 34900.0,
    "aVista": 30363.0
  },
  {
    "sku": "i001965",
    "descricao": "ESTEIRA KIKOS KX8000 100V",
    "unitario": 33490.0,
    "aVista": 29136.3
  },
  {
    "sku": "i001964",
    "descricao": "ESTEIRA KIKOS KX8000C - 220V",
    "unitario": 33490.0,
    "aVista": 29136.3
  },
  {
    "sku": "i000073",
    "descricao": "ESTEIRA KIKOS KX9000 - 2CX 110V",
    "unitario": 61790.0,
    "aVista": 53757.3
  },
  {
    "sku": "i001814",
    "descricao": "ESTEIRA KIKOS MAX-K1X - BIVOLT",
    "unitario": 4439.0,
    "aVista": 3861.93
  },
  {
    "sku": "i001813",
    "descricao": "ESTEIRA KIKOS HMAXi - BIVOLT",
    "unitario": 5529.0,
    "aVista": 4810.23
  },
  {
    "sku": "i000057",
    "descricao": "ESTEIRA KIKOS KS2202i - 110V",
    "unitario": 10990.0,
    "aVista": 9561.3
  },
  {
    "sku": "i000058",
    "descricao": "ESTEIRA KIKOS KS2202i - 220V",
    "unitario": 10990.0,
    "aVista": 9561.3
  },
  {
    "sku": "i001344",
    "descricao": "ESTEIRA KIKOS KS4202i - 110V",
    "unitario": 13990.0,
    "aVista": 12171.3
  },
  {
    "sku": "i001334",
    "descricao": "ESTEIRA KIKOS KS4202iC - 220V",
    "unitario": 13990.0,
    "aVista": 12171.3
  },
  {
    "sku": "i001346",
    "descricao": "ESTEIRA KIKOS KS5403iC 220V",
    "unitario": 18490.0,
    "aVista": 16086.3
  },
  {
    "sku": "i001345",
    "descricao": "ESTEIRA KIKOS KS5403i 110V",
    "unitario": 18490.0,
    "aVista": 16086.3
  },
  {
    "sku": "i012468",
    "descricao": "ESTEIRA KIKOS KX8200 - 110V",
    "unitario": 25490.0,
    "aVista": 22176.3
  },
  {
    "sku": "i012469",
    "descricao": "ESTEIRA KIKOS KX8200C - 220V",
    "unitario": 25490.0,
    "aVista": 22176.3
  },
  {
    "sku": "i001352",
    "descricao": "ESTEIRA KIKOS KX9500C - 220V",
    "unitario": 75990.0,
    "aVista": 66111.3
  },
  {
    "sku": "i001351",
    "descricao": "ESTEIRA KIKOS KX9500 - 110V",
    "unitario": 75990.0,
    "aVista": 66111.3
  },
  {
    "sku": "i001347",
    "descricao": "ESTEIRA KIKOS KS5404i- 110V",
    "unitario": 24290.0,
    "aVista": 21132.3
  },
  {
    "sku": "i001348",
    "descricao": "ESTEIRA KIKOS KS5404iC - 220V",
    "unitario": 24290.0,
    "aVista": 21132.3
  },
  {
    "sku": "i001396",
    "descricao": "ESTEIRA KIKOS KX3500i - 2CX 110V",
    "unitario": 22990.0,
    "aVista": 20001.3
  },
  {
    "sku": "i013316",
    "descricao": "ESTEIRA KIKOS KX8500C - 220v",
    "unitario": 28390.0,
    "aVista": 24699.3
  },
  {
    "sku": "i001349",
    "descricao": "ESTEIRA KIKOS KX9000 - 110V - 2CX",
    "unitario": 61790.0,
    "aVista": 53757.3
  },
  {
    "sku": "i013260",
    "descricao": "ESTEIRA KIKOS KX10000 - 110v",
    "unitario": 97990.0,
    "aVista": 85251.3
  },
  {
    "sku": "i013261",
    "descricao": "ESTEIRA KIKOS KX10000C - 220v",
    "unitario": 97990.0,
    "aVista": 85251.3
  },
  {
    "sku": "i001268",
    "descricao": "ESTEIRA KIKOS MAX-K1 - BIVOLT",
    "unitario": 4439.0,
    "aVista": 3861.93
  },
  {
    "sku": "i000082",
    "descricao": "PLATAFORMA VIBRATORIA KIKOS FITPLATE BRANCA - 220V",
    "unitario": 6390.0,
    "aVista": 5559.3
  },
  {
    "sku": "i000083",
    "descricao": "PLATAFORMA VIBRATORIA KIKOS FITPLATE PRETA 110V",
    "unitario": 6390.0,
    "aVista": 5559.3
  },
  {
    "sku": "i000080",
    "descricao": "PLATAFORMA VIBRATORIA KIKOS P200 - 220V",
    "unitario": 4090.0,
    "aVista": 3558.3
  },
  {
    "sku": "i000085",
    "descricao": "PLATAFORMA VIBRATORIA KIKOS P201i",
    "unitario": 6290.0,
    "aVista": 5472.3
  },
  {
    "sku": "i000086",
    "descricao": "PLATAFORMA VIBRATORIA KIKOS P201iC - 220V",
    "unitario": 6290.0,
    "aVista": 5472.3
  },
  {
    "sku": "i000089",
    "descricao": "PLATAFORMA VIBRATORIA KIKOS P204i - 2CX 110V",
    "unitario": 13890.0,
    "aVista": 12084.3
  },
  {
    "sku": "i001836",
    "descricao": "PLATAFORMA VIBRATORIA KIKOS P202iX - 110V - 2CX",
    "unitario": 8590.0,
    "aVista": 7473.3
  },
  {
    "sku": "i001837",
    "descricao": "PLATAFORMA VIBRATORIA KIKOS P202iXC - 220V - 2CX",
    "unitario": 8590.0,
    "aVista": 7473.3
  },
  {
    "sku": "i000078",
    "descricao": "PLATAFORMA VIBRATORIA KIKOS TCPLATEi 110V",
    "unitario": 1275.35,
    "aVista": 1109.55
  },
  {
    "sku": "i000098",
    "descricao": "REMO KIKOS CK1000",
    "unitario": 2490.0,
    "aVista": 2166.3
  },
  {
    "sku": "i001761",
    "descricao": "REMO LIGHTNINGBOLT WR900",
    "unitario": 19890.0,
    "aVista": 17304.3
  },
  {
    "sku": "i000458",
    "descricao": "CADEIRA DE MASSAGEM DELUXE G1000 - KIKOS",
    "unitario": 20458.5,
    "aVista": 17798.9
  },
  {
    "sku": "i000457",
    "descricao": "CADEIRA DE MASSAGEM G500 - KIKOS",
    "unitario": 11385.0,
    "aVista": 9904.95
  },
  {
    "sku": "i001908",
    "descricao": "(REVERSE) FLY - LBES22",
    "unitario": 61890.0,
    "aVista": 53844.3
  },
  {
    "sku": "i001904",
    "descricao": "ABDUCTOR/ADDUCTOR - LBES7475",
    "unitario": 54900.0,
    "aVista": 47763.0
  },
  {
    "sku": "i000195",
    "descricao": "APOLETE CNS76 60KG - LINHA CONCEPT KIKOS PRO",
    "unitario": 24590.0,
    "aVista": 21393.3
  },
  {
    "sku": "i000183",
    "descricao": "BICEPS CNS40 80KG - LINHA CONCEPT KIKOS PRO",
    "unitario": 21990.0,
    "aVista": 19131.3
  },
  {
    "sku": "i001900",
    "descricao": "BICEPS CURL - LBES40",
    "unitario": 58190.0,
    "aVista": 50625.3
  },
  {
    "sku": "i000153",
    "descricao": "CADEIRA ADUTORA E ABDUTORA FOC1819 - LINHA FOCUS - KIKOS",
    "unitario": 17468.5,
    "aVista": 15197.59
  },
  {
    "sku": "i000154",
    "descricao": "CADEIRA FLEXORA E EXTENSORA FOC1314 - LINHA FOCUS - KIKOS",
    "unitario": 21990.0,
    "aVista": 19131.3
  },
  {
    "sku": "i001898",
    "descricao": "CHEST PRESS - PLATE - FE9701",
    "unitario": 58900.0,
    "aVista": 51243.0
  },
  {
    "sku": "i002124",
    "descricao": "CROSS COM SMITH TTDS62i - LINHA KIKOS PRO",
    "unitario": 58990.0,
    "aVista": 51321.3
  },
  {
    "sku": "i000278",
    "descricao": "CROSS OVER ANGULAR C3 100KG - LINHA KIKOS PRO - 8CX",
    "unitario": 31613.5,
    "aVista": 27503.74
  },
  {
    "sku": "i000272",
    "descricao": "CROSS OVER KMS20 160KG - LINHA STATION KIKOS PRO",
    "unitario": 42990.0,
    "aVista": 37401.3
  },
  {
    "sku": "i000204",
    "descricao": "DELTOIDE IFS21 130KG - LINHA INFINITY KIKOS PRO",
    "unitario": 28623.5,
    "aVista": 24902.44
  },
  {
    "sku": "i001276",
    "descricao": "DELTOIDE TTS21U 109KG - LINHA TITANIUM KIKOS PRO",
    "unitario": 22190.0,
    "aVista": 19305.3
  },
  {
    "sku": "i000181",
    "descricao": "DESENVOLVIMENTO CNS23 80KG - LINHA CONCEPT KIKOS PRO",
    "unitario": 24490.0,
    "aVista": 21306.3
  },
  {
    "sku": "i000203",
    "descricao": "DESENVOLVIMENTO IFS23 130KG - LINHA INFINITY KIKOS PRO",
    "unitario": 28623.5,
    "aVista": 24902.44
  },
  {
    "sku": "i000105",
    "descricao": "DESENVOLVIMENTO OMBRO SH5053 - LINHA CONVERGENTE - 2CX",
    "unitario": 5853.5,
    "aVista": 5092.55
  },
  {
    "sku": "i001919",
    "descricao": "DUAL FUNCTION SHORT SHROUD - LBMS21",
    "unitario": 50390.0,
    "aVista": 43839.3
  },
  {
    "sku": "i000193",
    "descricao": "EXTENSORA CNS71 100KG - LINHA CONCEPT KIKOS PRO",
    "unitario": 24590.0,
    "aVista": 21393.3
  },
  {
    "sku": "i001929",
    "descricao": "FID BENCH - LBFW80",
    "unitario": 8290.0,
    "aVista": 7212.3
  },
  {
    "sku": "i000191",
    "descricao": "FLEXORA CNS72 80KG - LINHA CONCEPT KIKOS PRO",
    "unitario": 24590.0,
    "aVista": 21393.3
  },
  {
    "sku": "i001915",
    "descricao": "GLUTE - LBES78",
    "unitario": 58590.0,
    "aVista": 50973.3
  },
  {
    "sku": "i002096",
    "descricao": "SUPINO MAQUINA 135KG -LINHA CONCEPT II KIKOS PRO  - C2S10",
    "unitario": 32490.0,
    "aVista": 28266.3
  },
  {
    "sku": "i002097",
    "descricao": "GRAVITON 88KG -LINHA CONCEPT II KIKOS PRO C2S60",
    "unitario": 29490.0,
    "aVista": 25656.3
  },
  {
    "sku": "i002118",
    "descricao": "SUPINO INCLINADO 109KG -LINHA CONCEPT II KIKOS PRO - C2S13",
    "unitario": 32490.0,
    "aVista": 28266.3
  },
  {
    "sku": "i000197",
    "descricao": "PANTURRILHA CNS77 60KG - LINHA CONCEPT KIKOS PRO",
    "unitario": 33390.0,
    "aVista": 29049.3
  },
  {
    "sku": "i002119",
    "descricao": "GLUTEO 95KG -LINHA CONCEPT II KIKOS PRO - C2S78",
    "unitario": 34590.0,
    "aVista": 30093.3
  },
  {
    "sku": "i001930",
    "descricao": "GLUTE HAM BENCH - LBSL76",
    "unitario": 14990.0,
    "aVista": 13041.3
  },
  {
    "sku": "i000196",
    "descricao": "GLUTEO CNS78 60KG - LINHA CONCEPT KIKOS PRO",
    "unitario": 24590.0,
    "aVista": 21393.3
  },
  {
    "sku": "i000185",
    "descricao": "GRAVITON CNS60 100KG - LINHA CONCEPT KIKOS PRO",
    "unitario": 24590.0,
    "aVista": 21393.3
  },
  {
    "sku": "i001931",
    "descricao": "HALF RACK - LBFW73",
    "unitario": 23190.0,
    "aVista": 20175.3
  },
  {
    "sku": "i001924",
    "descricao": "INCLINE PRESS - PLATE - LBSL14",
    "unitario": 33490.0,
    "aVista": 29136.3
  },
  {
    "sku": "i001899",
    "descricao": "LAT PULLDOWN - LBES33",
    "unitario": 56490.0,
    "aVista": 49146.3
  },
  {
    "sku": "i001917",
    "descricao": "LAT PULLDOWN/VERTICAL ROW - LBIT3031",
    "unitario": 44190.0,
    "aVista": 38445.3
  },
  {
    "sku": "i001914",
    "descricao": "LATERAL RAISE - LBES21",
    "unitario": 66590.0,
    "aVista": 57933.3
  },
  {
    "sku": "i001903",
    "descricao": "LEG CURL - LBES72",
    "unitario": 65990.0,
    "aVista": 57411.3
  },
  {
    "sku": "i001902",
    "descricao": "LEG EXTENSION - LBES71",
    "unitario": 56590.0,
    "aVista": 49233.3
  },
  {
    "sku": "i001941",
    "descricao": "LEG EXTENSION - PLATE - LBSL71",
    "unitario": 28999.0,
    "aVista": 25229.13
  },
  {
    "sku": "i001925",
    "descricao": "LEG PRESS - LBSL70",
    "unitario": 33890.0,
    "aVista": 29484.3
  },
  {
    "sku": "i001905",
    "descricao": "LEG PRESS 45° - LBES70",
    "unitario": 79900.0,
    "aVista": 69513.0
  },
  {
    "sku": "i000194",
    "descricao": "LEG PRESS CNS70 100KG - LINHA CONCEPT KIKOS PRO",
    "unitario": 24590.0,
    "aVista": 21393.3
  },
  {
    "sku": "i000186",
    "descricao": "LOMBAR CNS52 80KG - LINHA CONCEPT KIKOS PRO",
    "unitario": 22890.0,
    "aVista": 19914.3
  },
  {
    "sku": "i001943",
    "descricao": "OLYMPIC FLAT BENCH - LBFW13",
    "unitario": 17799.0,
    "aVista": 15485.13
  },
  {
    "sku": "i000222",
    "descricao": "PANTURRILHA EM PE IFS77 130KG - LINHA INFINITY KIKOS PRO",
    "unitario": 28623.5,
    "aVista": 24902.44
  },
  {
    "sku": "i001901",
    "descricao": "PECTORAL - LBES12",
    "unitario": 58900.0,
    "aVista": 51243.0
  },
  {
    "sku": "i000180",
    "descricao": "PEITORAL DORSAL CNS22 80KG - LINHA CONCEPT KIKOS PRO",
    "unitario": 24490.0,
    "aVista": 21306.3
  },
  {
    "sku": "i000201",
    "descricao": "PEITORAL IFS12 130KG - LINHA INFINITY KIKOS PRO",
    "unitario": 21378.5,
    "aVista": 18599.29
  },
  {
    "sku": "i000274",
    "descricao": "POLIA FUNCIONAL KMS10 80KG - LINHA STATION KIKOS PRO",
    "unitario": 39669.0,
    "aVista": 34512.03
  },
  {
    "sku": "i001928",
    "descricao": "POWER RACK - LBFW73",
    "unitario": 34490.0,
    "aVista": 30006.3
  },
  {
    "sku": "i001921",
    "descricao": "PULLDOWN - PLATE - LBSL33",
    "unitario": 31090.0,
    "aVista": 27048.3
  },
  {
    "sku": "i000109",
    "descricao": "PULLEY ALTERNADO SH5060 - LINHA CONVERGENTE - 2CX",
    "unitario": 7578.5,
    "aVista": 6593.3
  },
  {
    "sku": "i000189",
    "descricao": "PUXADOR CNS33 100KG - LINHA CONCEPT KIKOS PRO",
    "unitario": 24390.0,
    "aVista": 21219.3
  },
  {
    "sku": "i001371",
    "descricao": "PUXADOR COSTAS CNS30 100KG - LINHA CONCEPT KIKOS PRO",
    "unitario": 20790.0,
    "aVista": 18087.3
  },
  {
    "sku": "i001313",
    "descricao": "PUXADOR PULLEY C/ REMADA FOC1112 - LINHA FOCUS - KIKOS",
    "unitario": 16433.5,
    "aVista": 14297.15
  },
  {
    "sku": "i000396",
    "descricao": "RACK DE BARRAS - KIKOS - IRSH86032",
    "unitario": 12190.0,
    "aVista": 10605.3
  },
  {
    "sku": "i000259",
    "descricao": "RACK DUMBBELL 2 ALTURAS TTFW91 - LINHA KIKOS PRO",
    "unitario": 6490.0,
    "aVista": 5646.3
  },
  {
    "sku": "i000271",
    "descricao": "RACK DUMBELL 3 ALTURAS TTFW92 - LINHA KIKOS PRO - PRETO",
    "unitario": 12290.0,
    "aVista": 10692.3
  },
  {
    "sku": "i001927",
    "descricao": "REAR KICK - LBSL78",
    "unitario": 26190.0,
    "aVista": 22785.3
  },
  {
    "sku": "i000190",
    "descricao": "REMADA BAIXA CNS31 100KG - LINHA CONCEPT KIKOS PRO",
    "unitario": 20190.0,
    "aVista": 17565.3
  },
  {
    "sku": "i000182",
    "descricao": "REMADA CNS34 100KG - LINHA CONCEPT KIKOS PRO",
    "unitario": 22990.0,
    "aVista": 20001.3
  },
  {
    "sku": "i000146",
    "descricao": "REMADA HORIZONTAL FOC0012A - LINHA FOCUS - KIKOS",
    "unitario": 11488.5,
    "aVista": 9995.0
  },
  {
    "sku": "i001936",
    "descricao": "REVERSE LEG PRESS - LBPL70",
    "unitario": 63090.0,
    "aVista": 54888.3
  },
  {
    "sku": "i001926",
    "descricao": "ROW - PLATE - LBSL34",
    "unitario": 30990.0,
    "aVista": 26961.3
  },
  {
    "sku": "i001953",
    "descricao": "ROW TRAINING - HSR7",
    "unitario": 37399.0,
    "aVista": 32537.13
  },
  {
    "sku": "i001922",
    "descricao": "SHOULDER PRESS - LBSL23",
    "unitario": 53990.0,
    "aVista": 46971.3
  },
  {
    "sku": "i001951",
    "descricao": "SMITH MACHINE - LBPL62",
    "unitario": 44608.5,
    "aVista": 38809.39
  },
  {
    "sku": "i001942",
    "descricao": "STANDING LEG CURL - LBSL72",
    "unitario": 29399.0,
    "aVista": 25577.13
  },
  {
    "sku": "i000178",
    "descricao": "SUPINO CNS10 100KG - LINHA CONCEPT KIKOS PRO",
    "unitario": 20990.0,
    "aVista": 18261.3
  },
  {
    "sku": "i000262",
    "descricao": "SUPORTE BARRA TTFW97 - LINHA KIKOS PRO",
    "unitario": 5990.0,
    "aVista": 5211.3
  },
  {
    "sku": "i000289",
    "descricao": "ESTACAO CROSSFIT 360 EXTREME - KIKOS",
    "unitario": 109990.0,
    "aVista": 95691.3
  },
  {
    "sku": "i000184",
    "descricao": "TRICEPS CNS42 80KG - LINHA CONCEPT KIKOS PRO",
    "unitario": 22590.0,
    "aVista": 19653.3
  },
  {
    "sku": "i000192",
    "descricao": "MESA FLEXORA 100KG -LINHA CONCEPT KIKOS PRO - CNS73 NEW",
    "unitario": 31990.0,
    "aVista": 27831.3
  },
  {
    "sku": "i000199",
    "descricao": "ABDUTORA CNS75 80KG - LINHA CONCEPT KIKOS PRO",
    "unitario": 31990.0,
    "aVista": 27831.3
  },
  {
    "sku": "i000198",
    "descricao": "ADUTORA CNS74 80KG - LINHA CONCEPT KIKOS PRO",
    "unitario": 31590.0,
    "aVista": 27483.3
  },
  {
    "sku": "i000187",
    "descricao": "ABDOMINAL 100KG -LINHA CONCEPT KIKOS PRO - CNS51 NEW",
    "unitario": 27690.0,
    "aVista": 24090.3
  },
  {
    "sku": "i000409",
    "descricao": "ANILHA 1.25KG EMBORRACHADA OLIMPICA - KIKOS - IR1036/1.25",
    "unitario": 76.19,
    "aVista": 66.29
  },
  {
    "sku": "i001891",
    "descricao": "ANILHA LPO -10KG - MD1027/10",
    "unitario": 2219.0,
    "aVista": 1930.53
  },
  {
    "sku": "i001892",
    "descricao": "ANILHA LPO -15KG - MD1027/15",
    "unitario": 2899.0,
    "aVista": 2522.13
  },
  {
    "sku": "I001893",
    "descricao": "ANILHA LPO -20KG",
    "unitario": 3449.0,
    "aVista": 3000.63
  },
  {
    "sku": "i001894",
    "descricao": "ANILHA LPO -25KG - MD1027/25",
    "unitario": 4039.0,
    "aVista": 3513.93
  },
  {
    "sku": "i001844",
    "descricao": "ANILHA LPO -5KG - MD1027/5",
    "unitario": 1099.0,
    "aVista": 956.13
  },
  {
    "sku": "i000474",
    "descricao": "ANILHA PARA CROSSFIT 10KG VERDE - KIKOS",
    "unitario": 560.28,
    "aVista": 487.44
  },
  {
    "sku": "i000475",
    "descricao": "ANILHA PARA CROSSFIT 15KG AMARELO - KIKOS",
    "unitario": 760.04,
    "aVista": 661.23
  },
  {
    "sku": "i001598",
    "descricao": "ANILHA PU LIGHTNING BOLT 1.25KG - MD1039A/1.25",
    "unitario": 150.99,
    "aVista": 131.36
  },
  {
    "sku": "i001601",
    "descricao": "ANILHA PU LIGHTNING BOLT 10KG - MD1039A/10",
    "unitario": 1209.0,
    "aVista": 1051.83
  },
  {
    "sku": "I001599",
    "descricao": "ANILHA PU LIGHTNING BOLT 2.5KG",
    "unitario": 300.99,
    "aVista": 261.86
  },
  {
    "sku": "I001603",
    "descricao": "ANILHA PU LIGHTNING BOLT 20KG",
    "unitario": 2409.0,
    "aVista": 2095.83
  },
  {
    "sku": "i001604",
    "descricao": "ANILHA PU LIGHTNING BOLT 25KG - MD1039A/25",
    "unitario": 3009.0,
    "aVista": 2617.83
  },
  {
    "sku": "I001600",
    "descricao": "ANILHA PU LIGHTNING BOLT 5KG",
    "unitario": 609.0,
    "aVista": 529.83
  },
  {
    "sku": "i001591",
    "descricao": "ANILHA RUBBER LIGHTNING BOLT 1.25KG - MD1032/1.25",
    "unitario": 113.99,
    "aVista": 99.17
  },
  {
    "sku": "i001594",
    "descricao": "ANILHA RUBBER LIGHTNING BOLT 10KG MD1032/10",
    "unitario": 849.0,
    "aVista": 738.63
  },
  {
    "sku": "i001595",
    "descricao": "ANILHA RUBBER LIGHTNING BOLT 15KG - MD1032/15",
    "unitario": 1290.0,
    "aVista": 1122.3
  },
  {
    "sku": "i001592",
    "descricao": "ANILHA RUBBER LIGHTNING BOLT 2.5KG - MD1032/2.5",
    "unitario": 209.0,
    "aVista": 181.83
  },
  {
    "sku": "i001596",
    "descricao": "ANILHA RUBBER LIGHTNING BOLT 20KG - MD1032/20",
    "unitario": 1690.0,
    "aVista": 1470.3
  },
  {
    "sku": "i001597",
    "descricao": "ANILHA RUBBER LIGHTNING BOLT 25KG MD1032/25",
    "unitario": 1789.0,
    "aVista": 1556.43
  },
  {
    "sku": "i001593",
    "descricao": "ANILHA RUBBER LIGHTNING BOLT 5KG - MD1032/5",
    "unitario": 419.0,
    "aVista": 364.53
  },
  {
    "sku": "i001896",
    "descricao": "BARRA CROSSFIT FEMININA 15KG - MD4101-W",
    "unitario": 4469.0,
    "aVista": 3888.03
  },
  {
    "sku": "i001897",
    "descricao": "BARRA CROSSFIT MASCULINA 20KG - MD4101-M",
    "unitario": 4629.0,
    "aVista": 4027.23
  },
  {
    "sku": "i001575",
    "descricao": "BARRA MONTADA RETA BORRACHA - 45KG - PRETA E LOGO EM VERMELHO E BRANCO - MD3009",
    "unitario": 3429.0,
    "aVista": 2983.23
  },
  {
    "sku": "i000510",
    "descricao": "BARRA MONTADA RETA BORRACHA 55KG - KIKOS",
    "unitario": 2125.2,
    "aVista": 1848.92
  },
  {
    "sku": "i001686",
    "descricao": "BARRA MONTADA RETA PU LIGHTNING BOLT 10KG - MD3018/10",
    "unitario": 1289.0,
    "aVista": 1121.43
  },
  {
    "sku": "i001687",
    "descricao": "BARRA MONTADA RETA PU LIGHTNING BOLT 15KG - MD3018/15",
    "unitario": 1929.0,
    "aVista": 1678.23
  },
  {
    "sku": "i001688",
    "descricao": "BARRA MONTADA RETA PU LIGHTNING BOLT 20KG - MD3018/20",
    "unitario": 2579.0,
    "aVista": 2243.73
  },
  {
    "sku": "i001689",
    "descricao": "BARRA MONTADA RETA PU LIGHTNING BOLT 25KG - MD3018/25",
    "unitario": 3229.0,
    "aVista": 2809.23
  },
  {
    "sku": "i001690",
    "descricao": "BARRA MONTADA RETA PU LIGHTNING BOLT 30KG - MD3018/30",
    "unitario": 3859.0,
    "aVista": 3357.33
  },
  {
    "sku": "i001691",
    "descricao": "BARRA MONTADA RETA PU LIGHTNING BOLT 35KG - MD3018/35",
    "unitario": 4499.0,
    "aVista": 3914.13
  },
  {
    "sku": "i001692",
    "descricao": "BARRA MONTADA RETA PU LIGHTNING BOLT 40KG - MD3018/40",
    "unitario": 5149.0,
    "aVista": 4479.63
  },
  {
    "sku": "i001693",
    "descricao": "BARRA MONTADA RETA PU LIGHTNING BOLT 45KG - MD3018/45",
    "unitario": 5799.0,
    "aVista": 5045.13
  },
  {
    "sku": "i001694",
    "descricao": "BARRA MONTADA RETA PU LIGHTNING BOLT 50KG - MD3018/50",
    "unitario": 6429.0,
    "aVista": 5593.23
  },
  {
    "sku": "i001668",
    "descricao": "BARRA MONTADA RETA RUBBER LIGHTNING BOLT 10KG - MD3009/10",
    "unitario": 1029.0,
    "aVista": 895.23
  },
  {
    "sku": "i001669",
    "descricao": "BARRA MONTADA RETA RUBBER LIGHTNING BOLT 15KG - MD3009/15",
    "unitario": 1539.0,
    "aVista": 1338.93
  },
  {
    "sku": "i001670",
    "descricao": "BARRA MONTADA RETA RUBBER LIGHTNING BOLT 20KG - MD3009/20",
    "unitario": 2059.0,
    "aVista": 1791.33
  },
  {
    "sku": "i001671",
    "descricao": "BARRA MONTADA RETA RUBBER LIGHTNING BOLT 25KG - MD3009/25",
    "unitario": 2559.0,
    "aVista": 2226.33
  },
  {
    "sku": "i001672",
    "descricao": "BARRA MONTADA RETA RUBBER LIGHTNING BOLT 30KG - MD3009/30",
    "unitario": 3109.0,
    "aVista": 2704.83
  },
  {
    "sku": "i001673",
    "descricao": "BARRA MONTADA RETA RUBBER LIGHTNING BOLT 35KG - MD3009/35",
    "unitario": 3609.0,
    "aVista": 3139.83
  },
  {
    "sku": "i001674",
    "descricao": "BARRA MONTADA RETA RUBBER LIGHTNING BOLT 40KG - MD3009/40",
    "unitario": 4099.0,
    "aVista": 3566.13
  },
  {
    "sku": "i001675",
    "descricao": "BARRA MONTADA RETA RUBBER LIGHTNING BOLT 45KG - MD3009/45",
    "unitario": 4599.0,
    "aVista": 4001.13
  },
  {
    "sku": "i001676",
    "descricao": "BARRA MONTADA RETA RUBBER LIGHTNING BOLT 50KG - MD3009/50",
    "unitario": 5129.0,
    "aVista": 4462.23
  },
  {
    "sku": "i001583",
    "descricao": "BARRA MONTADA W BORRACHA - 40KG - PRETA E LOGO EM VERMELHO E BRANCO - MD3009A",
    "unitario": 4099.0,
    "aVista": 3566.13
  },
  {
    "sku": "i001585",
    "descricao": "BARRA MONTADA W BORRACHA - 50KG - PRETA E LOGO EM VERMELHO E BRANCO - MD3009A",
    "unitario": 5129.0,
    "aVista": 4462.23
  },
  {
    "sku": "i001677",
    "descricao": "BARRA MONTADA W PU LIGHTNING BOLT 10KG - MD3017/10",
    "unitario": 1299.0,
    "aVista": 1130.13
  },
  {
    "sku": "i001678",
    "descricao": "BARRA MONTADA W PU LIGHTNING BOLT 15KG - MD3017/15",
    "unitario": 1929.0,
    "aVista": 1678.23
  },
  {
    "sku": "i001679",
    "descricao": "BARRA MONTADA W PU LIGHTNING BOLT 20KG",
    "unitario": 2589.0,
    "aVista": 2252.43
  },
  {
    "sku": "i001680",
    "descricao": "BARRA MONTADA W PU LIGHTNING BOLT 25KG - MD3017/25",
    "unitario": 3219.0,
    "aVista": 2800.53
  },
  {
    "sku": "i001681",
    "descricao": "BARRA MONTADA W PU LIGHTNING BOLT 30KG - MD3017/30",
    "unitario": 3859.0,
    "aVista": 3357.33
  },
  {
    "sku": "i001682",
    "descricao": "BARRA MONTADA W PU LIGHTNING BOLT 35KG - MD3017/35",
    "unitario": 4499.0,
    "aVista": 3914.13
  },
  {
    "sku": "i001683",
    "descricao": "BARRA MONTADA W PU LIGHTNING BOLT 40KG - MD3017/40",
    "unitario": 5159.0,
    "aVista": 4488.33
  },
  {
    "sku": "i001684",
    "descricao": "BARRA MONTADA W PU LIGHTNING BOLT 45KG - MD3017/45",
    "unitario": 5799.0,
    "aVista": 5045.13
  },
  {
    "sku": "i001685",
    "descricao": "BARRA MONTADA W PU LIGHTNING BOLT 50KG - MD3017/50",
    "unitario": 6449.0,
    "aVista": 5610.63
  },
  {
    "sku": "i001659",
    "descricao": "BARRA MONTADA W RUBBER LIGHTNING BOLT 10KG - MD3009A/10",
    "unitario": 1029.0,
    "aVista": 895.23
  },
  {
    "sku": "i001660",
    "descricao": "BARRA MONTADA W RUBBER LIGHTNING BOLT 15KG - MD3009A/15",
    "unitario": 1539.0,
    "aVista": 1338.93
  },
  {
    "sku": "i001661",
    "descricao": "BARRA MONTADA W RUBBER LIGHTNING BOLT 20KG - MD3009A/20",
    "unitario": 2059.0,
    "aVista": 1791.33
  },
  {
    "sku": "i001662",
    "descricao": "BARRA MONTADA W RUBBER LIGHTNING BOLT 25KG - MD3009A/25",
    "unitario": 2559.0,
    "aVista": 2226.33
  },
  {
    "sku": "i012190",
    "descricao": "BARRA MONTADA W RUBBER KIKOS 15KG - MD3009A/15",
    "unitario": 1539.0,
    "aVista": 1338.93
  },
  {
    "sku": "i012182",
    "descricao": "BARRA MONTADA W RUBBER KIKOS 20KG - MD3009A/20",
    "unitario": 2059.0,
    "aVista": 1791.33
  },
  {
    "sku": "i012183",
    "descricao": "BARRA MONTADA W RUBBER KIKOS 25KG - MD3009A/25",
    "unitario": 2559.0,
    "aVista": 2226.33
  },
  {
    "sku": "i012184",
    "descricao": "BARRA MONTADA W RUBBER KIKOS 30KG - MD3009A/30",
    "unitario": 3109.0,
    "aVista": 2704.83
  },
  {
    "sku": "i012185",
    "descricao": "BARRA MONTADA W RUBBER KIKOS 35KG - MD3009A/35",
    "unitario": 3609.0,
    "aVista": 3139.83
  },
  {
    "sku": "i012186",
    "descricao": "BARRA MONTADA W RUBBER KIKOS 40KG - MD3009A/40",
    "unitario": 4099.0,
    "aVista": 3566.13
  },
  {
    "sku": "i012187",
    "descricao": "BARRA MONTADA W RUBBER KIKOS 45KG - MD3009A/45",
    "unitario": 4599.0,
    "aVista": 4001.13
  },
  {
    "sku": "i012188",
    "descricao": "BARRA MONTADA W RUBBER KIKOS 50KG - MD3009A/50",
    "unitario": 5129.0,
    "aVista": 4462.23
  },
  {
    "sku": "i012171",
    "descricao": "BARRA MONTADA RETA RUBBER KIKOS 10KG - MD3009/10",
    "unitario": 1029.0,
    "aVista": 895.23
  },
  {
    "sku": "i012172",
    "descricao": "BARRA MONTADA RETA RUBBER KIKOS 15KG - MD3009/15",
    "unitario": 1539.0,
    "aVista": 1338.93
  },
  {
    "sku": "i012173",
    "descricao": "BARRA MONTADA RETA RUBBER KIKOS 20KG - MD3009/20",
    "unitario": 2059.0,
    "aVista": 1791.33
  },
  {
    "sku": "i012174",
    "descricao": "BARRA MONTADA RETA RUBBER KIKOS 25KG - MD3009/25",
    "unitario": 2559.0,
    "aVista": 2226.33
  },
  {
    "sku": "i012175",
    "descricao": "BARRA MONTADA RETA RUBBER KIKOS 30KG - MD3009/30",
    "unitario": 3109.0,
    "aVista": 2704.83
  },
  {
    "sku": "i012176",
    "descricao": "BARRA MONTADA RETA RUBBER KIKOS 35KG - MD3009/35",
    "unitario": 3609.0,
    "aVista": 3139.83
  },
  {
    "sku": "i012177",
    "descricao": "BARRA MONTADA RETA RUBBER KIKOS 40KG - MD3009/40",
    "unitario": 4099.0,
    "aVista": 3566.13
  },
  {
    "sku": "i012181",
    "descricao": "BARRA MONTADA RETA RUBBER KIKOS 45KG - MD3009/45",
    "unitario": 4599.0,
    "aVista": 4001.13
  },
  {
    "sku": "i012178",
    "descricao": "BARRA MONTADA RETA RUBBER KIKOS 50KG - MD3009/50",
    "unitario": 5129.0,
    "aVista": 4462.23
  },
  {
    "sku": "i001663",
    "descricao": "BARRA MONTADA W RUBBER LIGHTNING BOLT 30KG - MD3009A/30",
    "unitario": 3109.0,
    "aVista": 2704.83
  },
  {
    "sku": "i001664",
    "descricao": "BARRA MONTADA W RUBBER LIGHTNING BOLT 35KG - MD3009A/35",
    "unitario": 3609.0,
    "aVista": 3139.83
  },
  {
    "sku": "i001665",
    "descricao": "BARRA MONTADA W RUBBER LIGHTNING BOLT 40KG - MD3009A/40",
    "unitario": 4099.0,
    "aVista": 3566.13
  },
  {
    "sku": "i001666",
    "descricao": "BARRA MONTADA W RUBBER LIGHTNING BOLT 45KG - MD3009A/45",
    "unitario": 4599.0,
    "aVista": 4001.13
  },
  {
    "sku": "i001667",
    "descricao": "BARRA MONTADA W RUBBER LIGHTNING BOLT 50KG - MD3009A/50",
    "unitario": 5129.0,
    "aVista": 4462.23
  },
  {
    "sku": "i001861",
    "descricao": "BARRA OLIMPICA 1,50M HARD CHROME LIGHTNING BOLT",
    "unitario": 1599.0,
    "aVista": 1391.13
  },
  {
    "sku": "i001699",
    "descricao": "BARRA OLIMPICA 2,20M HARD CHROME LIGHTNING BOLT",
    "unitario": 2369.0,
    "aVista": 2061.03
  },
  {
    "sku": "i001696",
    "descricao": "BARRA OLIMPICA H 0,86M HARD CHROME LIGHTNING BOLT - MD4104",
    "unitario": 1999.0,
    "aVista": 1739.13
  },
  {
    "sku": "i001698",
    "descricao": "BARRA OLIMPICA RETA 1,20M HARD CHROME LIGHTNING BOLT - MD4101-HCB47",
    "unitario": 1390.0,
    "aVista": 1209.3
  },
  {
    "sku": "i001697",
    "descricao": "BARRA OLIMPICA W 1,20M HARD CHROME LIGHTNING BOLT - MD4102-HCE47",
    "unitario": 1339.0,
    "aVista": 1164.93
  },
  {
    "sku": "i001066",
    "descricao": "DUMBELL 17.5KG EMBORRACHADO - KIKOS",
    "unitario": 1370.0,
    "aVista": 1191.9
  },
  {
    "sku": "i001626",
    "descricao": "DUMBELL PU LIGHTNING BOLT 10KG - MD2117/10",
    "unitario": 1249.0,
    "aVista": 1086.63
  },
  {
    "sku": "i001628",
    "descricao": "DUMBELL PU LIGHTNING BOLT 14KG - MD2117/14",
    "unitario": 1739.0,
    "aVista": 1512.93
  },
  {
    "sku": "I001631",
    "descricao": "DUMBELL PU LIGHTNING BOLT 20KG - MD2117/20",
    "unitario": 2489.0,
    "aVista": 2165.43
  },
  {
    "sku": "i001632",
    "descricao": "DUMBELL PU LIGHTNING BOLT 22KG - MD2117/22",
    "unitario": 2739.0,
    "aVista": 2382.93
  },
  {
    "sku": "i001635",
    "descricao": "DUMBELL PU LIGHTNING BOLT 28KG - MD 2117/28",
    "unitario": 3479.0,
    "aVista": 3026.73
  },
  {
    "sku": "i001637",
    "descricao": "DUMBELL PU LIGHTNING BOLT 32KG - MD2117/32",
    "unitario": 3989.0,
    "aVista": 3470.43
  },
  {
    "sku": "i001638",
    "descricao": "DUMBELL PU LIGHTNING BOLT 34KG - MD2117/34",
    "unitario": 4229.0,
    "aVista": 3679.23
  },
  {
    "sku": "i001642",
    "descricao": "DUMBELL PU LIGHTNING BOLT 42KG - MD2117/42",
    "unitario": 5229.0,
    "aVista": 4549.23
  },
  {
    "sku": "i001643",
    "descricao": "DUMBELL PU LIGHTNING BOLT 44KG - MD2117/44",
    "unitario": 5469.0,
    "aVista": 4758.03
  },
  {
    "sku": "i001644",
    "descricao": "DUMBELL PU LIGHTNING BOLT 46KG - MD2117/46",
    "unitario": 5719.0,
    "aVista": 4975.53
  },
  {
    "sku": "i001645",
    "descricao": "DUMBELL PU LIGHTNING BOLT 46KG - MD2117/48",
    "unitario": 5959.0,
    "aVista": 5184.33
  },
  {
    "sku": "i001646",
    "descricao": "DUMBELL PU LIGHTNING BOLT 50KG - MD2117/50",
    "unitario": 6209.0,
    "aVista": 5401.83
  },
  {
    "sku": "i001607",
    "descricao": "DUMBELL RUBBER LIGHTNING BOLT 14KG - MD2104/14",
    "unitario": 1319.0,
    "aVista": 1147.53
  },
  {
    "sku": "i001609",
    "descricao": "DUMBELL RUBBER LIGHTNING BOLT 18KG - MD2104/18",
    "unitario": 1699.0,
    "aVista": 1478.13
  },
  {
    "sku": "i001610",
    "descricao": "DUMBELL RUBBER LIGHTNING BOLT 20KG - MD2104/20",
    "unitario": 1879.0,
    "aVista": 1634.73
  },
  {
    "sku": "i001611",
    "descricao": "DUMBELL RUBBER LIGHTNING BOLT 22KG - MD2104/22",
    "unitario": 2069.0,
    "aVista": 1800.03
  },
  {
    "sku": "i001614",
    "descricao": "DUMBELL RUBBER LIGHTNING BOLT 28KG - MD2104/28",
    "unitario": 2629.0,
    "aVista": 2287.23
  },
  {
    "sku": "i001615",
    "descricao": "DUMBELL RUBBER LIGHTNING BOLT 30KG - MD2104/30",
    "unitario": 2819.0,
    "aVista": 2452.53
  },
  {
    "sku": "i001616",
    "descricao": "DUMBELL RUBBER LIGHTNING BOLT 32KG - MD2104/32",
    "unitario": 3009.0,
    "aVista": 2617.83
  },
  {
    "sku": "i001617",
    "descricao": "DUMBELL RUBBER LIGHTNING BOLT 34KG - MD2104/34",
    "unitario": 3199.0,
    "aVista": 2783.13
  },
  {
    "sku": "i001618",
    "descricao": "DUMBELL RUBBER LIGHTNING BOLT 36KG - MD2104/36",
    "unitario": 3389.0,
    "aVista": 2948.43
  },
  {
    "sku": "i001619",
    "descricao": "DUMBELL RUBBER LIGHTNING BOLT 38KG - MD 2104/38",
    "unitario": 3589.0,
    "aVista": 3122.43
  },
  {
    "sku": "i001620",
    "descricao": "DUMBELL RUBBER LIGHTNING BOLT 40KG - MD 2104/40",
    "unitario": 3759.0,
    "aVista": 3270.33
  },
  {
    "sku": "i001621",
    "descricao": "DUMBELL RUBBER LIGHTNING BOLT 42KG - MD2104/42",
    "unitario": 3949.0,
    "aVista": 3435.63
  },
  {
    "sku": "i001622",
    "descricao": "DUMBELL RUBBER LIGHTNING BOLT 44KG - MD2104/44",
    "unitario": 4129.0,
    "aVista": 3592.23
  },
  {
    "sku": "i001623",
    "descricao": "DUMBELL RUBBER LIGHTNING BOLT 46KG - MD2104/46",
    "unitario": 4319.0,
    "aVista": 3757.53
  },
  {
    "sku": "i001624",
    "descricao": "DUMBELL RUBBER LIGHTNING BOLT 48KG - MD2104/48",
    "unitario": 4519.0,
    "aVista": 3931.53
  },
  {
    "sku": "i001625",
    "descricao": "DUMBELL RUBBER LIGHTNING BOLT 50KG - MD2104/50",
    "unitario": 4699.0,
    "aVista": 4088.13
  },
  {
    "sku": "i001758",
    "descricao": "HALTER PU LIGHTNING BOLT 10KG - MD2119/10",
    "unitario": 989.0,
    "aVista": 860.43
  },
  {
    "sku": "i001749",
    "descricao": "HALTER PU LIGHTNING BOLT 1KG - MD2119/1",
    "unitario": 199.0,
    "aVista": 173.13
  },
  {
    "sku": "i001750",
    "descricao": "HALTER PU LIGHTNING BOLT 2KG - MD2119/2",
    "unitario": 301.99,
    "aVista": 262.73
  },
  {
    "sku": "i001751",
    "descricao": "HALTER PU LIGHTNING BOLT 3KG - MD2119/3",
    "unitario": 399.0,
    "aVista": 347.13
  },
  {
    "sku": "i001752",
    "descricao": "HALTER PU LIGHTNING BOLT 4KG - MD2119/4",
    "unitario": 459.0,
    "aVista": 399.33
  },
  {
    "sku": "i001753",
    "descricao": "HALTER PU LIGHTNING BOLT 5KG - MD2119/5",
    "unitario": 549.0,
    "aVista": 477.63
  },
  {
    "sku": "i001754",
    "descricao": "HALTER PU LIGHTNING BOLT 6KG - MD2119/6",
    "unitario": 659.0,
    "aVista": 573.33
  },
  {
    "sku": "i001755",
    "descricao": "HALTER PU LIGHTNING BOLT 7KG - MD2119/7",
    "unitario": 749.0,
    "aVista": 651.63
  },
  {
    "sku": "i001756",
    "descricao": "HALTER PU LIGHTNING BOLT 8KG - MD2119/8",
    "unitario": 629.0,
    "aVista": 547.23
  },
  {
    "sku": "i001757",
    "descricao": "HALTER PU LIGHTNING BOLT 9KG - MD2119/9",
    "unitario": 899.0,
    "aVista": 782.13
  },
  {
    "sku": "i001748",
    "descricao": "HALTER SEXTAVADO RUBBER LIGHTNING BOLT 10KG - MD2102/10",
    "unitario": 919.0,
    "aVista": 799.53
  },
  {
    "sku": "i001739",
    "descricao": "HALTER SEXTAVADO RUBBER LIGHTNING BOLT 1KG-MD2102/1",
    "unitario": 99.0,
    "aVista": 86.13
  },
  {
    "sku": "i001740",
    "descricao": "HALTER SEXTAVADO RUBBER LIGHTNING BOLT 2KG - MD2102/2",
    "unitario": 189.0,
    "aVista": 164.43
  },
  {
    "sku": "i001741",
    "descricao": "HALTER SEXTAVADO RUBBER LIGHTNING BOLT 3KG - MD2102/3",
    "unitario": 279.0,
    "aVista": 242.73
  },
  {
    "sku": "i001742",
    "descricao": "HALTER SEXTAVADO RUBBER LIGHTNING BOLT 4KG - MD2102/4",
    "unitario": 369.0,
    "aVista": 321.03
  },
  {
    "sku": "i012192",
    "descricao": "ANILHA RUBBER KIKOS 1.25KG - MD1032/1.25",
    "unitario": 113.99,
    "aVista": 99.17
  },
  {
    "sku": "i012158",
    "descricao": "ANILHA RUBBER KIKOS 2.5KG -MD1032/2.5",
    "unitario": 209.0,
    "aVista": 181.83
  },
  {
    "sku": "i000410",
    "descricao": "ANILHA 2.5KG EMBORRACHADA OLIMPICA - KIKOS - IR1036/2.5",
    "unitario": 150.9,
    "aVista": 131.28
  },
  {
    "sku": "i012154",
    "descricao": "ANILHA RUBBER KIKOS  5KG - MD1032/5",
    "unitario": 419.0,
    "aVista": 364.53
  },
  {
    "sku": "i000411",
    "descricao": "ANILHA 5KG EMBORRACHADA OLIMPICA - KIKOS - IR1036/5",
    "unitario": 304.9,
    "aVista": 265.26
  },
  {
    "sku": "i000412",
    "descricao": "ANILHA 7.5KG EMBORRACHADA OLIMPICA - KIKOS - IR1036/7.5",
    "unitario": 639.0,
    "aVista": 555.93
  },
  {
    "sku": "i012155",
    "descricao": "ANILHA RUBBER KIKOS  10KG - MD1032/10",
    "unitario": 849.0,
    "aVista": 738.63
  },
  {
    "sku": "i000413",
    "descricao": "ANILHA 10KG EMBORRACHADA OLIMPICA - KIKOS - IR1036/10",
    "unitario": 604.9,
    "aVista": 526.26
  },
  {
    "sku": "i012156",
    "descricao": "ANILHA RUBBER KIKOS  15KG - MD1032/15",
    "unitario": 1290.0,
    "aVista": 1122.3
  },
  {
    "sku": "i000414",
    "descricao": "ANILHA 15KG EMBORRACHADA OLIMPICA - KIKOS - IR1036/15",
    "unitario": 909.0,
    "aVista": 790.83
  },
  {
    "sku": "i012157",
    "descricao": "ANILHA RUBBER KIKOS 20KG - MD1032/20",
    "unitario": 1690.0,
    "aVista": 1470.3
  },
  {
    "sku": "i000415",
    "descricao": "ANILHA 20KG EMBORRACHADA OLIMPICA - KIKOS - IR1036/20",
    "unitario": 1209.0,
    "aVista": 1051.83
  },
  {
    "sku": "i001743",
    "descricao": "HALTER SEXTAVADO RUBBER LIGHTNING BOLT 5KG - MD2102/5",
    "unitario": 469.0,
    "aVista": 408.03
  },
  {
    "sku": "i001744",
    "descricao": "HALTER SEXTAVADO RUBBER LIGHTNING BOLT 6KG - MD2102/6",
    "unitario": 549.0,
    "aVista": 477.63
  },
  {
    "sku": "i001745",
    "descricao": "HALTER SEXTAVADO RUBBER LIGHTNING BOLT 7KG - MD2102/7",
    "unitario": 649.0,
    "aVista": 564.63
  },
  {
    "sku": "i001746",
    "descricao": "HALTER SEXTAVADO RUBBER LIGHTNING BOLT 8KG - MD2102/8",
    "unitario": 749.0,
    "aVista": 651.63
  },
  {
    "sku": "i001747",
    "descricao": "HALTER SEXTAVADO RUBBER LIGHTNING BOLT 9KG -MD2102/9",
    "unitario": 839.0,
    "aVista": 729.93
  },
  {
    "sku": "i000487",
    "descricao": "KETTLEBELL NICKEL 14KG - KIKOS PRO",
    "unitario": 552.0,
    "aVista": 480.24
  },
  {
    "sku": "I000488",
    "descricao": "KETTLEBELL NICKEL 16KG - KIKOS PRO",
    "unitario": 631.35,
    "aVista": 549.27
  },
  {
    "sku": "i000482",
    "descricao": "KETTLEBELL NICKEL 4KG - KIKOS PRO",
    "unitario": 158.59,
    "aVista": 137.97
  },
  {
    "sku": "i000483",
    "descricao": "KETTLEBELL NICKEL 6KG - KIKOS PRO",
    "unitario": 236.79,
    "aVista": 206.01
  },
  {
    "sku": "i001652",
    "descricao": "KETTLEBELL RUBBER LIGHTNING BOLT 12KG - MD2214/12",
    "unitario": 1279.0,
    "aVista": 1112.73
  },
  {
    "sku": "i001653",
    "descricao": "KETTLEBELL RUBBER LIGHTNING BOLT 14KG",
    "unitario": 1499.0,
    "aVista": 1304.13
  },
  {
    "sku": "I001654",
    "descricao": "KETTLEBELL RUBBER LIGHTNING BOLT 16KG",
    "unitario": 1709.0,
    "aVista": 1486.83
  },
  {
    "sku": "i001655",
    "descricao": "KETTLEBELL RUBBER LIGHTNING BOLT 18KG - MD2214/18",
    "unitario": 1919.0,
    "aVista": 1669.53
  },
  {
    "sku": "i001656",
    "descricao": "KETTLEBELL RUBBER LIGHTNING BOLT 20KG - MD2214/20",
    "unitario": 2139.0,
    "aVista": 1860.93
  },
  {
    "sku": "i001657",
    "descricao": "KETTLEBELL RUBBER LIGHTNING BOLT 22KG - MD2214/22",
    "unitario": 2349.0,
    "aVista": 2043.63
  },
  {
    "sku": "i001658",
    "descricao": "KETTLEBELL RUBBER LIGHTNING BOLT 24KG - MD2214/24",
    "unitario": 2569.0,
    "aVista": 2235.03
  },
  {
    "sku": "i001647",
    "descricao": "KETTLEBELL RUBBER LIGHTNING BOLT 2KG - MD2214/2",
    "unitario": 212.99,
    "aVista": 185.3
  },
  {
    "sku": "i001649",
    "descricao": "KETTLEBELL RUBBER LIGHTNING BOLT 6KG-MD2214/6",
    "unitario": 599.0,
    "aVista": 521.13
  },
  {
    "sku": "I000520",
    "descricao": "KIT BARRA MONTADA W BORRACHA 55KG - KIKOS",
    "unitario": 2125.2,
    "aVista": 1848.92
  },
  {
    "sku": "I000522",
    "descricao": "LANDMINE BASE - KIKOS",
    "unitario": 1148.85,
    "aVista": 999.5
  },
  {
    "sku": "i000523",
    "descricao": "LANDMINE PEGADOR - KIKOS",
    "unitario": 343.85,
    "aVista": 299.15
  },
  {
    "sku": "i000209",
    "descricao": "LOMBAR IFS52 130KG - LINHA INFINITY KIKOS PRO",
    "unitario": 28690.0,
    "aVista": 24960.3
  },
  {
    "sku": "I000497",
    "descricao": "MEDICINE BALL 7KG PRETO E VERMELHO - KIKOS",
    "unitario": 373.64,
    "aVista": 325.07
  },
  {
    "sku": "I001723",
    "descricao": "MEDICINE BALL LIGHTNING BOLT 3KG",
    "unitario": 479.0,
    "aVista": 416.73
  },
  {
    "sku": "I000179",
    "descricao": "PEITORAL CNS12 80KG - LINHA CONCEPT KIKOS PRO",
    "unitario": 24490.0,
    "aVista": 21306.3
  },
  {
    "sku": "I000202",
    "descricao": "PEITORAL DORSAL IFS22 130KG - LINHA INFINITY KIKOS PRO",
    "unitario": 28623.5,
    "aVista": 24902.44
  },
  {
    "sku": "I000164",
    "descricao": "PUXADOR ALTO KT0012 - LINHA EXTREME - KIKOS",
    "unitario": 13788.5,
    "aVista": 11996.0
  },
  {
    "sku": "I000526",
    "descricao": "RACK DE MEDICINE BALL - KIKOS - 2CX",
    "unitario": 885.39,
    "aVista": 770.29
  },
  {
    "sku": "i000418",
    "descricao": "DUMBELL 12KG EMBORRACHADO - KIKOS - IR92023/12",
    "unitario": 879.0,
    "aVista": 764.73
  },
  {
    "sku": "i000420",
    "descricao": "DUMBELL 16KG EMBORRACHADO - KIKOS - IR92023/16",
    "unitario": 1169.0,
    "aVista": 1017.03
  },
  {
    "sku": "i000421",
    "descricao": "DUMBELL 18KG EMBORRACHADO - KIKOS - IR92023/18",
    "unitario": 1309.0,
    "aVista": 1138.83
  },
  {
    "sku": "i000422",
    "descricao": "DUMBELL 20KG EMBORRACHADO - KIKOS - IR92023/20",
    "unitario": 1459.0,
    "aVista": 1269.33
  },
  {
    "sku": "i000427",
    "descricao": "DUMBELL 30KG EMBORRACHADO - KIKOS - IR92023/30",
    "unitario": 2189.0,
    "aVista": 1904.43
  },
  {
    "sku": "i000430",
    "descricao": "DUMBELL 36KG EMBORRACHADO - KIKOS - IR92023/36",
    "unitario": 2619.0,
    "aVista": 2278.53
  },
  {
    "sku": "i012466",
    "descricao": "SUPORTE PARA BARRAS MONTADAS - KIKOS",
    "unitario": 3490.0,
    "aVista": 3036.3
  },
  {
    "sku": "I001717",
    "descricao": "SUPORTE PARA BARRAS MONTADAS OBILONGO LIGHTNING BOLT",
    "unitario": 9359.0,
    "aVista": 8142.33
  },
  {
    "sku": "i000417",
    "descricao": "DUMBELL 10KG EMBORRACHADO - KIKOS - IR92023/10",
    "unitario": 729.0,
    "aVista": 634.23
  },
  {
    "sku": "i012456",
    "descricao": "DUMBELL RUBBER KIKOS 10KG - MD2104/10",
    "unitario": 919.0,
    "aVista": 799.53
  },
  {
    "sku": "i012457",
    "descricao": "DUMBELL RUBBER KIKOS 12KG - MD2104/12",
    "unitario": 1129.0,
    "aVista": 982.23
  },
  {
    "sku": "i000419",
    "descricao": "DUMBELL 14KG EMBORRACHADO - KIKOS - IR92023/14",
    "unitario": 1019.0,
    "aVista": 886.53
  },
  {
    "sku": "i012159",
    "descricao": "DUMBELL RUBBER KIKOS 14KG - MD2104/14",
    "unitario": 1319.0,
    "aVista": 1147.53
  },
  {
    "sku": "i012160",
    "descricao": "DUMBELL RUBBER KIKOS 16KG - MD2104/16",
    "unitario": 1509.0,
    "aVista": 1312.83
  },
  {
    "sku": "i012161",
    "descricao": "DUMBELL RUBBER  KIKOS 18KG - MD2104/18",
    "unitario": 1699.0,
    "aVista": 1478.13
  },
  {
    "sku": "i012162",
    "descricao": "DUMBELL RUBBER KIKOS 20KG - MD2104/20",
    "unitario": 1879.0,
    "aVista": 1634.73
  },
  {
    "sku": "i000423",
    "descricao": "DUMBELL 22KG EMBORRACHADO - KIKOS - IR92023/22",
    "unitario": 1599.0,
    "aVista": 1391.13
  },
  {
    "sku": "i012163",
    "descricao": "DUMBELL RUBBER KIKOS 22KG - MD2104/22",
    "unitario": 2069.0,
    "aVista": 1800.03
  },
  {
    "sku": "i000424",
    "descricao": "DUMBELL 24KG EMBORRACHADO - KIKOS - IR92023/24",
    "unitario": 1749.0,
    "aVista": 1521.63
  },
  {
    "sku": "i012164",
    "descricao": "DUMBELL RUBBER KIKOS 24KG - MD 2104/24",
    "unitario": 2259.0,
    "aVista": 1965.33
  },
  {
    "sku": "i000425",
    "descricao": "DUMBELL 26KG EMBORRACHADO - KIKOS - IR92023/26",
    "unitario": 1899.0,
    "aVista": 1652.13
  },
  {
    "sku": "i012165",
    "descricao": "DUMBELL RUBBER KIKOS 26KG - MD2104/26",
    "unitario": 2439.0,
    "aVista": 2121.93
  },
  {
    "sku": "i000426",
    "descricao": "DUMBELL 28KG EMBORRACHADO - KIKOS - IR92023/28",
    "unitario": 2039.0,
    "aVista": 1773.93
  },
  {
    "sku": "i012166",
    "descricao": "DUMBELL RUBBER KIKOS 28KG - MD2104/28",
    "unitario": 2629.0,
    "aVista": 2287.23
  },
  {
    "sku": "i012167",
    "descricao": "DUMBELL RUBBER KIKOS 30KG - MD2104/30",
    "unitario": 2819.0,
    "aVista": 2452.53
  },
  {
    "sku": "i000428",
    "descricao": "DUMBELL 32KG EMBORRACHADO - KIKOS - IR92023/32",
    "unitario": 2329.0,
    "aVista": 2026.23
  },
  {
    "sku": "i012458",
    "descricao": "DUMBELL RUBBER KIKOS 32KG - MD2104/32",
    "unitario": 3009.0,
    "aVista": 2617.83
  },
  {
    "sku": "i000429",
    "descricao": "DUMBELL 34KG EMBORRACHADO - KIKOS - IR92023/34",
    "unitario": 2479.0,
    "aVista": 2156.73
  },
  {
    "sku": "i012168",
    "descricao": "DUMBELL RUBBER KIKOS 34KG - MD2104/34",
    "unitario": 3199.0,
    "aVista": 2783.13
  },
  {
    "sku": "i012169",
    "descricao": "DUMBELL RUBBER KIKOS 36KG - MD2104/36",
    "unitario": 3389.0,
    "aVista": 2948.43
  },
  {
    "sku": "i000431",
    "descricao": "DUMBELL 38KG EMBORRACHADO - KIKOS - IR92023/38",
    "unitario": 2769.0,
    "aVista": 2409.03
  },
  {
    "sku": "i012459",
    "descricao": "DUMBELL RUBBER KIKOS 38KG - MD2104/38",
    "unitario": 3589.0,
    "aVista": 3122.43
  },
  {
    "sku": "i000432",
    "descricao": "DUMBELL 40KG EMBORRACHADO - KIKOS - IR92023/40",
    "unitario": 2909.0,
    "aVista": 2530.83
  },
  {
    "sku": "i012170",
    "descricao": "DUMBELL RUBBER KIKOS 40KG - MD2104/40",
    "unitario": 3759.0,
    "aVista": 3270.33
  },
  {
    "sku": "i000433",
    "descricao": "DUMBELL 42KG EMBORRACHADO - KIKOS - IR92023/42",
    "unitario": 3059.0,
    "aVista": 2661.33
  },
  {
    "sku": "i012460",
    "descricao": "DUMBELL RUBBER KIKOS 42KG - MD2104/42",
    "unitario": 3949.0,
    "aVista": 3435.63
  },
  {
    "sku": "i000434",
    "descricao": "DUMBELL 44KG EMBORRACHADO - KIKOS - IR92023/44",
    "unitario": 3199.0,
    "aVista": 2783.13
  },
  {
    "sku": "i012461",
    "descricao": "DUMBELL RUBBER KIKOS 44KG - MD2104/44",
    "unitario": 4129.0,
    "aVista": 3592.23
  },
  {
    "sku": "i000435",
    "descricao": "DUMBELL 46KG EMBORRACHADO - KIKOS - IR92023/46",
    "unitario": 3349.0,
    "aVista": 2913.63
  },
  {
    "sku": "i012462",
    "descricao": "DUMBELL RUBBER KIKOS 46KG - MD2104/46",
    "unitario": 4319.0,
    "aVista": 3757.53
  },
  {
    "sku": "i000436",
    "descricao": "DUMBELL 48KG EMBORRACHADO - KIKOS - IR92023/48",
    "unitario": 3489.0,
    "aVista": 3035.43
  },
  {
    "sku": "i012463",
    "descricao": "DUMBELL RUBBER KIKOS 48KG - MD2104/48",
    "unitario": 4519.0,
    "aVista": 3931.53
  },
  {
    "sku": "i000437",
    "descricao": "DUMBELL 50KG EMBORRACHADO - KIKOS - IR92023/50",
    "unitario": 3639.0,
    "aVista": 3165.93
  },
  {
    "sku": "i012464",
    "descricao": "DUMBELL RUBBER KIKOS 50KG - MD2104/50",
    "unitario": 4699.0,
    "aVista": 4088.13
  },
  {
    "sku": "i000416",
    "descricao": "ANILHA 25KG EMBORRACHADA OLIMPICA - KIKOS - IR1036/25",
    "unitario": 1509.0,
    "aVista": 1312.83
  },
  {
    "sku": "i001648",
    "descricao": "KETTLEBELL RUBBER LIGHTNING BOLT 4KG - MD2214/4",
    "unitario": 429.0,
    "aVista": 373.23
  },
  {
    "sku": "i001650",
    "descricao": "KETTLEBELL RUBBER LIGHTNING BOLT 8KG - MD2214/8",
    "unitario": 859.0,
    "aVista": 747.33
  },
  {
    "sku": "i001651",
    "descricao": "KETTLEBELL RUBBER LIGHTNING BOLT 10KG - MD2214/10",
    "unitario": 1069.0,
    "aVista": 930.03
  },
  {
    "sku": "i012189",
    "descricao": "BARRA MONTADA W RUBBER KIKOS 10KG - MD3009A/10",
    "unitario": 1029.0,
    "aVista": 895.23
  },
  {
    "sku": "i013322",
    "descricao": "PUXADOR TRICEPS PRESS 35CMx22CMx14CM MD5128 - KIKOS",
    "unitario": 569.0,
    "aVista": 495.03
  },
  {
    "sku": "i013323",
    "descricao": "PUXADOR TRICEPS PRESS 34CMx19CMx16CM MD5129 - KIKOS",
    "unitario": 599.0,
    "aVista": 521.13
  },
  {
    "sku": "i013324",
    "descricao": "PUXADOR TRICEPS PRESS 60CMx21CMx16CM MD5135 - KIKOS",
    "unitario": 799.0,
    "aVista": 695.13
  },
  {
    "sku": "i015070",
    "descricao": "PUXADOR TRICEPS PRESS 80CM - MD5135i - KIKOS",
    "unitario": 799.0,
    "aVista": 695.13
  },
  {
    "sku": "i000291",
    "descricao": "ACADEMIA DE PORTA LIGHT - KIKOS",
    "unitario": 76.94,
    "aVista": 66.94
  },
  {
    "sku": "i000481",
    "descricao": "APOIO PARA FLEXAO GIRATORIO - KIKOS- AK1434",
    "unitario": 94.19,
    "aVista": 81.95
  },
  {
    "sku": "i000294",
    "descricao": "ARGOLA DE SUSPENSAO - KIKOS",
    "unitario": 205.85,
    "aVista": 179.09
  },
  {
    "sku": "i000392",
    "descricao": "BALANCA PEGASUS KIKOS",
    "unitario": 289.0,
    "aVista": 251.43
  },
  {
    "sku": "i000393",
    "descricao": "BALANCA TAURUS KIKOS",
    "unitario": 517.39,
    "aVista": 450.13
  },
  {
    "sku": "i000295",
    "descricao": "BARRA COM ELASTICO - KIKOS",
    "unitario": 91.89,
    "aVista": 79.94
  },
  {
    "sku": "i001864",
    "descricao": "BARRA DE RESISTENCIA - MD1346",
    "unitario": 669.0,
    "aVista": 582.03
  },
  {
    "sku": "i000299",
    "descricao": "BOLSA MULTIFUNCIONAL 10KG - KIKOS",
    "unitario": 228.85,
    "aVista": 199.1
  },
  {
    "sku": "i000300",
    "descricao": "BOLSA MULTIFUNCIONAL 20KG - KIKOS",
    "unitario": 251.85,
    "aVista": 219.11
  },
  {
    "sku": "i000579",
    "descricao": "BOLSA URBAN ROVER 10.0 - KIKOS",
    "unitario": 229.89,
    "aVista": 200.0
  },
  {
    "sku": "i001820",
    "descricao": "CAIXA PARA SALTO DE CROSSFIT GRANDE",
    "unitario": 799.48,
    "aVista": 695.55
  },
  {
    "sku": "i001821",
    "descricao": "CAIXA PARA SALTO DE CROSSFIT MÉDIA",
    "unitario": 893.09,
    "aVista": 776.99
  },
  {
    "sku": "i001718",
    "descricao": "CAIXOTE PLIOMÉTRICO LIGHTNING BOLT",
    "unitario": 3729.0,
    "aVista": 3244.23
  },
  {
    "sku": "i000376",
    "descricao": "CICLO COMPUTADOR CCB200 COM 15 FUNCOES - KIKOS",
    "unitario": 52.79,
    "aVista": 45.93
  },
  {
    "sku": "i000377",
    "descricao": "CICLO COMPUTADOR CCB400 COM 16 FUNCOES SEM FIO - KIKOS",
    "unitario": 75.79,
    "aVista": 65.94
  },
  {
    "sku": "i002067",
    "descricao": "COLARES DE MOLA PARA BARRAS OLIMPICAS",
    "unitario": 213.9,
    "aVista": 186.09
  },
  {
    "sku": "i000478",
    "descricao": "COLCHONETE DOBRAVEL - KIKOS",
    "unitario": 225.29,
    "aVista": 196.0
  },
  {
    "sku": "i001832",
    "descricao": "COLCHONETE EMBORRACHADO LIGHTNING BOLT",
    "unitario": 258.9,
    "aVista": 225.24
  },
  {
    "sku": "i001866",
    "descricao": "COMEIA DE AGILIDADE - MD1375",
    "unitario": 311.99,
    "aVista": 271.43
  },
  {
    "sku": "i000470",
    "descricao": "CORDA DE PULAR COM PESO PRETA - KIKOS",
    "unitario": 73.93,
    "aVista": 64.32
  },
  {
    "sku": "i000480",
    "descricao": "CORDA DE PULAR CROSSFIT SPEED CF3 - KIKOS- AK0029",
    "unitario": 40.01,
    "aVista": 34.81
  },
  {
    "sku": "i000305",
    "descricao": "CORDA DE TREINO DE FORCA 10M - KIKOS",
    "unitario": 458.85,
    "aVista": 399.2
  },
  {
    "sku": "i000306",
    "descricao": "CORDA DE TREINO DE FORCA 15M - KIKOS",
    "unitario": 635.95,
    "aVista": 553.28
  },
  {
    "sku": "i001862",
    "descricao": "CORDA SPEED",
    "unitario": 139.0,
    "aVista": 120.93
  },
  {
    "sku": "i000370",
    "descricao": "CRONOMETRO 100 VOLTAS - KIKOS",
    "unitario": 53.94,
    "aVista": 46.93
  },
  {
    "sku": "i000368",
    "descricao": "CRONOMETRO 20 VOLTAS - KIKOS",
    "unitario": 35.54,
    "aVista": 30.92
  },
  {
    "sku": "i000369",
    "descricao": "CRONOMETRO 60 VOLTAS - KIKOS",
    "unitario": 57.39,
    "aVista": 49.93
  },
  {
    "sku": "i000309",
    "descricao": "ELASTICO EXTENSOR - 5 ELASTICOS - KIKOS",
    "unitario": 91.89,
    "aVista": 79.94
  },
  {
    "sku": "i000310",
    "descricao": "ELASTICO PRO LATERAL RESISTOR - KIKOS",
    "unitario": 125.35,
    "aVista": 109.05
  },
  {
    "sku": "i001867",
    "descricao": "FAIXA ELASTICA  ,208*0.65*0.45CM",
    "unitario": 29.0,
    "aVista": 25.23
  },
  {
    "sku": "i001876",
    "descricao": "FAIXA ELASTICA ,208*10.1*0.45CM",
    "unitario": 459.0,
    "aVista": 399.33
  },
  {
    "sku": "i001870",
    "descricao": "FAIXA ELASTICA ,208*2.2*0.45cm",
    "unitario": 99.0,
    "aVista": 86.13
  },
  {
    "sku": "i001871",
    "descricao": "FAIXA ELASTICA ,208*2.9*0.45CM",
    "unitario": 139.0,
    "aVista": 120.93
  },
  {
    "sku": "i001872",
    "descricao": "FAIXA ELASTICA ,208*3.2*0.45CM",
    "unitario": 149.0,
    "aVista": 129.63
  },
  {
    "sku": "i001873",
    "descricao": "FAIXA ELASTICA ,208*4.4*0.45CM",
    "unitario": 199.0,
    "aVista": 173.13
  },
  {
    "sku": "i001874",
    "descricao": "FAIXA ELASTICA ,208*6.4*0.45CM",
    "unitario": 289.0,
    "aVista": 251.43
  },
  {
    "sku": "i001875",
    "descricao": "FAIXA ELASTICA ,208*8.3*0.45CM",
    "unitario": 379.0,
    "aVista": 329.73
  },
  {
    "sku": "i001868",
    "descricao": "FAIXA ELASTICA ,2080*1.30*0.45 CM",
    "unitario": 59.0,
    "aVista": 51.33
  },
  {
    "sku": "i001878",
    "descricao": "FAIXA ELASTICA DUPLA 2080*1.30*0.45 CM - RED, 116G - MD1384/116",
    "unitario": 59.0,
    "aVista": 51.33
  },
  {
    "sku": "i001879",
    "descricao": "FAIXA ELASTICA DUPLA 2080*1.90*0.45 CM - BLUE, 191 - MD1384/191A",
    "unitario": 89.0,
    "aVista": 77.43
  },
  {
    "sku": "i001886",
    "descricao": "FAIXA ELASTICA DUPLA 2080*10.1*0.45 CM - GREY, 917",
    "unitario": 459.0,
    "aVista": 399.33
  },
  {
    "sku": "i001880",
    "descricao": "FAIXA ELASTICA DUPLA 2080*2.20*0.45 CM - BLACK, 191",
    "unitario": 99.0,
    "aVista": 86.13
  },
  {
    "sku": "i001881",
    "descricao": "FAIXA ELASTICA DUPLA 2080*2.90*0.45 CM - PURPLE, 26 - MD1384/264",
    "unitario": 139.0,
    "aVista": 120.93
  },
  {
    "sku": "i001882",
    "descricao": "FAIXA ELASTICA DUPLA 2080*3.20*0.45 CM - RED, 291 G - MD1384/291",
    "unitario": 149.0,
    "aVista": 129.63
  },
  {
    "sku": "i001883",
    "descricao": "FAIXA ELASTICA DUPLA 2080*4.40*0.45 CM - GREEN, 400",
    "unitario": 199.0,
    "aVista": 173.13
  },
  {
    "sku": "i001884",
    "descricao": "FAIXA ELASTICA DUPLA 2080*6.40*0.45 CM - BLUE, 581",
    "unitario": 289.0,
    "aVista": 251.43
  },
  {
    "sku": "i001885",
    "descricao": "FAIXA ELASTICA DUPLA 2080*8.30*0.45 CM - ORANGE,754",
    "unitario": 379.0,
    "aVista": 329.73
  },
  {
    "sku": "i001877",
    "descricao": "FAIXA ELASTICA DUPLA, 2080*0.65*0.45 CM - YELLOW, 5",
    "unitario": 29.0,
    "aVista": 25.23
  },
  {
    "sku": "i000318",
    "descricao": "FAIXA ELASTICA FORTE COM PEGADORES - KIKOS",
    "unitario": 53.94,
    "aVista": 46.93
  },
  {
    "sku": "i000316",
    "descricao": "FAIXA ELASTICA LEVE COM PEGADORES - KIKOS",
    "unitario": 50.49,
    "aVista": 43.93
  },
  {
    "sku": "i000317",
    "descricao": "FAIXA ELASTICA MEDIA COM PEGADORES - KIKOS",
    "unitario": 51.64,
    "aVista": 44.93
  },
  {
    "sku": "i001869",
    "descricao": "FAIXA ELASTICA, 208*1.9*0.45CM",
    "unitario": 89.0,
    "aVista": 77.43
  },
  {
    "sku": "i001865",
    "descricao": "FITA DE SUSPENÇÃO - BOLT - MD1372",
    "unitario": 559.0,
    "aVista": 486.33
  },
  {
    "sku": "i000312",
    "descricao": "FITA DE SUSPENSAO LIGHT - KIKOS",
    "unitario": 183.89,
    "aVista": 159.98
  },
  {
    "sku": "i001584",
    "descricao": "KIT BARRA MONTADA W BORRACHA - 45KG - PRETA E LOGO EM VERMELHO E BRANCO - MD3009A",
    "unitario": 3429.0,
    "aVista": 2983.23
  },
  {
    "sku": "i000320",
    "descricao": "KIT MINI CONES TIPO \"\"CHAPEU CHINES\"\" COM 30 PEÇAS - KIKOS\"",
    "unitario": 118.34,
    "aVista": 102.96
  },
  {
    "sku": "i000323",
    "descricao": "KIT TREINAMENTO - KIKOS - CORDA/RODA ABD/SQUEEZE/TOALHA",
    "unitario": 99.94,
    "aVista": 86.95
  },
  {
    "sku": "i000325",
    "descricao": "LUVA DE MUSCULACAO - KIKOS",
    "unitario": 60.84,
    "aVista": 52.93
  },
  {
    "sku": "i000462",
    "descricao": "MASSAGEADOR ANTI-CELULITE KM70 - KIKOS",
    "unitario": 226.44,
    "aVista": 197.0
  },
  {
    "sku": "i000460",
    "descricao": "MASSAGEADOR PORTATIL KM30 - KIKOS",
    "unitario": 182.74,
    "aVista": 158.98
  },
  {
    "sku": "i000461",
    "descricao": "MASSAGEADOR PORTATIL KM50 - KIKOS",
    "unitario": 209.19,
    "aVista": 182.0
  },
  {
    "sku": "i000500",
    "descricao": "MEDICINE BALL 10KG PRETO E AZUL ESCURO - KIKOS- AK1212/10",
    "unitario": 643.89,
    "aVista": 560.18
  },
  {
    "sku": "i000499",
    "descricao": "MEDICINE BALL 9KG PRETO E CINZA CLARO - KIKOS - AK1212/9",
    "unitario": 497.84,
    "aVista": 433.12
  },
  {
    "sku": "i001738",
    "descricao": "MEDICINE BALL COM PEGADA LIGHTNING BOLT 10KG",
    "unitario": 1509.0,
    "aVista": 1312.83
  },
  {
    "sku": "i001731",
    "descricao": "MEDICINE BALL COM PEGADA LIGHTNING BOLT 3KG - MD1213/3",
    "unitario": 729.0,
    "aVista": 634.23
  },
  {
    "sku": "i001732",
    "descricao": "MEDICINE BALL COM PEGADA LIGHTNING BOLT 4KG - MD1213/4",
    "unitario": 819.0,
    "aVista": 712.53
  },
  {
    "sku": "i001733",
    "descricao": "MEDICINE BALL COM PEGADA LIGHTNING BOLT 5KG - MD1213/5",
    "unitario": 959.0,
    "aVista": 834.33
  },
  {
    "sku": "i001734",
    "descricao": "MEDICINE BALL COM PEGADA LIGHTNING BOLT 6KG - MD1213/6",
    "unitario": 1039.0,
    "aVista": 903.93
  },
  {
    "sku": "i001735",
    "descricao": "MEDICINE BALL COM PEGADA LIGHTNING BOLT 7KG",
    "unitario": 1139.0,
    "aVista": 990.93
  },
  {
    "sku": "i001737",
    "descricao": "MEDICINE BALL COM PEGADA LIGHTNING BOLT 9KG",
    "unitario": 1389.0,
    "aVista": 1208.43
  },
  {
    "sku": "i001730",
    "descricao": "MEDICINE BALL LIGHTNING BOLT 10KG - MD1212/10",
    "unitario": 1269.0,
    "aVista": 1104.03
  },
  {
    "sku": "i001721",
    "descricao": "MEDICINE BALL LIGHTNING BOLT 1KG",
    "unitario": 359.0,
    "aVista": 312.33
  },
  {
    "sku": "i001722",
    "descricao": "MEDICINE BALL LIGHTNING BOLT 2KG - MD1212/2",
    "unitario": 399.0,
    "aVista": 347.13
  },
  {
    "sku": "i001727",
    "descricao": "MEDICINE BALL LIGHTNING BOLT 7KG - MD1212/7",
    "unitario": 729.0,
    "aVista": 634.23
  },
  {
    "sku": "i001729",
    "descricao": "MEDICINE BALL LIGHTNING BOLT 9KG",
    "unitario": 959.0,
    "aVista": 834.33
  },
  {
    "sku": "i000459",
    "descricao": "MINI MASSAGEADOR KM10 - KIKOS",
    "unitario": 34.72,
    "aVista": 30.21
  },
  {
    "sku": "i000372",
    "descricao": "MONITOR CARDIACO COM FITA MC-700 - KIKOS",
    "unitario": 125.35,
    "aVista": 109.05
  },
  {
    "sku": "i000373",
    "descricao": "MONITOR CARDIACO COM FITA MC-800 - KIKOS",
    "unitario": 148.35,
    "aVista": 129.06
  },
  {
    "sku": "i000371",
    "descricao": "MONITOR CARDIACO DE TOQUE MC-200 - KIKOS",
    "unitario": 63.14,
    "aVista": 54.93
  },
  {
    "sku": "i000374",
    "descricao": "PEDOMETRO PD20 - TEMPO / DISTANCIA / CALORIA / PASSO - KIKOS",
    "unitario": 64.29,
    "aVista": 55.93
  },
  {
    "sku": "i000375",
    "descricao": "PEDOMETRO PD40 - TEMP / DIST / CAL / PASSO / FM / BN - KIKOS",
    "unitario": 98.79,
    "aVista": 85.95
  },
  {
    "sku": "i001695",
    "descricao": "PRESILHA PARA BARRA OLÍMPICA LIGHTNING BOLT - MD4040",
    "unitario": 84.99,
    "aVista": 73.94
  },
  {
    "sku": "i000347",
    "descricao": "PROTECAO DE COTOVELO TAMANHO G - KIKOS - AB2026G",
    "unitario": 21.28,
    "aVista": 18.51
  },
  {
    "sku": "i000348",
    "descricao": "PROTECAO DE COTOVELO TAMANHO GG - KIKOS",
    "unitario": 21.28,
    "aVista": 18.51
  },
  {
    "sku": "i000346",
    "descricao": "PROTECAO DE COTOVELO TAMANHO M - KIKOS - AB2026M",
    "unitario": 21.28,
    "aVista": 18.51
  },
  {
    "sku": "i000345",
    "descricao": "PROTECAO DE COTOVELO TAMANHO P - KIKOS - AB2026P",
    "unitario": 21.28,
    "aVista": 18.51
  },
  {
    "sku": "i000359",
    "descricao": "PROTECAO DE COXA TAMANHO G - KIKOS - AB2027G",
    "unitario": 29.79,
    "aVista": 25.92
  },
  {
    "sku": "i000360",
    "descricao": "PROTECAO DE COXA TAMANHO GG - KIKOS",
    "unitario": 29.79,
    "aVista": 25.92
  },
  {
    "sku": "i000358",
    "descricao": "PROTECAO DE COXA TAMANHO M - KIKOS - AB2027M",
    "unitario": 29.79,
    "aVista": 25.92
  },
  {
    "sku": "i000357",
    "descricao": "PROTECAO DE COXA TAMANHO P - KIKOS - AB2027P",
    "unitario": 29.79,
    "aVista": 25.92
  },
  {
    "sku": "i000355",
    "descricao": "PROTECAO DE JOELHO TAMANHO G - KIKOS - AB2028G",
    "unitario": 29.79,
    "aVista": 25.92
  },
  {
    "sku": "i000356",
    "descricao": "PROTECAO DE JOELHO TAMANHO GG - KIKOS",
    "unitario": 54.05,
    "aVista": 47.02
  },
  {
    "sku": "i000354",
    "descricao": "PROTECAO DE JOELHO TAMANHO M - KIKOS - AB2028M",
    "unitario": 29.79,
    "aVista": 25.92
  },
  {
    "sku": "i000353",
    "descricao": "PROTECAO DE JOELHO TAMANHO P - KIKOS",
    "unitario": 29.79,
    "aVista": 25.92
  },
  {
    "sku": "i000351",
    "descricao": "PROTECAO DE PANTURRILHA TAMANHO G - KIKOS - AB2029G",
    "unitario": 26.34,
    "aVista": 22.92
  },
  {
    "sku": "i000352",
    "descricao": "PROTECAO DE PANTURRILHA TAMANHO GG - KIKOS",
    "unitario": 33.24,
    "aVista": 28.92
  },
  {
    "sku": "i000350",
    "descricao": "PROTECAO DE PANTURRILHA TAMANHO M - KIKOS - AB2029M",
    "unitario": 26.34,
    "aVista": 22.92
  },
  {
    "sku": "i000349",
    "descricao": "PROTECAO DE PANTURRILHA TAMANHO P - KIKOS - AB2029P",
    "unitario": 26.34,
    "aVista": 22.92
  },
  {
    "sku": "i000344",
    "descricao": "PROTECAO DE PUNHO TAMANHO UNICO - KIKOS - AB2025",
    "unitario": 22.89,
    "aVista": 19.91
  },
  {
    "sku": "i000342",
    "descricao": "PROTECAO DE TORNOZELO TAMANHO G - KIKOS - AB2030G",
    "unitario": 17.14,
    "aVista": 14.91
  },
  {
    "sku": "i000343",
    "descricao": "PROTECAO DE TORNOZELO TAMANHO GG - KIKOS - AB2030GG",
    "unitario": 17.14,
    "aVista": 14.91
  },
  {
    "sku": "i000341",
    "descricao": "PROTECAO DE TORNOZELO TAMANHO M - KIKOS - AB2030M",
    "unitario": 17.14,
    "aVista": 14.91
  },
  {
    "sku": "i000340",
    "descricao": "PROTECAO DE TORNOZELO TAMANHO P - KIKOS - AB2030P",
    "unitario": 17.14,
    "aVista": 14.91
  },
  {
    "sku": "i001700",
    "descricao": "PUXADOR CORDA TRICEPS LIGHTNING BOLT",
    "unitario": 213.9,
    "aVista": 186.09
  },
  {
    "sku": "i001701",
    "descricao": "PUXADOR CORDA TRICEPS UNILATERAL LIGHTNING BOLT - MD5044",
    "unitario": 151.99,
    "aVista": 132.23
  },
  {
    "sku": "i001706",
    "descricao": "PUXADOR ESTRIBO LIGHTNING BOLT",
    "unitario": 249.99,
    "aVista": 217.49
  },
  {
    "sku": "i001702",
    "descricao": "PUXADOR PULLEY D LIGHTNING BOLT MD5045",
    "unitario": 769.0,
    "aVista": 669.03
  },
  {
    "sku": "i001708",
    "descricao": "PUXADOR PULLEY W LIGHTNING BOLT",
    "unitario": 559.0,
    "aVista": 486.33
  },
  {
    "sku": "i001709",
    "descricao": "PUXADOR RETO 60CM LIGHTNING BOLT",
    "unitario": 329.99,
    "aVista": 287.09
  },
  {
    "sku": "i001707",
    "descricao": "PUXADOR TRIANGULO LIGHTNING BOLT",
    "unitario": 329.99,
    "aVista": 287.09
  },
  {
    "sku": "i001704",
    "descricao": "PUXADOR TRICEPS V COM ROLAMENTO LIGHTNING BOLT - MD5049",
    "unitario": 559.0,
    "aVista": 486.33
  },
  {
    "sku": "i001703",
    "descricao": "PUXADOR TRICEPS V LIGHTNING BOLT",
    "unitario": 329.99,
    "aVista": 287.09
  },
  {
    "sku": "i001713",
    "descricao": "RACK DE DUMBELL 10 PARES OBILONGO LIGHTNING BOLT - MD6231",
    "unitario": 9509.0,
    "aVista": 8272.83
  },
  {
    "sku": "i000327",
    "descricao": "RODA CORE DE RESISTENCIA - KIKOS",
    "unitario": 361.1,
    "aVista": 314.16
  },
  {
    "sku": "i000331",
    "descricao": "SLACK LINE - KIKOS",
    "unitario": 263.35,
    "aVista": 229.11
  },
  {
    "sku": "i001404",
    "descricao": "SLAM BALL LIGHTNING BOLT  30KG",
    "unitario": 1609.0,
    "aVista": 1399.83
  },
  {
    "sku": "i001405",
    "descricao": "SLAM BALL LIGHTNING BOLT  35KG",
    "unitario": 1829.0,
    "aVista": 1591.23
  },
  {
    "sku": "i001588",
    "descricao": "SLAM BALL LIGHTNING BOLT  35KG - SLA35",
    "unitario": 1829.0,
    "aVista": 1591.23
  },
  {
    "sku": "i001406",
    "descricao": "SLAM BALL LIGHTNING BOLT  40KG - SLA40",
    "unitario": 2029.0,
    "aVista": 1765.23
  },
  {
    "sku": "i001407",
    "descricao": "SLAM BALL LIGHTNING BOLT  45KG - SLA45",
    "unitario": 2299.0,
    "aVista": 2000.13
  },
  {
    "sku": "i001408",
    "descricao": "SLAM BALL LIGHTNING BOLT  50KG - SLA50",
    "unitario": 2569.0,
    "aVista": 2235.03
  },
  {
    "sku": "i001409",
    "descricao": "SLAM BALL LIGHTNING BOLT  55KG - SLA55",
    "unitario": 2749.0,
    "aVista": 2391.63
  },
  {
    "sku": "i001410",
    "descricao": "SLAM BALL LIGHTNING BOLT  60KG - SLA60",
    "unitario": 2919.0,
    "aVista": 2539.53
  },
  {
    "sku": "i001411",
    "descricao": "SLAM BALL LIGHTNING BOLT  65KG - SLA65",
    "unitario": 3099.0,
    "aVista": 2696.13
  },
  {
    "sku": "i001412",
    "descricao": "SLAM BALL LIGHTNING BOLT  70KG - SLA70",
    "unitario": 3279.0,
    "aVista": 2852.73
  },
  {
    "sku": "i001413",
    "descricao": "SLAM BALL LIGHTNING BOLT  75KG - SLA75",
    "unitario": 3459.0,
    "aVista": 3009.33
  },
  {
    "sku": "i001414",
    "descricao": "SLAM BALL LIGHTNING BOLT  80KG- SLA80",
    "unitario": 3639.0,
    "aVista": 3165.93
  },
  {
    "sku": "i001858",
    "descricao": "SLAM BALL LIGHTNING BOLT 10KG - SLA10",
    "unitario": 331.99,
    "aVista": 288.83
  },
  {
    "sku": "i001859",
    "descricao": "SLAM BALL LIGHTNING BOLT 11KG - SLA11",
    "unitario": 359.0,
    "aVista": 312.33
  },
  {
    "sku": "i001860",
    "descricao": "SLAM BALL LIGHTNING BOLT 12KG - SLA12",
    "unitario": 369.0,
    "aVista": 321.03
  },
  {
    "sku": "i001403",
    "descricao": "SLAM BALL LIGHTNING BOLT 25KG",
    "unitario": 1249.0,
    "aVista": 1086.63
  },
  {
    "sku": "i001586",
    "descricao": "SLAM BALL LIGHTNING BOLT 25KG - SLA25",
    "unitario": 1249.0,
    "aVista": 1086.63
  },
  {
    "sku": "i001852",
    "descricao": "SLAM BALL LIGHTNING BOLT 4KG - SLA4",
    "unitario": 199.0,
    "aVista": 173.13
  },
  {
    "sku": "i001853",
    "descricao": "SLAM BALL LIGHTNING BOLT 5KG - SLA5",
    "unitario": 213.09,
    "aVista": 185.39
  },
  {
    "sku": "i001854",
    "descricao": "SLAM BALL LIGHTNING BOLT 6KG - SLA6",
    "unitario": 229.0,
    "aVista": 199.23
  },
  {
    "sku": "i001855",
    "descricao": "SLAM BALL LIGHTNING BOLT 7KG - SLA7",
    "unitario": 259.0,
    "aVista": 225.33
  },
  {
    "sku": "i001856",
    "descricao": "SLAM BALL LIGHTNING BOLT 8KG - SLA8",
    "unitario": 289.0,
    "aVista": 251.43
  },
  {
    "sku": "i001857",
    "descricao": "SLAM BALL LIGHTNING BOLT 9KG - SLA9",
    "unitario": 319.0,
    "aVista": 277.53
  },
  {
    "sku": "i000383",
    "descricao": "SQUEEZE ASTI KIKOS SQ01 - 500ML",
    "unitario": 11.39,
    "aVista": 9.91
  },
  {
    "sku": "i000384",
    "descricao": "SQUEEZE RAVENNA KIKOS SQ02 - 600ML",
    "unitario": 22.89,
    "aVista": 19.91
  },
  {
    "sku": "i000386",
    "descricao": "SQUEEZE TURIN KIKOS SQ04 - 750ML",
    "unitario": 64.29,
    "aVista": 55.93
  },
  {
    "sku": "i000334",
    "descricao": "SUPER BAND 2.1 - FAIXAS ELASTICAS DE ALTA DENSIDADE - KIKOS - AB3219-3",
    "unitario": 159.0,
    "aVista": 138.33
  },
  {
    "sku": "i000335",
    "descricao": "SUPER BAND 4.4 - FAIXAS ELASTICAS DE ALTA DENSIDADE - KIKOS - AB3219-5",
    "unitario": 269.0,
    "aVista": 234.03
  },
  {
    "sku": "i001712",
    "descricao": "SUPORTE HALTER 10 PARES LIGHTNING BOLT - MD6217",
    "unitario": 6390.0,
    "aVista": 5559.3
  },
  {
    "sku": "i001711",
    "descricao": "SUPORTE PARA ANILHA OLIMPICA 7 PONTEIRAS LIGHTNING BOLT - MD6116",
    "unitario": 5459.0,
    "aVista": 4749.33
  },
  {
    "sku": "i001715",
    "descricao": "SUPORTE PARA BARRAS MONTADAS LIGHTNING BOLT - MD6301",
    "unitario": 3609.0,
    "aVista": 3139.83
  },
  {
    "sku": "i001719",
    "descricao": "SUPORTE PARA KETTLEBELL LIGHTNING BOLT - MD6205",
    "unitario": 3629.0,
    "aVista": 3157.23
  },
  {
    "sku": "i001710",
    "descricao": "SUPORTE PARA MEDICINE BALL LIGHTNING BOLT - MD5082",
    "unitario": 259.0,
    "aVista": 225.33
  },
  {
    "sku": "i001720",
    "descricao": "SUPORTE PARA TRX DE TETO LIGHTNING BOLT - MD6706",
    "unitario": 109.0,
    "aVista": 94.83
  },
  {
    "sku": "i000337",
    "descricao": "TOALHA REFRESCANTE AZUL - KIKOS - 285C",
    "unitario": 11.39,
    "aVista": 9.91
  },
  {
    "sku": "i000338",
    "descricao": "TOALHA REFRESCANTE VERMELHA - KIKOS - 1787C",
    "unitario": 11.39,
    "aVista": 9.91
  },
  {
    "sku": "i000463",
    "descricao": "TRAVESSEIRO MASSAGEADOR KM90 - KIKOS",
    "unitario": 435.85,
    "aVista": 379.19
  },
  {
    "sku": "i000968",
    "descricao": "URBAN ROVER AMARELO 10.0 - KIKOS - NCM 95069900",
    "unitario": 5278.5,
    "aVista": 4592.3
  },
  {
    "sku": "i000572",
    "descricao": "URBAN ROVER BRANCO 6.5 - KIKOS - NCM 95069900",
    "unitario": 2288.5,
    "aVista": 1990.99
  },
  {
    "sku": "i000972",
    "descricao": "URBAN ROVER PRETO 10.0 - KIKOS - NCM 95069900",
    "unitario": 5278.5,
    "aVista": 4592.3
  },
  {
    "sku": "i000570",
    "descricao": "URBAN ROVER PRETO 6.5 - KIKOS - NCM 95069900",
    "unitario": 2288.5,
    "aVista": 1990.99
  },
  {
    "sku": "i000574",
    "descricao": "URBAN ROVER VERMELHO 6.5 - KIKOS - NCM 95069900",
    "unitario": 2288.5,
    "aVista": 1990.99
  },
  {
    "sku": "i001590",
    "descricao": "WALL BALL LIGHTNING BOLT 10KG - MD1242/10",
    "unitario": 909.0,
    "aVista": 790.83
  },
  {
    "sku": "i001415",
    "descricao": "WALL BALL LIGHTNING BOLT 2KG - MD1242/2",
    "unitario": 569.0,
    "aVista": 495.03
  },
  {
    "sku": "i001416",
    "descricao": "WALL BALL LIGHTNING BOLT 3KG - MD1242/3",
    "unitario": 639.0,
    "aVista": 555.93
  },
  {
    "sku": "i001417",
    "descricao": "WALL BALL LIGHTNING BOLT 4KG - MD1242/4",
    "unitario": 699.0,
    "aVista": 608.13
  },
  {
    "sku": "i001418",
    "descricao": "WALL BALL LIGHTNING BOLT 5KG - MD1242/5",
    "unitario": 739.0,
    "aVista": 642.93
  },
  {
    "sku": "i001419",
    "descricao": "WALL BALL LIGHTNING BOLT 6KG - MD1242/6",
    "unitario": 769.0,
    "aVista": 669.03
  },
  {
    "sku": "i001420",
    "descricao": "WALL BALL LIGHTNING BOLT 7KG - MD1242/7",
    "unitario": 799.0,
    "aVista": 695.13
  },
  {
    "sku": "i001421",
    "descricao": "WALL BALL LIGHTNING BOLT 8KG - MD1242/8",
    "unitario": 839.0,
    "aVista": 729.93
  },
  {
    "sku": "i001589",
    "descricao": "WALL BALL LIGHTNING BOLT 9KG - MD1242/9",
    "unitario": 869.0,
    "aVista": 756.03
  },
  {
    "sku": "i001888",
    "descricao": "Weight Bag-10KG   RED - MD1657/10",
    "unitario": 909.0,
    "aVista": 790.83
  },
  {
    "sku": "i001889",
    "descricao": "Weight Bag-15KG   BLUE - MD1657/15",
    "unitario": 999.0,
    "aVista": 869.13
  },
  {
    "sku": "i001890",
    "descricao": "Weight Bag-20KG   GREY - MD1657/20",
    "unitario": 1109.0,
    "aVista": 964.83
  },
  {
    "sku": "i000333",
    "descricao": "STEP PROFISSIONAL - KIKOS - AB3506",
    "unitario": 999.0,
    "aVista": 869.13
  },
  {
    "sku": "i001887",
    "descricao": "Weight Bag-5KG     PURPLE MD1657/5",
    "unitario": 809.0,
    "aVista": 703.83
  },
  {
    "sku": "i000465",
    "descricao": "X TUBE PRO ELASTICO DUPLO TRANCADO VERMELHO - KIKOS",
    "unitario": 80.39,
    "aVista": 69.94
  },
  {
    "sku": "i001907",
    "descricao": "ABDOMINAL - FE9714",
    "unitario": 50190.0,
    "aVista": 43665.3
  },
  {
    "sku": "i001950",
    "descricao": "ABDOMINAL - LBSL51",
    "unitario": 33699.0,
    "aVista": 29318.13
  },
  {
    "sku": "i001939",
    "descricao": "BICEP CURL - PLATE SL7023",
    "unitario": 24290.0,
    "aVista": 21132.3
  },
  {
    "sku": "i001909",
    "descricao": "CALF PRESS  - FE9716",
    "unitario": 56590.0,
    "aVista": 49233.3
  },
  {
    "sku": "i001920",
    "descricao": "CHEST PRESS - SL7001",
    "unitario": 31090.0,
    "aVista": 27048.3
  },
  {
    "sku": "i001910",
    "descricao": "COMPOUND ROW  FE9719",
    "unitario": 57490.0,
    "aVista": 50016.3
  },
  {
    "sku": "i001918",
    "descricao": "CROSS OVER - IT9525 27OPT",
    "unitario": 77490.0,
    "aVista": 67416.3
  },
  {
    "sku": "i001945",
    "descricao": "DECLINE BENCH SL7030",
    "unitario": 18890.0,
    "aVista": 16434.3
  },
  {
    "sku": "i001949",
    "descricao": "FLAT BENCH - SL7035",
    "unitario": 4959.0,
    "aVista": 4314.33
  },
  {
    "sku": "i001932",
    "descricao": "FULL POWER RACK - SL7015",
    "unitario": 24138.5,
    "aVista": 21000.49
  },
  {
    "sku": "i001937",
    "descricao": "HACK SQUAT - LBPL79",
    "unitario": 50290.0,
    "aVista": 43752.3
  },
  {
    "sku": "i001948",
    "descricao": "HACK SQUAT SL7034",
    "unitario": 36790.0,
    "aVista": 32007.3
  },
  {
    "sku": "i001944",
    "descricao": "INCLINE BENCH - SL7029",
    "unitario": 20599.0,
    "aVista": 17921.13
  },
  {
    "sku": "i001935",
    "descricao": "INCLINE ROW - SL7019",
    "unitario": 15990.0,
    "aVista": 13911.3
  },
  {
    "sku": "i001923",
    "descricao": "LOW ROW - PLATE- SL7004 - LBSL31",
    "unitario": 32490.0,
    "aVista": 28266.3
  },
  {
    "sku": "i001912",
    "descricao": "PRONE LEG CURL -FE9721",
    "unitario": 53990.0,
    "aVista": 46971.3
  },
  {
    "sku": "i001906",
    "descricao": "SHOULDER PRESS - PLATE - LBES23",
    "unitario": 57190.0,
    "aVista": 49755.3
  },
  {
    "sku": "i001946",
    "descricao": "SHOULDER PRESS - SL7031",
    "unitario": 29790.0,
    "aVista": 25917.3
  },
  {
    "sku": "i001934",
    "descricao": "STANDING ARM CURL - SL7018",
    "unitario": 13990.0,
    "aVista": 12171.3
  },
  {
    "sku": "i001947",
    "descricao": "STANDING CALF RAISE - SL7032",
    "unitario": 30599.0,
    "aVista": 26621.13
  },
  {
    "sku": "i001916",
    "descricao": "TOTAL HIP - IT9509",
    "unitario": 48390.0,
    "aVista": 42099.3
  },
  {
    "sku": "i001940",
    "descricao": "TRICEP DIP - PLATE - SL7024",
    "unitario": 32190.0,
    "aVista": 28005.3
  },
  {
    "sku": "i001913",
    "descricao": "TRICEPS EXTENSION - FE9723",
    "unitario": 56990.0,
    "aVista": 49581.3
  },
  {
    "sku": "i001938",
    "descricao": "UTILITY BENCH - SL7022",
    "unitario": 4569.0,
    "aVista": 3975.03
  },
  {
    "sku": "i000565",
    "descricao": "ANILHA 01KG GUGA GK7200",
    "unitario": 64.9,
    "aVista": 56.46
  },
  {
    "sku": "i000568",
    "descricao": "ANILHA 10KG GUGA GK7200",
    "unitario": 609.0,
    "aVista": 529.83
  },
  {
    "sku": "i000556",
    "descricao": "BARRA DE PORTA GUGA GK6500",
    "unitario": 184.9,
    "aVista": 160.86
  },
  {
    "sku": "I000540",
    "descricao": "ESTEIRA GUGA GK103I",
    "unitario": 1.0,
    "aVista": 0.87
  },
  {
    "sku": "i001030",
    "descricao": "ESTEIRA GUGA GK113 110V",
    "unitario": 10390.0,
    "aVista": 9039.3
  },
  {
    "sku": "i000554",
    "descricao": "FAIXA ELASTICA FORTE COM PEGADORES GUGA GK6200",
    "unitario": 53.94,
    "aVista": 46.93
  },
  {
    "sku": "i000553",
    "descricao": "FIT BALL 65CM GUGA GK5700",
    "unitario": 179.0,
    "aVista": 155.73
  },
  {
    "sku": "I000549",
    "descricao": "FITA DE SUSPENSAO GUGA GK5300",
    "unitario": 1.0,
    "aVista": 0.87
  },
  {
    "sku": "i000550",
    "descricao": "HAND GRIP COM CONTADOR GUGA GK5900",
    "unitario": 79.0,
    "aVista": 68.73
  },
  {
    "sku": "I000558",
    "descricao": "MINI STEP GUGA GK4000",
    "unitario": 1.0,
    "aVista": 0.87
  },
  {
    "sku": "i014101",
    "descricao": "ELEVAÇÃO PÉLVICA TTPL92i - LINHA KIKOS PRO",
    "unitario": 25290.0,
    "aVista": 22002.3
  },
  {
    "sku": "i000543",
    "descricao": "PLATAFORMA VIBRATORIA GUGA GK500 110V",
    "unitario": 3190.0,
    "aVista": 2775.3
  },
  {
    "sku": "i000545",
    "descricao": "PLATAFORMA VIBRATORIA GUGA GK501 110V",
    "unitario": 4690.0,
    "aVista": 4080.3
  },
  {
    "sku": "i000248",
    "descricao": "BANCO RETO TTFW81 - LINHA KIKOS PRO",
    "unitario": 4490.0,
    "aVista": 3906.3
  },
  {
    "sku": "i000251",
    "descricao": "BANCO 0 - 90º TTFW80 - LINHA KIKOS PRO",
    "unitario": 8690.0,
    "aVista": 7560.3
  },
  {
    "sku": "i000252",
    "descricao": "BANCO DECLINADO TTFW15 - LINHA KIKOS PRO",
    "unitario": 11190.0,
    "aVista": 9735.3
  },
  {
    "sku": "i000253",
    "descricao": "BANCO INCLINADO TTFW14 - LINHA KIKOS PRO",
    "unitario": 12290.0,
    "aVista": 10692.3
  },
  {
    "sku": "i000254",
    "descricao": "BANCO RETO TTFW13 - LINHA KIKOS PRO",
    "unitario": 10290.0,
    "aVista": 8952.3
  },
  {
    "sku": "i000255",
    "descricao": "BANCO BICEPS TTFW40 - LINHA KIKOS PRO",
    "unitario": 8890.0,
    "aVista": 7734.3
  },
  {
    "sku": "i001822",
    "descricao": "ELEVAÇÃO PÉLVICA TTPL92 - KIKOS",
    "unitario": 21190.0,
    "aVista": 18435.3
  },
  {
    "sku": "i000557",
    "descricao": "TRAMPOLIM GUGA GK5600",
    "unitario": 719.0,
    "aVista": 625.53
  },
  {
    "sku": "i012608",
    "descricao": "TRÍCEPS PR19 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 23090.0,
    "aVista": 20088.3
  },
  {
    "sku": "i012736",
    "descricao": "ABDOMINAL ARTICULADO PR24 - LINHA PLATE LOAD KIKOS PRO",
    "unitario": 23290.0,
    "aVista": 20262.3
  },
  {
    "sku": "i000907",
    "descricao": "ABDOMINAL LIGHT - POLIMET",
    "unitario": 304.41,
    "aVista": 264.84
  },
  {
    "sku": "i000908",
    "descricao": "ABDOMINAL PROFISSIONAL - POLIMET",
    "unitario": 460.67,
    "aVista": 400.78
  },
  {
    "sku": "i002152",
    "descricao": "AGACHAMENTO - TTPL78 MACSPORT",
    "unitario": 31090.0,
    "aVista": 27048.3
  },
  {
    "sku": "i002136",
    "descricao": "AGACHAMENTO SISSY - GURIK GYMOOD",
    "unitario": 3290.0,
    "aVista": 2862.3
  },
  {
    "sku": "i001402",
    "descricao": "AGACHAMENTO SISSY - LINHA MAX -  LONGLIFEPRO",
    "unitario": 3290.0,
    "aVista": 2862.3
  },
  {
    "sku": "i002131",
    "descricao": "AGACHAMENTO SISSY SQUAT MACSPORT",
    "unitario": 3290.0,
    "aVista": 2862.3
  },
  {
    "sku": "i002132",
    "descricao": "BANCO LOMBAR 45 MACSPORT",
    "unitario": 4990.0,
    "aVista": 4341.3
  },
  {
    "sku": "i001127",
    "descricao": "BANCO RECLINAVEL - GURIK",
    "unitario": 6690.0,
    "aVista": 5820.3
  },
  {
    "sku": "i002154",
    "descricao": "BANCO SCOTH - MACSPORT",
    "unitario": 6690.0,
    "aVista": 5820.3
  },
  {
    "sku": "i001394",
    "descricao": "BANCO SUPINO REGULAVEL FECHADO 0 A 45 - SMART REPAIR",
    "unitario": 11718.0,
    "aVista": 10194.66
  },
  {
    "sku": "i001048",
    "descricao": "BARRA GUIADA SMITH - MACSPORT",
    "unitario": 22090.0,
    "aVista": 19218.3
  },
  {
    "sku": "i001057",
    "descricao": "CADEIRA EXTENSORA - GURIK",
    "unitario": 17990.0,
    "aVista": 15651.3
  },
  {
    "sku": "i002135",
    "descricao": "CROSS COM SMITH - BITOLAS OLIMPICAS - GURIK",
    "unitario": 29990.0,
    "aVista": 26091.3
  },
  {
    "sku": "i002130",
    "descricao": "CROSSOVER ANGULAR C/ SMITH - MACSPORT",
    "unitario": 29990.0,
    "aVista": 26091.3
  },
  {
    "sku": "i001064",
    "descricao": "DESENVOLVIMENTO OMBRO ARTICULADO - MACSPORT",
    "unitario": 17990.0,
    "aVista": 15651.3
  },
  {
    "sku": "i002137",
    "descricao": "ELEVACAO PELVICA  GURIK GYMOOD  BITOLA OLIMPICA",
    "unitario": 14790.0,
    "aVista": 12867.3
  },
  {
    "sku": "i002133",
    "descricao": "ELEVACAO PELVICA - MACSPORT",
    "unitario": 14790.0,
    "aVista": 12867.3
  },
  {
    "sku": "i002153",
    "descricao": "FLEXORA FEMORAL DEITADA - MACSPORT",
    "unitario": 24790.0,
    "aVista": 21567.3
  },
  {
    "sku": "i012132",
    "descricao": "FLY C/ DORSAL - C2S22 - MACSPORT",
    "unitario": 21190.0,
    "aVista": 18435.3
  },
  {
    "sku": "i012131",
    "descricao": "FLY C/ DORSAL- C2S22 MACSPORT",
    "unitario": 21190.0,
    "aVista": 18435.3
  },
  {
    "sku": "i000967",
    "descricao": "GLUTEO 4 APOIOS - MACSPORT",
    "unitario": 17990.0,
    "aVista": 15651.3
  },
  {
    "sku": "i001121",
    "descricao": "GRAVITON 85KG - MACSPORT",
    "unitario": 17990.0,
    "aVista": 15651.3
  },
  {
    "sku": "i012139",
    "descricao": "LEG PRESS 45 C/ PONTEIRAS OLIMPICAS - TTPL70 MACSPORT",
    "unitario": 37190.0,
    "aVista": 32355.3
  },
  {
    "sku": "i001217",
    "descricao": "LEG PRESS 45G ANILHAS - LINHA FIT - GURIK",
    "unitario": 28490.0,
    "aVista": 24786.3
  },
  {
    "sku": "i001242",
    "descricao": "LEG PRESS HORIZONTAL QUASAR - GURIK",
    "unitario": 17990.0,
    "aVista": 15651.3
  },
  {
    "sku": "i002149",
    "descricao": "MULT PRESS MACSPORT",
    "unitario": 23990.0,
    "aVista": 20871.3
  },
  {
    "sku": "i001079",
    "descricao": "PANTURRILHA SENTADA - MACSPORT",
    "unitario": 4190.0,
    "aVista": 3645.3
  },
  {
    "sku": "i012133",
    "descricao": "PECK DECK C2S12 - MACSPORT",
    "unitario": 21190.0,
    "aVista": 18435.3
  },
  {
    "sku": "i001085",
    "descricao": "POLIA ALTA ARTICULADA - MACSPORT",
    "unitario": 17990.0,
    "aVista": 15651.3
  },
  {
    "sku": "i002134",
    "descricao": "PRANCHA ABDOMINAL - TTFW83 - MACSPORT",
    "unitario": 5399.0,
    "aVista": 4697.13
  },
  {
    "sku": "i012551",
    "descricao": "RACK DUMBBELL 2 ALTURAS TTFW91 - NACIONAL",
    "unitario": 6390.0,
    "aVista": 5559.3
  },
  {
    "sku": "i001087",
    "descricao": "REMADA CAVALINHO - MACSPORT",
    "unitario": 5790.0,
    "aVista": 5037.3
  },
  {
    "sku": "i001243",
    "descricao": "SMITH MACHINE LINHA FIT - GURIK",
    "unitario": 22090.0,
    "aVista": 19218.3
  },
  {
    "sku": "i001244",
    "descricao": "SUPINO REGULAVEL LINHA FIT - GURIK",
    "unitario": 9990.0,
    "aVista": 8691.3
  },
  {
    "sku": "i000883",
    "descricao": "COLCHONETE EMBORRACHADO GRANDE - AB3601G",
    "unitario": 545.0,
    "aVista": 474.15
  },
  {
    "sku": "i000884",
    "descricao": "COLCHONETE EMBORRACHADO PEQUENO - AB3601P",
    "unitario": 355.0,
    "aVista": 308.85
  },
  {
    "sku": "i000885",
    "descricao": "SACO DE PANCADA 1.20CM - SERGINHO",
    "unitario": 690.0,
    "aVista": 600.3
  },
  {
    "sku": "i000886",
    "descricao": "SACO DE PANCADA 90CM - SERGINHO",
    "unitario": 518.0,
    "aVista": 450.66
  },
  {
    "sku": "i001356",
    "descricao": "SILICONE LIQUIDO 1L - BFR500",
    "unitario": 245.0,
    "aVista": 213.15
  },
  {
    "sku": "i001355",
    "descricao": "SILICONE LIQUIDO 500ML - BFR500",
    "unitario": 123.0,
    "aVista": 107.01
  },
  {
    "sku": "i001248",
    "descricao": "ANILHA 02KG EM ACO INOX COM 6 FUROS OLIMPICA",
    "unitario": 129.0,
    "aVista": 112.23
  },
  {
    "sku": "i001249",
    "descricao": "ANILHA 05KG EM ACO INOX COM 6 FUROS OLIMPICA",
    "unitario": 108.79,
    "aVista": 94.65
  },
  {
    "sku": "i001250",
    "descricao": "ANILHA 10KG EM ACO INOX COM 6 FUROS OLIMPICA",
    "unitario": 217.58,
    "aVista": 189.29
  },
  {
    "sku": "i001251",
    "descricao": "ANILHA 20KG EM ACO INOX COM 6 FUROS OLIMPICA",
    "unitario": 1029.0,
    "aVista": 895.23
  },
  {
    "sku": "i000838",
    "descricao": "ANILHA EMBORRACHADO 01KG",
    "unitario": 55.0,
    "aVista": 47.85
  },
  {
    "sku": "i000839",
    "descricao": "ANILHA EMBORRACHADO 02KG",
    "unitario": 118.0,
    "aVista": 102.66
  },
  {
    "sku": "i000840",
    "descricao": "ANILHA EMBORRACHADO 03KG",
    "unitario": 163.0,
    "aVista": 141.81
  },
  {
    "sku": "i000841",
    "descricao": "ANILHA EMBORRACHADO 04KG",
    "unitario": 217.0,
    "aVista": 188.79
  },
  {
    "sku": "i000842",
    "descricao": "ANILHA EMBORRACHADO 05KG",
    "unitario": 295.0,
    "aVista": 256.65
  },
  {
    "sku": "i000843",
    "descricao": "ANILHA EMBORRACHADO 10KG",
    "unitario": 589.0,
    "aVista": 512.43
  },
  {
    "sku": "i000892",
    "descricao": "ANILHA EMBORRACHADO 15KG",
    "unitario": 814.0,
    "aVista": 708.18
  },
  {
    "sku": "i000844",
    "descricao": "ANILHA EMBORRACHADO 20KG",
    "unitario": 1085.0,
    "aVista": 943.95
  },
  {
    "sku": "i000845",
    "descricao": "ANILHA EMBORRACHADO 25KG",
    "unitario": 1356.0,
    "aVista": 1179.72
  },
  {
    "sku": "i012441",
    "descricao": "Anilha Nacional Arte Nobrega Preto 10kg",
    "unitario": 247.86,
    "aVista": 215.64
  },
  {
    "sku": "i012442",
    "descricao": "Anilha Nacional Arte Nobrega Preto 20kg",
    "unitario": 495.81,
    "aVista": 431.35
  },
  {
    "sku": "i012440",
    "descricao": "Anilha Nacional Arte Nobrega Preto 5kg",
    "unitario": 124.32,
    "aVista": 108.16
  },
  {
    "sku": "i000909",
    "descricao": "ANILHEIRO 4 PONTAS COR PRATA - MULTIFIT",
    "unitario": 1011.0,
    "aVista": 879.57
  },
  {
    "sku": "i000910",
    "descricao": "ANILHEIRO 6 PONTAS COR PRATA - MULTIFIT",
    "unitario": 2345.0,
    "aVista": 2040.15
  },
  {
    "sku": "i001116",
    "descricao": "BARRA 0.30CM COM PRESILHAS RECART MACICA",
    "unitario": 129.0,
    "aVista": 112.23
  },
  {
    "sku": "i000987",
    "descricao": "BARRA 0.30CM EMBORRACHADA",
    "unitario": 129.0,
    "aVista": 112.23
  },
  {
    "sku": "i000989",
    "descricao": "BARRA 0.40CM COM PRESILHAS RECART MACICA",
    "unitario": 149.0,
    "aVista": 129.63
  },
  {
    "sku": "i000992",
    "descricao": "BARRA 1.20CM COM PRESILHAS RECART MACICA",
    "unitario": 253.78,
    "aVista": 220.79
  },
  {
    "sku": "i000991",
    "descricao": "BARRA 1.20CM EMBORRACHADA",
    "unitario": 253.78,
    "aVista": 220.79
  },
  {
    "sku": "i000996",
    "descricao": "BARRA 1.50CM COM ROSCA E PORCA",
    "unitario": 599.0,
    "aVista": 521.13
  },
  {
    "sku": "i000994",
    "descricao": "BARRA 1.50CM EMBORRACHADA",
    "unitario": 529.0,
    "aVista": 460.23
  },
  {
    "sku": "i000998",
    "descricao": "BARRA 1.60CM COM PRESILHAS RECART MACICA",
    "unitario": 539.0,
    "aVista": 468.93
  },
  {
    "sku": "i001000",
    "descricao": "BARRA 1.80CM COM PRESILHAS RECART MACICA",
    "unitario": 699.0,
    "aVista": 608.13
  },
  {
    "sku": "i000999",
    "descricao": "BARRA 1.80CM EMBORRACHADA",
    "unitario": 559.0,
    "aVista": 486.33
  },
  {
    "sku": "i001003",
    "descricao": "BARRA 2.20CM COM PRESILHAS RECART MACICA",
    "unitario": 799.0,
    "aVista": 695.13
  },
  {
    "sku": "i001002",
    "descricao": "BARRA 2.20CM EMBORRACHADA",
    "unitario": 749.0,
    "aVista": 651.63
  },
  {
    "sku": "i012552",
    "descricao": "Barra Montada Reta Nacional Arte Nobrega Action 14kg",
    "unitario": 754.28,
    "aVista": 656.22
  },
  {
    "sku": "i012553",
    "descricao": "Barra Montada Reta Nacional Arte Nobrega Action 36kg",
    "unitario": 1753.78,
    "aVista": 1525.79
  },
  {
    "sku": "i012550",
    "descricao": "Barra Montada W Nacional Arte Nobrega Action 36kg",
    "unitario": 1741.77,
    "aVista": 1515.34
  },
  {
    "sku": "i001051",
    "descricao": "BARRA W 1.20CM COM PRESILHAS RECART MACICA",
    "unitario": 419.0,
    "aVista": 364.53
  },
  {
    "sku": "i000888",
    "descricao": "BASTAO REVESTIDO 02KG - SERGINHO",
    "unitario": 37.95,
    "aVista": 33.02
  },
  {
    "sku": "i000889",
    "descricao": "BASTAO REVESTIDO 03KG - SERGINHO",
    "unitario": 40.48,
    "aVista": 35.22
  },
  {
    "sku": "i000912",
    "descricao": "CAVALETE PARA AGACHAMENTO COR PRATA - MULTIFIT",
    "unitario": 4258.0,
    "aVista": 3704.46
  },
  {
    "sku": "i012513",
    "descricao": "Dumbell Nacional Arte Nobrega Action 12kg",
    "unitario": 825.63,
    "aVista": 718.3
  },
  {
    "sku": "i012514",
    "descricao": "Dumbell Nacional Arte Nobrega Action 14kg",
    "unitario": 948.3,
    "aVista": 825.02
  },
  {
    "sku": "i012521",
    "descricao": "Dumbell Nacional Arte Nobrega Action 28kg",
    "unitario": 1939.23,
    "aVista": 1687.13
  },
  {
    "sku": "i012522",
    "descricao": "Dumbell Nacional Arte Nobrega Action 30kg",
    "unitario": 2043.63,
    "aVista": 1777.96
  },
  {
    "sku": "i012523",
    "descricao": "Dumbell Nacional Arte Nobrega Action 32kg",
    "unitario": 2166.3,
    "aVista": 1884.68
  },
  {
    "sku": "i012525",
    "descricao": "Dumbell Nacional Arte Nobrega Action 36kg",
    "unitario": 2514.3,
    "aVista": 2187.44
  },
  {
    "sku": "i012527",
    "descricao": "Dumbell Nacional Arte Nobrega Action 40kg",
    "unitario": 2713.53,
    "aVista": 2360.77
  },
  {
    "sku": "i012528",
    "descricao": "Dumbell Nacional Arte Nobrega Action 42kg",
    "unitario": 2862.3,
    "aVista": 2490.2
  },
  {
    "sku": "i012529",
    "descricao": "Dumbell Nacional Arte Nobrega Action 44kg",
    "unitario": 3000.63,
    "aVista": 2610.55
  },
  {
    "sku": "i012530",
    "descricao": "Dumbell Nacional Arte Nobrega Action 46kg",
    "unitario": 3123.3,
    "aVista": 2717.27
  },
  {
    "sku": "i012470",
    "descricao": "Dumbell Nacional Arte Nobrega Preto 14kg",
    "unitario": 948.3,
    "aVista": 825.02
  },
  {
    "sku": "i012471",
    "descricao": "Dumbell Nacional Arte Nobrega Preto 16kg",
    "unitario": 1086.63,
    "aVista": 945.37
  },
  {
    "sku": "i012473",
    "descricao": "Dumbell Nacional Arte Nobrega Preto 20kg",
    "unitario": 1356.33,
    "aVista": 1180.01
  },
  {
    "sku": "i012474",
    "descricao": "Dumbell Nacional Arte Nobrega Preto 22kg",
    "unitario": 1521.63,
    "aVista": 1323.82
  },
  {
    "sku": "i012475",
    "descricao": "Dumbell Nacional Arte Nobrega Preto 24kg",
    "unitario": 1644.3,
    "aVista": 1430.54
  },
  {
    "sku": "i012476",
    "descricao": "Dumbell Nacional Arte Nobrega Preto 26kg",
    "unitario": 1765.23,
    "aVista": 1535.75
  },
  {
    "sku": "i012477",
    "descricao": "Dumbell Nacional Arte Nobrega Preto 28kg",
    "unitario": 1939.23,
    "aVista": 1687.13
  },
  {
    "sku": "i012478",
    "descricao": "Dumbell Nacional Arte Nobrega Preto 30kg",
    "unitario": 2043.63,
    "aVista": 1777.96
  },
  {
    "sku": "i012479",
    "descricao": "Dumbell Nacional Arte Nobrega Preto 32kg",
    "unitario": 2166.3,
    "aVista": 1884.68
  },
  {
    "sku": "i012506",
    "descricao": "Dumbell Nacional Arte Nobrega Preto 34kg",
    "unitario": 2340.3,
    "aVista": 2036.06
  },
  {
    "sku": "i012507",
    "descricao": "Dumbell Nacional Arte Nobrega Preto 36kg",
    "unitario": 2514.3,
    "aVista": 2187.44
  },
  {
    "sku": "i012508",
    "descricao": "Dumbell Nacional Arte Nobrega Preto 38kg",
    "unitario": 2601.3,
    "aVista": 2263.13
  },
  {
    "sku": "i012509",
    "descricao": "Dumbell Nacional Arte Nobrega Preto 40kg",
    "unitario": 2713.53,
    "aVista": 2360.77
  },
  {
    "sku": "i012510",
    "descricao": "Dumbell Nacional Arte Nobrega Preto 42kg",
    "unitario": 2862.3,
    "aVista": 2490.2
  },
  {
    "sku": "i012511",
    "descricao": "Dumbell Nacional Arte Nobrega Preto 44kg",
    "unitario": 3000.63,
    "aVista": 2610.55
  },
  {
    "sku": "i012512",
    "descricao": "Dumbell Nacional Arte Nobrega Preto 46kg",
    "unitario": 3123.3,
    "aVista": 2717.27
  },
  {
    "sku": "i012554",
    "descricao": "Dumbell Nacional Arte Nobrega Preto 48kg",
    "unitario": 3739.0,
    "aVista": 3252.93
  },
  {
    "sku": "i012443",
    "descricao": "Dumbell Nacional Arte Nobrega Preto Azul 16kg",
    "unitario": 1086.63,
    "aVista": 945.37
  },
  {
    "sku": "i012445",
    "descricao": "Dumbell Nacional Arte Nobrega Preto Azul 20kg",
    "unitario": 1356.33,
    "aVista": 1180.01
  },
  {
    "sku": "i012446",
    "descricao": "Dumbell Nacional Arte Nobrega Preto Azul 22kg",
    "unitario": 1521.63,
    "aVista": 1323.82
  },
  {
    "sku": "i012448",
    "descricao": "Dumbell Nacional Arte Nobrega Preto Azul 26kg",
    "unitario": 1765.23,
    "aVista": 1535.75
  },
  {
    "sku": "i012449",
    "descricao": "Dumbell Nacional Arte Nobrega Preto Azul 28kg",
    "unitario": 1939.23,
    "aVista": 1687.13
  },
  {
    "sku": "i012450",
    "descricao": "Dumbell Nacional Arte Nobrega Preto Azul 30kg",
    "unitario": 2043.63,
    "aVista": 1777.96
  },
  {
    "sku": "i012451",
    "descricao": "Dumbell Nacional Arte Nobrega Preto Azul 32kg",
    "unitario": 2166.3,
    "aVista": 1884.68
  },
  {
    "sku": "i012455",
    "descricao": "Dumbell Nacional Arte Nobrega Preto Azul 40kg",
    "unitario": 2713.53,
    "aVista": 2360.77
  },
  {
    "sku": "i000827",
    "descricao": "ESPALDAR DE ALUMINIO - SMART REPAIR",
    "unitario": 4796.0,
    "aVista": 4172.52
  },
  {
    "sku": "i000825",
    "descricao": "ESPALDAR DE MADEIRA - FISIONIL",
    "unitario": 6333.0,
    "aVista": 5509.71
  },
  {
    "sku": "i001098",
    "descricao": "ESTANTE 2 ANDARES PARA CANELEIRAS / HALTERES - BODY ART",
    "unitario": 999.0,
    "aVista": 869.13
  },
  {
    "sku": "i001314",
    "descricao": "HACK DUMBELL VERTICAL - 05 PARES",
    "unitario": 3144.54,
    "aVista": 2735.75
  },
  {
    "sku": "i000828",
    "descricao": "HALTER EMBORRACHADO 01KG",
    "unitario": 59.0,
    "aVista": 51.33
  },
  {
    "sku": "i000829",
    "descricao": "HALTER EMBORRACHADO 02KG",
    "unitario": 118.0,
    "aVista": 102.66
  },
  {
    "sku": "i000830",
    "descricao": "HALTER EMBORRACHADO 03KG",
    "unitario": 177.0,
    "aVista": 153.99
  },
  {
    "sku": "i000831",
    "descricao": "HALTER EMBORRACHADO 04KG",
    "unitario": 236.0,
    "aVista": 205.32
  },
  {
    "sku": "i000832",
    "descricao": "HALTER EMBORRACHADO 05KG",
    "unitario": 295.0,
    "aVista": 256.65
  },
  {
    "sku": "i000833",
    "descricao": "HALTER EMBORRACHADO 06KG",
    "unitario": 354.0,
    "aVista": 307.98
  },
  {
    "sku": "i000834",
    "descricao": "HALTER EMBORRACHADO 07KG",
    "unitario": 413.0,
    "aVista": 359.31
  },
  {
    "sku": "i000835",
    "descricao": "HALTER EMBORRACHADO 08KG",
    "unitario": 471.0,
    "aVista": 409.77
  },
  {
    "sku": "i000836",
    "descricao": "HALTER EMBORRACHADO 09KG",
    "unitario": 530.0,
    "aVista": 461.1
  },
  {
    "sku": "i000837",
    "descricao": "HALTER EMBORRACHADO 10KG",
    "unitario": 589.0,
    "aVista": 512.43
  },
  {
    "sku": "i012439",
    "descricao": "Halter Nacional Arte Nobrega Preto 10kg",
    "unitario": 247.86,
    "aVista": 215.64
  },
  {
    "sku": "i012430",
    "descricao": "Halter Nacional Arte Nobrega Preto 1kg",
    "unitario": 25.14,
    "aVista": 21.87
  },
  {
    "sku": "i012431",
    "descricao": "Halter Nacional Arte Nobrega Preto 2kg",
    "unitario": 49.5,
    "aVista": 43.06
  },
  {
    "sku": "i012432",
    "descricao": "Halter Nacional Arte Nobrega Preto 3kg",
    "unitario": 74.73,
    "aVista": 65.02
  },
  {
    "sku": "i012433",
    "descricao": "Halter Nacional Arte Nobrega Preto 4kg",
    "unitario": 99.09,
    "aVista": 86.21
  },
  {
    "sku": "i012434",
    "descricao": "Halter Nacional Arte Nobrega Preto 5kg",
    "unitario": 124.32,
    "aVista": 108.16
  },
  {
    "sku": "i012435",
    "descricao": "Halter Nacional Arte Nobrega Preto 6kg",
    "unitario": 148.68,
    "aVista": 129.35
  },
  {
    "sku": "i012436",
    "descricao": "Halter Nacional Arte Nobrega Preto 7kg",
    "unitario": 173.91,
    "aVista": 151.3
  },
  {
    "sku": "i012437",
    "descricao": "Halter Nacional Arte Nobrega Preto 8kg",
    "unitario": 198.27,
    "aVista": 172.49
  },
  {
    "sku": "i012438",
    "descricao": "Halter Nacional Arte Nobrega Preto 9kg",
    "unitario": 223.5,
    "aVista": 194.44
  },
  {
    "sku": "i000846",
    "descricao": "KETTLEBELL EMBORRACHADO 04KG",
    "unitario": 246.0,
    "aVista": 214.02
  },
  {
    "sku": "i000847",
    "descricao": "KETTLEBELL EMBORRACHADO 06KG",
    "unitario": 368.0,
    "aVista": 320.16
  },
  {
    "sku": "i000848",
    "descricao": "KETTLEBELL EMBORRACHADO 08KG",
    "unitario": 491.0,
    "aVista": 427.17
  },
  {
    "sku": "i000849",
    "descricao": "KETTLEBELL EMBORRACHADO 10KG",
    "unitario": 614.0,
    "aVista": 534.18
  },
  {
    "sku": "i000850",
    "descricao": "KETTLEBELL EMBORRACHADO 12KG",
    "unitario": 736.0,
    "aVista": 640.32
  },
  {
    "sku": "i000851",
    "descricao": "KETTLEBELL EMBORRACHADO 14KG",
    "unitario": 859.0,
    "aVista": 747.33
  },
  {
    "sku": "i000852",
    "descricao": "KETTLEBELL EMBORRACHADO 16KG",
    "unitario": 981.0,
    "aVista": 853.47
  },
  {
    "sku": "i000853",
    "descricao": "KETTLEBELL EMBORRACHADO 18KG",
    "unitario": 1104.0,
    "aVista": 960.48
  },
  {
    "sku": "i000854",
    "descricao": "KETTLEBELL EMBORRACHADO 20KG",
    "unitario": 1226.0,
    "aVista": 1066.62
  },
  {
    "sku": "i000855",
    "descricao": "KETTLEBELL EMBORRACHADO 22KG",
    "unitario": 1348.0,
    "aVista": 1172.76
  },
  {
    "sku": "i000856",
    "descricao": "KETTLEBELL EMBORRACHADO 24KG",
    "unitario": 1470.0,
    "aVista": 1278.9
  },
  {
    "sku": "i000857",
    "descricao": "KETTLEBELL EMBORRACHADO 26KG",
    "unitario": 1592.0,
    "aVista": 1385.04
  },
  {
    "sku": "i000858",
    "descricao": "KETTLEBELL EMBORRACHADO 28KG",
    "unitario": 1714.0,
    "aVista": 1491.18
  },
  {
    "sku": "i000859",
    "descricao": "KETTLEBELL EMBORRACHADO 30KG",
    "unitario": 1836.0,
    "aVista": 1597.32
  },
  {
    "sku": "i012536",
    "descricao": "Kettlebell Nacional Arte Nobrega Action 12kg",
    "unitario": 192.18,
    "aVista": 167.2
  },
  {
    "sku": "i012531",
    "descricao": "Kettlebell Nacional Arte Nobrega Action 4kg",
    "unitario": 64.29,
    "aVista": 55.93
  },
  {
    "sku": "i012533",
    "descricao": "Kettlebell Nacional Arte Nobrega Action 8kg",
    "unitario": 128.67,
    "aVista": 111.94
  },
  {
    "sku": "i000925",
    "descricao": "MAO FRANCESA - SERGINHO",
    "unitario": 215.05,
    "aVista": 187.09
  },
  {
    "sku": "i000918",
    "descricao": "PUXADOR CORDA - POLIMET",
    "unitario": 182.97,
    "aVista": 159.18
  },
  {
    "sku": "i000923",
    "descricao": "PUXADOR CORDA - SERGINHO",
    "unitario": 382.0,
    "aVista": 332.34
  },
  {
    "sku": "i001705",
    "descricao": "PUXADOR COSTAS 1,20CM - SERGINHO - MD5051",
    "unitario": 1063.0,
    "aVista": 924.81
  },
  {
    "sku": "i000921",
    "descricao": "PUXADOR CROSS OVER ABERTO - POLIMET",
    "unitario": 73.62,
    "aVista": 64.05
  },
  {
    "sku": "i000919",
    "descricao": "PUXADOR ESTRIBO - SERGINHO",
    "unitario": 627.0,
    "aVista": 545.49
  },
  {
    "sku": "i000920",
    "descricao": "PUXADOR ESTRIBO DUPLO - POLIMET",
    "unitario": 122.0,
    "aVista": 106.14
  },
  {
    "sku": "i000926",
    "descricao": "PUXADOR FITA - SERGINHO",
    "unitario": 48.0,
    "aVista": 41.76
  },
  {
    "sku": "i000914",
    "descricao": "PUXADOR PULLEY 1.20CM EMBORRACHADO - ARTE NOBREGA",
    "unitario": 1172.0,
    "aVista": 1019.64
  },
  {
    "sku": "i000924",
    "descricao": "PUXADOR TORNOZELO - SERGINHO",
    "unitario": 164.0,
    "aVista": 142.68
  },
  {
    "sku": "i000922",
    "descricao": "PUXADOR TRIANGULO - SERGINHO",
    "unitario": 818.0,
    "aVista": 711.66
  },
  {
    "sku": "i012179",
    "descricao": "PUXADOR TRICEPS RETO - SERGINHO",
    "unitario": 791.0,
    "aVista": 688.17
  },
  {
    "sku": "i000913",
    "descricao": "PUXADOR V EMBORRACHADO - SERGINHO",
    "unitario": 709.0,
    "aVista": 616.83
  },
  {
    "sku": "i001174",
    "descricao": "PUXADOR W ARTICULADO EMBORRACHADO",
    "unitario": 1118.0,
    "aVista": 972.66
  },
  {
    "sku": "i000911",
    "descricao": "SUPORTE 3 EM 1 COR PRATA - MULTIFIT",
    "unitario": 3457.0,
    "aVista": 3007.59
  },
  {
    "sku": "i001023",
    "descricao": "SUPORTE 3X1 - ARTE NOBREGA",
    "unitario": 791.89,
    "aVista": 688.94
  },
  {
    "sku": "i001321",
    "descricao": "SUPORTE ARGOLA - BODY ART",
    "unitario": 205.85,
    "aVista": 179.09
  },
  {
    "sku": "i001025",
    "descricao": "SUPORTE DE PAREDE PARA 5 BARRAS - PRETO MICRO - GURIK",
    "unitario": 1.0,
    "aVista": 0.87
  },
  {
    "sku": "i001092",
    "descricao": "SUPORTE DUMBELL 12 PARES - ARTE NOBREGA",
    "unitario": 1934.82,
    "aVista": 1683.29
  },
  {
    "sku": "i001104",
    "descricao": "SUPORTE PARA 12 BARRAS COR PRATA - MULTIFIT",
    "unitario": 381.27,
    "aVista": 331.7
  },
  {
    "sku": "i000861",
    "descricao": "SUPORTE PARA HALTERES 10 PARES - PRETO",
    "unitario": 4360.0,
    "aVista": 3793.2
  },
  {
    "sku": "i001368",
    "descricao": "SUPORTE PARA HALTERES 5 PARES - PRATA",
    "unitario": 2070.0,
    "aVista": 1800.9
  },
  {
    "sku": "i000860",
    "descricao": "SUPORTE PARA HALTERES 5 PARES - PRETO",
    "unitario": 3270.0,
    "aVista": 2844.9
  },
  {
    "sku": "i000867",
    "descricao": "TORNOZELEIRA EMBORRACHADA 01KG KIT PAR",
    "unitario": 164.0,
    "aVista": 142.68
  },
  {
    "sku": "i000868",
    "descricao": "TORNOZELEIRA EMBORRACHADA 02KG KIT PAR",
    "unitario": 208.0,
    "aVista": 180.96
  },
  {
    "sku": "i000869",
    "descricao": "TORNOZELEIRA EMBORRACHADA 03KG KIT PAR",
    "unitario": 229.0,
    "aVista": 199.23
  },
  {
    "sku": "i000870",
    "descricao": "TORNOZELEIRA EMBORRACHADA 04KG KIT PAR",
    "unitario": 273.0,
    "aVista": 237.51
  },
  {
    "sku": "i000871",
    "descricao": "TORNOZELEIRA EMBORRACHADA 05KG KIT PAR",
    "unitario": 300.0,
    "aVista": 261.0
  },
  {
    "sku": "i000872",
    "descricao": "TORNOZELEIRA EMBORRACHADA 06KG KIT PAR",
    "unitario": 355.0,
    "aVista": 308.85
  },
  {
    "sku": "i000873",
    "descricao": "TORNOZELEIRA EMBORRACHADA 07KG KIT PAR",
    "unitario": 409.0,
    "aVista": 355.83
  },
  {
    "sku": "i000874",
    "descricao": "TORNOZELEIRA EMBORRACHADA 08KG KIT PAR",
    "unitario": 491.0,
    "aVista": 427.17
  },
  {
    "sku": "i000875",
    "descricao": "TORNOZELEIRA EMBORRACHADA 09KG KIT PAR",
    "unitario": 518.0,
    "aVista": 450.66
  },
  {
    "sku": "i000866",
    "descricao": "TORNOZELEIRA EMBORRACHADA 1/2 KIT PAR",
    "unitario": 37.95,
    "aVista": 33.02
  },
  {
    "sku": "i000876",
    "descricao": "TORNOZELEIRA EMBORRACHADA 10KG KIT PAR",
    "unitario": 627.0,
    "aVista": 545.49
  },
  {
    "sku": "i001221",
    "descricao": "TORNOZELEIRA EMBORRACHADA 11KG",
    "unitario": 654.0,
    "aVista": 568.98
  },
  {
    "sku": "i000877",
    "descricao": "TORNOZELEIRA EMBORRACHADA 12KG",
    "unitario": 763.0,
    "aVista": 663.81
  },
  {
    "sku": "i001222",
    "descricao": "TORNOZELEIRA EMBORRACHADA 13KG",
    "unitario": 432.0,
    "aVista": 375.84
  },
  {
    "sku": "i000878",
    "descricao": "TORNOZELEIRA EMBORRACHADA 14KG KIT PAR",
    "unitario": 872.0,
    "aVista": 758.64
  },
  {
    "sku": "i001175",
    "descricao": "TORNOZELEIRA EMBORRACHADA 15KG KIT PAR",
    "unitario": 927.0,
    "aVista": 806.49
  },
  {
    "sku": "i000879",
    "descricao": "TORNOZELEIRA EMBORRACHADA 16KG KIT PAR",
    "unitario": 981.0,
    "aVista": 853.47
  },
  {
    "sku": "i000880",
    "descricao": "TORNOZELEIRA EMBORRACHADA 18KG",
    "unitario": 1036.0,
    "aVista": 901.32
  },
  {
    "sku": "i000881",
    "descricao": "TORNOZELEIRA EMBORRACHADA 20KG",
    "unitario": 1199.0,
    "aVista": 1043.13
  },
  {
    "sku": "i000882",
    "descricao": "TORNOZELEIRA EMBORRACHADA 22KG KIT PAR",
    "unitario": 690.0,
    "aVista": 600.3
  },
  {
    "sku": "i001843",
    "descricao": "PLATAFORMA VIBRATORIA KIKOS FITPLATE BRANCA iX - 110V",
    "unitario": 6390.0,
    "aVista": 5559.3
  },
  {
    "sku": "i001842",
    "descricao": "PLATAFORMA VIBRATORIA KIKOS FITPLATE BRANCA iX - 220V",
    "unitario": 6390.0,
    "aVista": 5559.3
  },
  {
    "sku": "i001841",
    "descricao": "PLATAFORMA VIBRATORIA KIKOS FITPLATE PRETA iX - 110V",
    "unitario": 6390.0,
    "aVista": 5559.3
  },
  {
    "sku": "i001840",
    "descricao": "PLATAFORMA VIBRATORIA KIKOS FITPLATE PRETA iX - 220V",
    "unitario": 6390.0,
    "aVista": 5559.3
  },
  {
    "sku": "i013867",
    "descricao": "TORRE DE HALTER SEXTAVADO EMBORRACHADO - VAZIA  - KIKOS",
    "unitario": 4990.0,
    "aVista": 4341.3
  }
];
