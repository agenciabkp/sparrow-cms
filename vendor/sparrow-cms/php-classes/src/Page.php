<?php 

namespace Sparrow;

use Rain\Tpl;

class Page
{

	private $tpl;
	private $options = [];
	private $defaults = [
		"header"=>true,
		"footer"=>true,
		"data"=>[]
	];

	public function __construct($opts = array())
	{
		//Resgata o template
		$template = Config::getTemplate();

		$this->options = array_merge($this->defaults, $opts);

		$config = array(
		    "base_url"      => null,
		    "tpl_dir"       => $_SERVER['DOCUMENT_ROOT']."/templates/$template/",
		    "cache_dir"     => $_SERVER['DOCUMENT_ROOT']."/cache/",
		    "debug"         => false
		);

		Tpl::configure( $config );

		// Add PathReplace plugin (necessary to load the CSS with path replace)
		// Tpl::registerPlugin( new Tpl\Plugin\PathReplace());

		$this->tpl = new Tpl();

		if ($this->options['data']) $this->setData($this->options['data']);

		if ($this->options['header'] === true) $this->tpl->draw("header", false);

	}

	public function __destruct()
	{
		if ($this->options['footer'] === true) $this->tpl->draw("footer", false);
	}

	private function setData($data = array())
	{
		foreach($data as $key => $val){
			$this->tpl->assign($key, $val);
		}
	}

	public function setTpl($tplname, $data = array(), $returnHTML = false)
	{
		$this->setData($data);

		return $this->tpl->draw($tplname, $returnHTML);
	}

	public static function setTplDir($path)
	{
		//Resgata o template
		$template = Config::getTemplate();

		Tpl::configure('tpl_dir', "templates/$template/$path");
	}

}
?>