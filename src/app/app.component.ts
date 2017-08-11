import { Component } from '@angular/core';
import { PouchdbService } from './pouchdb-service/pouchdb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [PouchdbService]
})
export class AppComponent {

  // public properties for data binding in template
  title  = 'Angular2 PouchDB CouchDB Integration Demo';
  remoteCouchDBAddress: string;
  dataString: string;
  syncStatus: boolean;
  couchDbUp: boolean;

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

  post(username: string, player: string, position: string) {
    this.pouchdbservice.post({username: username, player: player, position: position})
    .then((response) => {
      console.log(JSON.stringify(response));
    });
  }
}
