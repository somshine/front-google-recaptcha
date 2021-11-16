import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateScoreComponent } from './update-score/update-score.component';

const routes: Routes = [
  {path: "updateScore", component: UpdateScoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
