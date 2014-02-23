<?php


$nome = $_POST['nome_projeto'];
$email_remetente = $_POST['endereco_email_destino'];
$assunto = $_POST['comentario'];
$mensagem = $_POST['replica_code'];

 $destino = $_POST['endereco_email_destino'];
 

 $mensagem_html = "
<p>Semba samba code</p>

<p><b>Nome do projeto:</b> $nome.
<p><b>E-Mail:</b> $email_remetente.
<p><b>Comentario:</b> $assunto.
<p><b>Corpo do projeto:</b> $mensagem.

<hr>
";



$headers = "MIME-Version: 1.1\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: $email_remetente\r\n"; // remetente
$headers .= "Return-Path: $destino\r\n"; // return-path

$envio = mail($destino, $assunto, $mensagem_html, $headers); 


  if(envio) {
  	header('Location: index.php');
  }




 

    /* gravar dados em arquivo
     $file = fopen('code/semba_fonte.js', 'w');
     fwrite($file, $mensagem);
     fclose($file);

   */




?>