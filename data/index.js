const categorias = [
    {
      nome: 'Alimentício',
      cards: [
        { imagem: 'https://paulistaoatacadista.vtexassets.com/arquivos/ids/319038/PaoKimBisnaguinha300g1.jpg?v=638103420249100000', nome: 'Bisnaguinhas Kim', preco: 'R$ 14,99', descricao: 'Macios, com textura e sabor inigualáveis, os nossos pães acompanham todas as refeições levando o máximo sabor ao seu dia a dia!', quantidade: 17 },
        { imagem: 'https://savegnagoio.vtexassets.com/arquivos/ids/380248/PaoKimHotDog500g1.jpg?v=638103419058300000', nome: 'Pão para HotDog Kim', preco: 'R$ 8,50', descricao: 'O pão de hot dog Kim entrega a maciez e o sabor desejados em lanches incríveis para você aproveitar no conforto de casa ou revender no seu comércio.', quantidade: 24 },
        { imagem: 'https://plataforma.supersimple.com.ar/Panelcontenidos/Contenidos/Doritos-sabor-queso-x-230-grs-1621262599-0-2.jpg', nome: 'Doritos', preco: 'R$ 23,80', descricao: 'A tortilha chips número #1 do mundo. Para aqueles que querem sair do óbvio, que buscam sempre desafiar a lógica do senso comum.', quantidade: 15 },
        { imagem: 'https://mambodelivery.vtexassets.com/arquivos/ids/180482-800-auto?v=637883941225400000&width=800&height=auto&aspect=true', nome: 'Fandangos', preco: 'R$ 17,99', descricao: ' É simples, agrada a todos, e acredita que podemos criar "Um milhão de momentos divertidos e gostosos em família!". É a opção perfeita para um lanche a qualquer...', quantidade: 5 },
      ],
    },
    {
      nome: 'Frios / Carnes',
      cards: [
        { imagem: 'https://static.clubeextra.com.br/img/uploads/1/609/24376609.jpg', nome: 'Salsicha Aurora', preco: 'R$ 24,90', descricao: 'No Hot Dog ou na refeição, a salsicha Aurora fica ótima. Prática e saborosa, basta aquecer 3 minutinhos em água fervente ou molho. E pronto!', quantidade: 20 },
        { imagem: 'https://cdn-cosmos.bluesoft.com.br/products/7893000024014', nome: 'Linguiça Toscana', preco: 'R$ 27,99', descricao: 'Seja para saboreá-la frita nas refeições do dia a dia ou assada em um churrasco em família, a linguiça toscana Sadia é deliciosa. Feita com ingredientes selecionados, ela é um alimento suculento e saboroso.', quantidade: 12 },
        { imagem: 'https://www.auroraalimentos.com.br/wp-content/uploads/2022/04/FILEZINHO-EMPANADO-GRANEL-3KG-11353_comprimido-1024x1024.png', nome: 'Filézinho Empanado de Frango Aurora', preco: 'R$ 29,99', descricao: 'O Filezinho  Aurora Empanado conta com uma casquinha crocante, sequinha mas muito suculento por dentro. Um produto 100% carne de frango. Uma opção muito saborosa seja como aperitivo ou refeição.', quantidade: 22 },
        { imagem: 'https://statics.angeloni.com.br/super/files/produtos/1291548/1291548_1_zoom.jpg', nome: 'Nuggets Tradicional Sadia', preco: 'R$ 13,99', descricao: 'Elaborado com carne selecionada de frango, especialmente temperada, empanada, pré-frita, cozida e congelada. Unidades prontas para assar ou fritar, com cobertura crocante e sequinha.', quantidade: 10 },
      ],
    },
    {
      nome: 'Higiene',
      cards: [
        { imagem: 'https://io2.convertiez.com.br/m/farmaponte/shop/products/images/18148/large/shampoo-pantene-restauracao-400ml_10395.jpg', nome: 'Shampoo Pantene', preco: 'R$ 34,82', descricao: ' Indicado para tratar cabelos danificados. Possui fórmula com pró-vitaminas, aminoácidos e óleo de argan que reduz a perda de proteína dos fios, reparando as cutículas e prevenindo pontas duplas. Os cabelos ficam suaves, saudáveis e brilhantes.', quantidade: 10 },
        { imagem: 'https://www.drogarianet.com.br/media/product/576/condicionador-pantene-pro-v-restauracao-400ml-702.jpg', nome: 'Condicionador Pantene', preco: 'R$ 36,38', descricao: ' Indicado para tratar cabelos danificados. Possui fórmula com pró-vitaminas, aminoácidos e óleo de argan que reduz a perda de proteína dos fios, reparando as cutículas e prevenindo pontas duplas. Os cabelos ficam suaves, saudáveis e brilhantes.', quantidade: 15 },
        { imagem: 'https://farmaconde.vtexassets.com/arquivos/ids/177367/creme-de-tratamento-skala-divino-pote-1kg-245217-7897042012473.jpg?v=638199256744300000', nome: 'Creme de Pentear Skala', preco: 'R$ 8,90', descricao: 'Só um produto Divino para entender e ajudar você que está com duas texturas. Esse produto elimina o frizz, hidrata, dá vida aos fios opacos, volume na medida certa e modela os cachos de maneira suave sem deixar resíduos.', quantidade: 20 },
        { imagem: 'https://www.lojadisfer.com.br/979-thickbox_default/creme-dental-colgate-tripla-acao-90g.jpg', nome: 'Pasta de Dente Colgate', preco: 'R$ 6,89', descricao: 'O creme dental colgate Tripla Ação cuida da sua boca por completo, e a fórmula desse creme dental que é antibacteriana proporciona defesa ativa contra bactérias por até 12 horas!', quantidade: 25 },
      ],
    },
    {
      nome: 'Limpeza',
      cards: [
        { imagem: 'https://arquivosbrasil.blob.core.windows.net/insulas/imagem/amaciante-ype-aconchego-azul-caixa-c-6x2-ean-7896098902400-5280106.png', nome: 'Amaciante Ypê', preco: 'R$ 19,99', descricao: 'O amaciante ypê tradicional aconchego 2L contam com cápsulas de perfume proporcionando um perfume agradável nas roupas por muito mais tempo. Além disso, sua fórmula protege as fibras, criando uma película protetora nas fibras dos tecidos, amacia as roupas e as torna mais fáceis de passar.', quantidade: 14 },
        { imagem: 'https://s3.amazonaws.com/images.ecwid.com/images/9684134/1351081713.jpg', nome: 'Detergente Ypê', preco: 'R$ 3,49', descricao: 'Sua composição possui tensoativos biodegradáveis, com alto poder de limpeza, na medida certa para a completa remoção das sujidades. Além disso, o produto possui pH neutro e é dermatologicamente testado.', quantidade: 16 },
        { imagem: 'https://static.paodeacucar.com/img/uploads/1/536/22316536.jpg', nome: 'Sabão em Pó Tixan', preco: 'R$ 27,37', descricao: 'Dê adeus às manchas difíceis! O sabão em pó Tixan Ypê é a solução perfeita para deixar suas roupas limpas, livres de manchas¹ e com um perfume incrível. ', quantidade: 18 },
        { imagem: 'https://a-static.mlcdn.com.br/1500x1500/desinfetante-ype-bak-41534-eucalipto-5l/magazineluiza/225596300/fd895dcfdd0f73320d9c7789dd41b013.jpg', nome: 'Desifetante Ypê', preco: 'R$ 35,99', descricao: 'Casa limpa e protegida de bactérias e fungos não é fácil, né? Para te ajudar nessa tarefa, a versão Citrus do desinfetante Ypê Pinho elimina 99,9% das bactérias e fungos1, e ainda perfuma o ambiente de um jeito único!', quantidade: 20 },
      ],
    },
  ];
  
  export default categorias;
  