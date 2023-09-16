function slide1(){
    document.getElementById('boticario').src="slider/boticario1.jpg";
    setTimeout("slide2()", 3000)
    document.getElementById('aId')
    }
    
    function slide2(){
    document.getElementById('boticario').src="slider/boticario2.jpg";
    setTimeout("slide3()", 3000)
    document.getElementById('aId')
    }
    
    function slide3(){
    document.getElementById('boticario').src="slider/boticario3.jpg";
    setTimeout("slide1()", 3000)
    document.getElementById('aId')
    };


const itens = [{
    quantidade: 0,
    id: 1,
    img: 'perfumecerto.png',
    nome: "perfume1",
    valor: "R$100",
    descricao: "Luiz Felipe Scolari",
    ano: "Ano de fundação",
},
{
    quantidade: 0,
    id: 2,
    img: 'perfumecerto.png',
    nome: "perfume2",
    valor: "R$200",
    descricao: "Dorival Júnior",
    ano: "Ano de fundação",
},
{
    quantidade: 0,
    id: 3,
    img: 'perfumecerto.png',
    nome: "perfume3",
    valor: "R$300",
    descricao: "Abel Ferreira",
    ano: "Ano de fundação",
},
{
    quantidade: 0,
    id: 4,
    img: 'perfumecerto.png',
    nome: "perfume4",
    valor: "R$400",
    descricao: "Rogério Ceni",
    ano: "Ano de fundação",
},
{
    quantidade: 0,
    id: 5,
    img: 'perfumecerto.png',
    nome: "perfume5",
    valor: "R$500",
    descricao: "Rogério Ceni",
    ano: "Ano de fundação",
},

]

inicializarloja = () => {
    var containerProdutos = document.getElementById('produtos');
    itens.map((val)=>{
        containerProdutos.innerHTML+= `
        <div class="produto">
            <img class="imagem-produto" src="`+val.img+`" />
            <h3 class="nome-produto">`+val.nome+`</h3>
            <div class="valor-produto">`+val.valor+`</div>
            <a class="adicionar-carrinho" key="`+val.id+`"href="produtos/produto`+val.id+`.html"><button>Adicionar ao carrinho</button></a>
        </div>
        <spam class="espaco"><spam>

        `;
    })
}

inicializarloja();

iniciarpagina = () => {
    var inicializarproduto = document.getElementById('paginavenda');
    itens.map((val)=>{
        inicializarproduto.innerHTML+= `
        <div class="inicio">
            <div class="botoes-inicio">
                <a href="index.html"><button class="botaoinicio">Inicio</button></a><span class="espaco"></span>
                <a href="login/cadastro.html"><button class="botaoinicio">Login</button></a><span class="espaco"></span>
                <a href="login/cadastro.html" ><button class="botaoinicio">Cadastro</button></a><span class="espaco"></span>
                <a href="" ><button class="botaoinicio"><img class="img-menu" src="imgs\bag.svg" alt=""></button></a><span class="espaco"></span>
            </div>
        </div>
        <div class="geral">
            <div class="imagem-formulario">
                <img src="/progweb/imgs/pngwing.com.png" alt="">
            </div>
            <div class="formulario">
                <div class="cabecalho-formulario">
                    <div class="titulo">
                        <h1>`+val.nome+`</h1>
                    </div>
                </div>
                <div class="descricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quam maiores provident vel sit laborum eum s.</div>
                <div class="preco">9999999</div>
                <div class="botoes">
                    <div class="adicionar-carrinho"><a key="AAAAAAAA"><button>Adicionar ao carrinho</button></a></div>
                    <span class="espaco"></span>
                    <div class="comprar-agora"><a key="AAAAAAAA"><button>Comprar agora</button></a></div>
                </div>

            </div>
        </div>
    `;
    })
}

iniciarpagina();

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";
    items.map((val)=>{
        if(val.quantidade > 0){
        containerCarrinho.innerHTML += `
       <p>`+val.nome+` | quantidade: `+val.quantidade+`</p>
       <hr>
       `;
       }
    })
}

var links = document.getElementsByClassName('adicionar-carrinho');
for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click",function(){
        let key = this.getAttribute('key')
        itens[key].quantidade++;
        atualizarCarrinho()
        return false;
    })
}












    /*
var times = [

    {
        id: 0,
        nome: "Club Athletico Paranaense",
        nometecnico: "Técnico",
        tecnico: "Luiz Felipe Scolari",
        ano: "Ano de fundação",
        fundacao: 1924
    },
    {
        id: 1,
        nome: "Clube de Regatas do Flamengo",
        nometecnico: "Técnico",
        tecnico: "Dorival Júnior",
        ano: "Ano de fundação",
        fundacao: 1895
    },
    {
        id: 2,
        nome: "Sociedade Esportiva Palmeiras",
        nometecnico: "Técnico",
        tecnico: "Abel Ferreira",
        ano: "Ano de fundação",
        fundacao: 1914
    },
    {
        id: 3,
        nome: "São Paulo Futebol Clube",
        nometecnico: "Técnico",
        tecnico: "Rogério Ceni",
        ano: "Ano de fundação",
        fundacao: 1930
    },


]; */







/* { } < OBJETO [] < ARRAY - [{},{},{}]

colocar mais objetos: exemplo: [
                                { nome: "..."},
                                { nome: "..."}
                               ]

// alert(times);

console.log(times);



for(var i = 0; i < times.length; i++){

    var conteudo = "";

    conteudo += '<div class="produto">';
    conteudo += '<div class="nome-produto">'  +  times[i].nome +  '</div>';
    conteudo += '<div class="nome-produto">'  +  times[i].nometecnico +  '</div>';
    conteudo += '<div class="valor-produto">' +  times[i].tecnico +  '</div>';
    conteudo += '<div class="descricao-produto">'  +  times[i].ano +  '</div>';
    conteudo += '<div class="botao-comprar">'+  times[i].fundacao + '</div>';
    conteudo += '<div class="botao-comprar">'+ '<a href="'+ times[i].botao-comprar +'"><button>comprar</button></a>' + '</div>';
    conteudo += '</div>';

    document.getElementById("divTimes").innerHTML += conteudo;

}
*/