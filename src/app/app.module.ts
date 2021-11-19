import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateScoreComponent } from './update-score/update-score.component';
import { ReCaptchaModule } from 'angular-recaptcha3';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostDataComponent } from './post-data/post-data.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateScoreComponent,
    PostDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReCaptchaModule.forRoot({
      invisible: {
        sitekey: '6LesTTYdAAAAAJjrHdymsHU-EhQ1AL4_wjJQ_W1P',
      },
      normal: {
        sitekey: '6LesTTYdAAAAAJjrHdymsHU-EhQ1AL4_wjJQ_W1P',
      },
      language: 'en'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// const RECAPTCHA_OPTION = {
//   language?: String;
//   invisible?: IRecaptchaOption;
//   normal?: IRecaptchaOption;
// }

// interface IRecaptchaOption {
//   sitekey: string;
//   theme?: string;
//   type?: string;
//   tabindex?: number;
//   badge?: string;
// }

export class AppModule { }
