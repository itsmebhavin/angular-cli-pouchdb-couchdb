import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DbSyncIndicatorComponent } from './db-sync-indicator/db-sync-indicator.component';
import { PouchdbService } from './pouchdb-service/pouchdb.service';

@NgModule({
  declarations: [
    AppComponent,
    DbSyncIndicatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    PouchdbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
