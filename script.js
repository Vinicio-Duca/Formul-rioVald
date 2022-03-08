function pegarDados(){
    document.querySelector(".esconder").style.display = "block";
    let campText = document.getElementById("text").value;
    document.getElementById("campText").innerHTML = campText;
    let campTel = document.getElementById("fone").value;
    document.getElementById("campTel").innerHTML = campTel;
    let campEmail = document.getElementById("email").value;
    document.getElementById("campEmail").innerHTML = campEmail;
    let campSenha = document.getElementById("senha").value;
    document.getElementById("campSenha").innerHTML = campSenha;
    let campCheckInf = document.getElementById("inf");
    let campCheckAdm = document.getElementById("adm");
    let campCheckEnf = document.getElementById("enf");
    if(campCheckInf.checked){
        document.getElementById("campCheckInf").innerHTML = "O primeiro campo selecionado foi: Informática";
    }
    if(campCheckAdm.checked){
        document.getElementById("campCheckAdm").innerHTML = "O primeiro campo selecionado foi: Administração";
    }
    if(campCheckEnf.checked){
        document.getElementById("campCheckEnf").innerHTML = "O primeiro campo selecionado foi: Enfermagem";
    }
    if(document.getElementById("inf2").checked){
        document.getElementById("campRadio").innerHTML = "O segundo campo selecionado foi: Informática";
      }else if(document.getElementById("adm2").checked){
        document.getElementById("campRadio").innerHTML = "O segundo campo selecionado foi: Administração";
      }else if(document.getElementById("enf2").checked){
        document.getElementById("campRadio").innerHTML = "O segundo campo selecionado foi: Enfermagem";
      }
      let campOculto = document.getElementById("oculto").value;
      document.getElementById("campOculto").innerHTML = campOculto;
      let campNumber = document.getElementById("num").value;
      document.getElementById("campNumber").innerHTML = campNumber;
      let campData = document.getElementById("data").value;
      document.getElementById("campData").innerHTML = campData;
      let campHora = document.getElementById("hora").value;
      document.getElementById("campHora").innerHTML = campHora;
      let campRange = document.getElementById("range").value;
      document.getElementById("campRange").innerHTML = campRange;
      let campSelect = document.getElementById("priFaixa").value;
      document.getElementById("campSelect").innerHTML = campSelect;
}