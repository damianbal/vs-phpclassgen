# PHP Class Generator

Simple extenstion for PHP which will generate PHP class out of file, for example if file is in src/MyApp/Services/BlaService.php

The result would be

```php
<?php

namespace YourVendorIfSet\MyApp\Services; // read Extension Settings 

class BlaService
{
}
```

Note: Make sure that your source code is under src directory.

### Animated examples

![Insert namespace](http://portfolio.damianbalandowski.com/vs-phpclassgen/insert_ns.gif)
![Generate PHP class](http://portfolio.damianbalandowski.com/vs-phpclassgen/gen_class.gif)
![Generate PHP interface](http://portfolio.damianbalandowski.com/vs-phpclassgen/gen_interface.gif)


## Features

* Insert PS4 Namespace out of file path
* Generate PHP class matching file path
* Generate PHP class matching file path

## Commands

* Insert PHP Namespace - inserts only namespace
* Generate PHP Class - generates what is above in example
* Generate PHP Interface - same as above but instead of class it will be interface


## Extension Settings

This extension contributes the following settings:

* `phpclassgen.vendor`: set it to your name, or leave it blank if you do not want any prefix in namespaces.

**Enjoy!**
