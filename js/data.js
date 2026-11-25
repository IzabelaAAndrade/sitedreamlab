/* ==========================================================
   DREAM Lab — conteúdo editável
   Para atualizar a equipe ou as publicações, edite só este arquivo.
   grupo: "docente" | "dout" (doutoranda) | "mest" (mestranda) | "ic"
   Foto: coloque a imagem em assets/equipe/ e preencha "foto"
   (ex.: foto: "assets/equipe/clarissa.jpg"). Sem foto, aparecem as iniciais.
   ========================================================== */

const TEAM = [
  {
    nome: "Clarissa Rocha",
    completo: "Clarissa Ribeiro Reily Rocha",
    grupo: "docente",
    cargo: "Chefe de Laboratório",
    temas: ["quimiorresistência", "reparo de DNA", "CRISPR/Cas9"],
    bio: "Graduada (2010) e doutora em Biotecnologia (2015) pela USP, com pós-doutorado no MIT. É professora adjunta do Departamento de Oncologia Clínica e Experimental da Unifesp, coordena o Programa de Pós-Graduação em Hematologia e Oncologia e é membro afiliada da Academia Brasileira de Ciências.",
    links: { Lattes: "http://lattes.cnpq.br/4139332389374038", "Google Scholar": "https://scholar.google.com.br/citations?user=Vzf5bFwAAAAJ&hl=pt-BR&oi=ao" },
    foto: "assets/equipe/clarissa.avif"
  },
  {
    nome: "Ana Teixeira",
    completo: "Ana Beatriz da Silva Teixeira",
    grupo: "dout",
    cargo: "Doutoranda",
    temas: ["BACH1", "Ferroptose"],
    bio: "Biomédica pela Unifesp (2023), com iniciação científica CNPq e FAPESP estudando peptídeos derivados de inibidores de protease em células de glioblastoma. Investiga o papel da autofagia coordenada por NRF2 na resposta quimioterápica em glioblastoma.",
    links: { Lattes: "http://lattes.cnpq.br/4311894634723883" },
    foto: "assets/equipe/anabia.avif"
  },
  {
    nome: "Izadora de Souza",
    completo: "Izadora de Souza",
    grupo: "dout",
    cargo: "Doutoranda",
    temas: ["Quimiorresistência", "HMOX1", "Ferroptose"],
    bio: "Bióloga pela UFSCar (2019), onde fez iniciação científica, e mestre pela Unifesp (bolsa FAPESP, 2020–2022). Estuda quimiorresistência em células tumorais e mecanismos de morte celular, com destaque para a ferroptose.",
    links: { Lattes: "http://lattes.cnpq.br/3105117140514498" },
    foto: "assets/equipe/izadora.jpeg"
  },
  {
    nome: "Karoline Almeida Lima",
    completo: "Karoline Almeida Lima",
    grupo: "dout",
    cargo: "Doutoranda",
    temas: ["Câncer de Pulmão", "Quimioterapia", "Imunoterapia"],
    bio: "Bióloga (2021) e mestre em Bioquímica (2022) pela UFSC. Doutoranda do Programa de Hematologia e Oncologia da Unifesp, estuda a biologia molecular do câncer de pulmão e a resistência à quimioterapia e à imunoterapia.",
    links: { Lattes: "http://lattes.cnpq.br/6463171240936774" },
    foto: ""
  },
  {
    nome: "Izabela A. Andrade",
    completo: "Izabela A. Andrade",
    grupo: "dout",
    cargo: "Doutoranda",
    temas: ["NRF2", "HMOX1", "Ferroptose"],
    bio: "Formada em Ciências Biomédicas pela USP, onde fez iniciação científica com bolsa FAPESP no DREAM Lab. Investiga o papel de NRF2, HMOX1 e alvos moleculares relacionados na ferroptose em células tumorais.",
    links: { Lattes: "http://lattes.cnpq.br/6298681912198143" },
    foto: "assets/equipe/izabela.jpeg"
  },
  {
    nome: "Tainá Lins",
    completo: "Tainá Lins",
    grupo: "mest",
    cargo: "Mestranda",
    temas: ["ABCC1", "Ferroptose", "Resistência"],
    bio: "Formada em Biomedicina pela Unifesp/EPM, onde fez iniciação científica com bolsa FAPESP. Estuda o efeito da autofagia na resposta quimioterápica em células de glioblastoma.",
    links: { Lattes: "http://lattes.cnpq.br/2585280502358605" },
    foto: "assets/equipe/taina.jpeg"
  },
  {
    nome: "Juliana Valério",
    completo: "Juliana Valério",
    grupo: "mest",
    cargo: "Mestranda",
    temas: ["Ferroptose", "P53"],
    bio: "Formada em Biomedicina pela Unifesp/EPM, onde fez iniciação científica com bolsa FAPESP. Estuda o efeito da autofagia na resposta quimioterápica em células de glioblastoma.",
    links: { Lattes: "http://lattes.cnpq.br/2585280502358605" },
    foto: "assets/equipe/juliana.jpeg"
  },
  {
    nome: "Alessandra Megiolaro",
    completo: "Alessandra Megiolaro",
    grupo: "ic",
    cargo: "Iniciação Científica",
    temas: ["Biologia Molecular", "Ferroptose"],
    bio: "Estudante de Farmácia na Unifesp.",
    links: { Lattes: "https://lattes.cnpq.br/7721758347446009" },
    foto: "assets/equipe/alessandra.png"
  },
  {
    nome: "Luísa Kawakami Piratello",
    completo: "Luísa Kawakami Piratello",
    grupo: "ic",
    cargo: "Iniciação Científica",
    temas: ["Câncer de Pulmão", "Ferroptose"],
    bio: "Estudante de Ciências Biológicas na Unifesp. Estuda quimiorresistência em linhagens de câncer de pulmão, com foco em ferroptose.",
    links: { Lattes: "https://lattes.cnpq.br/7721758347446009" },
    foto: "assets/equipe/luisa.avif"
  },
  
];

