# AngularSrc
//  "start": "sudo service mongod start && nodemon app"
pendientes david:

Ocultar rutas segun perfiles: En html navbar y guard
{
  "name": "angular-src",
  "version": "1.0.0",
  "license": "MIT",
  "angular-cli": {},
  "scripts": {
    "ng": "ng",
    "start": "ng serve --open",
    "test": "ng test",
    "pree2e": "webdriver-manager update --standalone false --gecko false",
    "e2e": "protractor"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^4.0.0",
    "@angular/common": "^4.0.0",
    "@angular/compiler": "^4.0.0",
    "@angular/core": "^4.0.0",
    "@angular/forms": "^4.0.0",
    "@angular/http": "^4.0.0",
    "@angular/platform-browser": "^4.2.1",
    "@angular/platform-browser-dynamic": "^4.0.0",
    "@angular/router": "^4.0.0",
    "@ng-bootstrap/ng-bootstrap": "^1.0.0-alpha.31",
    "@types/bootstrap-datepicker": "0.0.9",
    "angular-calendar": "^0.17.4",
    "angular-ui-bootstrap": "^2.5.0",
    "angular2-flash-messages": "^1.0.5",
    "angular2-jwt": "^0.1.28",
    "core-js": "^2.4.1",
    "date-fns": "^1.29.0",
    "font-awesome": "4.7.0",
    "ng-bootstrap": "^1.6.3 ",
    "rxjs": "^5.2.0",
    "systemjs": "^0.19.47",
    "ts-helpers": "^1.1.1",
    "uuid": "^3.0.1",
    "zone.js": "^0.8.5"
  },
  "devDependencies": {
    "@angular/cli": "^8.3.17",
    "@angular/compiler-cli": "^4.2.2",
    "@types/jasmine": "^2.5.52",
    "@types/node": "^6.0.78",
    "codelyzer": "^2.1.1",
    "concurrently": "^3.4.0",
    "jasmine-core": "^2.6.3",
    "jasmine-spec-reporter": "^2.7.0",
    "karma": "^1.7.0",
    "karma-chrome-launcher": "^2.1.1",
    "karma-cli": "^1.0.1",
    "karma-jasmine": "^1.1.0",
    "karma-remap-istanbul": "^0.2.2",
    "lite-server": "^2.3.0",
    "protractor": "^4.0.14",
    "ts-node": "^1.7.3",
    "tslint": "^4.5.1",
    "typescript": "^2.4.2"
  }
}

--angular cli:

{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "project": {
    "name": "david"
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
      "tsconfig": "tsconfig.app.json",
      "testTsconfig": "tsconfig.spec.json",
      "prefix": "app",
       "styles": [
        "styles.css",
        "assets/css/bootstrap.min.css",
        "assets/css/bootstrap-theme.min.css",
        "../node_modules/angular-calendar/dist/css/angular-calendar.css",
        "../node_modules/font-awesome/css/font-awesome.css"
      ],
      "scripts": [
        "./assets/js/jquery.min.js",
        "./assets/js/bootstrap.min.js"
        ],
        "environmentSource": "environments/environment.ts",
        "environments": {
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
      "project": "src/tsconfig.app.json",
      "exclude": "**/node_modules/**"
    },
    {
      "project": "src/tsconfig.spec.json",
      "exclude": "**/node_modules/**"
    },
    {
      "project": "e2e/tsconfig.e2e.json",
      "exclude": "**/node_modules/**"
    }
  ],
  "test": {
    "karma": {
      "config": "./karma.conf.js"
    }
  },
  "defaults": {
    "styleExt": "css",
    "component": {}
  }
}
