function capturarRespostas(){
    for(let i = 0 ;i<= 5; i++){
        if(document.getElementById(`pergunta-1-${i}`).checked = true){
            let teste = document.getElementById(`pergunta-1-${i}`).value
            console.log(teste)
        }
        
        console.log(pacote)
    }

    
}