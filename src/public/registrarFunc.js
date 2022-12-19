url = "/cargos"
postUrl = "/funcionario"
async function cargoOpt(){
    
    let api = await axios.get(url)
    const cargos = JSON.parse(api.request.response)
    
    
    let cargoSelect = document.getElementById("Cargos")

    if(cargoSelect.options.length < cargos.length){
        console.log(cargoSelect)
        cargos.forEach(element => {
            cargoSelect.options[cargoSelect.options.length] = new Option(`${element.nome}`, `${element.id}`);
        });
    }

    
}

async function salvar(){
    let id_cargo = document.getElementById("Cargos").value
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    console.log(id_cargo)
    console.log(nome)
    console.log(email)

    await axios.post(postUrl, {
        nome:nome,
        email:email,
        id_cargo:id_cargo
    })
    .then(response =>{
        window.location.href ="/cadastro/usuario"
    })
    .catch(error =>console.log(error.response.data))

}