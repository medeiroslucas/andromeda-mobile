export type Astro = {
    name: string,
    alt: number;
    az: number;
    image: string,
    category: string,
    galery: string[],
    description: string
}

export type AstroCategories = {
    name: string,
    astros: Astro[]
}

export const categoryList: AstroCategories[] = [
    {
        name: 'Planetas',
        astros: [
            {
                name: 'Marte',
                alt: 13.37111,
                az: 238.5024,
                image: 'https://andromeda-pi2.s3.sa-east-1.amazonaws.com/planet.png',
                category: 'Planeta',
                galery: ['https://andromeda-pi2.s3.sa-east-1.amazonaws.com/mars.jpg', 'https://andromeda-pi2.s3.sa-east-1.amazonaws.com/mars1.jpg', 'https://andromeda-pi2.s3.sa-east-1.amazonaws.com/mars2.jpg'],
                description: `Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes é descrito como o "Planeta Vermelho", porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada. Marte é um planeta rochoso com uma atmosfera fina, com características de superfície que lembram tanto as crateras de impacto da Lua quanto vulcões, vales, desertos e calotas polares da Terra. O período de rotação e os ciclos sazonais de Marte são também semelhantes aos da Terra, assim como é a inclinação que produz as suas estações do ano. Marte é o lar do Monte Olimpo, a segunda montanha mais alta conhecida no Sistema Solar (a mais alta em um planeta), e do Valles Marineris, um desfiladeiro gigantesco. A suave Bacia Polar Norte, no hemisfério norte marciano, cobre cerca de 40% do planeta e pode ser uma enorme marca de impacto. Marte tem duas luas conhecidas, Fobos e Deimos, que são pequenas e de forma irregular. Estas luas podem ser asteroides capturados, semelhante ao 5261 Eureka, um asteroide troiano marciano.`
            },
            {
                name: 'Júpiter',
                alt: -13.37111,
                az: 238.5024,
                image: 'https://andromeda-pi2.s3.sa-east-1.amazonaws.com/jupiter-removebg-preview.png',
                category: 'Planeta',
                galery: ['https://andromeda-pi2.s3.sa-east-1.amazonaws.com/jupiter+2.jpg', 'https://andromeda-pi2.s3.sa-east-1.amazonaws.com/jupiter.jpg'],
                description: `Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol.Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto. É um planeta gasoso, junto com Saturno, Urano e Netuno. Estes quatro planetas são por vezes chamados de planetas jupiterianos ou planetas jovianos, e são os quatro gigantes gasosos, isto é, que não são compostos primariamente de matéria sólida. Júpiter é composto principalmente de hidrogênio, sendo um quarto de sua massa composta de hélio, embora o hélio corresponda a apenas um décimo do número total de moléculas. O planeta também pode possuir um núcleo rochoso composto por elementos mais pesados, embora, como os outros planetas gigantes, não possua uma superfície sólida bem definida. Por causa de sua rotação rápida, de cerca de dez horas, ele possui o formato de uma esfera oblata (ele possui uma suave, mas perceptível, saliência em torno do equador). Sua atmosfera externa é visivelmente dividida em diversas faixas, em várias latitudes, resultando em turbulência e tempestades nas regiões onde as faixas se encontram. Uma dessas tempestades é a Grande Mancha Vermelha, uma das características visíveis de Júpiter mais conhecidas e proeminentes, cuja existência data pelo menos do século XVII, quando foi pela primeira vez avistada com telescópio, com ventos de até 650  km/h e um diâmetro transversal duas vezes maior do que a Terra.`
            },
            {
                name: 'Mercúrio',
                alt: -13.37111,
                az: 238.5024,
                image: 'https://andromeda-pi2.s3.sa-east-1.amazonaws.com/mercurio-removebg-preview.png',
                category: 'Planeta',
                galery: ['https://andromeda-pi2.s3.sa-east-1.amazonaws.com/mercurio.jpg', ],
                description: `Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. O periélio da órbita de Mercúrio apresenta uma precessão de 5 600 segundos de arco por século, um fenômeno completamente explicado apenas a partir do século XX pela Teoria da Relatividade Geral formulada por Albert Einstein. A sua aparência é brilhante quando observado da Terra, tendo uma magnitude aparente que varia de −2,6 a 5,7, embora não seja facilmente observado pois sua separação angular do Sol é de apenas 28,3º. Uma vez que Mercúrio normalmente se perde no intenso brilho solar, exceto em eclipses solares, só pode ser observado a olho nu durante o crepúsculo matutino ou vespertino. Em uma média ao longo do tempo, Mercúrio (e não Vênus) é o planeta mais próximo da Terra, do que os outros planetas do Sistema Solar, como demostrado em um estudo publicado em março de 2019 na revista Physics Today. Segundo os pesquisadores Tom Stockman, Gabriel Monroe e Samuel Cordner, os métodos convencionais para o cálculo do "planeta mais próximo da Terra" são simples demais. Popularizou-se na ciência que Vênus seria o planeta mais próximo da Terra, por uma suposição errônea sobre a distância média entre os planetas. Um método matemático criado pelos pesquisadores, determinou que, quando se calcula a média ao longo do tempo, o vizinho mais próximo da Terra é, na verdade Mercúrio. Essa correção é relevante para mais do que apenas os vizinhos da Terra. A solução pode ser generalizada para incluir quaisquer dois corpos em órbitas aproximadamente circulares, concêntricas e coplanares. Usando o método mais preciso para estimar a distância média entre dois corpos em órbita, a conclusão foi que que essa distância é proporcional ao raio relativo das órbitas internas.`
            },
            {
                name: 'Netuno',
                alt: 13.37111,
                az: 238.5024,
                image: 'https://andromeda-pi2.s3.sa-east-1.amazonaws.com/netuno-removebg-preview.png',
                category: 'Planeta',
                galery: ['https://andromeda-pi2.s3.sa-east-1.amazonaws.com/netuno.jpg', 'https://andromeda-pi2.s3.sa-east-1.amazonaws.com/netuno1.jpg'],
                description: `Netuno é o oitavo planeta do Sistema Solar, o último a partir do Sol desde a reclassificação de Plutão para a categoria de planeta anão, em 2006. Pertencente ao grupo dos gigantes gasosos, possui um tamanho ligeiramente menor que o de Urano, mas maior massa, equivalente a 17 massas terrestres. Netuno orbita o Sol a uma distância média de 30,1 unidades astronômicas. O planeta é formado por um pequeno núcleo rochoso ao redor do qual encontra-se uma camada formada possivelmente por água, amônia e metano sobre a qual situa-se sua turbulenta atmosfera, constituída predominantemente de hidrogênio e hélio. De fato, notáveis eventos climáticos ocorrem em Netuno, inclusive a formação de diversas camadas de nuvens, tempestades ciclônicas visíveis, como a já extinta Grande Mancha Escura, além dos ventos mais rápidos do Sistema Solar, que atingem mais de 2 000 km/h. A radiação solar recebida por Netuno não seria suficiente para fornecer tamanha energia à turbulenta atmosfera, pelo que descobriu-se que o calor irradiado do centro do planeta possui um papel importante na manutenção destes eventos meteorológicos extremos. A pequena quantidade de metano nas camadas altas da atmosfera é, em parte, responsável pela coloração azul do planeta. `
            },
            {
                name: 'Saturno',
                alt: -13.37111,
                az: 238.5024,
                image: 'https://andromeda-pi2.s3.sa-east-1.amazonaws.com/saturno-removebg-preview.png',
                category: 'Planeta',
                galery: ['https://andromeda-pi2.s3.sa-east-1.amazonaws.com/saturno.jpg'],
                description: `Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas. Possui um pequeno núcleo rochoso, circundado por uma espessa camada de hidrogênio metálico e hélio. A sua atmosfera, também composta principalmente de hidrogênio, apresenta faixas com fortes ventos, cuja energia provém tanto do calor recebido do Sol quanto da energia irradiada de seu centro. Entretanto, estas bandas possuem aspecto pouco proeminente, com coloração que varia do marrom ao amarelado, devido à espessa névoa que envolve o planeta, além das camadas de nuvens. Sazonalmente surgem grandes sistemas de tempestades, além de vórtices permanentes existentes nos polos. `
            },
            {
                name: 'Urano',
                alt: 13.37111,
                az: 238.5024,
                image: 'https://andromeda-pi2.s3.sa-east-1.amazonaws.com/urano-removebg-preview.png',
                category: 'Planeta',
                galery: ['https://andromeda-pi2.s3.sa-east-1.amazonaws.com/urnao.jpg'],
                description: `Urano é o sétimo planeta a partir do Sol, o terceiro maior e o quarto mais massivo dos oito planetas do Sistema Solar. Foi nomeado em homenagem ao deus grego do céu, Urano, o pai de Cronos (Saturno) e o avô de Zeus (Júpiter). Embora seja visível a olho nu em boas condições de visualização, não foi reconhecido pelos astrônomos antigos como um planeta devido a seu pequeno brilho e lenta órbita. William Herschel anunciou sua descoberta em 13 de março de 1781, expandindo as fronteiras do Sistema Solar pela primeira vez na história moderna. Urano foi também o primeiro planeta a ser descoberto por meio de um telescópio. Urano tem uma composição similar à de Netuno, e ambos possuem uma composição química diferente da dos maiores gigantes gasosos, Júpiter e Saturno. Como tal, os astrônomos algumas vezes os colocam em uma categoria separada, os "gigantes gelados". A atmosfera de Urano, embora similar às de Júpiter e Saturno em sua composição primária de hidrogênio e hélio, contém mais "gelos" tais como água, amônia e metano, assim como traços de hidrocarbonetos. É a mais fria atmosfera planetária no Sistema Solar, com uma temperatura mínima de 49 K (–224 °C). Tem uma complexa estrutura de nuvens em camadas, e acredita-se que a água forma as nuvens mais baixas, e o metano as mais exteriores.Em contraste, seu interior é formado principalmente por gelo e rochas.`
            },
            {
                name: 'Vênus',
                alt: -13.37111,
                az: 238.5024,
                image: 'https://andromeda-pi2.s3.sa-east-1.amazonaws.com/venus-removebg-preview.png',
                category: 'Planeta',
                galery: [''],
                description: `Vênus é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vênus, equivalente a Afrodite. Depois da Lua, é o objeto mais brilhante do céu noturno, atingindo uma magnitude aparente de -4,6, o suficiente para produzir sombras. A distância média da Terra a Vênus é de 0,28 AU, sendo esta a menor distância entre qualquer par de planetas. Como Vênus se encontra mais próximo do Sol do que a Terra, ele pode ser visto aproximadamente na mesma direção do Sol (sua maior elongação é de 47,8°). Vênus atinge seu brilho máximo algumas horas antes da alvorada ou depois do ocaso, sendo por isso conhecido como a estrela da manhã (Estrela d'Alva) ou estrela da tarde (Vésper); também é chamado Estrela do Pastor. Vênus é considerado um planeta do tipo terrestre ou telúrico, chamado com frequência de planeta irmão da Terra, já que ambos são similares quanto ao tamanho, massa e composição. Vênus é coberto por uma camada opaca de nuvens de ácido sulfúrico altamente reflexivas, impedindo que a sua superfície seja vista do espaço na luz visível. Ele possui a mais densa atmosfera entre todos os planetas terrestres do Sistema Solar, constituída principalmente de dióxido de carbono. Vênus não possui um ciclo do carbono para fixar o carbono em rochas ou outros componentes da superfície, nem parece ter vida orgânica para absorvê-lo como biomassa. Acredita-se que no passado Vênus possuía oceanos como os da Terra, que se evaporaram quando a temperatura se elevou, restando uma paisagem desértica, seca e poeirenta, com muitas pedras em forma de placas. A água provavelmente se dissociou e, devido à inexistência de um campo magnético, o hidrogênio foi arrastado para o espaço interplanetário pelo vento solar. A pressão atmosférica na superfície do planeta é 92 vezes a da Terra. `
            },
        ]
    },
    {
        name: 'Satélites',
        astros: [
            {
                name: 'Lua',
                alt: 13.37111,
                az: 238.5024,
                image: 'https://andromeda-pi2.s3.sa-east-1.amazonaws.com/lua-removebg-preview.png',
                category: 'Satélite',
                galery: ['https://andromeda-pi2.s3.sa-east-1.amazonaws.com/lua.jpg', 'https://andromeda-pi2.s3.sa-east-1.amazonaws.com/lua+1.jpg', 'https://andromeda-pi2.s3.sa-east-1.amazonaws.com/lua+2.jpg'],
                description: `A Lua é o único satélite natural da Terra e o quinto maior do Sistema Solar. É o maior satélite natural de um planeta no sistema solar em relação ao tamanho do seu corpo primário, tendo 27% do diâmetro e 60% da densidade da Terra, o que representa 1⁄81 da sua massa. Entre os satélites cuja densidade é conhecida, a Lua é o segundo mais denso, atrás de Io. Estima-se que a formação da Lua tenha ocorrido há cerca de 4,51 mil milhões* de anos, relativamente pouco tempo após a formação da Terra. Embora no passado tenham sido propostas várias hipóteses para a sua origem, a explicação mais consensual atualmente é a de que a Lua tenha sido formada a partir dos detritos de um impacto de proporções gigantescas entre a Terra e um outro corpo do tamanho de Marte.A Lua encontra-se em rotação sincronizada com a Terra, mostrando sempre a mesma face visível, marcada por mares vulcânicos escuros entre montanhas cristalinas e proeminentes crateras de impacto. É o mais brilhante objeto no céu a seguir ao Sol, embora a sua superfície seja na realidade escura, com uma refletância pouco acima da do asfalto. A sua proeminência no céu e o seu ciclo regular de fases tornaram a Lua, desde a antiguidade, uma importante referência cultural na língua, em calendários, na arte e na mitologia. A influência da gravidade da Lua está na origem das marés oceânicas e ao aumento do dia sideral da Terra. A sua atual distância orbital, cerca de trinta vezes o diâmetro da Terra, faz com que no céu o satélite pareça ter o mesmo tamanho do Sol, permitindo-lhe cobri-lo por completo durante um eclipse solar total.`
            },
        ]
    }

]