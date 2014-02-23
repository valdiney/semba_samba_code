<!doctype html>
<html lang="pt-br">
<head>
	<script src="js/jquery-1.5.2.min.js"></script>
    <script src="js/menu_opcao.js"></script>
    <link rel="stylesheet" href="css/style.css"></style>
	<meta charset="utf-8">
<title>semba-samba-code 0.2</title>
</head>

<body>
<div id="blackBox"></div>
  <?php
  include "struct_layout/menu_left.php";
  ?>


<p id="aba_resultado">Esperando o resultado...</p>
<div id="ferramentas">
 <img id="logo" src="imgs/logo.png"/>
  <img id="menu" src="imgs/menu.png"/>
<table id="table_display" border="0">
<tr>
  <td>
  <button type="button" id="executar" class="control" title="Executar"></button>
  <button type="submit" id="limpar_textarea" class="control" title="Limpar área de codificação"></button>
  <button type="submit" id="deletar_dadosStorage" class="control" title="Deletar dados do Storage"></button>
  <button type="submit" id="botao_apresenta_aba_resultado" class="control" title="Apresentar aba de resultados"></button>
  </td>

  <td>
  	<img src="imgs/font_mais.png" class="font" id="mais" title="Aumentar fonte"/>
  	<img src="imgs/font_menos.png" class="font" id="menos" title="Diminuir fonte"/>
  </td>
</tr>
</table>
</div><!--ferramentas-->

<p id="mensagem_erro"></p>
<div id="wapper">

<input type="text" id="resultado_oculto" class="input_display"/>
<div><textarea name="code" id="textarea" class="textarea"></textarea></div>
</div>

<footer>
</footer>
<script src="js/core.js"></script>
<script src="js/font_size_yes.js"></script>


</body>

</html>