<?php 

//Variáveis
$nome = $_POST['nome'];
$empresa = $_POST['empresa'];
$email = $_POST['email'];
$tel = $_POST['telefone'];
$mensagem = $_POST['mensagem'];
$data_envio = date('d/m/Y');
$hora_envio = date('H:i:s');

//Compo E-mail
$arquivo = "
  <html>
    <p><b>Nome: </b>$nome</p>
    <p><b>E-mail: </b>$email</p>
    <p><b>Empresa: </b>$empresa</p>
    <p><b>Telefone: </b>$tel</p>
    <p><b>Mensagem: </b>$mensagem</p>
    <p>Este e-mail foi enviado em <b>$data_envio</b> às <b>$hora_envio</b></p>
  </html>
";

//Emails para quem será enviado o formulário
$destino = "contemwgs@bol.com.br";
$assunto = "Contatar Serviço";

//Este sempre deverá existir para garantir a exibição correta dos caracteres
$headers  = "MIME-Version: 1.0\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\n";
$headers .= "From: $nome <$email>";

//Enviar
mail($destino, $assunto, $arquivo, $headers);

echo "<meta http-equiv='refresh' content='10;URL=../index.html'>";

?>