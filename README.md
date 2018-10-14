# PHP Class Generator

[Download extension from VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=damianbal.vs-phpclassgen)

Simple extenstion for PHP which will generate PHP class out of file, for example if file is in src/MyApp/Services/BlaService.php

The result would be

```php
<?php

namespace YourVendorIfSet\MyApp\Services; // read Extension Settings 

class BlaService
{
}
```

Note: Make sure that your source code is under src directory, or app if it is Laravel.

### Animated examples

![Insert namespace](https://media.giphy.com/media/k6rabYSQx2RcwbQKed/giphy.gif)
![Generate PHP class](https://media.giphy.com/media/YkYfRwCfT1AUK25s4J/giphy.gif)
![Generate PHP interface](https://media.giphy.com/media/uUmQ2ppXe2Ysrqoptv/giphy.gif)


## Features

* Insert PS4 Namespace out of file path
* Generate PHP class matching file path
* Generate PHP interface matching file path
* Generate PHP trait matching file path
* Works with Laravel

## Commands

* Insert PHP Namespace - inserts only namespace
* Generate PHP Class - generates what is above in example
* Generate PHP Interface - same as above but instead of class it will be interface
* Generate PHP Trait - generates PHP trait

## Extension Settings

This extension contributes the following settings:

* `phpclassgen.vendor`: set it to your name, or leave it blank if you do not want any prefix in namespaces.

**Enjoy!**
