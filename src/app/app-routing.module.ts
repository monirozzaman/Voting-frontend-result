import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VoteComponent} from './todo/components/vote/vote.component';
import {VoteResultComponent} from './todo/components/vote-result/vote-result.component';



const routes: Routes = [
  { path: '' , component: VoteResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
