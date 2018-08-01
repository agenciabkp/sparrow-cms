<?php 
session_start();

require_once("includes/config.php");

use Rain\Tpl;

$app = new \Slim\Slim();

$app->config('debug', true);

/**
 * Pages
 */

$app->get('/', function() { 

	$q = (isset($_GET["q"]) ? $_GET["q"] : "");

	$page = new Sparrow\Page();

	$page->setTpl("index",array(
		"page"=>"home",
		"query"=>$q
	));	

});

$app->get('/projeto/:id/:alias', function($id,$alias) {

	$page = new Sparrow\Page();

	$result = "";

	$page->setTpl("projetos",array(
		"page"=>"projeto",
		"result"=>$result
	));

});

/**
 * Debug tests
 */

//require_once("includes/tests.php");

$app->run();
 ?>
