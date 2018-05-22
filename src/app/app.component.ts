import { Component } from '@angular/core';
import { PouchdbService } from './pouchdb-service/pouchdb.service';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [PouchdbService]
})
export class AppComponent {

  // public properties for data binding in template
  title = 'Angular2 PouchDB CouchDB Integration Demo';
  remoteCouchDBAddress: string;
  dataString: string;
  syncStatus: boolean;
  couchDbUp: boolean;
  envName = environment.envName;

  // constructor to wire up the PouchDbService and its observables
  constructor(private pouchdbservice: PouchdbService) {
    this.pouchdbservice.syncStatus.subscribe(result => {
      this.syncStatus = result;
    });
    this.pouchdbservice.couchdbUp.subscribe(result => {
      this.couchDbUp = result;
    });
    this.remoteCouchDBAddress = this.pouchdbservice.remoteCouchDBAddress;
  }

  // wrapper for the wrapper (in pouchdb-service) for the method
  // in pouchdb-adapter.ts to get 20 docs as JSON
  get20Docs() {
    this.pouchdbservice.get20Docs()
      .then((data) => {
        this.dataString = JSON.stringify(data.rows, undefined, 2);
      });
  }

  post(doc) {
    this.pouchdbservice.post(doc)
      .then((response) => {
        console.log(JSON.stringify(response));
      });
  }

  randomString(length) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
