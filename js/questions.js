// ===== BANCO DE PERGUNTAS =====
// Fonte: PNA 2024 – Parte I – Versão B (perguntas 1-75).
// Respostas: grelha oficial PNA 2024, coluna «Prova B».
// Parte II (76-150) ainda sem grelha de respostas: não incluída.

const TOPICS = {
    cardiologia: { label: 'Cardiologia', icon: '❤️' },
    pneumologia: { label: 'Pneumologia', icon: '🫁' },
    medicina_interna: { label: 'Medicina Interna', icon: '🩺' },
    pediatria: { label: 'Pediatria', icon: '🧸' },
    infecciologia: { label: 'Infecciologia', icon: '🦠' },
    gastroenterologia: { label: 'Gastroenterologia', icon: '🫃' },
    oftalmologia: { label: 'Oftalmologia', icon: '👁️' },
    neurologia: { label: 'Neurologia', icon: '🧠' }
};

const EXAM_PNA_2024_B = 'PNA 2024 · Parte I · Versão B';
const ANSWERS_PNA_2024_B = 'ACEEBBBADAADEAADDAEBAECAEEEEDBAEADCBDAEEEEBBADCEDDBBCAECBDACCEEBECADBEEABDD';

const QUESTIONS = [
    {
        n: 1, topic: 'medicina_interna',
        text: 'Um homem de 60 anos, gestor de empresas, recorre à consulta de medicina geral e familiar para reavaliação de ejaculação precoce, que apresenta desde há dois anos. A história médica revela diabetes mellitus tipo 2, controlada com medidas dietéticas, e não faz medicação habitual. Desde o seu divórcio, há dois anos, tem mantido atividade sexual com várias mulheres e gostaria de saber se há alguma medicação que o possa ajudar com os seus problemas sexuais. Há um ano frequentou consultas de psicologia, onde fez terapia comportamental, mas está desiludido com os resultados, pelo facto de ser necessária a participação da parceira sexual. Os sinais vitais são temperatura 36,5 ºC, frequência respiratória 16/min, frequência cardíaca 100/min e pressão arterial 150/95 mm Hg. O restante exame físico encontra-se dentro dos parâmetros de normalidade.',
        question: 'Qual dos seguintes mecanismos mais provavelmente explica a queixa principal deste doente?',
        options: ['Ansiedade de desempenho.', 'Défice de testosterona.', 'Défice de vitamina B12.', 'Microangiopatia peniana.', 'Neuropatia associada a diabetes.']
    },
    {
        n: 2, topic: 'medicina_interna',
        text: 'Um homem de 29 anos vem ao consultório médico por sede excessiva, aumento do número de micções e perda de peso de 9 kg nos últimos três meses. Nega febre, dor torácica ou abdominal, disúria ou alterações do trânsito intestinal. Ontem fez, na farmácia, uma pesquisa ocasional da glicemia capilar, que revelou um valor de 298 mg/dL. Não tem antecedentes pessoais ou familiares de relevo. Nega consumo de álcool ou tabaco. Os sinais vitais encontram-se dentro dos parâmetros de normalidade. Ele tem 177 cm de altura e pesa 62 kg; IMC 20 kg/m². Ao exame físico apresenta-se com aspeto emagrecido. As mucosas estão coradas e desidratadas. Não há adenopatias palpáveis. O abdómen é mole e depressível, sem organomegalias. O restante exame físico encontra-se dentro dos parâmetros de normalidade. A pesquisa de glicemia capilar realizada hoje, na consulta, revela um valor de 265 mg/dL.',
        question: 'Qual dos seguintes é o próximo passo mais adequado na gestão deste doente?',
        options: ['Dosear anticorpo anti-ilhéus pancreáticos.', 'Dosear o peptídeo C.', 'Iniciar insulinoterapia.', 'Iniciar metformina.', 'Solicitar TC abdominal.']
    },
    {
        n: 3, topic: 'medicina_interna',
        text: 'Uma mulher de 40 anos, desportista, recorre à consulta seis meses após hernioplastia de hérnia inguinal direta à esquerda, com colocação de prótese. A cirurgia, realizada em regime de ambulatório, decorreu sem intercorrências e a doente teve alta, com paracetamol em SOS. O pós-operatório decorreu sem intercorrências de relevo. Ela refere desconforto progressivo na região inguinal esquerda desde há dois meses. Os sinais vitais são temperatura 36,0 ºC, frequência respiratória 13/min, frequência cardíaca 60/min e pressão arterial 130/80 mm Hg. Ela tem 171 cm e pesa 64 kg; IMC 22 kg/m². Ao exame físico apresenta bom estado geral. A região inguinal esquerda apresenta cicatriz em boa evolução, sem tumefação com ou sem manobra de Valsalva, sem rubor ou calor. Tem dor à palpação da região púbica. O restante exame físico encontra-se dentro dos parâmetros de normalidade.',
        question: 'Qual dos seguintes estudos é mais provável de estabelecer um diagnóstico definitivo?',
        options: ['Ecografia da região inguinal.', 'Estudo do sedimento urinário.', 'Observação ginecológica.', 'Radiografia da anca esquerda.', 'Ressonância magnética pélvica.']
    },
    {
        n: 4, topic: 'medicina_interna',
        text: 'Um homem de 75 anos vem ao consultório médico por cansaço de instalação lenta nos últimos seis meses, com agravamento no último mês. A história médica revela diabetes mellitus tipo 2, medicada com metformina. Os sinais vitais são temperatura 37 ºC, frequência respiratória 12/min, frequência cardíaca 92/min e pressão arterial 145/80 mm Hg. Ao exame físico observa-se palidez da pele e mucosas e escleróticas anictéricas. O restante exame físico, incluindo a palpação abdominal, encontra-se dentro dos parâmetros de normalidade.',
        labs: 'Soro: Creatinina 0,9 mg/dL · Bilirrubina total 0,81 mg/dL · LDH 75 U/L\nSangue: Hemoglobina 8,8 g/dL · VGM 100 fL · Leucócitos 3200/mm³ (Neutrófilos 55%, Eosinófilos 2%, Basófilos 0,5%, Linfócitos 35%, Monócitos 6%) · Plaquetas 130 × 10⁹/L',
        question: 'Qual dos seguintes diagnósticos é o mais provável?',
        options: ['Anemia ferropénica.', 'Anemia hemolítica imune.', 'Carência de vitamina B12.', 'Mielofibrose primária.', 'Síndrome mielodisplásica.']
    },
    {
        n: 5, topic: 'pediatria',
        text: 'Uma menina de 5 anos é trazida ao serviço de urgência por febre (máximo 40 ºC) e dejeções diarreicas sanguinolentas com dois dias de evolução. Há seis dias teve alta do internamento de pediatria após 21 dias de antibioterapia com ceftriaxona e clindamicina por pneumonia complicada com derrame. Não tem antecedentes pessoais ou familiares de relevo. Os sinais vitais encontram-se dentro dos parâmetros de normalidade. Ao exame físico apresenta desconforto à palpação abdominal profunda na região periumbilical. O restante exame físico encontra-se dentro dos parâmetros de normalidade.',
        question: 'Qual dos seguintes agentes é a causa mais provável deste quadro de diarreia?',
        options: ['Campylobacter jejuni.', 'Clostridium difficile.', 'Salmonella enteritidis.', 'Shigella dysenteriae.', 'Yersinia enterocolitica.']
    },
    {
        n: 6, topic: 'medicina_interna',
        text: 'Um homem de 59 anos vem ao serviço de urgência por febre e mal-estar geral com um dia de evolução. Refere ainda hematúria macroscópica e lombalgia de intensidade 6 em 10 com cinco dias de evolução. Tem história de obstipação e retorragias desde há dois meses. Os sinais vitais são temperatura 38,9 ºC, frequência respiratória 18/min, frequência cardíaca 94/min e pressão arterial 105/62 mm Hg. A palpação abdominal é indolor, sem defesa e sem massas palpáveis. Tem dor à percussão do ângulo costovertebral à esquerda. O toque retal revela hemorroidas grau 3.',
        labs: 'Soro: Creatinina 0,95 mg/dL · Proteína C reativa 200 mg/L\nSangue: Hemoglobina 8,9 g/dL · Leucócitos 14 000/mm³ (Neutrófilos 90%)\nTC abdominopélvica: hidronefrose esquerda, com dilatação ureteral até à bexiga e lesão vesical com 3 cm na parede lateral esquerda perimeática.',
        question: 'Qual dos seguintes é o próximo passo imediato mais adequado?',
        options: ['Algaliação.', 'Nefrostomia percutânea.', 'Retossigmoidoscopia.', 'Transfusão de concentrado de eritrócitos.', 'Ureterorrenoscopia.']
    },
    {
        n: 7, topic: 'pediatria',
        text: 'Uma menina de 3 anos é trazida ao serviço de urgência por febre com 36 horas de evolução (máximo 40 ºC, picos a cada seis horas, com boa cedência a antipiréticos), associada a rinorreia e tosse. A mãe refere que a menina teve três episódios de tosse emetizante hoje. A menina não tem antecedentes pessoais e familiares de relevo. O programa nacional de vacinação encontra-se atualizado. Os sinais vitais são temperatura 38 ºC, frequência cardíaca 100/min, frequência respiratória 26/min e pressão arterial 98/47 mm Hg; SpO₂ 98% (ar ambiente). Ao exame físico apresenta-se com bom estado geral, corada e hidratada. Observam-se petéquias na face e tronco acima da linha mamilar. O tempo de preenchimento capilar é imediato. A auscultação pulmonar revela ruídos de transmissão superior. O restante exame físico, incluindo a pesquisa de sinais meníngeos, encontra-se dentro dos parâmetros de normalidade.',
        question: 'Além de administrar antipirético, qual dos seguintes é o próximo passo mais adequado?',
        options: ['Dar alta medicada com amoxicilina.', 'Dar alta sob vigilância no domicílio.', 'Iniciar ceftriaxona intravenosa.', 'Solicitar hemograma e estudo da coagulação.', 'Solicitar raio-X do tórax.']
    },
    {
        n: 8, topic: 'medicina_interna',
        text: 'Uma mulher de 36 anos, natural da África Ocidental, vem ao consultório médico para avaliação pré-operatória de cirurgia de estabilização de fratura traumática de vértebra lombar. A história médica revela hipertensão arterial desde os 30 anos, irregularmente acompanhada. Não faz medicação habitual. Os sinais vitais são temperatura 36,1 ºC, frequência respiratória 18/min, frequência cardíaca 79/min e pressão arterial 192/98 mm Hg. O exame físico encontra-se dentro dos parâmetros de normalidade.',
        labs: 'Soro: Creatinina 1,5 mg/dL · Ureia 86 mg/dL · Glucose 92 mg/dL · PCR 1 mg/L · Ácido úrico 4,8 mg/dL · Sódio 142 mEq/L · Potássio 5,0 mEq/L · TSH 2,8 µU/mL · T4 livre 8 µg/dL · VIH 1/2 Positivo · Carga vírica VIH 3620 cópias/mL\nSangue: Hemoglobina 11,3 g/dL · Leucócitos 4320/mm³ · Plaquetas 163 × 10⁹/L · Linfócitos T CD4+ 196 células/µL [N = 500-1400]\nUrina: Proteínas, Hemoglobina e Leucócitos negativos\nECG normal. Ecocardiograma: hipertrofia concêntrica do VE. Ecografia renal: rins direito e esquerdo com 10,7 cm e 8,6 cm, ambos com hiperecogenicidade do parênquima, sem diminuição da espessura parenquimatosa; sem obstrução.',
        question: 'Qual das seguintes alternativas melhor explica o quadro clínico atual?',
        options: ['Displasia fibromuscular.', 'Esclerodermia.', 'Microangiopatia trombótica.', 'Nefropatia associada ao VIH.', 'Nefropatia da drepanocitose.']
    },
    {
        n: 9, topic: 'infecciologia',
        text: 'Uma puérpera de 36 anos vem ao serviço de urgência por dor mamária à direita, com três dias de evolução. O quadro tem tido agravamento progressivo e ela automedicou-se com ibuprofeno, referindo apenas ligeira melhoria. A última toma deste medicamento foi há duas horas. Encontra-se a amamentar (aleitamento materno exclusivo). Os antecedentes obstétricos são gesta 2, para 2. A última gravidez foi vigiada e sem intercorrências; o parto foi eutócico, há cinco semanas, e sem complicações no período pós-parto. Os sinais vitais são temperatura 37,8 ºC, frequência respiratória 16/min, frequência cardíaca 93/min e pressão arterial 121/72 mm Hg. A mama direita apresenta-se com rubor, calor, consistência endurecida, sem nódulos palpáveis. Palpam-se adenopatias na axila direita, dolorosas, móveis e de consistência elástica. O restante exame físico encontra-se dentro dos parâmetros de normalidade.',
        question: 'Qual das seguintes alternativas é o próximo passo mais adequado?',
        options: ['Bromocriptina.', 'Ciprofloxacina.', 'Desogestrel.', 'Flucloxacilina.', 'Itraconazol.']
    },
    {
        n: 10, topic: 'medicina_interna',
        text: 'Uma mulher de 18 anos, atleta de basquetebol, é observada pela equipa de emergência médica pré-hospitalar por alteração do estado de consciência, que ocorreu há 10 minutos. Estava a assistir ao jogo da sua equipa como suplente, de pé, num dia quente de verão, num pavilhão repleto de espectadores e sem ar condicionado. Caiu subitamente, desamparada, sem traumatismo craniano, ficando sem dar resposta aos estímulos das colegas. As colegas sabem que a mãe dela tem antecedentes de anemia grave. Os sinais vitais são temperatura 39 ºC, frequência respiratória 19/min, frequência cardíaca 110/min e pressão arterial 90/62 mm Hg; SpO₂ 98% (ar ambiente). Ao exame físico a doente encontra-se inconsciente e ventila sem dificuldade. Apresenta pele quente, sem lesões externas visíveis e sem deformidades musculoesqueléticas aparentes. O restante exame físico encontra-se dentro dos parâmetros de normalidade.',
        question: 'Qual dos seguintes é o próximo passo mais adequado na gestão desta doente?',
        options: ['Arrefecimento corporal.', 'Estimulação vigorosa.', 'Imobilização com colar cervical.', 'Iniciar compressões torácicas.', 'Massagem do seio carotídeo.']
    },
    {
        n: 11, topic: 'gastroenterologia',
        text: 'Um homem de 47 anos vem ao seu médico de família por dor localizada na região epigástrica, tipo queimadura, que surge duas a três horas após as refeições e que, frequentemente, o acorda durante a noite. Nega perda de peso ou vómitos. A história médica inclui acidente de viação aos 27 anos com fratura dos ossos do pé direito, tendo desenvolvido artrose pós-traumática que o obriga a tomar ibuprofeno e paracetamol em SOS. Os sinais vitais e a biometria encontram-se dentro dos parâmetros de normalidade. O exame físico revela dor à palpação profunda da região epigástrica e da região periumbilical, sem defesa. O restante exame físico encontra-se dentro dos parâmetros de normalidade.',
        labs: 'Soro: Creatinina 0,8 mg/dL · AST 25 U/L · ALT 36 U/L · GGT 80 U/L · PCR 9 mg/L\nSangue: Hemoglobina 13,5 g/dL · Leucócitos 8000/mm³ · Plaquetas 130 × 10⁹/L',
        question: 'Qual dos seguintes é o próximo passo mais adequado na gestão deste doente?',
        options: ['Prescrever pantoprazol.', 'Solicitar ecografia abdominal alta.', 'Solicitar endoscopia digestiva alta.', 'Solicitar pesquisa de sangue oculto nas fezes.', 'Solicitar trânsito esofagogastroduodenal baritado.']
    },
    {
        n: 12, topic: 'medicina_interna',
        text: 'Um homem de 46 anos vem à consulta mostrar os exames realizados no âmbito de avaliação de saúde. Tem hábitos alimentares adequados, com consumo de álcool às refeições «de dois copos de vinho por refeição». Ao sábado e domingo faz caminhadas, que duram 90 minutos cada, e desloca-se a pé para o emprego (cinco minutos por viagem). Ele não tem antecedentes médicos de relevo. A história familiar revela dislipidemia (pai e dois irmãos). Os sinais vitais são temperatura 36,9 ºC, frequência cardíaca 89/min e pressão arterial 121/80 mm Hg. Ele tem 178 cm de altura e pesa 76 kg; IMC 24 kg/m². Perímetro abdominal de 85 cm. Ao exame físico apresenta bom estado geral. O restante exame encontra-se dentro dos parâmetros de normalidade.',
        labs: 'Soro: Glucose 101 mg/dL · Colesterol 180 mg/dL · Triglicerídeos 250 mg/dL\nSangue: Hemoglobina 13,5 g/dL',
        question: 'Qual das seguintes é a recomendação mais adequada?',
        options: ['Aumentar a prática de exercício físico aeróbico.', 'Prescrever metformina.', 'Prescrever sinvastatina.', 'Restringir o consumo de álcool.', 'Solicitar novo perfil lipídico em dois meses.']
    },
    {
        n: 13, topic: 'medicina_interna',
        text: 'Uma mulher de 35 anos vem à consulta médica por receio de desenvolver a doença da irmã e solicita análises ao fator reumatoide e anticorpos anticitrulina. Ela tem queixas articulares esporádicas de ritmo mecânico que não causam qualquer impacto funcional. A história médica revela dislipidemia familiar. A medicação habitual inclui atorvastatina. É fumadora de 20 UMA desde há 15 anos. A irmã tem artrite reumatoide controlada com metotrexato. Os sinais vitais são temperatura 36,7 ºC, frequência respiratória 13/min, frequência cardíaca 85/min e 130/70 mm Hg. Ela tem 168 cm de altura e pesa 68 kg; IMC 24 kg/m². O exame físico, incluindo o exame articular, encontra-se dentro dos parâmetros de normalidade. Os estudos clínicos, incluindo velocidade de sedimentação eritrocitária e proteína C reativa, encontram-se dentro dos parâmetros de normalidade.',
        question: 'Para além da cessação tabágica, e tendo em conta a preocupação da utente, qual a medida mais adequada a propor?',
        options: ['Iniciar hidroxicloroquina.', 'Iniciar metotrexato.', 'Iniciar vitamina D.', 'Solicitar raio-X articular.', 'Não são necessárias medidas adicionais.']
    },
    {
        n: 14, topic: 'pediatria',
        text: 'Um lactente de 1 mês é trazido à consulta de saúde infantil. A mãe refere agravamento progressivo da coloração amarelada da pele nas últimas duas semanas e transmite preocupação pelo facto de o pai do lactente apresentar episódios recorrentes de icterícia em contexto infecioso. A gestação foi vigiada, sem intercorrências, e o parto eutócico ocorreu às 39 semanas. A somatometria ao nascimento foi adequada à idade gestacional. Encontra-se sob aleitamento materno exclusivo. Ao exame físico verifica-se boa progressão ponderal. Existe icterícia da pele e escleróticas e o fígado é palpável 2 cm abaixo do rebordo costal.',
        labs: 'Soro: AST 88 U/L · ALT 75 U/L · Fosfatase alcalina 670 U/L · GGT 890 U/L · Bilirrubina total 18 mg/dL · Bilirrubina direta 16 mg/dL · Albumina 3,9 g/dL\nSangue: Hemoglobina 10,9 g/dL',
        question: 'Qual das seguintes alternativas é a causa subjacente mais provável para o quadro apresentado?',
        options: ['Atrésia das vias biliares.', 'Icterícia do aleitamento materno.', 'Síndrome de Alagille.', 'Síndrome de Crigler-Najjar.', 'Síndrome de Gilbert.']
    },
    {
        n: 15, topic: 'pediatria',
        text: 'Uma adolescente de 16 anos é referenciada pelo psicólogo escolar para observação na unidade de saúde familiar por agitação na sala de aula e abuso de substâncias (haxixe). Durante a entrevista, a adolescente encontra-se agitada e sudorética. Refere dificuldade a respirar e parestesias dos membros inferiores, e apresenta tremores das mãos. Não consegue explicar porque é que se sente assim hoje, referindo que deixou de consumir haxixe desde há dois meses porque «quer ter uma vida mais saudável». O médico faz uma tentativa de tranquilização da doente, sem sucesso.',
        question: 'Qual das seguintes é a abordagem imediata mais adequada, neste momento?',
        options: ['Administrar diazepam oral.', 'Administrar haloperidol intramuscular.', 'Administrar risperidona oral.', 'Orientar para consulta de pedopsiquiatria.', 'Não são necessárias medidas adicionais.']
    },
    {
        n: 16, topic: 'medicina_interna',
        text: 'Uma mulher de 28 anos, com história de drepanocitose, vem à consulta de seguimento por apresentar aumento da frequência das crises dolorosas vaso-oclusivas nos últimos dois anos. Tem história de cinco internamentos por crises dolorosas que obrigaram a terapêutica analgésica intravenosa, desde os 18 anos. Não tem feito seguimentos regulares e quando necessita recorre a urgências hospitalares. Toma ácido fólico de forma irregular. Os sinais vitais são temperatura 36,4 ºC, frequência respiratória 12/min, frequência cardíaca 82/min e pressão arterial 136/78 mm Hg. Ao exame físico apresenta mucosas e conjuntivas descoradas e escleróticas ictéricas. O restante exame físico encontra-se dentro dos parâmetros de normalidade.',
        labs: 'Soro: Creatinina 1,0 mg/dL · Bilirrubina total 3 mg/dL · LDH 130 U/L\nSangue: Hemoglobina 8,2 g/dL · VGM 90 fL · Leucócitos 11 700/mm³ (Neutrófilos 52%, Eosinófilos 2%, Basófilos 0,5%, Linfócitos 42%, Monócitos 3%) · Plaquetas 178 × 10⁹/L',
        question: 'Qual dos seguintes fármacos é o mais adequado prescrever neste momento?',
        options: ['Azacitidina.', 'Ciclofosfamida.', 'Ferro.', 'Hidroxiureia.', 'Rituximab.']
    },
    {
        n: 17, topic: 'infecciologia',
        text: 'Uma mulher de 30 anos vem ao serviço de urgência por dor abdominal de intensidade 8/10, súbita, localizada na fossa ilíaca direita, tipo cólica, desde há duas horas. Refere ter mal-estar abdominal difuso desde há três dias, com náuseas e sensibilidade mamária. A data da última menstruação foi há sete semanas. Os antecedentes obstétricos são gesta 2, para 0 (uma interrupção voluntária da gravidez aos 20 anos e salpingectomia esquerda por gravidez ectópica aos 28 anos). Tem antecedentes de doença de Crohn e doença inflamatória pélvica. A medicação habitual inclui contracetivo oral estroprogestativo. Os sinais vitais e a biometria encontram-se dentro dos parâmetros de normalidade. Durante a palpação abdominal apresenta agudização súbita da dor.',
        labs: 'Urina: Teste imunológico de gravidez Positivo\nSangue: Hemoglobina 9,2 g/dL · Hematócrito 38% · Leucócitos 11 430/mm³ (Neutrófilos 69%) · Plaquetas 215 × 10⁹/L\nLaparoscopia de urgência: apêndice normal, trompa direita ruborizada, de aspeto inflamatório, com múltiplas lesões vesiculares e fibrina, com tumefação na região ampular (4 cm). Sangue no fundo de saco de Douglas. À esquerda, coto tubar de aspeto normal.',
        question: 'Qual dos seguintes fatores, presentes no histórico da doente, mais aumentou o risco de desenvolver a condição clínica atual?',
        options: ['Contraceção estroprogestativa.', 'Doença inflamatória intestinal.', 'Idade atual.', 'Infeção por Chlamydia trachomatis.', 'Interrupção voluntária da gravidez.']
    },
    {
        n: 18, topic: 'medicina_interna',
        text: 'Um homem de 23 anos, estudante universitário, vem à consulta por hipertensão arterial recentemente diagnosticada em medição de rotina. O doente refere cansaço muscular fácil nos membros superiores. Nega medicação habitual ou hábitos toxicológicos. Os sinais vitais são temperatura 36,1 ºC, frequência respiratória 14/min, frequência cardíaca 88/min e pressão arterial 156/92 mm Hg; SpO₂ 95% (ar ambiente). Ele tem 188 cm de altura e pesa 87 kg; IMC 24,6 kg/m². Ao exame físico observa-se proeminência frontal, pirâmide nasal alargada, macroglossia, espaço alargado entre os dentes incisivos inferiores e mandíbula volumosa, com prognatismo. A voz é rouca. A auscultação cardíaca revela aumento de intensidade do primeiro som cardíaco e alargamento da área de macicez cardíaca. A palpação abdominal revela fígado palpável 2 cm abaixo do rebordo costal. A auscultação pulmonar, bem como o restante exame físico, encontra-se dentro dos parâmetros de normalidade.',
        question: 'Qual das seguintes condições está mais frequentemente associada a este quadro clínico?',
        options: ['Acromegalia.', 'Feocromocitoma.', 'Hiperaldosteronismo primário.', 'Hipertiroidismo.', 'Síndrome de Cushing.']
    },
    {
        n: 19, topic: 'pneumologia',
        text: 'Um homem de 32 anos, arquiteto, vem ao serviço de urgência por dor no hemitórax direito, de início súbito há seis horas, enquanto trabalhava. A dor agrava com a inspiração profunda e associa-se a dispneia. Nega febre, tosse, expetoração ou outros sintomas. É fumador de 20 UMA desde há 10 anos. Pratica basquetebol três vezes por semana. Os sinais vitais são temperatura 36,7 ºC, frequência respiratória 19/min, frequência cardíaca 103/min e pressão arterial 110/76 mm Hg; SpO₂ 98% (ar ambiente). Ele tem 198 cm de altura e pesa 75 kg; IMC 19 kg/m². Ao exame físico está desconfortável. Apresenta aspeto longilíneo. A auscultação cardíaca revela S1 e S2 presentes, rítmicos, sem outras alterações. A auscultação pulmonar revela diminuição dos sons respiratórios e da transmissão de sons vocais à direita. Há hiperressonância à percussão do hemitórax direito. O restante exame físico encontra-se dentro dos parâmetros de normalidade.',
        question: 'Qual dos seguintes é o próximo passo mais adequado na gestão deste doente?',
        options: ['Angio-TC torácica.', 'Cateterismo cardíaco.', 'Cintigrafia de ventilação-perfusão.', 'Eletrocardiograma.', 'Raio-X do tórax.']
    },
    {
        n: 20, topic: 'medicina_interna',
        text: 'Um homem de 28 anos vem ao consultório médico por ansiedade que relaciona com a sua ordenação sacerdotal, que irá decorrer dentro de uma semana. Refere que foi sempre «calmo e tranquilo», mas sente que o evento que se aproxima tem particular relevância, o que o tem deixado menos tranquilo e com dificuldade em se preparar para a cerimónia. Não se apuram outros sintomas. Ele pede um medicamento que lhe dê mais tranquilidade nos dias seguintes, mas receia poder ficar dependente. Não tem antecedentes de relevo e não faz medicação habitual. O exame físico encontra-se dentro dos parâmetros de normalidade.',
        question: 'Qual das seguintes opções é a terapêutica mais adequada para este doente?',
        options: ['Buspirona.', 'Diazepam.', 'Pregabalina.', 'Sertralina.', 'Zolpidem.']
    },
    {
        n: 21, topic: 'medicina_interna',
        text: 'Um homem de 56 anos vem ao serviço de urgência por mal-estar, prostração e oligúria com 48 horas de evolução. Há 45 dias foi submetido a ressecção anterior do reto com ileostomia lateral, após radioquimioterapia neoadjuvante, por um adenocarcinoma do reto, com limite inferior localizado a 5 cm da margem anal. A história médica revela diabetes mellitus tipo 2 e hipertensão arterial, e a medicação habitual inclui sitagliptina e amlodipina. Os sinais vitais são temperatura 37 ºC, frequência respiratória 16/min, frequência cardíaca 70/min e pressão arterial 100/50 mm Hg; SpO₂ 96% (ar ambiente). Ao exame físico apresenta-se consciente e orientado, com perda do turgor cutâneo e língua seca. O abdómen está mole e depressível, indolor à palpação e com cicatrizes operatórias com boa evolução. O restante exame físico encontra-se dentro dos parâmetros de normalidade.',
        labs: 'Soro: Creatinina 5,0 mg/dL · Ureia 180 mg/dL · Glucose 126 mg/dL · PCR 2 mg/L · Sódio 145 mEq/L · Potássio 5,5 mEq/L · Osmolaridade 340 mOsm/kg H₂O\nSangue: Hemoglobina 11,0 g/dL · Leucócitos 9000/mm³ · Plaquetas 230 × 10⁹/L\nRaio-X abdominal simples e ecografia abdominal sem alterações patológicas.',
        question: 'Qual das seguintes é a explicação mais provável para o quadro clínico descrito?',
        options: ['Desidratação.', 'Estenose uretérica pós-radioterapia.', 'Lesão iatrogénica do uréter.', 'Nefrite intersticial.', 'Nefropatia diabética.']
    },
    {
        n: 22, topic: 'medicina_interna',
        text: 'Um homem de 65 anos vem ao consultório médico por cansaço de instalação rápida no último mês, com marcado agravamento na última semana, ao ponto de se cansar na higiene diária. Refere febre e aparecimento de equimoses nos membros inferiores, sem traumatismos, desde há cinco dias. A história médica revela hipertensão arterial e diabetes mellitus, e a medicação habitual inclui olmesartan e metformina. Os sinais vitais são temperatura 38 ºC, frequência respiratória 16/min, frequência cardíaca 92/min e pressão arterial 136/82 mm Hg. Ao exame físico observa-se palidez da pele e mucosas, escleróticas anictéricas, equimoses e petéquias nos membros inferiores.',
        labs: 'Soro: Creatinina 1,0 mg/dL · AST 22 U/L · ALT 29 U/L · LDH 180 U/L\nSangue: Hemoglobina 7,8 g/dL · VGM 92 fL · Leucócitos 57 000/mm³ (Neutrófilos 10%, Eosinófilos 2%, Basófilos 0,5%, Linfócitos 10%, Monócitos 6%, Células indiferenciadas 72%) · Plaquetas 12 × 10⁹/L',
        question: 'Qual dos seguintes é o mecanismo etiopatogénico mais provável?',
        options: ['Anticorpos antiplaquetários.', 'Carência de vitamina B12.', 'Deficiência de ADAMTS13.', 'Fibrose da medula óssea.', 'Proliferação de blastos na medula óssea.']
    },
    {
        n: 23, topic: 'medicina_interna',
        text: 'Um homem de 60 anos, casado, agricultor, é trazido à consulta por dois dos filhos, que referem que o pai «não está bom da cabeça». Relatam que o doente, que sempre foi um homem triste e reservado, tem apresentado desde há 10 anos situações frequentes de agressividade física e verbal, dirigidas à sua mulher, a quem acusa de adultério. Os filhos relatam também que a mãe tem estado enclausurada em casa, impedida de sair pelo doente que, mesmo assim, a acusa de o trair. Neste período, o doente tem mantido as suas atividades laborais, cuidando da horta e dos animais, sem dificuldades aparentes. Durante a consulta, o doente confirma a convicção de ser traído pela mulher, e coloca em causa a paternidade dos filhos. A história médica revela hipertensão arterial, diabetes mellitus tipo 2 e dislipidemia, e a medicação habitual inclui valsartan, metformina e atorvastatina. Os sinais vitais são temperatura 36,5 ºC, frequência respiratória 15/min, frequência cardíaca 80/min e pressão arterial 160/98 mm Hg.',
        question: 'Qual dos seguintes diagnósticos é o mais provável?',
        options: ['Demência frontotemporal.', 'Demência vascular.', 'Perturbação delirante persistente.', 'Perturbação depressiva major, com sintomas psicóticos.', 'Perturbação esquizoafetiva.']
    },
    {
        n: 24, topic: 'neurologia',
        text: 'Uma mulher de 62 anos, divorciada, vem ao consultório médico por «andar a gaguejar». Conta que, desde há dois ou três anos, troca «as palavras [...] quero dizer uma coisa e digo outra [...] o meu filho farta-se de rir [...] fico muito magoada». Queixa-se ainda, desde há mais de 30 anos, de tristeza crónica, com sensação de vazio persistente, insónia inicial e ansiedade, sintomas que relaciona com má relação com o ex-marido e com o filho: «Não me ligam, não me dão... como se diz... amor... são pessoas longe... eu preciso de coisas que não sejam isso... coisas diferentes.» A história médica revela perturbação depressiva medicada com fluoxetina e bromazepam, dislipidemia medicada com atorvastatina e síndrome do cólon irritável. Apresenta-se orientada no tempo e no espaço, sem alterações da memória, discurso hesitante, com pausas anómicas e parafasias. Apresenta humor deprimido e ansioso, e pensamento com preocupações hipocondríacas, não delirantes. O restante exame físico encontra-se dentro dos parâmetros de normalidade. A TC cranioencefálica revela leucoencefalopatia moderada e atrofia assimétrica fronto-opercular e insular, maior à esquerda.',
        question: 'Qual dos seguintes diagnósticos melhor explica o quadro clínico atual desta doente?',
        options: ['Afasia progressiva primária.', 'Demência vascular.', 'Perturbação conversiva.', 'Perturbação depressiva persistente.', 'Variante comportamental da demência frontotemporal.']
    },
    {
        n: 25, topic: 'neurologia',
        text: 'Um homem de 72 anos vem ao consultório médico, acompanhado pela mulher, por ter tido dois episódios de grande agitação noturna no último mês, em que a acordou e a agrediu. Na primeira vez, desferiu-lhe uma cotovelada e no segundo episódio empurrou-a para fora da cama. A mulher está muito assustada com estes eventos e tem pensado em ir dormir para casa de uma filha. O doente refere estranheza em relação aos seus comportamentos: «Não sei porque faço estas coisas... não lhe quero mal nenhum... da última vez ela acordou-me e eu estava a ter um pesadelo horrível... estava amarrado a uma cadeira e estava a tentar soltar-me.»',
        question: 'Qual das seguintes alternativas melhor explica o quadro acima descrito?',
        options: ['Automatismos no decorrer do sono não-REM profundo.', 'Curta latência na transição de vigília para sono REM.', 'Despertar súbito no decorrer do sono não-REM.', 'Obstrução das vias respiratórias superiores durante o sono.', 'Perda da atonia muscular no sono REM.']
    },
    {
        n: 26, topic: 'gastroenterologia',
        text: 'Um homem de 85 anos recorre ao serviço de urgência por paragem de emissão de gases e fezes, distensão abdominal, náuseas e vómitos com seis dias de evolução. Menciona ainda obstipação habitual. A história médica revela hipertensão arterial, doença pulmonar obstrutiva crónica e apendicectomia aos 12 anos. É fumador de 20 UMA desde há 20 anos. Os sinais vitais são temperatura 38 ºC, frequência respiratória 18/min, frequência cardíaca 90/min e pressão arterial 130/70 mm Hg. Ele tem 167 cm de altura e pesa 78 kg; IMC 28 kg/m². Ao exame físico o abdómen está distendido, com ruídos hidroaéreos aumentados e de timbre metálico.',
        labs: 'Soro: Creatinina 2,0 mg/dL · PCR 320 mg/L · Sódio 138 mEq/L · Potássio 3,5 mEq/L\nSangue: Hemoglobina 12,0 g/dL · Leucócitos 15 000/mm³ (Neutrófilos 90%)\nRaio-X do abdómen em pé: múltiplos níveis hidroaéreos no cólon e no intestino delgado, com distensão do cólon sigmoide e sinal de «grão de café».',
        question: 'Qual dos seguintes mecanismos mais provavelmente desempenha um papel primário no desenvolvimento deste quadro?',
        options: ['Isquemia da artéria mesentérica inferior.', 'Oclusão do lúmen sigmoide por doença inflamatória do intestino.', 'Oclusão do lúmen sigmoide por tumor.', 'Oclusão por brida pós-cirúrgica.', 'Sigmoide redundante causando torção.']
    },
    {
        n: 27, topic: 'pneumologia',
        text: 'Um homem de 18 anos, vítima de bala perdida, é admitido na sala de emergência com orifício pouco sangrante, infracentimétrico, com halo de queimadura, na região infraclavicular esquerda, 40 minutos após o evento. A equipa de emergência extra-hospitalar reporta que a vítima foi encontrada consciente, tendo sido tratada com soro NaCl 0,9% (1 L) e oxigenoterapia em alto débito. Os sinais vitais, no local, eram temperatura 35,9 ºC, frequência respiratória 20/min, frequência cardíaca 90/min e pressão arterial 120/80 mm Hg; SpO₂ 100% (FiO₂ 1,00). O doente nega antecedentes patológicos ou medicamentosos. Os sinais vitais à admissão, no hospital, são temperatura 36,2 ºC, frequência respiratória 21/min, frequência cardíaca 95/min e pressão arterial 125/80 mm Hg; SpO₂ 100% (FiO₂ 1,00). O exame físico revela via aérea patente, expansão torácica ampla e simétrica, e auscultação pulmonar sem ruídos adventícios. O exame do abdómen não apresenta alterações patológicas. A ecografia alargada de avaliação em trauma «eFAST» excluiu hemopericárdio, pneumotórax, derrame pleural e líquido livre intraperitoneal.',
        question: 'Qual dos seguintes é o próximo passo mais adequado?',
        options: ['Colocar dreno torácico à esquerda.', 'Colocar tubo orofaríngeo.', 'Realizar entubação orotraqueal.', 'Realizar toracotomia exploradora.', 'Solicitar TC toracoabdominal.']
    },
    {
        n: 28, topic: 'infecciologia',
        text: 'Um homem de 32 anos vem à consulta de medicina geral e familiar por febre (máximo 38,9 ºC), cefaleias, mal-estar, mialgias e artralgias com cinco dias de evolução. Há dois dias iniciou erupção cutânea maculopapular, não pruriginosa, que evoluiu das extremidades para os membros e o tronco. Refere ter ido acampar há duas semanas. Tem tomado paracetamol em SOS, de sua iniciativa, com melhoria sintomática. Não tem antecedentes pessoais ou familiares de relevo e não faz medicação habitual. Nega consumo de álcool, tabaco ou drogas de abuso. Os sinais vitais são temperatura 37,1 ºC, frequência respiratória 14/min, frequência cardíaca 86/min e pressão arterial 122/81 mm Hg; SpO₂ 99% (ar ambiente). Ao exame físico apresenta erupção cutânea generalizada, maculopapular, com algumas petéquias, envolvendo as palmas das mãos e as plantas dos pés. O restante exame físico encontra-se dentro dos parâmetros de normalidade.',
        question: 'Qual das seguintes alternativas é a farmacoterapia mais adequada neste momento?',
        options: ['Amoxicilina.', 'Azitromicina.', 'Ciprofloxacina.', 'Claritromicina.', 'Doxiciclina.']
    },
    {
        n: 29, topic: 'pediatria',
        text: 'Um menino de 3 anos é referenciado à consulta por atraso de desenvolvimento psicomotor e baixa estatura. A mãe refere que entrou para o infantário há seis meses e que a educadora manifestou preocupação porque «apenas diz algumas palavras soltas», apresentando um discurso na maioria das vezes ininteligível. Além disso, refere variações de humor muito frequentes e apetite voraz e insaciável. O parto foi às 39 semanas por cesariana, apresentação pélvica, com necessidade de reanimação com O₂ à face e internamento em unidade de neonatologia, durante sete dias, por hipotonia. Atualmente mede 85 cm (< P3) e pesa 19 kg (> P97); IMC 26,3 kg/m² (> P97). Ao exame físico apresenta dolicocefalia com estreitamento bitemporal, boca pequena com lábio superior fino, mãos e pés pequenos e criptorquidia bilateral.',
        question: 'Qual dos seguintes é o diagnóstico mais provável?',
        options: ['Síndrome de Angelman.', 'Síndrome de Down.', 'Síndrome de Noonan.', 'Síndrome de Prader-Willi.', 'Síndrome do X-frágil.']
    },
    {
        n: 30, topic: 'medicina_interna',
        text: 'Uma mulher de 18 anos recorre ao serviço de urgência por dor intensa no hipogastro com irradiação lombar, tipo cólica, desde ontem, quando iniciou o período menstrual, associada a tonturas, náuseas e vómitos. Há duas horas teve um episódio de diarreia. Nega outras queixas. Refere episódios álgicos semelhantes desde há seis meses, sem vómitos ou diarreia. Os antecedentes ginecológicos incluem menarca aos 14 anos, ciclos regulares de 26-28 dias, com cataménios de 5 dias. A coitarca foi aos 16 anos; não tem atividade sexual desde há seis meses. É nuligesta. Os antecedentes pessoais incluem episódio depressivo major aos 12 anos (acompanhada em pedopsiquiatria) e apendicectomia aos 14 anos. Atualmente não faz medicação. Os sinais vitais e a biometria encontram-se dentro dos parâmetros de normalidade. Ao exame físico, observa-se pele e mucosas coradas e hidratadas. O abdómen está mole e depressível à palpação, com desconforto à palpação profunda no hipogastro. Ao exame ginecológico observa-se perda hemática genital compatível com menstruação; ao toque vaginal o colo está inteiro, fechado e indolor à mobilização. O estudo analítico, incluindo o hemograma e a ecografia pélvica, estão dentro dos parâmetros de normalidade.',
        question: 'Qual das seguintes alternativas é a causa subjacente mais provável para a sintomatologia da doente?',
        options: ['Aderências pélvicas.', 'Aumento da PGF2α no endométrio.', 'Ciclos menstruais anovulatórios.', 'Endometrite subclínica.', 'Fatores psicológicos.']
    },
    {
        n: 31, topic: 'medicina_interna',
        text: 'Um homem de 59 anos, casado e com dois filhos, é trazido ao consultório médico pela esposa, que se queixa do marido, referindo que este consome álcool em excesso desde há mais de 10 anos, com intoxicações agudas frequentes (três a quatro por semana). O marido nega e diz que a mulher faz estas queixas num contexto de conflitualidade do casal. Refere não ter quaisquer queixas. Não tem antecedentes patológicos de relevo. À observação apresenta-se emagrecido, com aranhas vasculares na face. O baço está ligeiramente aumentado à palpação. O restante exame está dentro dos parâmetros de normalidade.',
        labs: 'Soro: Creatinina 0,8 mg/dL · Glucose 96 mg/dL · GGT 105 U/L · ALT 55 U/L · AST 111 U/L · Sódio 138 mEq/L · Potássio 4,2 mEq/L · Cloro 103 mEq/L\nSangue: Hemoglobina 13,7 g/dL · VGM 104 fL · Leucócitos 9000/mm³ (Neutrófilos segmentados 53%) · Tempo de protrombina 14 segundos',
        question: 'Qual das seguintes afirmações é a mais adequada na comunicação com este doente, neste momento?',
        options: ['«Ajude-me a perceber melhor as características do seu consumo de álcool. Já sentiu necessidade de beber álcool de manhã para se sentir mais calmo?»', '«Os exames revelam que o álcool lhe está a fazer mal. Tem de parar de beber álcool.»', '«Temos de fazer mais exames. Com estas análises, se o problema não é o álcool, pode ter uma hepatite.»', '«Tenho de dar alguma razão à sua esposa. Porque não se sente capaz de enfrentar este problema?»', '«Vejo que esta situação está a gerar muitos conflitos com a sua esposa. Não seria melhor começar terapia conjugal?»']
    },
    {
        n: 32, topic: 'infecciologia',
        text: 'Um homem de 56 anos vem ao serviço de urgência por cervicalgia e febre com quatro dias de evolução. Refere perda de peso (3 kg) no último mês, por «dieta». A história médica revela diabetes mellitus tipo 2 e obesidade, e a medicação habitual inclui sitagliptina e metformina. Refere hábitos etílicos de 40 g por dia desde há 30 anos. Nega consumo de tabaco. Convive com animais na sua quinta: gatos, ovelhas e vacas. Os sinais vitais são temperatura 38,9 ºC, frequência respiratória 17/min, frequência cardíaca 99/min e pressão arterial 118/78 mm Hg; SpO₂ 98% (ar ambiente). Ao exame físico apresenta bom estado geral. Tem dor, edema e calor na articulação esternoclavicular direita e dor à palpação das vértebras C3 e C4. Apresenta diminuição da sensibilidade sobre a clavícula direita e diminuição da força de abdução do braço direito. O restante exame físico encontra-se dentro dos parâmetros de normalidade.',
        labs: 'Soro: Creatinina 1,1 mg/dL · AST 39 U/L · ALT 44 U/L · PCR 185 mg/L\nSangue: Hemoglobina 12,1 g/dL · Leucócitos 15 200/mm³ · Plaquetas 156 × 10⁹/L\nRM cervical: discite e erosão da face anterior dos corpos vertebrais de C3 e C4, com pequeno exsudado epidural anterior. Raio-X da articulação esternoclavicular direita: edema dos tecidos moles, alargamento do espaço articular e distensão da cápsula.',
        question: 'Qual dos seguintes agentes é a causa mais provável da condição deste doente?',
        options: ['Bartonella henselae.', 'Brucella spp.', 'Mycobacterium tuberculosis.', 'Salmonella spp.', 'Staphylococcus aureus.']
    },
    {
        n: 33, topic: 'medicina_interna',
        text: 'Uma mulher de 45 anos, peixeira, vem ao consultório médico por epigastralgia episódica com ardor e disfagia para sólidos, com seis meses de evolução. Refere tosse crónica, não produtiva, e dejeções líquidas frequentes (uma a duas vezes por dia) desde há um ano. A história médica revela hipertensão arterial, medicada com enalapril, e fenómeno de Raynaud nas mãos e nos pés desde há oito anos, com agravamento nos últimos três meses. Nega consumo de álcool, tabaco ou drogas de abuso. Os sinais vitais e a biometria encontram-se dentro dos parâmetros de normalidade. Ao exame físico observa-se bom estado geral e duas ulcerações cicatriciais, situadas na ponta do 2.º dedo e na flexão da 5.ª articulação interfalângica proximal da mão direita. Apresenta esclerodactilia. O restante exame físico encontra-se dentro dos parâmetros de normalidade.',
        labs: 'Soro: Creatinina 0,9 mg/dL · Ureia 37 mg/dL · Glucose 90 mg/dL · AST 32 U/L · ALT 40 U/L · GGT 80 U/L · PCR 1,3 mg/L · Sódio 142 mEq/L · Potássio 4,1 mEq/L · Cloro 92 mEq/L · CK 120 U/L · LDH 230 U/L · Anticorpos antinucleares 1/640\nSangue: Hemoglobina 11,8 g/dL · VGM 92 fL · Leucócitos 5600/mm³ (Neutrófilos 21%, Linfócitos 29%) · Plaquetas 260 × 10⁹/L · VS 40 mm/1.ª hora\nUrina: Proteínas, Hemoglobina e Leucócitos negativos\nRaio-X do tórax: reforço reticular intersticial difuso.',
        question: 'Qual dos seguintes exames é o mais provável de estabelecer um diagnóstico nesta doente?',
        options: ['Anticorpo anticentrómero.', 'Anticorpo anticitoplasma do neutrófilo.', 'Anticorpo anti-DNA dupla hélice.', 'Anticorpo anti-RNP.', 'Fator reumatoide.']
    },
    {
        n: 34, topic: 'gastroenterologia',
        text: 'Uma mulher de 56 anos vem ao serviço de urgência por apresentar cor amarela desde há dois dias. Menciona ainda urina de cor «mais escura». Refere andar «mais enjoada» desde que começou isoniazida há três semanas, por tuberculose latente. Nega prurido, alteração do peso, dor abdominal ou tosse. Tem antecedentes de dislipidemia e síndrome de Sjögren, e a medicação habitual inclui atorvastatina e pilocarpina. É fumadora de 20 UMA desde há 20 anos e refere hábitos etílicos de 30 g por dia desde há 20 anos. Nega ingestão de drogas ou aumento do consumo etanólico. Os sinais vitais e a biometria encontram-se dentro dos parâmetros de normalidade. Ao exame físico observa-se pele, mucosas e conjuntivas ictéricas e hidratadas. Tem dor à palpação do fígado, sem aumento do tamanho nem alteração do bordo. O restante exame físico encontra-se dentro dos parâmetros de normalidade.',
        labs: 'Soro: Creatinina 0,8 mg/dL · AST 459 U/L · ALT 658 U/L · Fosfatase alcalina 192 U/L · GGT 89 U/L · Bilirrubina total 6 mg/dL · Bilirrubina direta 5,1 mg/dL\nSangue: Eritrócitos 11 × 10⁶/mm³ · VGM 99 fL · Leucócitos 8900/mm³ (Neutrófilos 65%) · Tempo de protrombina 12 segundos',
        question: 'Qual dos seguintes diagnósticos é o mais provável?',
        options: ['Cirrose biliar primária.', 'Cirrose hepática alcoólica.', 'Colangite esclerosante.', 'Hepatite tóxica.', 'Tuberculose miliar.']
    },
    {
        n: 35, topic: 'medicina_interna',
        text: 'Um homem de 68 anos recorre ao serviço de urgência por cefaleias, tonturas e mal-estar geral com início há duas horas, enquanto estava na praia. Refere ainda redução do débito urinário desde a véspera. A história médica revela diabetes mellitus tipo 2, hipertensão arterial, dislipidemia, retinopatia diabética e doença hepática crónica de etiologia etanólica. A medicação inclui metformina, sitagliptina, telmisartan, furosemida e atorvastatina. Os sinais vitais são temperatura 36 ºC, frequência respiratória 26/min, frequência cardíaca 75/min e pressão arterial 198/64 mm Hg; SpO₂ 98% (ar ambiente). Ele tem 177 cm de altura e pesa 61 kg; IMC 25 kg/m². Ao exame físico apresenta mucosas hidratadas e descoradas. O abdómen revela desconforto à palpação dos quadrantes inferiores. Observa-se edema maleolar bilateral. O restante exame físico, incluindo o neurológico, encontra-se dentro dos parâmetros de normalidade.',
        labs: 'Soro: Creatinina 1,8 mg/dL · Ureia 221 mg/dL · Glucose 232 mg/dL · PCR < 10 mg/L · Sódio 143 mEq/L · Potássio 6,1 mEq/L\nSangue: Hemoglobina 9,8 g/dL · Leucócitos 6900/mm³ · Plaquetas 136 × 10⁹/L\nUrina: Proteínas, Hemoglobina e Leucócitos negativos',
        question: 'Qual dos seguintes é o próximo passo mais adequado na gestão deste doente?',
        options: ['Prescrever furosemida endovenosa.', 'Prescrever hidratação endovenosa.', 'Realizar algaliação.', 'Solicitar ecografia renovesical.', 'Solicitar raio-X do tórax.']
    },
    {
        n: 36, topic: 'gastroenterologia',
        text: 'Uma mulher de 49 anos vem ao consultório médico por dor localizada nos quadrantes inferiores do abdómen com duas semanas de evolução, tipo «moinha» e sem irradiação, com intensidade 4/10. Refere ainda anorexia, astenia, cansaço fácil e perda de peso que não quantifica e que atribui a perda do apetite. Nega perdas visíveis de sangue com as fezes, hematúria ou perdas vaginais. Os antecedentes obstétricos são gesta 3, para 3. Os ciclos menstruais são regulares. Um irmão foi operado e ficou com uma colostomia, mas desconhece a causa da intervenção cirúrgica. O exame físico do abdómen revela massa na fossa ilíaca direita, fixa, dura e dolorosa. O toque retal não revela alterações. O restante exame físico, incluindo o exame ginecológico, encontra-se dentro dos parâmetros de normalidade.',
        labs: 'Soro: AST 37 U/L · ALT 45 U/L · Fosfatase alcalina 60 U/L · CEA 0,5 µg/L [N ≤ 3,0] · PCR 6 mg/L\nSangue: Hemoglobina 9,0 g/dL · Leucócitos 13 000/mm³\nUrina: Eritrócitos escassos',
        question: 'Qual dos seguintes diagnósticos é o mais provável?',
        options: ['Abcesso apendicular.', 'Carcinoma do cego.', 'Doença inflamatória intestinal.', 'Torsão anexial.', 'Tumor do rim.']
    },
    {
        n: 37, topic: 'medicina_interna',
        text: 'Um homem de 65 anos, viúvo, recorre ao serviço de urgência por obstipação e por não urinar desde o dia anterior. Apesar de anteriormente ter trânsito intestinal regular, descreve que «há um mês que os intestinos deixaram de funcionar... acho que começaram a apodrecer... cheiram a podre...». Apura-se que o doente reduziu de forma muito significativa o consumo alimentar e perdeu peso, o que justifica dizendo: «não vale a pena comer nem beber... nada é absorvido». Deixou inclusivamente de comer nos últimos dias. A história médica revela hipertensão arterial medicada com ramipril e perturbação depressiva recorrente. É acompanhado em consulta de psiquiatria desde os 29 anos, tendo tido episódios de depressão grave. Ele esteve bem sob tratamento com citalopram desde há três anos. No entanto, há três meses a medicação foi modificada, por recidiva de episódio depressivo, para venlafaxina, que faz na dose máxima desde há dois meses. Os sinais vitais estão dentro dos parâmetros normais. Ao exame físico apresenta-se emagrecido e desidratado, com mau estado geral e de higiene. A auscultação cardíaca e pulmonar encontra-se dentro dos parâmetros de normalidade. A palpação do abdómen não é dolorosa nem revela massas anómalas.',
        question: 'Qual das seguintes alternativas é a mais adequada para associar ao regime terapêutico, neste momento?',
        options: ['Carbonato de lítio.', 'Clomipramina.', 'Clozapina.', 'Eletroconvulsivoterapia.', 'Psicoterapia intensiva.']
    },
    {
        n: 38, topic: 'medicina_interna',
        text: 'Um homem de 29 anos, designer gráfico, a viver na Suíça, recorre ao serviço de urgência por hematúria macroscópica indolor desde a véspera. Menciona um episódio semelhante há um mês, que cessou após toma empírica de ciprofloxacina. Não tem antecedentes pessoais ou familiares de relevo e não faz medicação habitual. Refere consumo recreativo de canabinoides. Nega consumo de álcool, tabaco ou de outros psicotrópicos. Os sinais vitais são temperatura 36,5 ºC, frequência respiratória 18/min, frequência cardíaca 61/min e pressão arterial 110/67 mm Hg. O exame físico encontra-se dentro dos parâmetros de normalidade.',
        labs: 'Soro: Creatinina 0,7 mg/dL · Ureia 47 mg/dL · PCR 29 mg/L · Sódio 139 mEq/L · Potássio 4,6 mEq/L\nSangue: Hemoglobina 14,1 g/dL · Leucócitos 10 600/mm³ · Plaquetas 380 × 10⁹/L\nUrina: Proteínas 1+ · Hemoglobina 3+ · Leucócitos negativo · Razão proteínas/creatinina 770 mg/dia\nEcografia renal normal.',
        question: 'Qual dos seguintes estudos é o próximo passo mais adequado para o diagnóstico?',
        options: ['Biópsia renal.', 'Cistoscopia.', 'Pesquisa de eritrócitos dismórficos na urina.', 'TC renal e pélvica.', 'Urocultura.']
    },
    {
        n: 39, topic: 'infecciologia',
        text: 'Um homem de 23 anos vem ao serviço de urgência por surdez, otalgia, odinofagia e tosse seca com agravamento progressivo desde há três dias. O doente é imigrante de um país asiático. Não tem antecedentes médicos de relevo. Desconhece o seu estado vacinal atual. Os sinais vitais são temperatura 39,3 ºC, frequência respiratória 18/min, frequência cardíaca 83/min e pressão arterial 127/80 mm Hg; SpO₂ 96% (ar ambiente). Ao exame físico apresenta inflamação da conjuntiva tarsal bilateral, sinais de abaulamento e eritema timpânico bilateral. Observa-se eritema da parede posterior da faringe com manchas irregulares vermelho-escuras e centro branco, do tamanho de uma cabeça de alfinete, na mucosa bucal.',
        question: 'Qual das seguintes alternativas é o agente etiológico mais provavelmente envolvido?',
        options: ['Haemophilus influenzae.', 'Herpesvírus humano tipo 6.', 'Streptococcus pyogenes.', 'Vírus Coxsackie.', 'Vírus do sarampo.']
    },
    {
        n: 40, topic: 'gastroenterologia',
        text: 'Um homem de 82 anos é encaminhado para o serviço de urgência por prostração, com 12 horas de evolução. A história médica revela diabetes mellitus tipo 2 e a medicação habitual inclui sitagliptina e metformina. Os sinais vitais são temperatura 35,6 ºC, frequência respiratória 22/min, frequência cardíaca 86/min e pressão arterial 87/45 mm Hg; SpO₂ 89% (ar ambiente). Ao exame físico apresenta-se confuso. A pele e as mucosas estão coradas, ictéricas e desidratadas. O abdómen é depressível, doloroso à palpação profunda, sem defesa; os ruídos peristálticos apresentam timbre normal.',
        labs: 'Soro: Creatinina 2,5 mg/dL · Amilase 127 U/L · AST 430 U/L · ALT 402 U/L · Fosfatase alcalina 525 U/L · GGT 510 U/L · Bilirrubina total 3,4 mg/dL · Bilirrubina direta 2,2 mg/dL · PCR 200 mg/L · Sódio 147 mEq/L · Potássio 4,9 mEq/L\nSangue: Hemoglobina 13,0 g/dL · Leucócitos 18 000/mm³ · Plaquetas 90 × 10⁹/L\nRaio-X abdominal sem alterações. Ecografia: litíase vesicular e dilatação das vias biliares intra-hepáticas; via biliar principal não visualizada por interposição gasosa.',
        question: 'Qual dos seguintes é o próximo passo mais adequado na gestão deste doente?',
        options: ['Colangiografia trans-hepática com colocação de dreno biliar.', 'Colangiopancreatografia retrógrada endoscópica com esfincterotomia.', 'Colecistectomia laparoscópica com colangiografia per-operatória.', 'Colecistostomia percutânea guiada.', 'Fluidoterapia e antibioterapia endovenosas.']
    },
    {
        n: 41, topic: 'medicina_interna',
        text: 'Um homem de 25 anos vem à consulta no médico de família por massa na face anterior da região cervical, com crescimento indolente, sem outros sintomas. Afirma que esta massa tem vários anos e que já teve queixas de rubor no mesmo local, resolvidas com amoxicilina. Há oito dias, extraiu um dente pré-molar inferior. Tem antecedentes de traumatismo abdominal após acidente de viação aos 18 anos, tendo sido submetido a esplenectomia. Os sinais vitais são temperatura 36 ºC, frequência cardíaca 75/min, frequência respiratória 18/min e pressão arterial 122/76 mm Hg. O exame físico revela tumefação cervical de consistência elástica, bem delimitada, de localização central superior à cartilagem tiroide. Observa-se edema no local de extração dentário. Com a protusão da língua, esta formação desloca-se para cima. O restante exame físico encontra-se dentro dos parâmetros de normalidade.',
        question: 'Qual dos seguintes é o diagnóstico mais provável?',
        options: ['Abcesso dentário.', 'Adenopatia cervical.', 'Carcinoma papilar da tiroide.', 'Quisto branquial.', 'Quisto do canal tiroglosso.']
    },
    {
        n: 42, topic: 'infecciologia',
        text: 'Uma mulher de 35 anos, natural de Angola e residente em Portugal há mais de dez anos, vem à consulta hospitalar de seguimento. Tem história de infeção por VIH-1; está assintomática. A medicação habitual inclui tenofovir + emtricitabina + efavirenz, com boa tolerância. Nega internamentos prévios por infeções oportunistas. Os sinais vitais são temperatura 36,3 ºC, frequência respiratória 15/min, frequência cardíaca 76/min e pressão arterial 110/70 mm Hg. Ao exame físico palpam-se adenomegalias axilares bilaterais infracentimétricas. O restante exame físico encontra-se dentro dos parâmetros de normalidade.',
        labs: 'Soro: Carga vírica ARN-VIH-1 1000 cópias/mL\nSangue: Hemoglobina 11,0 g/dL · VGM 80 fL · Leucócitos 4000/mm³ (Neutrófilos 60%, Linfócitos 20%) · Plaquetas 150 × 10⁹/L · Linfócitos T CD4+ 135 células/µL [N = 500-1400]',
        question: 'Para qual das seguintes condições é mais prioritária a instituição de profilaxia?',
        options: ['Candidose.', 'Criptococose.', 'Leishmaniose.', 'Micobacteriose não tuberculosa.', 'Pneumocistose.']
    },
    {
        n: 43, topic: 'cardiologia',
        text: 'Um homem de 18 anos, jogador de futsal, vem ao consultório médico porque no exame anual obrigatório o médico lhe detetou um «sopro». O eletrocardiograma apresenta critérios de hipertrofia ventricular esquerda. Ele está preocupado, pois o médico disse-lhe que corria risco de sofrer morte súbita. Está assintomático. Não tem antecedentes pessoais de síncope ou paragem cardíaca, nem história de morte súbita na família. Os sinais vitais são temperatura 36,5 °C, frequência respiratória 16/min, frequência cardíaca 55/min e pressão arterial 110/70 mm Hg. A auscultação cardíaca revela sopro sistólico de ejeção 2/6 no foco aórtico em crescendo-decrescendo. O restante exame físico encontra-se dentro dos parâmetros de normalidade. O estudo de Holter revela taquicardia paroxística supraventricular autolimitada. O ecocardiograma mostra aurícula esquerda com 32 mm de diâmetro; restantes cavidades cardíacas de dimensão normal. Tem aorta bicúspide, válvulas auriculoventriculares redundantes e septo interventricular com 18 mm de espessura. A prova de esforço máximo revela resposta hipotensiva da pressão arterial.',
        question: 'Qual dos seguintes fatores, presentes na história deste doente, está mais fortemente associado ao aumento do risco de morte súbita?',
        options: ['Dimensão da aurícula esquerda.', 'Resposta hipotensiva na prova de esforço.', 'Sexo masculino.', 'Taquicardia paroxística supraventricular.', 'Válvulas auriculoventriculares redundantes.']
    },
    {
        n: 44, topic: 'neurologia',
        text: 'Uma mulher de 37 anos recorre à consulta por fadiga e disfonia que se iniciou, há seis meses, após uma infeção respiratória alta. Refere fadiga generalizada vespertina e quando faz esforço físico. Ocasionalmente tem dificuldade em pentear-se, abrir frascos ou subir degraus; por vezes não consegue focar as letras. Os sintomas melhoram com o descanso, mas tem dias em que demora a recuperar. Não tem antecedentes pessoais ou familiares de relevo e não faz medicação habitual. Os sinais vitais encontram-se dentro dos parâmetros de normalidade. Ao exame físico observa-se ptose palpebral bilateral, assimétrica, com diminuição da força de abertura e encerramento dos olhos, paresia facial bilateral e voz nasalada, surgindo disfonia ocasionalmente durante a entrevista. Apresenta tetraparesia grau 4, de predomínio proximal. Os reflexos osteotendinosos estão mantidos e simétricos e os reflexos plantares são flexores. O restante exame físico encontra-se dentro dos parâmetros de normalidade.',
        question: 'Qual das seguintes alternativas é a causa mais provável do quadro atual da doente?',
        options: ['Ativação do complemento mediada por anticorpo.', 'Bloqueio de recetor mediado por anticorpo.', 'Estimulação de recetor mediada por anticorpo.', 'Fagocitose de complexos anticorpo-antigénio.', 'Formação de imunocomplexos circulantes.']
    },
    {
        n: 45, topic: 'medicina_interna',
        text: 'Um homem de 35 anos vem à consulta por episódios de dor lombar noturna com oito anos de evolução. Refere agravamento na intensidade e frequência nos últimos três meses, com vários despertares noturnos. Refere tumefação do joelho direito com um mês de evolução. Refere ainda «desconforto abdominal», difuso, sem relação com alimentação, que ocorre uma vez por semana. Ele não tem antecedentes patológicos de relevo. Refere que o pai sempre teve a «coluna torta». Os sinais vitais e a biometria encontram-se dentro dos parâmetros de normalidade. Ao exame físico apresenta limitação da flexão da coluna lombar e tumefação do joelho direito com limitação da flexão. Apresenta lesões descamativas eritematosas nos cotovelos. O restante exame físico encontra-se dentro dos parâmetros de normalidade.',
        labs: 'Soro: PCR 0,3 mg/L · Fator reumatoide 18 U/L [N < 14] · HLA B27 Positivo\nSangue: Hemoglobina 13,8 g/dL · Leucócitos 6400/mm³ (Linfócitos 28%) · Plaquetas 237 × 10⁹/L · VS 11 mm/1.ª hora\nUrina: Proteínas, Hemoglobina e Leucócitos negativos\nRaio-X da bacia: sacroileíte esquerda. Raio-X da coluna lombar: pontes ósseas grosseiras em L1-L2 e L4-L5.',
        question: 'Qual das seguintes alternativas melhor explica este quadro clínico?',
        options: ['Artrite psoriática.', 'Artrite reativa.', 'Artrite reumatoide.', 'Doença de Crohn.', 'Espondilite anquilosante.']
    },
    {
        n: 46, topic: 'medicina_interna',
        text: 'Uma mulher de 32 anos recorre à consulta no centro de saúde. Refere dor e desconforto na face esquerda e no dorso, desde que, há dois dias, adormeceu na praia durante três horas. Ela não tem antecedentes pessoais de relevo. A medicação habitual inclui contracetivo oral. Nega consumo de álcool ou tabaco. Os sinais vitais e a biometria encontram-se dentro dos parâmetros de normalidade. Ao exame físico observa-se bom estado geral, mucosas coradas e hidratadas. Apresenta eritema cutâneo disperso pela face esquerda e dorso, com duas flictenas na região escapular direita. O restante exame físico, incluindo a auscultação cardiopulmonar, encontra-se dentro dos parâmetros de normalidade.',
        question: 'Com base nestas constatações, esta doente é mais suscetível de desenvolver qual das seguintes condições?',
        options: ['Carcinoma basocelular.', 'Carcinoma escamoso.', 'Linfoma cutâneo.', 'Melanoma.', 'Queratose actínica.']
    },
    {
        n: 47, topic: 'medicina_interna',
        text: 'Uma mulher de 48 anos, empregada doméstica, vem ao consultório médico por perda de urina quando faz esforços, tais como pegar no aspirador e no neto de 8 meses, desde há três meses. Refere ainda fogachos esporádicos. Nega outros sintomas urinários ou gastrointestinais. A menarca foi aos 13 anos, ciclos regulares de 35-40 dias, cataménios de 6 dias; gesta 3, para 3 (três partos por cesariana há 26, 24 e 20 anos). Como método contracetivo efetuou laqueação tubária bilateral na última cesariana. A última menstruação ocorreu há 21 dias. Ela não tem antecedentes pessoais ou familiares de relevo. Os sinais vitais são temperatura 36,5 ºC, frequência respiratória 12/min, frequência cardíaca 89/min e pressão arterial 134/82 mm Hg. Ela tem 159 cm de altura e pesa 83 kg; IMC 32 kg/m². O exame ginecológico mostra a presença de prolapso genital, estadio I. O restante exame físico encontra-se dentro dos parâmetros de normalidade.',
        question: 'Qual das seguintes alternativas é a recomendação inicial mais adequada para o tratamento desta doente?',
        options: ['Colocar pessário.', 'Histerectomia vaginal.', 'Perda ponderal.', 'Terapêutica hormonal de substituição.', 'Tratamento com anticolinérgico.']
    },
    {
        n: 48, topic: 'neurologia',
        text: 'Um homem de 26 anos recorre ao serviço de urgência por assimetria facial. Teve uma queda de motociclo, com capacete, há seis dias, com traumatismo do ombro direito e craniano ligeiro, sem perda de consciência. Manteve, desde então, dor ligeira localizada no ombro, pescoço e região mastoideia e nuca à direita, que tem vindo a melhorar. Desde há dois dias nota sensação de face «presa». Hoje notou assimetria facial e dificuldade em bochechar. Não tem antecedentes de relevo e não faz medicação habitual. Nega consumo de álcool, tabaco ou drogas de abuso. Os sinais vitais são temperatura 37,0 ºC, frequência cardíaca 72/min e pressão arterial 125/60 mm Hg. O exame físico revela assimetria facial em repouso, com diminuição das rugas de expressão na testa, dificuldade no encerramento palpebral e apagamento do sulco nasogeniano à direita. Apresenta diminuição da força de oclusão do olho direito, com supraversão do globo ocular, desvio da comissura bucal para a esquerda e diminuição da força de oclusão labial à direita. Não se verificam quaisquer outras alterações do exame neurológico. Não existem lesões cutâneas na face, crânio, canal auditivo externo ou orofaringe. O restante exame físico encontra-se dentro dos parâmetros de normalidade.',
        question: 'Qual das seguintes alternativas é o próximo passo mais adequado na gestão deste doente?',
        options: ['Prescrever aciclovir oral.', 'Prescrever lágrimas artificiais.', 'Prescrever prednisolona oral.', 'Solicitar angio-RM dos vasos do pescoço.', 'Solicitar TC cranioencefálica.']
    },
    {
        n: 49, topic: 'medicina_interna',
        text: 'Uma mulher de 39 anos vem ao consultório médico por «dor de garganta» com quatro dias de evolução. Teve uma «infeção respiratória» há seis semanas, tendo sido observada no serviço de urgência e medicada com paracetamol, melhorando em uma semana. Agora refere sentir-se ansiosa, suada, febril, com «dor de garganta» permanente, irradiando aos ouvidos. A história médica revela fibrilhação auricular paroxística medicada com rivaroxabano. Os sinais vitais são 38,6 ºC, frequência respiratória 16/min, frequência cardíaca 120/min (pulso rítmico) e pressão arterial 120/88 mm Hg. Ao exame físico a glândula tiroide está aumentada de tamanho e dolorosa à palpação. O restante exame físico, incluindo o da orofaringe, encontra-se dentro dos parâmetros de normalidade.',
        labs: 'Soro: Creatinina 0,8 mg/dL · TSH 0,1 µU/mL · T4 livre 35 µg/dL\nSangue: Hemoglobina 14,1 g/dL · Leucócitos 5000/mm³ · VS 55 mm/1.ª hora',
        question: 'Qual das seguintes alternativas é a causa subjacente mais provável deste quadro?',
        options: ['Autoanticorpos.', 'Doença hereditária.', 'Iatrogenia medicamentosa.', 'Infeção vírica.', 'Neoplasia.']
    },
    {
        n: 50, topic: 'infecciologia',
        text: 'Uma mulher de 60 anos vem ao médico de família por ter, na perna esquerda, uma «lesão vermelha» associada a dor. Os antecedentes incluem diabetes mellitus, hipertensão arterial e obesidade. A medicação habitual inclui metformina e empagliflozina, ramipril e amlodipina. Os sinais vitais são temperatura 38 ºC, frequência respiratória 20/min, frequência cardíaca 100/min, e pressão arterial de 130/78 mm Hg. Ela tem 162 cm de altura e pesa 94 kg; IMC 36 kg/m². Ao exame físico apresenta-se calma, orientada e colaborante. Apresenta na face anterior da perna esquerda lesão eritematosa com 15 cm × 8 cm. A lesão está quente e edemaciada ao toque, com bordos bem delimitados. Pulsos arteriais palpáveis e simétricos. O restante exame físico encontra-se dentro dos parâmetros de normalidade.',
        question: 'Qual dos seguintes fármacos é o próximo passo mais adequado na gestão desta doente?',
        options: ['Ácido fusídico.', 'Enoxaparina.', 'Ibuprofeno.', 'Penicilina.', 'Prednisolona.']
    },
    {
        n: 51, topic: 'infecciologia',
        text: 'Uma mulher de 64 anos vem à consulta por história de infeções urinárias recorrentes (cinco episódios) desde há um ano. Atualmente sem queixas urinárias, após tratamento do último episódio de infeção há duas semanas. Os antecedentes obstétricos são gesta 3, para 3 (três partos vaginais sem intercorrências). É sexualmente ativa; a menopausa ocorreu aos 51 anos. A história médica inclui dislipidemia e correção cirúrgica de incontinência urinária, há seis anos, com rede (sling) transobturadora da uretra média. A medicação habitual inclui atorvastatina. Os sinais vitais são temperatura 36,3 ºC, frequência respiratória 14/min, frequência cardíaca 70/min e pressão arterial 125/77 mm Hg. Ela tem 160 cm de altura e pesa 81 kg; IMC 31,6 kg/m². Ao exame ginecológico observa-se atrofia vulvovaginal, sem outras alterações. O restante exame físico encontra-se dentro dos parâmetros de normalidade.',
        question: 'Qual das seguintes é a medida mais eficaz na prevenção da queixa principal desta doente?',
        options: ['Aconselhar lavagem genital após o coito.', 'Aplicar estrogénio vaginal.', 'Proceder ao rastreio de diabetes mellitus.', 'Realizar urocultura pós-coital.', 'Remover a rede (sling) da uretra média.']
    },
    {
        n: 52, topic: 'oftalmologia',
        text: 'Um menino de 7 anos é observado no serviço de urgência por nódulo pré-auricular e olho vermelho com dois dias de evolução. Ele tem contacto com dois cães, um gato e gado ovino e caprino em casa dos avós, em meio rural. Não tem antecedentes pessoais ou familiares de relevo. Os sinais vitais são temperatura 38 ºC, frequência cardíaca 90/min e pressão arterial 95/61 mm Hg; SpO₂ 97% (ar ambiente). Ao exame físico apresenta bom estado geral, hiperemia conjuntival e palpebral e lacrimejo do olho esquerdo. Observa-se pequena lesão cutânea papular eritematosa, na hemiface homolateral, e gânglio pré-auricular esquerdo, doloroso à palpação, de consistência elástica, com 1,5 cm de maior diâmetro. A auscultação cardíaca e pulmonar, bem como o restante exame físico, encontram-se dentro dos parâmetros de normalidade.',
        question: 'Qual dos seguintes é o agente etiológico mais provável do quadro descrito?',
        options: ['Adenovírus.', 'Bartonella henselae.', 'Borrelia burgdorferi.', 'Francisella tularensis.', 'Toxoplasma gondii.']
    },
    {
        n: 53, topic: 'cardiologia',
        text: 'Um homem de 39 anos vem ao serviço de urgência, trazido pelo serviço de emergência extra-hospitalar, por «o coração estar a bater rápido», sem causa precipitante aparente, há 30 minutos. Não apresenta nenhum sintoma adicional. Tem antecedentes de transplantação cardíaca aos 26 anos, por insuficiência cardíaca secundária a miocardiopatia dilatada idiopática. Os sinais vitais são temperatura 36,5 ºC, frequência respiratória 25/min, frequência cardíaca 168/min e pressão arterial 100/64 mm Hg. O doente está consciente e colaborante. O restante exame físico encontra-se dentro dos parâmetros de normalidade. Foi efetuado um eletrocardiograma de 12 derivações, no domicílio, que revelou taquicardia de complexos QRS estreitos, com frequência de 170/min, sem evidência da presença de ondas P.',
        question: 'Qual dos seguintes é o próximo passo mais adequado na gestão deste doente?',
        options: ['Administrar adenosina.', 'Administrar amlodipina.', 'Administrar bisoprolol.', 'Realizar cardioversão elétrica assíncrona.', 'Realizar massagem do seio carotídeo.']
    },
    {
        n: 54, topic: 'cardiologia',
        text: 'Uma mulher de 58 anos vem ao consultório médico, para reavaliação, quatro semanas após aumento da dose de ramipril, por hipertensão arterial não controlada. Os registos tensionais realizados em casa revelam pressões médias de 138 mm Hg (sistólica) e 88 mm Hg (diastólica). A história médica revela diabetes mellitus tipo 2, conhecida há 10 anos, retinopatia diabética não proliferativa, doença renal diabética e psoríase. A medicação inclui semaglutido, dapagliflozina, ramipril, finerenona, furosemida, atorvastatina e fluticasona tópica. Os sinais vitais são temperatura 36 ºC, frequência respiratória 17/min, frequência cardíaca 89/min e pressão arterial 139/85 mm Hg. O exame físico encontra-se dentro dos parâmetros de normalidade.',
        labs: 'Soro: Creatinina 2,7 mg/dL · TFGe 19 mL/min/1,73m² · Sódio 139 mEq/L · Potássio 5,0 mEq/L\nSangue: HbA1c 8,1%\nUrina: Razão albumina/creatinina 28 mg/g [N < 30]\nAnálises anteriores: creatinina 2,3 mg/dL (TFGe 23 mL/min/1,73m²).',
        question: 'Qual dos seguintes é o próximo passo mais adequado na gestão desta doente?',
        options: ['Prescrever amlodipina.', 'Prescrever metformina.', 'Suspender dapagliflozina.', 'Suspender furosemida.', 'Suspender ramipril.']
    },
    {
        n: 55, topic: 'medicina_interna',
        text: 'Um casal recorre à consulta por infertilidade desde há dois anos. A mulher tem 28 anos e é professora. Os antecedentes obstétricos são gesta 1, para 0 (um abortamento espontâneo às 6 semanas de gestação, aos 21 anos). A menarca ocorreu aos 12 anos, e apresenta ciclos regulares de 28 dias e cataménios de 4 dias. Refere dismenorreia no primeiro dia da menstruação, desde há dois anos, coincidente com a suspensão da toma do estroprogestativo oral. A coitarca foi aos 18 anos e teve um único parceiro sexual desde essa altura. Sem antecedentes pessoais de relevo. O marido, de 28 anos, condutor de táxi, tem antecedentes de cirurgia a varicocelo, há quatro anos. Ambos negam hábitos tabágicos, etílicos ou de drogas recreativas. O casal tem relações sexuais com penetração vaginal, duas vezes por semana.',
        question: 'Qual das seguintes alternativas é a explicação mais provável para a condição deste casal?',
        options: ['Disfunção ovulatória.', 'Frequência do coito.', 'Incapacidade de nidação.', 'Obstrução tubária.', 'Oligoespermia.']
    },
    {
        n: 56, topic: 'medicina_interna',
        text: 'Uma mulher de 28 anos vem ao consultório médico, em outubro, por atraso menstrual, polaquiúria e desconforto mamário bilateral desde há uma semana. A data da última menstruação foi a 20 de agosto do corrente ano. Refere atividade sexual desprotegida desde há oito meses. A menarca foi aos 12 anos, com ciclos regulares de 28-30 dias; coitarca aos 18 anos. Os sinais vitais encontram-se dentro dos parâmetros de normalidade. Ao exame físico apresenta tensão mamária bilateral. Ao toque vaginal e palpação bimanual o colo está amolecido, inteiro e fechado, e é indolor à mobilização. O útero está em anteversoflexão, tem contornos regulares, está amolecido e aumentado de volume, sendo compatível com gravidez de 8 semanas. O teste imunológico de gravidez é positivo.',
        question: 'Com os dados disponibilizados, qual das seguintes é a data mais provável do parto?',
        options: ['6 de maio.', '20 de maio.', '27 de maio.', '3 de junho.', '27 de junho.']
    },
    {
        n: 57, topic: 'oftalmologia',
        text: 'Uma adolescente de 14 anos é observada em consulta por lesões cutâneas palpebrais pruriginosas, recorrentes, com quatro semanas de evolução. Aparecem de forma intermitente, mas tem notado agravamento progressivo. Começou a utilizar produtos cosméticos da mãe desde há um mês. A história médica revela asma controlada, sob terapêutica inalada com budesonida + formoterol para alívio quando sintomática. No exame físico apresenta lesões eritematovesiculares e algumas crostas palpebrais e perioculares bem demarcadas, sem exsudado. Não apresenta outras lesões cutâneas. Os sinais vitais e restante exame físico encontram-se dentro dos parâmetros de normalidade.',
        question: 'Qual dos seguintes diagnósticos é o mais provável?',
        options: ['Dermatite atópica.', 'Dermatite de contacto.', 'Dermatite herpetiforme.', 'Dermatite seborreica.', 'Eczema desidrótico.']
    },
    {
        n: 58, topic: 'neurologia',
        text: 'Um homem de 67 anos vem à consulta de oncologia por lombalgia de intensidade 7/10, com sete dias de evolução, que alivia com o decúbito, mas não responde a analgesia. Menciona ainda dificuldade na deambulação desde há três dias e parestesias dos membros inferiores com 12 horas de evolução. Nega outros sintomas associados ou história prévia de traumatismo. A história médica revela adenocarcinoma da próstata com metastização óssea, sob hormonoterapia. Sem outros antecedentes de relevo. Os sinais vitais e a biometria encontram-se dentro dos parâmetros de normalidade. Ao exame físico, apresenta bom estado geral, está consciente e orientado. A pele e as mucosas estão coradas e hidratadas. Existe paraparesia, grau 4/5, e hipostesia na porção mediana da coxa e na porção mediana e externa da perna, bilateralmente. Deambula com apoio. Não se verificam alterações do tónus do esfíncter anal. Existe dor à compressão das apófises espinhosas da coluna lombar, sem deformidade associada. O restante exame físico encontra-se dentro dos parâmetros de normalidade.',
        question: 'Qual dos seguintes estudos clínicos é o próximo passo mais adequado?',
        options: ['Eletromiografia.', 'Punção lombar.', 'Raio-X da coluna lombar.', 'RM da coluna lombar.', 'TC da coluna lombar.']
    },
    {
        n: 59, topic: 'medicina_interna',
        text: 'Um homem de 67 anos vem ao seu médico de família por apresentar noctúria (duas vezes/noite) de instalação gradual desde há quatro anos. Refere alterações do jato urinário com diminuição e intermitência, hesitação e sensação de resíduo pós-miccional. Tem frequência urinária diurna (10 vezes/dia). É fumador de 20 UMA desde há 54 anos. A história médica revela diabetes mellitus tipo 2, bem controlada com sitagliptina e metformina. Ele tem 174 cm de altura e pesa 82 kg; IMC 27 kg/m². Os sinais vitais encontram-se dentro dos parâmetros de normalidade. O exame físico revela hipertrofia prostática de consistência elástica, com volume superior a 70 cc, simétrica e sem nódulos ao toque retal. O doseamento de PSA total, de acordo com as boas normas, foi de 2 ng/mL. Iniciou terapêutica combinada com tansulosina e finasterida, tendo havido melhora franca dos sintomas aos seis meses de tratamento.',
        question: 'Qual das seguintes alternativas melhor explica o efeito terapêutico observado?',
        options: ['Desobstrução mecânica e funcional infravesical.', 'Diminuição da zona periférica da próstata.', 'Relaxamento da atividade das vesículas seminais.', 'Relaxamento do colo vesical.', 'Relaxamento do esfíncter urinário externo.']
    },
    {
        n: 60, topic: 'medicina_interna',
        text: 'Uma primigesta de 27 anos recorre ao serviço de urgência às 33 semanas e 4 dias de gestação por «pressão» suprapúbica associada a disúria, polaquiúria e sensação de barriga dura desde há dois dias. A gravidez tem decorrido sem intercorrências. A história médica revela doença de von Willebrand. A medicação habitual inclui polivitamínico. Os sinais vitais encontram-se dentro dos parâmetros de normalidade. Ao exame ginecológico observa-se corrimento vaginal branco, espesso, sem cheiro e sem sinais de colpite ou cervicite. O toque vaginal revela colo amolecido, intermédio, com 50% de extinção (apagamento) e 2 cm de dilatação, apresentação cefálica no plano «–2» e membranas íntegras. O cardiotocograma revela frequência cardíaca fetal com linha de base de 135/min, algumas acelerações e sem desacelerações, variabilidade normal e contratilidade uterina regular (uma contração a cada seis minutos). Decide-se internar a grávida.',
        labs: 'Soro: PCR 50 mg/L\nSangue: Hemoglobina 11,4 g/dL · Hematócrito 34,5% · Leucócitos 8600/mm³ (Neutrófilos 62%) · Plaquetas 140 × 10⁹/L\nUrina: Esterase leucocitária +++',
        question: 'Para além de antibioterapia e corticoterapia, qual dos seguintes é o próximo passo mais adequado na gestão desta grávida?',
        options: ['Atitude expectante.', 'Prescrever indometacina.', 'Prescrever nifedipina.', 'Prescrever salbutamol.', 'Prescrever sulfato de magnésio.']
    },
    {
        n: 61, topic: 'medicina_interna',
        text: 'Um homem de 82 anos vem à consulta de medicina geral e familiar pelo aparecimento de tumefações no pescoço desde há um mês. Refere ainda suores noturnos e anorexia desde a mesma altura, tendo perdido 3 kg nas duas últimas semanas. Os sinais vitais são temperatura axilar 37,4 ºC, frequência respiratória 16/min, frequência cardíaca 92/min e pressão arterial 136/78 mm Hg. Ao exame físico apresenta adenopatias de consistência elástica, móveis, com diâmetro máximo de 3 cm, cervicais e axilares, bilateralmente.',
        labs: 'Soro: Creatinina 0,8 mg/dL · LDH 200 U/L\nSangue: Hemoglobina 11,2 g/dL · VGM 90 fL · Leucócitos 8200/mm³ (Neutrófilos 58%, Eosinófilos 2%, Basófilos 0,5%, Linfócitos 32%, Monócitos 6%) · Plaquetas 204 × 10⁹/L · VS 72 mm/1.ª hora',
        question: 'Qual dos seguintes diagnósticos é o mais provável?',
        options: ['Leucemia linfoblástica aguda.', 'Leucemia linfocítica crónica.', 'Linfoma difuso de grandes células B.', 'Linfoma folicular.', 'Mononucleose infeciosa.']
    },
    {
        n: 62, topic: 'cardiologia',
        text: 'Uma mulher de 67 anos vem ao consultório médico por dispneia desde há quatro meses, agravada atualmente para pequenos esforços. Refere ainda ortopneia e dispneia paroxística noturna desde há duas semanas. A história médica revela hipertensão arterial com 20 anos de evolução e a medicação habitual inclui valsartan e hidroclorotiazida. Os sinais vitais são temperatura 36 ºC, frequência respiratória 18/min, frequência cardíaca 89/min e pressão arterial 134/87 mm Hg; SpO₂ 96% (ar ambiente). Ela tem 166 cm de altura e pesa 65 kg; IMC 24 kg/m². Ao exame físico está sentada e calma, conseguindo completar as frases sem pausas respiratórias. As mucosas estão coradas, hidratadas e acianóticas. Existe turgescência venosa jugular de 1 cm a 90º. Há expansibilidade simétrica do tórax, sem alterações na percussão. A auscultação cardíaca mostra S1 e S2 presentes e com presença de S3. A auscultação pulmonar revela crepitações bibasais. O exame abdominal encontra-se dentro dos parâmetros de normalidade. Existem edemas periféricos simétricos de ambos os membros inferiores, ao nível dos tornozelos.',
        question: 'Qual dos seguintes estudos é o próximo passo mais adequado para confirmação do diagnóstico mais provável?',
        options: ['Angiografia torácica.', 'Ecodoppler venoso dos membros inferiores.', 'Espirometria.', 'Gasometria.', 'Raio-X do tórax.']
    },
    {
        n: 63, topic: 'medicina_interna',
        text: 'Uma mulher de 23 anos é trazida ao serviço de urgência, por uma colega, por sensação de «aperto na garganta», entretanto a melhorar, com uma hora e meia de evolução. Adicionalmente refere eritema difuso na face, tronco e membros, prurido generalizado e sensação de calor, que persiste. Refere que iniciou toma de fosfomicina, há uma hora, por cistite. Não tem antecedentes pessoais de relevo. Os sinais vitais são temperatura 37 ºC, frequência respiratória 21/min, frequência cardíaca 101/min e pressão arterial 98/67 mm Hg; SpO₂ 98% (ar ambiente). Ao exame físico as mucosas estão coradas e hidratadas. Existe eritema macular difuso e disperso por toda a área corporal referida. A auscultação pulmonar revela sons respiratórios presentes, sem ruídos adventícios. O restante exame físico encontra-se dentro dos parâmetros de normalidade.',
        question: 'Qual dos seguintes marcadores serológicos é o mais específico deste quadro clínico?',
        options: ['Eosinófilos.', 'Histamina.', 'Imunoglobulina E.', 'Proteína C reativa.', 'Triptase.']
    },
    {
        n: 64, topic: 'cardiologia',
        text: 'Um homem de 24 anos é admitido na urgência, 30 minutos após um acidente de viação. Refere dor no tórax e no abdómen. Os sinais vitais são temperatura 38,8 ºC, frequência respiratória 22/min, frequência cardíaca 91/min e pressão arterial 100/62 mm Hg no braço direito e 105/65 mm Hg no braço esquerdo; SpO₂ 98% (ar ambiente). Ao exame físico está orientado e colaborante, com mucosas coradas e hidratadas. Não apresenta sinais de dificuldade respiratória ou feridas abertas visíveis. Observam-se hematomas (maior eixo de 5 cm) dispersos nas paredes torácica e abdominal. A auscultação cardíaca revela taquicardia, sem sopros. O abdómen é doloroso à palpação superficial, sem sinais de defesa. Não se palpam os pulsos nos membros inferiores. O restante exame físico, incluindo a auscultação pulmonar e o exame neurológico, encontra-se dentro dos parâmetros de normalidade. O raio-X do tórax revela alargamento do mediastino, sem sinais de fraturas ósseas. Não se observam fraturas nos raios-X dos membros superiores e inferiores.',
        question: 'Qual dos seguintes estudos é o mais adequado para confirmar o diagnóstico mais provável?',
        options: ['Angiografia dos membros inferiores.', 'Angio-TC do tórax.', 'Ecocardiografia transtorácica.', 'Ecografia abdominal.', 'Eletrocardiograma.']
    },
    {
        n: 65, topic: 'gastroenterologia',
        text: 'Um homem de 65 anos vem ao consultório médico por apresentar emagrecimento de 10% do peso corporal desde há seis meses. Refere ainda pirose e dois episódios de impactação alimentar, que resolveram de forma espontânea, após alguma dificuldade na deglutição, neste período. Adicionalmente, tem soluços frequentes quando faz refeições muito rápidas. A história médica inclui acidente vascular cerebral isquémico (AVC) há quatro anos, rinite e asma alérgicas. A medicação habitual inclui salbutamol em SOS. Os sinais vitais encontram-se dentro dos parâmetros de normalidade. Ele tem 172 cm de altura e pesa 62 kg; IMC 21 kg/m². Ao exame físico observa-se hemiparesia do membro superior direito (força 4/5). O restante exame físico encontra-se dentro dos parâmetros de normalidade. A endoscopia digestiva alta revela anéis esofágicos, perda do padrão vascular do esófago, hérnia do hiato (2 cm) com erosão esofágica; sem outras lesões no estômago ou duodeno.',
        question: 'Qual das seguintes alternativas é a condição subjacente mais provável deste doente?',
        options: ['Disfagia sequelar pós-AVC.', 'Espasmo esofágico difuso.', 'Estenose péptica.', 'Impactação esofágica idiopática.', 'Infiltração esofágica eosinofílica.']
    },
    {
        n: 66, topic: 'medicina_interna',
        text: 'Um homem de 65 anos recorre ao serviço de urgência por vómitos frequentes desde há cinco dias, que não respondem a antieméticos. Refere ainda dor abdominal ligeira no epigastro e agravamento de tosse crónica. Nega febre ou diarreia. É fumador de 40 UMA desde há 40 anos e consome bebidas alcoólicas em eventos sociais. Os sinais vitais são temperatura 35,5 ºC, frequência respiratória 16/min, frequência cardíaca 70/min e pressão arterial 100/65 mm Hg. Ele tem 160 cm de altura e pesa 53 kg; IMC 21 kg/m². Ao exame físico apresenta-se com bom estado geral, algo desidratado, e prostrado.',
        question: 'Qual das seguintes alternativas é mais provável de se encontrar na gasometria?',
        options: ['Acidose mista.', 'Acidose respiratória.', 'Alcalose metabólica.', 'Alcalose mista.', 'Alcalose respiratória.']
    },
    {
        n: 67, topic: 'pneumologia',
        text: 'Uma mulher de 64 anos, costureira, vem ao consultório médico por dispneia agravada, com 10 meses de evolução, que surge para esforços cada vez menores. Neste momento, após subir 10 degraus, tem de parar por «falta de ar» e depois recupera. Menciona ainda tosse seca episódica, mas cada vez mais frequente. Neste período, nega febre, toracalgia, palpitações, ortopneia ou dispneia paroxística noturna. A história médica revela hipertensão arterial, diabetes mellitus tipo 2 e osteoartrose. A medicação habitual inclui ramipril, clorotalidona, metformina, dapagliflozina, glucosamina e ibuprofeno em SOS. Os sinais vitais são temperatura 36,7 ºC, frequência respiratória 18/min, frequência cardíaca 98/min e pressão arterial 142/78 mm Hg; SpO₂ 95% (ar ambiente). Ao exame físico existe turgescência venosa jugular de 1 cm a 90º. Os gânglios cervicais são palpáveis (infracentimétricos), bilateralmente, móveis e indolores. Os dedos são hipocráticos. A auscultação cardíaca não revela alterações e a auscultação pulmonar mostra crepitações bibasais. Observa-se edema depressível dos membros inferiores, tibiotársicos. O restante exame físico encontra-se dentro dos parâmetros de normalidade.',
        question: 'Qual dos seguintes diagnósticos é o mais provável?',
        options: ['Fibrose pulmonar.', 'Iatrogenia medicamentosa.', 'Insuficiência cardíaca congestiva.', 'Pneumonia intersticial não específica.', 'Sarcoidose.']
    },
    {
        n: 68, topic: 'pediatria',
        text: 'Uma lactente de 8 meses é trazida ao serviço de urgência por vómitos incoercíveis e recusa alimentar desde o dia anterior. A mãe refere diminuição de diurese desde esse dia. Refere ainda episódio autolimitado de diarreia há duas semanas e otite média aguda na semana anterior, medicada com cefuroxima. A lactente não tem antecedentes pessoais ou familiares de relevo. Ao exame físico apresenta ar doente, mucosas secas, pele e mucosas pálidas e olhos encovados. O choro é irritado, mas consolável. O tempo de preenchimento capilar é de 2 segundos. O restante exame físico encontra-se dentro dos parâmetros de normalidade.',
        labs: 'Soro: Creatinina 1,16 mg/dL · Ureia 97 mg/dL · Bilirrubina total 2,04 mg/dL · PCR 68 mg/L · LDH 1539 U/L\nSangue: Hemoglobina 7,0 g/dL · Leucócitos 22 200/mm³ · Plaquetas 15 × 10⁹/L\nProva de Coombs negativa. Esquizócitos no esfregaço de sangue periférico.',
        question: 'Qual das seguintes alternativas é a explicação mais provável para os valores de plaquetas apresentados?',
        options: ['Indução por fármacos.', 'Destruição plaquetária de causa imunológica.', 'Diminuição de produção por insuficiência medular.', 'Microangiopatia e consumo periférico.', 'Sequestro plaquetário por hiperesplenismo.']
    },
    {
        n: 69, topic: 'medicina_interna',
        text: 'Um homem de 32 anos, engenheiro informático, recorre ao serviço de urgência por astenia marcada e anorexia desde há sete dias. Esteve de férias na América do Sul até há duas semanas. Não tem antecedentes patológicos de relevo e não faz medicação habitual. Os sinais vitais são temperatura 36,7 ºC, frequência respiratória 26/min, frequência cardíaca 70/min e pressão arterial 138/71 mm Hg; SpO₂ 97% (ar ambiente). Ele tem 171 cm de altura e pesa 64 kg; IMC 22 kg/m². O exame físico revela pele e mucosas hidratadas e descoradas. A auscultação cardíaca mostra sons rítmicos e sopro sistólico, grau 2/6, no bordo esquerdo do esterno. Os membros inferiores não apresentam edemas. O restante exame físico encontra-se dentro dos parâmetros de normalidade.',
        labs: 'Soro: Creatinina 10,8 mg/dL · Ureia 201 mg/dL · PCR < 10 mg/L · Sódio 135 mEq/L · Potássio 5,9 mEq/L\nSangue: Hemoglobina 7,1 g/dL · Leucócitos 8200/mm³ · Plaquetas 236 × 10⁹/L\nUrina: Proteínas 2+ · Hemoglobina 1+ · Leucócitos negativo',
        question: 'Qual dos seguintes é o próximo passo mais adequado na gestão deste doente?',
        options: ['Administrar furosemida.', 'Efetuar gasometria.', 'Realizar biópsia renal.', 'Referenciar para diálise.', 'Transfundir concentrado eritrocitário.']
    },
    {
        n: 70, topic: 'oftalmologia',
        text: 'Um menino de 6 anos é trazido pela mãe ao serviço de urgência por vómitos e prostração desde hoje. Dois dias antes tinha sido observado por trauma na região frontal após queda de bicicleta. Nessa altura, foi realizada sutura de ferida frontal inciso-contusa e prescrito paracetamol e ibuprofeno, para tratamento sintomático, tendo tido alta para o domicílio. Os sinais vitais são temperatura 38,2 ºC, frequência cardíaca 80/min, frequência respiratória 15/min e pressão arterial 107/64 mm Hg; SpO₂ 98% (ar ambiente). Ao exame físico apresenta-se sonolento, mas colaborante, com edema e rubor periorbitário à esquerda. Não apresenta dor ou limitação dos movimentos oculares; sem proptose. Observa-se ferida frontal suturada, com sinais inflamatórios e exsudado purulento.',
        question: 'Qual dos seguintes é o próximo passo mais adequado na gestão deste doente?',
        options: ['Dar alta medicado com amoxicilina + ácido clavulânico oral.', 'Internar e iniciar ceftriaxona endovenosa.', 'Realizar punção lombar.', 'Solicitar raio-X do crânio e seios perinasais.', 'Solicitar TC cerebral e das órbitas.']
    },
    {
        n: 71, topic: 'pneumologia',
        text: 'Uma mulher de 35 anos recorre ao serviço de urgência por edema e dor no membro inferior esquerdo desde há dois dias. Refere ainda dor torácica intensa, à direita, que a acordou hoje. Não é fumadora e faz contracetivo oral. Os sinais vitais são temperatura 37,4 ºC, frequência respiratória 18/min, frequência cardíaca 115/min e pressão arterial 106/60 mm Hg. Ao exame físico apresenta-se suada, ansiosa e com edema da coxa e perna esquerda.',
        labs: 'Soro: Creatinina 0,8 mg/dL · LDH 90 U/L\nSangue: Hemoglobina 11,0 g/dL · VGM 85 fL · Leucócitos 12 200/mm³ (Neutrófilos 68%, Eosinófilos 2%, Basófilos 0,5%, Linfócitos 22%, Monócitos 6%) · Plaquetas 165 × 10⁹/L · VS 31 mm/1.ª hora\nEcodoppler venoso: trombose venosa profunda da veia ilíaca esquerda. Angio-TC do tórax: embolia no território da artéria pulmonar direita.',
        question: 'Qual das seguintes alternativas é a causa subjacente mais provável da condição desta doente?',
        options: ['Anticorpos antinucleares positivos.', 'Défice de fator VIII.', 'Défice de fator IX.', 'Défice de fator de von Willebrand.', 'Mutação do fator V.']
    },
    {
        n: 72, topic: 'pediatria',
        text: 'Um adolescente de 15 anos é trazido ao serviço de urgência por quadro de náuseas e vómitos com duas horas de evolução. A mãe refere que encontrou um blister de paracetamol vazio em casa. Na entrevista com o adolescente, este refere que tomou 14 comprimidos de 1 g de paracetamol há 12 horas. Não tem antecedentes pessoais de relevo. Os sinais vitais são temperatura 36,5 ºC, frequência respiratória 20/min, frequência cardíaca 88/min, pressão arterial 132/91 mm Hg. O exame físico encontra-se dentro dos parâmetros de normalidade. Aguarda os resultados do estudo analítico, incluindo doseamento sérico de paracetamol.',
        question: 'Qual dos seguintes é o próximo passo mais adequado neste momento?',
        options: ['Administrar n-acetilcisteína.', 'Administrar vitamina K.', 'Administrar xarope de ipecacuanha.', 'Aguardar resultados analíticos para decisão terapêutica.', 'Iniciar alcalinização da urina.']
    },
    {
        n: 73, topic: 'gastroenterologia',
        text: 'Um homem de 52 anos vem ao consultório médico para vigilância do estado de saúde. Está assintomático. Tem antecedentes de uso de drogas ilícitas endovenosas, estando em abstinência há cinco anos. Teve um episódio de descompensação hepática há dois anos, com ascite volumosa e hemorragia de varizes esofágicas. Nessa altura, foi diagnosticada hepatite crónica a vírus C, tendo sido excluído carcinoma hepatocelular. Há um ano efetuou tratamento com sofosbuvir e ledipasvir durante 12 semanas, com resposta viral mantida. Atualmente não faz medicação. O exame físico revela fígado palpável três dedos abaixo do rebordo costal, com bordo duro e irregular, na linha médio-clavicular.',
        question: 'Para além de avaliação clínica, qual dos seguintes exames é a monitorização semestral mais adequada a realizar neste doente?',
        options: ['Cintigrafia hepática.', 'Ecografia hepática.', 'Elastografia hepática.', 'RM hepática com contraste.', 'TC abdominal com contraste.']
    },
    {
        n: 74, topic: 'pneumologia',
        text: 'Um homem de 59 anos, pedreiro desde os 20 anos, vem à consulta hospitalar para avaliação de dispneia, tosse seca e cansaço, com dois anos de evolução. A dispneia ocorre para esforços cada vez menores. A história médica revela hipertensão arterial e gota, e a medicação habitual inclui amlodipina e alopurinol. É ex-fumador (10 UMA) desde há 10 anos e refere hábitos etílicos de 40 g por dia desde há 35 anos. Os sinais vitais são temperatura 36,1 ºC, frequência respiratória 18/min, frequência cardíaca 89/min e pressão arterial 142/89 mm Hg; SpO₂ 95% (ar ambiente). Ele tem 168 cm de altura e pesa 98 kg; IMC 35 kg/m². Ao exame físico apresenta bom estado geral; a auscultação pulmonar revela crepitações nas bases. O restante exame físico encontra-se dentro dos parâmetros de normalidade. O raio-X do tórax mostra opacidades irregulares de vários tamanhos nos campos pulmonares inferiores.',
        question: 'Tendo em conta o diagnóstico mais provável, qual das seguintes alternativas é a alteração mais provável de se encontrar?',
        options: ['Aumento da capacidade vital.', 'Aumento da pressão parcial de CO₂ no sangue arterial.', 'Aumento do peptídeo B-natriurético.', 'Diminuição da capacidade de difusão de CO.', 'Diminuição do índice de Tiffeneau.']
    },
    {
        n: 75, topic: 'pediatria',
        text: 'Um recém-nascido, com um dia de vida, é observado no berçário. A gestação foi vigiada, de termo, e o parto foi distócico, por ventosa. O exame físico realizado na sala de partos encontrava-se dentro dos parâmetros de normalidade. Às 18 horas de vida, realizou-se rastreio de cardiopatias congénitas, com avaliação de oximetria de pulso pré- e pós-ductal (mão direita e pé direito). A SpO₂ (ar ambiente) foi de 95% e 89%, respetivamente, em três medições repetidas.',
        question: 'Qual dos seguintes é o próximo passo mais adequado?',
        options: ['Iniciar oxigenoterapia por cânula nasal de alto fluxo.', 'Orientar para consulta de cardiologia pediátrica.', 'Realizar doseamento de pró-BNP.', 'Realizar ecocardiograma.', 'Realizar eletrocardiograma.']
    }
].map(q => ({
    ...q,
    id: `PNA2024-B-${q.n}`,
    exam: EXAM_PNA_2024_B,
    answer: ANSWERS_PNA_2024_B[q.n - 1]
}));

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

// Para testes em Node
if (typeof module !== 'undefined') module.exports = { TOPICS, QUESTIONS, LETTERS };
