function adicionarButton(){


    let nome = document.getElementById("name").value;
    let idade = document.getElementById("idade").value;
    let sexo = document.getElementById("genero").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let endereco = document.getElementById("endereco").value;
    let cpf = document.getElementById("cpf").value;
    let rg = document.getElementById("rg").value;
    let profissao = document.getElementById("profissao").value;
    let estadoCivil = document.getElementById("estadoCivil").value;
    let motivoConsulta = document.getElementById("motivoConsulta").value;

    if(nome === "" || idade === "" || sexo === "" || email === "" || telefone === "" || endereco === "" || cpf === "" || rg === "" || profissao === "" || estadoCivil === "" || motivoConsulta === ""){
        let mensagem = "Por favor, preencha todos os campos!";
        document.getElementById("mensagem").textContent = mensagem;
        document.getElementById("mensagem").style.color = "red";
        return;
    }
       
    let realizado = "Enviadocom sucesso!";
   document.getElementById("mensagem").textContent = realizado;
     document.getElementById("mensagem").style.color = "green";

   

 }





