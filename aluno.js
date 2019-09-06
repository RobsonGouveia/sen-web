window.onload = function() {
    console.warn("OLAAAA MUNDO")

    let meuForm = $("form#formAluno")

    console.log(meuForm)

    meuForm.on("submit", function(event){
        event.preventDefault()
        console.log("DEU CERTO")
        let botao = $("form button")
        console.log(botao)

        let botaoQGira = Ladda.create(botao[0])
        botaoQGira.start()
        fetch("http://localhost:8080/sen-api/teste.php").then(function(resposta){
        return resposta.json()
        }).then(function(dados){
            alert(dados.mensagem)
        }) 
    }) 

}