<?php 
session_start();

require_once("includes/config.php");

use Interativa\Model\User;

use Rain\Tpl;

$app = new \Slim\Slim();

$app->config('debug', true);

/**
 * Pages
 */

$app->get('/', function() { 

	$q = (isset($_GET["q"]) ? get("q") : "");

	$page = new Interativa\Page();

	$page->setTpl("index",array(
		"q"=>$q,
		"loggeduser"=>$loggeduser
	));	

});

/**
 * Debug tests
 */

require_once("includes/tests.php");

$app->run();
 ?>
