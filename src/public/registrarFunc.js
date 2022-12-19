url = "/cargos"

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
    let nome = document.getElementById("nome")
    let email = document.getElementById("email")
    console.log(id_cargo)


}