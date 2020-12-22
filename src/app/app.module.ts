import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodoModule } from 'app/todo/todo.module';

import { AppComponent } from './app.component';
import {VoteComponent} from './todo/components/vote/vote.component';
import {VoteResultComponent} from './todo/components/vote-result/vote-result.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {BackendService} from './todo/services/backend.service';
import {ReduxService} from './todo/services/redux.service';

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    VoteResultComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TodoModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [
    BackendService,
    ReduxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
