<?php


 if( $_GET['funcao'] == 'gravar' ) {

     $file = fopen('semba_fonte.txt', 'w');
     fwrite($file, 'Código fonte do semba samba code');
     fclose($file);


 }

?>