const PUBS = [
  {
    ano: 2026,
    titulo: "HMOX1 controls a heme–ferritin switch that protects cells from ferroptosis",
    autores: "I. de Souza, I. A. M. Andrade, F. P. Freitas, A. B. S. Teixeira, M. C. C. Ramalho, K. A. Lima, A. F. dos Santos, W. Schmitz, G. Fazeli, C. R. R. Rocha & J. P. Friedmann Angeli",
    revista: "Science Advances 12, eaeg3424",
    tipo: "artigo",
    temas: ["ferroptose", "HMOX1", "heme", "ferritina"],
    link: "https://doi.org/10.1126/sciadv.aeg3424"
  },
  {
    ano: 2026,
    titulo: "NRF2 signaling drives chemoresistance in NSCLC and glioblastoma",
    autores: "I. de Souza, L. K. S. Monteiro, A. B. da Silva Teixeira, C. Banca Guedes, K. Almeida Lima, C. H. Dahne de Souza Filho, I. A. M. Andrade, M. C. Clares Ramalho, B. Silva de Oliveira, M. Lazarini & C. R. R. Rocha",
    revista: "Molecular and Cellular Biochemistry",
    tipo: "artigo",
    temas: ["NRF2", "quimiorresistência", "câncer de pulmão", "glioblastoma"],
    link: "https://doi.org/10.1007/s11010-026-05747-z"
  },
  {
    ano: 2026,
    titulo: "Tipping the balance: NRF2’s dual role in ferroptotic fate",
    autores: "de Souza, I., da Silva Teixeira, A. B., Ferreira Dos Santos, A., Friedmann Angeli, J. P., & Ribeiro Reily Rocha, C.",
    revista: "Molecular and Cellular Biochemistry",
    tipo: "revisão",
    temas: ["NRF2", "quimiorresistência", "câncer de pulmão", "glioblastoma"],
    link: "https://www.nature.com/articles/s41389-026-00630-4#author-information"
  },
  {
    ano: 2024,
    titulo: "The role of chaperone-mediated autophagy in drug resistance",
    autores: "A. B. S. Teixeira, M. C. C. Ramalho, I. de Souza, I. A. M. Andrade, I. Y. A. Osawa, C. B. Guedes, B. S. de Oliveira, C. H. D. de Souza Filho, T. L. da Silva, N. C. Moreno, M. T. Latancia & C. R. R. Rocha",
    revista: "Genetics and Molecular Biology 47(Suppl 1), e20230317",
    tipo: "revisão",
    temas: ["autofagia", "chaperonas", "resistência a fármacos"],
    link: "https://doi.org/10.1590/1678-4685-GMB-2023-0317"
  },
  {
    ano: 2022,
    titulo: "High levels of NRF2 sensitize temozolomide-resistant glioblastoma cells to ferroptosis via ABCC1/MRP1",
    autores: "I. de Souza, L. K. S. Monteiro, C. B. Guedes, M. M. Silva, M. Andrade-Tomaz, B. Contieri, M. T. Latancia, D. Mendes, B. F. M. M. Porchia et al.",
    revista: "",
    temas: ["ferroptose", "NRF2", "glioblastoma"],
    link: "https://www.nature.com/articles/s41419-022-05044-9"
  },
  {
    ano: 2022,
    titulo: "Ferroptosis Modulation: Potential Therapeutic Target for Glioblastoma Treatment",
    autores: "Izadora de Souza, Maria Carolina Clares Ramalho, Camila Banca Guedes, Isabeli Yumi Araújo Osawa, Linda Karolynne Seregni Monteiro et al.",
    revista: "",
    tipo: "revisão",
    temas: ["ferroptose", "glioblastoma"],
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9266903/"
  },
  {
    ano: 2020,
    titulo: "Revealing Temozolomide Resistance Mechanisms via Genome-Wide CRISPR Libraries",
    autores: "Clarissa Ribeiro Reily Rocha, Alexandre Reily Rocha, Matheus Molina Silva, Luciana Rodrigues Gomes, Marcela Latância, Marina Andrade Tomaz et al.",
    revista: "",
    temas: ["CRISPR", "temozolomida"],
    link: "https://www.mdpi.com/2073-4409/9/12/2573"
  },
  {
    ano: 2018,
    titulo: "DNA repair pathways and cisplatin resistance: an intimate relationship",
    autores: "Clarissa Ribeiro Reily Rocha, Matheus Molina Silva, Annabel Quinet, Januario Bispo Cabral-Neto, Carlos Frederico Martins Menck",
    revista: "Clinics",
    temas: ["reparo de DNA", "cisplatina"],
    link: "https://www.sciencedirect.com/science/article/pii/S1807593222011255?via%3Dihub"
  },
  {
    ano: 2016,
    titulo: "NRF2 and glutathione are key resistance mediators to temozolomide in glioma and melanoma cells",
    autores: "Clarissa Ribeiro Reily Rocha, Gustavo Satoru Kajitani, Annabel Quinet, Rodrigo Soares Fortunato, Carlos Frederico Martins Menck et al.",
    revista: "Oncotarget",
    temas: ["NRF2", "glutationa", "glioma", "melanoma"],
    link: "https://pubmed.ncbi.nlm.nih.gov/27344172/"
  },
  {
    ano: 2014,
    titulo: "Glutathione depletion sensitizes cisplatin- and temozolomide-resistant glioma cells in vitro and in vivo",
    autores: "CRR Rocha, CCM Garcia, DB Vieira, A Quinet, LC de Andrade-Lima, V Munford, JE Belizário, CFM Menck",
    revista: "Cell Death and Disease",
    temas: ["glutationa", "glioma"],
    link: "https://www.nature.com/articles/cddis2014465"
  },
  {
    ano: 2012,
    titulo: "The role of DNA repair in the pluripotency and differentiation of human stem cells",
    autores: "Clarissa Ribeiro Reily Rocha, Leticia Koch Lerner, Oswaldo Keith Okamoto, Maria Carolina Marchetto, Carlos Frederico Martins Menck",
    revista: "",
    temas: ["reparo de DNA", "células-tronco"],
    link: "https://pubmed.ncbi.nlm.nih.gov/23010441/"
  }
];

/* ==========================================================
   GALERIA — coloque as fotos em assets/galeria/ e preencha "src".
   formato: "alto", "largo" ou "quadrado" (muda o tamanho do card).
   Enquanto "src" estiver vazio, aparece um espaço reservado colorido.
   ========================================================== */
const GALLERY = [
  { src: "assets/galeria/bancada2.jpeg", legenda: "dia de bancada", formato: "alto" },
  { src: "assets/galeria/seminarios.jpeg", legenda: "seminários", formato: "largo" },
  { src: "assets/galeria/congresso_sbbc.jpeg", legenda: "congresso", formato: "quadrado" },
  { src: "assets/galeria/cultura.jpeg", legenda: "cultura de células", formato: "quadrado" },
  { src: "assets/galeria/posters_japao.jpeg", legenda: "apresentação de pôster", formato: "alto" },
  { src: "assets/galeria/cafe.jpeg", legenda: "café no lab", formato: "largo" },
  { src: "assets/galeria/confra_junina.jpeg", legenda: "comemorações", formato: "quadrado" },
  { src: "assets/galeria/defesa_cami.jpeg", legenda: "defesas", formato: "quadrado" }
];

