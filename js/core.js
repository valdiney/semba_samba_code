//////////////////////////////////////////////////////////////////////////////////////////////
// Core central: (semba-samba-code) Reescrito em 7/09/2013...
// Autor: Valdinei França
// Email: valdiney.2@hotmail.com
////////////////////////////////////////////////////////////////////////////////////////////

window.onload = function() {

/////////////////////////////////////////////////////////////////
// Função construtora usada para  trabalhar com localStorage.... 
/////////////////////////////////////////////////////////////////

 function Storage(identificador, conteudo) {
   this.identificador = identificador;
   this.conteudo = conteudo;

   this.grava_noStorage = function() {
     return localStorage.setItem(this.identificador,this.conteudo);
   }

   this.apresenta_dadosDoStorage = function() {
     return localStorage.getItem(this.identificador);
   }

   this.deleta_dadosDoStorage = function() {
     return localStorage.clear(this.identificador);
   }
 }

///////////////////////////////////////////////////////////// 

//////////////////////////////////////////////////////////////
// Vetor armazena mensagens referentes a erro de sintaxe...
/////////////////////////////////////////////////////////////

  var Mensagem_erro_sintaxe = [
       "Você escreveu alguma coisa errada em relação a sintaxe da linguagem, ou seja, a forma com que se escreve as palavras que compõem a mesma = ",
        "A variável não está definida = "];

////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
// Conjunto de variáveis inicias...
///////////////////////////////////////////////////////

  var aba_resultado = document.getElementById('aba_resultado'),
      textarea = document.getElementById('textarea').focus(),
      mensagem_erro = document.getElementById('mensagem_erro'),
      limpar_textarea = document.getElementById('limpar_textarea');

/////////////////////////////////////////////////////////
// Instanciando um objeto através da classe Storage, 
// método apresenta os dados do localStorage...
////////////////////////////////////////////////////////

      var apresentando_DadosNoStorage = new Storage('textarea');
      document.getElementById('textarea').value = apresentando_DadosNoStorage.apresenta_dadosDoStorage();

//////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
// Instanciando um objeto através da classe Storage, 
// método deleta os dados do localStorage...
////////////////////////////////////////////////////////

  var deleta_dadosDoStorage = document.getElementById('deletar_dadosStorage').onclick = function() {
      var deletando_dadosDoStorage = new Storage('textarea'),
      apresentando_DadosNoStorage = new Storage('textarea');
        
      if(apresentando_DadosNoStorage.apresenta_dadosDoStorage() == null) {
           alert('No momento não tem nenhum dado gravado no Storage!');
        }

       else if(apresentando_DadosNoStorage.apresenta_dadosDoStorage() != null) {
         var opcao = prompt("Deseja realmente deletar os dados contidos no Storage? Digite (sim)");

           if(opcao == 'sim' || opcao == 'SIM' || opcao == 'Sim') {
              deletando_dadosDoStorage.deleta_dadosDoStorage();
              alert("Dados deletados com sucesso!");
           }
           
           else {
             alert("Você optou por não apagar os dados do Storage!");
           }
        } // end else if...
      } // end deletar dados do storage...

///////////////////////////////////////////////////

/////////////////////////////////////////////////////
// (Executar) Chama a função passa_para_eval
// Quando o botão executar é clicado...
////////////////////////////////////////////////////

  var executar = document.getElementById('executar').onclick = function() {
      var textarea = document.getElementById('textarea').value;
        if(textarea == '') {
           aba_resultado.innerHTML = " Digite uma expressão... ";
           document.getElementById('textarea').focus();
          } 
         else {
           passa_para_eval();
           aba_resultado.innerHTML = document.getElementById('resultado_oculto').value;

/////////////////////////////////////////////////////////
// Instanciando um objeto através da classe Storage, 
// método grava os dados no localStorage...
////////////////////////////////////////////////////////

           var gravando_DadosNoStorage = new Storage('textarea', textarea);
           gravando_DadosNoStorage.grava_noStorage();

///////////////////////////////////////////////////////
        } // end else...
       } // end função executar...

//////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
// Função tenta passar as expressões para a função nativa eval,
// caso não consiga, verifica a existência dois possíveis erros... 
////////////////////////////////////////////////////////////////////

   function passa_para_eval() {
     try {
        document.getElementById('resultado_oculto').value = 
        eval(document.getElementById('textarea').value);
        mensagem_erro.innerHTML = '';
     } 
      catch(e) {
        if(e.name == "SyntaxError") {
           mensagem_erro.innerHTML = Mensagem_erro_sintaxe[0]+"<span><b>"+e+"</b></span>";
           aba_resultado.innerHTML = '';
        }
         if(e.name == "ReferenceError") {
           mensagem_erro.innerHTML = Mensagem_erro_sintaxe[1]+"<span><b>"+e+"</b></span>";
        }
           document.getElementById('resultado_oculto').value = 
           eval(document.getElementById('textarea').value);
     } // end catch...
   } // end função passa para eval...

///////////////////////////////////////////////////////

//////////////////////////////////////////////////////
// Função limpa a área de conteúdo, mas não limpa os 
// dados gravados no LocalStorage...
/////////////////////////////////////////////////////

    var limpar_textarea = document.getElementById('limpar_textarea').onclick = function() {
         document.getElementById('textarea').value = '';
        } 

////////////////////////////////////////////////////
}
