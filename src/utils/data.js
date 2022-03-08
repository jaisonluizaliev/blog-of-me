import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: 'jaison',
      email: 'jaison-adm@hotmail.com',
      password: bcrypt.hashSync('1234567'),
      isAdmin: true,
    },
    {
      name: 'sabrina',
      email: 'sabrina@hotmail.com',
      password: bcrypt.hashSync('1234567'),
      isAdmin: false,
    },
  ],
  contents: [
    {
      heading: 'Depressão é um transtorno mental',
      slug: 'depressão-e-um-transtorno-mental',
      text: 'Depressão é um transtorno mental caracterizado por tristeza profunda persistente e aversão a atividades. Pode afetar os pensamentos, comportamentos, sentimentos e o bem-estar de uma pessoa.[1][2] As pessoas deprimidas podem sentir-se tristes, ansiosas, desesperadas, vazias, preocupadas, impotentes, inúteis, culpadas, irritadas, magoadas ou inquietas. Podem perder o interesse em atividades que antes eram prazerosas, podem perder o apetite ou comer demais, apresentar problemas de concentração, dificuldade para lembrar detalhes ou tomar decisões e podem contemplar ou tentar o suicídio. Problemas de insônia, sono excessivo, fadiga, perda de energia, mudança na alimentação, sofrimento, dores ou problemas digestivos resistentes a tratamento também podem estar presentes.[3]',
      author: {},
    },
    {
      heading: 'Motivação',
      slug: 'motivacao',
      text: `A motivação é o que explica por que pessoas ou animais iniciam, continuam ou terminam um certo comportamento em um momento determinado. Os estados motivacionais são comumente entendidos como forças atuantes dentro do agente que criam uma disposição para se envolver em um comportamento direcionado a um objetivo. Frequentemente, afirma-se que diferentes estados mentais competem entre si e que apenas o estado mais forte determina o comportamento.[1] Isto significa que podemos ser motivados a fazer algo sem realmente fazê-lo. O estado mental paradigmático que proporciona motivação é o desejo. Mas vários outros estados, como crenças sobre o que se deve fazer ou intenções, também podem proporcionar motivação.

Várias teorias concorrentes foram propostas sobre o conteúdo dos estados motivacionais. Elas são conhecidas como teorias de conteúdo e visam descrever quais objetivos geralmente ou sempre motivam as pessoas. A hierarquia de necessidades de Abraham Maslow e a teoria ERG, por exemplo, postulam que os seres humanos têm certas necessidades, que são responsáveis pela motivação. Algumas dessas necessidades, como a de comida e água, são mais básicas do que outras necessidades, como a de respeito por parte dos outros. Nesta visão, as necessidades superiores só podem proporcionar motivação uma vez que as necessidades inferiores forem satisfeitas.[2] As teorias behavioristas tentam explicar o comportamento apenas em termos da relação entre a situação e o comportamento externo e observável, sem referência explícita a estados mentais conscientes.`,

      // author: this.user.name,
      author: {},
    },
    {
      heading: 'redação',
      slug: 'redacao',
      text: `Redação (AO 1945: redacção) é o processo de redigir (escrever) um texto. É uma atividade presente na cultura civilizada desde a invenção da escrita, e atualmente considerada um campo profissional e artístico na literatura, na produção de roteiros, na elaboração de relatórios e documentos, na publicidade e no jornalismo, entre diversas outras áreas.[1] Por extensão, redação também é o termo usado no jargão jornalístico brasileiro para o ambiente de trabalho dos jornalistas de um veículo (jornal, revista, rádio e televisão).`,
      author: {},

      // author: this.user.name,
    },
    {
      heading: 'Sem fé é impossivel agradar a Deus',
      slug: 'sem-fe-e-impossivel-agradar-a-deus',
      text: `Fé (do Latim fide)[1] é a adesão de forma incondicional a uma hipótese que a pessoa passa a considerar como sendo uma verdade[2] sem qualquer tipo de prova ou critério objetivo de verificação, pela absoluta confiança que se deposita nesta ideia ou fonte de transmissão. A fé acompanha absoluta abstinência de dúvida pelo antagonismo inerente à natureza destes fenômenos psicológicos e da lógica conceitual. Ou seja, é impossível duvidar e ter fé ao mesmo tempo. A expressão se relaciona semanticamente com os verbos crer, acreditar, confiar e apostar, embora estes três últimos não necessariamente exprimam o sentimento de fé, posto que podem embutir dúvida parcial como reconhecimento de um possível engano. A relação da fé com os outros verbos, consiste em nutrir um sentimento de afeição, ou até mesmo amor, por uma hipótese a qual se acredita, ou confia, ou aposta ser verdade.[3]

Portanto, se uma pessoa acredita, confia ou aposta em algo, não significa necessariamente que ela tenha fé. Diante dessas considerações, embora não se observe oposição entre crença e racionalidade, como muitos parecem pensar, deve-se atentar para o fato de que tal oposição é real no caso da fé, principalmente no que diz respeito às suas implicações no processo de aquisição de conhecimento, que pode ser resumida à oposição direta à dúvida e ao importante papel que essa última desempenha na aprendizagem. É possível nutrir um sentimento de fé em relação a uma pessoa, um objeto inanimado, uma ideologia, um pensamento filosófico, um sistema qualquer, um conjunto de regras, um paradigma popular social e historicamente instituído, uma base de propostas ou dogmas de uma determinada religião. Tal sentimento não se sustenta em evidências, provas ou entendimento racional (ainda que este último critério seja amplamente discutido dentro da epistemologia e possa se refletir em sofismos ou falácias que o justifiquem de modo ilusório) e portanto, alegações baseadas em fé não são reconhecidas pela comunidade científica como parâmetro legítimo de reconhecimento ou avaliação da verdade de um postulado.

É geralmente associada a experiências pessoais e herança cultural podendo ser compartilhada com outros através de relatos, principalmente (mas não exclusivamente) no contexto religioso, e usada frequentemente como justificativa para a própria crença em que se tem fé, o que caracteriza raciocínio circular. A fé se manifesta de várias maneiras e pode estar vinculada a questões emocionais (tais como reconforto em momentos de aflição desprovidos de sinais de futura melhora, relacionando-se com esperança) e a motivos considerados moralmente nobres ou estritamente pessoais e egoístas. Pode estar direcionada a alguma razão específica (que a justifique) ou mesmo existir sem razão definida. E como mencionado anteriormente, também não carece absolutamente de qualquer tipo de argumento racional.`,
      author: {},

      // author: this.user.name,
    },
    {
      heading: 'Deus',
      slug: 'deus',
      text: 'a razão de vivermos é por ele',
      author: {},

      // author: this.user.name,
    },
  ],
};

export default data;
