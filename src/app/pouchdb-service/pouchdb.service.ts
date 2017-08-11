import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// the pouchdb-adapter file/class in the same folder
import { PouchDbAdapter } from './pouchdb-adapter';

const REMOTE_COUCH_DB_ADDRESS = 'http://admin:password@localhost:5984/sandbox';

@Injectable()
export class PouchdbService {

  // handler for the adapter class
  private _pouchDbAdapter: PouchDbAdapter;

  // rxjs observables to broadcast sync status
  syncStatus: Observable<boolean>;
  couchdbUp: Observable<boolean>;

  // URL of CouchDB (hardwired above)
  remoteCouchDBAddress: string = REMOTE_COUCH_DB_ADDRESS;

  // initiate adapter class and hook up the observables
  constructor() {
    this._pouchDbAdapter = new PouchDbAdapter(REMOTE_COUCH_DB_ADDRESS);
    this.syncStatus = this._pouchDbAdapter.syncStatus.asObservable();
    this.couchdbUp = this._pouchDbAdapter.couchDbUp.asObservable();
  }

  // wrapper for the get 20docs method in the adpater class
  get20Docs(): Promise<any> {
    return Promise.resolve(this._pouchDbAdapter.get20Docs());
  }

  post(doc): Promise<any> {
    return Promise.resolve(this._pouchDbAdapter.post(doc));
  }

}


