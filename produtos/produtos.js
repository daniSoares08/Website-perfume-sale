const itens = [{
    quantidade: 0,
    id: 1,
    img: 'perfumecerto.png',
    nome: "perfume1",
    valor: "R$100",
    tecnico: "Luiz Felipe Scolari",
    ano: "Ano de fundação",
},
{
    quantidade: 0,
    id: 2,
    img: 'perfumecerto.png',
    nome: "perfume2",
    valor: "R$200",
    tecnico: "Dorival Júnior",
    ano: "Ano de fundação",
},
{
    quantidade: 0,
    id: 3,
    img: 'perfumecerto.png',
    nome: "perfume3",
    valor: "R$300",
    tecnico: "Abel Ferreira",
    ano: "Ano de fundação",
},
{
    quantidade: 0,
    id: 4,
    img: 'perfumecerto.png',
    nome: "perfume4",
    valor: "R$400",
    tecnico: "Rogério Ceni",
    ano: "Ano de fundação",
},
{
    quantidade: 0,
    id: 5,
    img: 'perfumecerto.png',
    nome: "perfume5",
    valor: "R$500",
    tecnico: "Rogério Ceni",
    ano: "Ano de fundação",
},

]

iniciarpagina = () => {
    var inicializarproduto = document.getElementById('paginavenda');
    itens.every((val)=>{
        inicializarproduto.innerHTML+= `
        <div class="inicio">
            <div class="botoes-inicio">
                <a href="/progweb/index.html"><button class="botaoinicio">Inicio</button></a><span class="espaco"></span>
                <a href="/progweb/login/login.html"><button class="botaoinicio">Login</button></a><span class="espaco"></span>
                <a href="/progweb/login/cadastro.html" ><button class="botaoinicio">Cadastro</button></a><span class="espaco"></span>
                <a href="" ><button class="botaoinicio"><img class="img-menu" src="/progweb/imgs/carrinho-de-compras.png" alt=""></button></a><span class="espaco"></span>
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
                <div class="descricao">`+val.descricao+`</div>
                <div class="preco">`+val.valor+`</div>
                <div class="botoes">
                    <div class="adicionar-carrinho"><a key="`+val.id+`"><button>Adicionar ao carrinho</button></a></div>
                    <span class="espaco"></span>
                    <div class="comprar-agora"><a key="AAAAAAAA"><button>Comprar agora</button></a></div>
                </div>

            </div>
        </div>
    `;
    })
}

iniciarpagina();