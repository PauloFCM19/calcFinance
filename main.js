import './style.css'


const form    = document.querySelector("form");
const backBtn = document.querySelector("#back");
const light = document.querySelector("#light");
const dark = document.querySelector("#dark");
const formResposta = document.querySelector("#container-out");
const resp1   = document.querySelector("#outCar");
const resp2   = document.querySelector("#outPrice");
const resp3   = document.querySelector("#outEntrada");
const resp4   = document.querySelector("#outParcela");
const resp5   = document.querySelector("#outJuros");
const resp6   = document.querySelector("#outTotal");




form.addEventListener('submit', (e) => {
    
    let price = Number(form.inPrice.value);
    let entrada = Number(form.inEntrada.value);
    let parcela = Number(form.inParcela.value);
    let juros = Number(form.inTaxa.value);
    


    let valorFinanciado = price - entrada;
    
    let taxaDeJuros = (juros / 100) * 12;

    // let parceDoFinanciamento = valorFinanciado * (taxaDeJuros*( 1 + taxaDeJuros) * parcela) / ((1 + taxaDeJuros) * parcela -1);

    let valorTotalDoFinanciamento = valorFinanciado * ( 1 + taxaDeJuros )**(parcela/12);

    // mensalidade

    let valorDaParcelaComJuros = valorTotalDoFinanciamento / parcela;


    let totalDoFinanciamento = valorDaParcelaComJuros * parcela;



    

    if(price == entrada){
        resp1.innerText = "Valor Financiado R$: " + valorFinanciado ;
        resp2.innerText = "Valor Incial R$: " + price;
        resp3.innerText = "Entrada R$: " + entrada;
        resp4.innerText = "Parcela R$: 0";
        resp5.innerText = "Sem taxa de juros a vista";
        resp6.innerText = "Valor total: " + (totalDoFinanciamento + entrada).toLocaleString('pt-BR');
    }else{
        resp1.innerText = "Valor Financiado R$: "  + valorFinanciado.toLocaleString('pt-BR');
        resp2.innerText = "Valor Incial R$: " + price.toLocaleString('pt-BR');
        resp3.innerText = "Entrada R$: " + entrada.toLocaleString('pt-BR');
        resp4.innerText = "Parcela R$: " + parcela +" x "  + valorDaParcelaComJuros.toLocaleString('pt-BR');
        resp5.innerText = "Taxa De Juros: " + juros + " %";
        resp6.innerText = "Valor total: " + (totalDoFinanciamento + entrada).toLocaleString('pt-BR');
    }

    
   showHideResults();
   


   e.preventDefault();
})

backBtn.addEventListener("click", (e)=> {
    form.style.display = "flex";
    backBtn.style.display = "none";
    formResposta.style.display ="none";

    cleanInputs();


    
})

function showHideResults(){
    form.style.display = "none";
    backBtn.style.display = "block";
    formResposta.style.display ="block";
}

function cleanInputs(){
    inPrice.value = '';
    inEntrada.value = '';
    inParcela.value = '';
    inTaxa.value = '';
}


light.addEventListener("click", ()=>{
    document.documentElement.style.setProperty("--background-darktheme", "#f0f0f6");
    document.documentElement.style.setProperty("--bg-primary-color", "#000000");
    document.documentElement.style.setProperty("--primary-text-color", "#ffffff");
    document.documentElement.style.setProperty("--bg-tertiary-color", "#f0f0f6");
    document.documentElement.style.setProperty("--secondary-text-color", "#000000");
    
    light.style.display="none";
    dark.style.display="block";
})

dark.addEventListener("click", ()=>{
    document.documentElement.style.setProperty("--background-darktheme", "#000000");
    document.documentElement.style.setProperty("--bg-primary-color", "#F0F0F6");
    document.documentElement.style.setProperty("--primary-text-color", "#2b2b2b");
    document.documentElement.style.setProperty("--bg-tertiary-color", "#121214");
    document.documentElement.style.setProperty("--secondary-text-color", "#ffffff");
    light.style.display="block"
    dark.style.display="none"
})