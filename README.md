# AngularCli-Pouchdb-CouchDB

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

```
Another strategy is to use one-db-per-user, but add a server-side process to occasionally dump user databases into some global database. E.g. here is a simple Node app:

var Promise = require('bluebird');
var request = Promise.promisifyAll(require('request'));
function syncEverythingToGlobalDB() {
  return request.getAsync('http://localhost:5984/_all_dbs').then(function (dbNames) {
    // find your user databases, however you named them
    var userDBs = dbNames.filter(function (x) { return x.indexOf('userdb') === 0; });
    return Promise.all(userDBs.map(function (userDB) {
        return request.postAsync({
          url: 'http://localhost:5984/_replicate',
          json: {source: 'http://localhost:5984/' + userDB, target: 'http://localhost:5984/globaldb'}
       });
  });
}
// do it every hour
setInterval(syncEverythingToGlobalDB, 3600000);
Notice I recommend using pure CouchDB for this because then you're using CouchDB's replicator. If you used PouchDB's replicator, then you'd have a lot of Node EventEmitters in one process and it would probably be inefficient; CouchDB is much better at handling many simultaneous replications. Edit: heck, you could just use CouchDB's continuous replication instead of doing it in a setInterval.
```