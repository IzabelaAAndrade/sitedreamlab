/* ==========================================================
   DREAM Lab — traduções para inglês (i18n.js)

   Como funciona:
   - O português continua sendo escrito direto no index.html e no data.js.
   - Aqui ficam só as versões em inglês, usando o texto em português como "chave".
   - Se um texto não tiver tradução aqui, ele simplesmente aparece em português.

   Mudou um texto no index.html? Atualize a chave (lado esquerdo) aqui também,
   senão ele deixa de ser traduzido.
   ========================================================== */

const I18N = {
  /* ---------- textos fixos do index.html ---------- */
  page: {
    "DREAM Lab · Drug REsistance And Mutagenesis Lab · Unifesp": "DREAM Lab · Drug REsistance And Mutagenesis Lab · Unifesp",
    "DREAM Lab (Unifesp): estudamos os mecanismos moleculares e celulares da resistência de células tumorais à quimioterapia.":
      "DREAM Lab (Unifesp): we study the molecular and cellular mechanisms behind tumor cell resistance to chemotherapy.",

    // preloader e menu
    "replicando o DNA": "replicating DNA",
    "Sobre": "About",
    "Pesquisa": "Research",
    "Equipe": "Team",
    "Publicações": "Publications",
    "Galeria": "Gallery",
    "Na mídia": "Media",
    "Contato": "Contact",

    // hero
    "Unifesp · Escola Paulista de Medicina · desde 2019": "Unifesp · Escola Paulista de Medicina · since 2019",
    "Como tumores": "How do tumors",
    "à quimioterapia?": "chemotherapy?",
    "Somos o": "We are the",
    "Investigamos os mecanismos moleculares e celulares que tornam células tumorais resistentes ao tratamento.":
      "We investigate the molecular and cellular mechanisms that make tumor cells resistant to treatment.",
    "Conheça o lab": "Meet the lab",
    "Nossa equipe": "Our team",
    "ferroptose ✦": "ferroptosis ✦",

    // faixa de temas
    "quimiorresistência": "chemoresistance",
    "ferroptose": "ferroptosis",
    "reparo de DNA": "DNA repair",
    "autofagia": "autophagy",
    "câncer de pulmão": "lung cancer",
    "temozolomida": "temozolomide",
    "onco-hematologia": "hemato-oncology",

    // sobre
    "01 — sobre nós": "01 — about us",
    "ano de fundação": "year founded",
    "pesquisadoras": "researchers",
    "publicações em destaque": "featured publications",
    "laboratórios parceiros": "partner labs",

    // pesquisa
    "02 — pesquisa": "02 — research",
    "O que a gente": "What we",
    "estuda": "study",
    "Áreas de foco diferentes, um objetivo em comum: entender a resistência tumoral para tratar melhor.":
      "Different areas of focus, one shared goal: understanding tumor resistance to treat it better.",
    "role para explorar →": "scroll to explore →",
    "Quimiorresistência": "Chemoresistance",
    "Os mecanismos moleculares e celulares que permitem a células tumorais escapar da quimioterapia, como a temozolomida e a cisplatina.":
      "The molecular and cellular mechanisms that let tumor cells escape chemotherapy drugs such as temozolomide and cisplatin.",
    "Ferroptose": "Ferroptosis",
    "Morte celular dependente de ferro como alvo terapêutico: o papel de NRF2, HMOX1, heme e ferritina em glioblastoma e câncer de pulmão.":
      "Iron-dependent cell death as a therapeutic target: the roles of NRF2, HMOX1, heme and ferritin in glioblastoma and lung cancer.",
    "Reparo de DNA": "DNA repair",
    "As vias de reparo e de tolerância a lesões no DNA e sua relação íntima com a resistência a quimioterápicos.":
      "DNA repair and damage tolerance pathways, and their intimate relationship with resistance to chemotherapy.",
    "Edição gênica CRISPR/Cas9": "CRISPR/Cas9 gene editing",
    "Bibliotecas CRISPR genômicas para revelar genes que sustentam a resistência à temozolomida.":
      "Genome-wide CRISPR libraries to uncover the genes that sustain temozolomide resistance.",
    "mRNAs como terapia": "mRNAs as therapy",
    "Estudos com mRNAs como estratégia terapêutica: usar a própria maquinaria da célula para produzir moléculas capazes de vencer a resistência tumoral.":
      "mRNA as a therapeutic strategy: using the cell's own machinery to produce molecules that can overcome tumor resistance.",
    "Autofagia": "Autophagy",
    "Como a autofagia, incluindo a autofagia mediada por chaperonas e a coordenada por NRF2, interage com a ferroptose e influencia a resposta à quimioterapia.":
      "How autophagy, including chaperone-mediated and NRF2-coordinated autophagy, interacts with ferroptosis and shapes the response to chemotherapy.",
    "Nossos modelos": "Our models",
    "neoplasias hematológicas": "hematologic neoplasms",
    "Linhagens tumorais humanas, com foco em quimioterapia e, mais recentemente, imunoterapia.":
      "Human tumor cell lines, with a focus on chemotherapy and, more recently, immunotherapy.",

    // equipe
    "03 — equipe": "03 — team",
    "As cientistas por trás": "The scientists behind",
    "das pipetas": "the pipettes",
    "Conheça nossas pesquisadoras. Clique em um card para ler mais.": "Meet our researchers. Click a card to read more.",
    "Todas": "All",
    "Docentes": "Faculty",
    "Doutorandas": "PhD students",
    "Mestrandas": "Master's students",
    "Iniciação Científica": "Undergraduate researchers",
    "Filtrar equipe": "Filter team",

    // publicações
    "04 — publicações": "04 — publications",
    "Nossos": "Our",
    "trabalhos": "work",
    "buscar por título, autora, tema…": "search by title, author, topic…",
    "Buscar publicações": "Search publications",

    // nosso jeito
    "05 — nosso jeito": "05 — our vibe",
    "Ciência séria,": "Serious science,",
    "dia a dia leve.": "lighthearted days.",
    "Queremos um ambiente acolhedor e colaborativo, com rigor científico e uma equipe alegre no cotidiano. Cada pesquisadora tem seu foco, mas a gente se apoia em todas as frentes.":
      "We want a welcoming, collaborative place, with scientific rigor and a cheerful team every day. Each researcher has her own focus, but we support each other on every front.",
    "psiu: arrasta os adesivos ✿": "psst: drag the stickers around ✿",
    "🧫 cultura de células": "🧫 cell culture",
    "☕ café no lab": "☕ lab coffee",
    "💜 mulheres na ciência": "💜 women in science",
    "✨ colaboração": "✨ collaboration",

    // galeria
    "06 — galeria": "06 — gallery",
    "Momentos": "Life at",
    "Bancada, congressos, cafés e comemorações. Clique numa foto para ampliar.":
      "Bench work, conferences, coffee breaks and celebrations. Click a photo to enlarge it.",
    "Foto anterior": "Previous photo",
    "Próxima foto": "Next photo",

    // mídia
    "07 — na mídia": "07 — in the media",
    "A gente também": "We also",
    "aparece": "show up",
    "por aí": "out there",
    "Prêmio Octavio Frias de Oliveira": "Octavio Frias de Oliveira Award",
    "Vídeo sobre a pesquisa de Clarissa Rocha em gliomas: tumores resistentes à quimioterapia expressavam um gene que influencia os níveis de glutationa, que pode se ligar à temozolomida e impedir que ela chegue ao núcleo da célula tumoral.":
      "A video on Clarissa Rocha's glioma research: chemotherapy-resistant tumors expressed a gene that affects glutathione levels, and glutathione can bind temozolomide and keep it from reaching the tumor cell's nucleus.",
    "assistir no YouTube ↗": "watch on YouTube ↗",
    "Episódio \"Herança Genética\" (27/10/2019), sobre edição gênica e suas aplicações na medicina.":
      "\"Herança Genética\" (Genetic Inheritance) episode, Oct 27, 2019, on gene editing and its uses in medicine. In Portuguese.",
    "Assistir no YouTube: Prêmio Octavio Frias de Oliveira 2017": "Watch on YouTube: 2017 Octavio Frias de Oliveira Award",
    "Assistir no YouTube: Matéria de Capa, Herança Genética": "Watch on YouTube: Matéria de Capa, Herança Genética",

    // parcerias
    "08 — parcerias": "08 — partnerships",
    "Laboratórios": "Partner",
    "parceiros": "labs",
    "Laboratório de Reparo de DNA": "DNA Repair Laboratory",
    "Estuda reparo de DNA e mutagênese em células de mamíferos, incluindo células de pacientes com xeroderma pigmentosum, com foco em tolerância a lesões e apoptose.":
      "Studies DNA repair and mutagenesis in mammalian cells, including cells from xeroderma pigmentosum patients, with a focus on damage tolerance and apoptosis.",
    "saiba mais ↗": "learn more ↗",
    "Grupo da Unifesp liderado por Mariana Lazarini que estuda neoplasias hematológicas em busca de novos alvos para terapia molecular.":
      "A Unifesp group led by Mariana Lazarini that studies hematologic neoplasms in search of new targets for molecular therapy.",
    "Laboratório de Sinalização Molecular Aplicada 🧬": "Applied Molecular Signaling Laboratory 🧬",
    "Laboratório da Unifesp que colabora com o DREAM Lab.": "A Unifesp laboratory that collaborates with the DREAM Lab.",

    // contato
    "09 — contato": "09 — contact",
    "Faça uma": "Come",
    "visita!": "visit us!",
    "Quer fazer parte do nosso grupo? Ficou curiosa(o) sobre nossas pesquisas? Fala com a gente :)":
      "Want to join our group? Curious about our research? Get in touch :)",
    "Endereço": "Address",
    "Av. Dr. Diogo de Faria, 824 — 5º andar": "Av. Dr. Diogo de Faria, 824 — 5th floor",
    "Tel.: (11) 5539-7289": "Phone: +55 (11) 5539-7289",
    "Redes sociais": "Social media",
    "Mapa: Av. Dr. Diogo de Faria, 824, São Paulo": "Map: Av. Dr. Diogo de Faria, 824, São Paulo",

    // rodapé e janelas
    "Drug REsistance And Mutagenesis Lab · Departamento de Oncologia Clínica e Experimental · Unifesp":
      "Drug REsistance And Mutagenesis Lab · Department of Clinical and Experimental Oncology · Unifesp",
    "feito com 💗 pela equipe DREAM Lab · ©": "made with 💗 by the DREAM Lab team · ©",
    "← voltar": "← back",
    "Fechar": "Close",
    "DREAM Lab, início": "DREAM Lab, home",
    "Abrir menu": "Open menu",
    "Animação de uma dupla hélice de DNA em tons pastel": "Animation of a pastel DNA double helix",
    "Rolar para baixo": "Scroll down"
  },

  /* ---------- textos montados pelo main.js ---------- */
  ui: {
    pt: {
      words: ["resistem", "se adaptam", "sobrevivem", "escapam"],
      scrubHighlight: ["2019,", "2019", "Clarissa", "Rocha,", "sobrevivem", "quimioterapia."],
      about: "Sobre", topics: "Temas", photoOf: "Foto de", review: "artigo de revisão",
      empty: "nenhum trabalho encontrado ✿ tente outro termo", yourPhoto: "sua foto aqui",
      switchLabel: "Switch to English"
    },
    en: {
      words: ["resist", "adapt to", "survive", "escape"],
      scrubHighlight: ["2019,", "Clarissa", "Rocha", "survive", "chemotherapy."],
      about: "About", topics: "Topics", photoOf: "Photo of", review: "review article",
      empty: "no papers found ✿ try another term", yourPhoto: "your photo here",
      switchLabel: "Mudar para português"
    }
  },

  /* texto grande do "Sobre" (aquele que acende palavra por palavra) */
  scrub: {
    en: "The DREAM Lab was founded in 2019 by Prof. Clarissa Rocha to understand why some tumor cells survive chemotherapy. Today we are part of the Graduate Program in Medicine (Hematology and Oncology), in the Blood Center building of Unifesp's University Hospital."
  },

  /* ---------- conteúdo do data.js ---------- */
  // cargos e temas (equipe e publicações); maiúsculas/minúsculas não importam
  terms: {
    "chefe de laboratório": "Principal Investigator",
    "pesquisadora associada": "Associate Researcher",
    "doutoranda": "PhD Student",
    "doutoranda (doutorado direto)": "PhD Student (direct PhD)",
    "mestranda": "Master's Student",
    "iniciação científica": "Undergraduate Researcher",
    "quimiorresistência": "chemoresistance",
    "reparo de dna": "DNA repair",
    "ferroptose": "ferroptosis",
    "câncer de pulmão": "lung cancer",
    "terapia gênica": "gene therapy",
    "resistência": "resistance",
    "biologia molecular": "molecular biology",
    "autofagia": "autophagy",
    "morte celular": "cell death",
    "quimioterapia": "chemotherapy",
    "imunoterapia": "immunotherapy",
    "ferritina": "ferritin",
    "chaperonas": "chaperones",
    "resistência a fármacos": "drug resistance",
    "temozolomida": "temozolomide",
    "cisplatina": "cisplatin",
    "glutationa": "glutathione",
    "células-tronco": "stem cells",
    "onco-hematologia": "hemato-oncology",
    // legendas da galeria
    "dia de bancada": "bench day",
    "seminários": "seminars",
    "congresso": "conference",
    "cultura de células": "cell culture",
    "apresentação de pôster": "poster presentation",
    "café no lab": "lab coffee",
    "comemorações": "celebrations",
    "defesas": "thesis defenses"
  },

  // bios em inglês, pelo "nome" usado no data.js
  bios: {
    "Clarissa Rocha": "BSc (2010) and PhD in Biotechnology (2015) from the University of São Paulo (USP), with a postdoc at MIT. She is an adjunct professor in the Department of Clinical and Experimental Oncology at Unifesp, coordinates the Graduate Program in Hematology and Oncology, and is an affiliate member of the Brazilian Academy of Sciences.",
    "Ana Teixeira": "Biomedical scientist from Unifesp (2023), with a Master's in Oncology from the same university, based on autophagy research carried out at the DREAM Lab, and international experience in Germany. She is now a FAPESP-funded PhD student investigating the role of BACH1 in regulating ferroptosis across different cancer cell lines.",
    "Izadora de Souza": "Biologist from UFSCar (2019), where she did undergraduate research, and Master's from Unifesp (FAPESP fellowship, 2020–2022). She studies chemoresistance in tumor cells and cell death mechanisms, especially ferroptosis.",
    "Karoline Almeida Lima": "Biologist (2021) with a Master's in Biochemistry (2022) from UFSC. A PhD student in Unifesp's Hematology and Oncology Program, she studies the molecular biology of lung cancer and resistance to chemotherapy and immunotherapy.",
    "Izabela A. Andrade": "Graduated in Biomedical Sciences from USP, where she did FAPESP-funded undergraduate research at the DREAM Lab. She investigates the role of NRF2, HMOX1 and related molecular targets in ferroptosis in tumor cells.",
    "Tainá Lins": "Graduated in Biomedicine from Unifesp/EPM, where she did FAPESP-funded undergraduate research. She studies how autophagy affects the chemotherapy response of glioblastoma cells.",
    "Juliana Valério": "Graduated in Biomedicine from Unifesp/EPM in 2025, with FAPESP-funded undergraduate research. She currently studies how the transcription factors p53 and NRF2 modulate ferroptotic cell death in cell lines.",
    "Alessandra Megiolaro": "Pharmacy student at Unifesp.",
    "Luísa Kawakami Piratello": "Biological Sciences student at Unifesp. She studies chemoresistance in lung cancer cell lines, with a focus on ferroptosis."
  }
};
