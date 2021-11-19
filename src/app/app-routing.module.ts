import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDataComponent } from './post-data/post-data.component';
import { UpdateScoreComponent } from './update-score/update-score.component';

const routes: Routes = [
  {path: "updateScore", component: UpdateScoreComponent},
  {path: "postData", component: PostDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
