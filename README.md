# Sparrow CMS

Sparrow é um Sistema para Gerenciamento de Conteúdo, mais conhecido como CMS (Content Management System), o qual permite desenvolver simples websites.

## Pré-requisitos

Este projeto é desenvolvido em PHP 7.2.2 e possui os seguintes pré-requisitos:

```
{
    "require": {
        "slim/slim": "2.0",
        "rain/raintpl": ">=3.0.0",
        "phpmailer/phpmailer": "5.2.22",
        "zurb/foundation": ">=6.4.3"
    },
    "autoload": {
    	"psr-4": {
    		"Sparrow\\": "vendor\\sparrow-cms\\php-classes\\src"
    	}
    }

}
```
## Configuração

Uma classe Config() deve ser criada em vendor/sparrow-cms/php-classes/src/ contendo os seguintes atributos:

```
class Config
{
    
    public $offline = '0';
    public $offlinemessage = '';
    public $sitename = '';
    public $listlimit = '20';
    public $access = '1';
    public $debug = '0';
    public $debuglang = '0';
    public $dbhost = '';
    public $dbuser = '';
    public $dbpassword = '';
    public $db = '';
    public $dbprefix = '';
    public $secret = '';
    public $mailfrom = '';
    public $fromname = '';
    public $mailpassword = '';
    public $mailadmin = '';
    public $mailadminname = '';
    public $metadesc = '';
    public $metakeys = '';
    public $metatitle = '1';
    public $metaauthor = '1';
    public $metaversion = '0';
    public $robots = '';
    static $template = '';
    public $templatecaching = false;
    
}
```
## Autores

* **Anderson Nascimento** - *Desenvolvedor* - [Agência Black Pearl](https://github.com/agenciabkp)

## Licença

Este projeto está licenciado sob a licença Apache-2.0 - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.
