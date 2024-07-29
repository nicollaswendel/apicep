const botaoBuscar = document.getElementById('buscar')
const botaoLimpar = document.getElementById('limpar')

const setDadosForm = function (dados){
    let rua = document.getElementById('logradouro')
    rua.value = dados.logradouro

    let bairro = document.getElementById('bairro')
    bairro.value = dados.bairro

    let cidade = document.getElementById('cidade')
    cidade.value = dados.localidade

    let estado = document.getElementById('estado')
    estado.value = dados.uf
}

const getDadosCepAPI = async function (numeroCep){

    let url = `https://viacep.com.br/ws/${numeroCep}/json/`
    const response = await fetch(url)
    const dadosCep = await response.json()

    setDadosForm(dadosCep)
}

const getCepForm = function (){

    let cep = document.getElementById('input-cep')

    if(cep.value == '')
        alert('Não é possível consultar o CEP em branco!')
    else
        getDadosCepAPI(cep.value)
}

const cleanCepForm = function (){

    var formulario = document.getElementById("formulario")

    var elementos = formulario.elements;

    for (var i = 0; i < elementos.length; i++) {
        if (elementos[i].type === "text" || elementos[i].type === "textarea") {
            elementos[i].value = "";
        }
    }
}

botaoBuscar.addEventListener('click', function(){
    getCepForm()
})

botaoLimpar.addEventListener('click', function(){
    cleanCepForm()
})