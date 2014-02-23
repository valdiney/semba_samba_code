<div id="menu_opcao">
    <h1>Opções iniciais :</h1>

    <section>
     <a href="#" title="Mande agora mesmo!" id="link_mandar_poremail">Mandar por email</a>
     <p>Envie uma cópia do seu projeto por email</p>
     <br>
     <br>
    <form method="post" action="./email.php">
     <table>
      <tr>
        <td><label for="nome_projeto">Nome do projeto:</label></td>
        <td><input type="text" id="nome_projeto" name="nome_projeto" placeholder="Exemplo:Algorítimo soma " required/></td>
      </tr>
      <tr>
         <td><label for="endereco_email">Email de destino:</label></td>
         <td><input type="text" id="endereco_email" name="endereco_email_destino" placeholder="Exemplo:valdiney.2@hotmail.com "required/></td>
      </tr>
       <tr>
         <td><label for="comentario">Descrição:</label></td>
         <td><textarea type="text" id="comentario" name="comentario" placeholder="Exemplo:Meu primeiro programa! 
 " required></textarea></td>
      </tr>
       
         <tr>
            <td><label for="replica_code">Projeto:</label></td>
            <td><textarea type="text" id="replica_code" name="replica_code"  required></textarea></td>
         </tr>


      <tr>
         <td><button type="submit" id="enviar">Enviar</button></td>
      </tr>
     </table>
    </form>



    
  

  


    </section>
    

    <ul id="config_all">
      <li><a href="configall/01.html">O que é como funciona a ferramenta</a></li>
      <li><a href="#">Que linguagem a ferramenta usa</a></li>
      <li><a href="#">O que é lógica de programação</a></li>
      <li><a href="#">O que são variáveis e como usa-lás</a></li>
      <li><a href="#">Operadores e operandos</a></li>
      <li><a href="#">Entrada e saída de dados</a></li>
      <li><a href="#">Condicionais</a></li>
      <li><a href="#">Estruturas de repetição</a></li>

       <h1>Menu de Opções:</h1>
      <li><a href="#">Vetores e Matrizes</a></li>
      <li><a href="#">Objeto Math</a></li>
      <li><a href="#">Funções</a></li>
   </ul>
   
 </div><!-- end menu opções-->