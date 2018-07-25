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

	$q = (isset($_GET["q"]) ? get("q") : "");

	$page = new Sparrow\Page();

	$page->setTpl("index",array(
		"q"=>$q
	));	

});

/**
 * Debug tests
 */

//require_once("includes/tests.php");

$app->run();
 ?>
