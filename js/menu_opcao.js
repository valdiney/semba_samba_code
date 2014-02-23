$(document).ready(function(){
////////////////////////////////////////////////
// Ablita e desablita o menu opções...
//////////////////////////////////////////////
  
  

   $("#menu").click(function() {
       $("#menu_opcao").toggle('fast');
        $("#blackBox").fadeIn('fast');
   });

   $("#textarea, #blackBox").click(function(){
       $("#menu_opcao").fadeOut('slow');
        $("#blackBox").fadeOut('fast');
   });

///////////////////////////////////////////

////////////////////////////////////////////////
// Ablita e desablita a barra de respostas...
//////////////////////////////////////////////

  $("#botao_apresenta_aba_resultado").click(function() {
       $("#aba_resultado").toggle('slow');
   });

//////////////////////////////////////

////////////////////////////////////////////////
// Ablita e desablita a área de mandar por email...
//////////////////////////////////////////////

$("#link_mandar_poremail").click(function(){
  var tabela_email = $("section table");
   tabela_email.toggle('fast');
    

    
  var config_all = $("#config_all").toggle('fast');
//////////////////////////////////////////////////////////////////////////////////
  document.getElementById('replica_code').value = localStorage.getItem('textarea');


});


});













