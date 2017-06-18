<?php
// DIC configuration

$container = $app->getContainer();

// view renderer
$container['renderer'] = function ($c) {
    $settings = $c->get('settings')['renderer'];
    return new Slim\Views\PhpRenderer($settings['template_path']);
};

// monolog
$container['logger'] = function ($c) {
    $settings = $c->get('settings')['logger'];
    $logger = new Monolog\Logger($settings['name']);
    $logger->pushProcessor(new Monolog\Processor\UidProcessor());
    $logger->pushHandler(new Monolog\Handler\StreamHandler($settings['path'], $settings['level']));
    return $logger;
};
//Database
$container['db'] = function ($c) {
	$connectionString = $c->get('settings')['connectionString'];

	$pdo = new PDO($connectionString['dns'],$connectionString['user'],$connectionString['pass'],array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));

	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

	return new FluentPDO($pdo);
};
$container['db_mysqli'] = function ($c) {
	$connectionString = $c->get('settings')['connectionString'];

	$mysqli = new mysqli($connectionString['host'], $connectionString['user'], $connectionString['pass'], $connectionString['name_db']);
	$mysqli->set_charset("utf8");
	return $mysqli;
};
$container['db_pdo'] = function ($c) {
	$connectionString = $c->get('settings')['connectionString'];
	$pdo = new PDO($connectionString['dns'],$connectionString['user'],$connectionString['pass'],array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
	return $pdo;
};
// Models

$container['model']	= function($c){

	return (object)[
		'Client'	=>	new App\Model\ClientModel($c->db, $c->db_mysqli),
		'Project'	=>	new App\Model\ProjectModel($c->db, $c->db_mysqli),
		'Student'	=>	new App\Model\StudentModel($c->db, $c->db_mysqli),
		'Document'	=>	new App\Model\DocumentModel($c->db, $c->db_mysqli),
		'Teacher'	=>	new App\Model\TeacherModel($c->db, $c->db_mysqli),
		'Observation'	=>	new App\Model\ObservationModel($c->db, $c->db_mysqli)
	];
};



