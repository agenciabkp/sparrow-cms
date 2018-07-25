<?php 
setlocale(LC_ALL, "pt_BR", "pt_BR.utf-8", "portuguese");

if (empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'on'){
	$redirect= "https://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
	header('Location:'.$redirect);
	exit();
}

require_once("vendor/autoload.php");

//Carrega a configuração padrão para o sistema
$config = new Sparrow\Config();
?>