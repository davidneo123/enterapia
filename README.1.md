# AngularSrc
//  "start": "sudo service mongod start && nodemon app"
pendientes david:

Ocultar rutas segun perfiles: En html navbar y guard

{
  "project": {
    "version": "1.0.0-beta.28.3",
    "name": "angular-src"
  },
  "apps": [
    {
      "root": "src",
      "outDir": "../public",
      "assets": [
        "assets",
        "favicon.ico",
        "assets/fonts/glyphicons-halflings-regular.woff2"
      ],
      "index": "index.html",
      "main": "main.ts",
      "polyfills": "polyfills.ts",
      "test": "test.ts",
      "tsconfig": "tsconfig.json",
      "prefix": "app",

      "styles": [
        "styles.css",
        "assets/css/bootstrap.min.css",
        "assets/css/bootstrap-theme.min.css",
        "../node_modules/angular-calendar/dist/css/angular-calendar.css"
      ],
      "scripts": [
        "./assets/js/jquery.min.js",
        "./assets/js/bootstrap.min.js"
        ],
      "environments": {
        "source": "environments/environment.ts",
        "dev": "environments/environment.ts",
        "prod": "environments/environment.prod.ts"
      }
    }
  ],
  "e2e": {
    "protractor": {
      "config": "./protractor.conf.js"
    }
  },
  "lint": [
    {
      "files": "src/**/*.ts",
      "project": "src/tsconfig.json"
    },
    {
      "files": "e2e/**/*.ts",
      "project": "e2e/tsconfig.json"
    }
  ],
  "test": {
    "karma": {
      "config": "./karma.conf.js"
    }
  },
  "defaults": {
    "styleExt": "css",
    "prefixInterfaces": false,
    "inline": {
      "style": false,
      "template": false
    },
    "spec": {
      "class": false,
      "component": true,
      "directive": true,
      "module": false,
      "pipe": true,
      "service": true
    }
  }
}