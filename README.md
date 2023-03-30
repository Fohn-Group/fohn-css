# Fohn-ui Tailwind css package

This package contains Tailwind css utilities need for the Fohn-Ui php framework.

### Usage via cdn:

This the default usage when using Fohn-Ui PHP framework.

```
<link rel="stylesheet" type="text/css" href="https://unpkg.com/fohn-ui-css@{VERSION}/dist/fohn-ui.min.css">
```

### Adding more Tailwind utilities for your project:

Your specific project might require other Tailwindcss utilities not available within the default 'fohn-ui.css' file.

This is a guide in order to customize you css file for your project.

Clone this repository via git:
```
git clone https://github.com/Fohn-Group/fohn-css.git
cd fohn-css
npm install
```

In 'tailwind.config.js' configuration file, set the content property to match your project structure,
i.e. any files where you are defining Tailwindcss utilities, i.e. src php, javascript or html file.

```
  content: [
    'fohn-ui-default/**/*.txt',
    'PATH_TO_MY_PROJECT/**/*.{php, js, html, vue}',
  ],
```

Set proper output location in 'package.json' build and dev script:

```
  "scripts": {
    "dev": "postcss ./src/fohn-defaut.css -o MY_PROJECT/public/fohn-ui.css --watch --verbose",
    "build": "NODE_ENV=production postcss ./src/fohn-defaut.css -o MY_PROJECT/public/fohn-ui.min.css"
  },
```

Run build or dev scripts.

#### Change fohn-css package location 

Set `Ui::initAppPage($page)` with proper css package location.

```
    // Create service.
    $ui = Ui::service();

    $ui->setApp(new App());

    // Set page.
    $page = new Page();
    $page->includeCssPackage('fohn-css', '/public/fohn-ui.min.css');
    $ui->initAppPage($page);
```

