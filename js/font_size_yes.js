/*
-------------------------------
Nome: FontesizeYes...
Descrição: Código aumenta e diminui textos associados ao Script
Autor: Valdinei França
Email: Valdiney.2@hotmail.com
Site: valdiney.org
Data: 10/11/2012
-------------------------------
Documentação de funcionamento
-------------------------------
[A] Array guarda valores, inicia com o valor escolhido por "você".
Recomendo que utilize o mesmo tamanho que definido no "css"
-------------------------------------------------------
[B] Variável guarda o valor Maximo de px´s que irá aumentar
-------------------------------------------------------
[C] Variável guarda o valor mínimo de px´s, na verdade é o mesmo valor
inicial do array, faz com que a font volte ao mesmo valor que tinha.
-------------------------------------------------------
[D] e [E] Armazenam os seletores que quando clicados disparam as funções.
Recuperam via celetores simples, class, ou ID. 
-------------------------------------------------------
[F] Armazenam os seletores  onde os efeitos do script serão aplicados,
 podendo agrupa-los de forma encadeada assim como no css
*/
$(document).ready(function(){
 
 
/*[A]*/ var aumentar =[20];
/*[B]*/ var maximo   = 29;
/*[C]*/ var minimo   = 16;
/*[D]*/ var button_aumentar = "#mais";
/*[E]*/ var button_diminui  = "#menos";
/*[F]*/ var campos_ondeAplicarEfeitos = "#textarea";
 
var tamanho = aumentar[0]+"px";//Concatena array com "px". Crucial para o funcionamento do Script
$(button_aumentar).click(function(){
 $(campos_ondeAplicarEfeitos).css("font-size",aumentar[0]+=1);
if(aumentar[0]==maximo){
 $(campos_ondeAplicarEfeitos).css("font-size",aumentar[0]-=1);
 }//fim if
});//fim aumentar
 
$(button_diminui).click(function(){
if(aumentar[0]==minimo){//Impede que a fonte seja aumentada 1px se o botão (menos) for clicado primeiro
 $(campos_ondeAplicarEfeitos).css("font-size",aumentar[0]+=1);
}//fim primeiro if
$(campos_ondeAplicarEfeitos).css("font-size",aumentar[0]-=1);
if(aumentar[0]==maximo){
 $(campos_ondeAplicarEfeitos).css("font-size",aumentar[0]+=1);
 }//fim if
});//fim aumentar
});//fim script jquery