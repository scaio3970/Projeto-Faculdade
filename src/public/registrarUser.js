url = "/funcionarios"
postUrl = "/cadastro"

async function cargoOpt(){
    
    let api = await axios.get(url)
    const cargos = JSON.parse(api.request.response)
    
    
    let cargoSelect = document.getElementById("Funcionario")

    if(cargoSelect.options.length < cargos.length){
        console.log(cargoSelect)
        cargos.forEach(element => {
            cargoSelect.options[cargoSelect.options.length] = new Option(`${element.nome}`, `${element.id}`);
        });
    }

    
}

async function salvar(){
    let id_funcionario = document.getElementById("Funcionario").value
    let usuario = document.getElementById("Usuario").value
    let senha = document.getElementById("senha").value
    confirmar = document.getElementById("confirmarSenha").value
    console.log(id_funcionario)
    
    if(senha === confirmar){
        await axios.post(postUrl, {
            id_funcionario:id_funcionario,
            usuario:usuario,
            senha:senha
        })
        .then(response =>{
            window.location.href ="/login"
        })
        .catch(error =>console.log(error.response.data))
    }else{
        console.log("Senhas não são iguais")
    }



}