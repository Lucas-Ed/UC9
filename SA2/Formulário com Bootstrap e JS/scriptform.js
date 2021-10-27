function Verifica(){
    var  Nome = document.getElementById("validationCustom01").value;
    var Ultimonome = document.getElementById("validationCustom02").value;
    var Email = document.getElementById("validationCustomUsername").value;
    var Cidade = document.getElementById("validationCustom03").value;
    var Estado = document.getElementById("validationCustom04").value;
    var cep = document.getElementById("validationCustom05").value;
    var  Check = document.getElementById("invalidCheck").checked;
    if(Nome == ""){
        alert("Preencha o campo Nome");
        return false;
    
    }
    else if(Ultimonome == ""){
        alert("Preencha o campo Ultimo Nome");
        return false;
    }
    else if(Email == ""){
        alert("Preencha o campo Email");
        return false;
    }
    else if(Cidade == ""){
        alert("Preencha o campo Cidade");
        return false;
    }
    else if(Estado == ""){
        alert("Preencha o campo Estado");
        return false;
    }
    else if(cep == ""){
        alert("Preencha o campo Cep");
        return false;
    }
    else if (Check == false){
        alert("Aceite os termos");
        return false;
    }
    else{
        alert("Formulário enviado com sucesso");
        return true;
    }


}