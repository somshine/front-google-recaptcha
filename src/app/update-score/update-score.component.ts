import { Component, OnInit } from '@angular/core';
import { ReCaptchaService } from 'angular-recaptcha3';
import { CaptchaResponse } from '../model/CaptchaResponse';
import { UpdatescoreService } from './updatescore.service';

//Secret Key
//6LesTTYdAAAAAKL6a-zPCrBJgMXWUX5DOtQmtyk4

@Component({
  selector: 'app-update-score',
  templateUrl: './update-score.component.html',
  styleUrls: ['./update-score.component.scss']
})
export class UpdateScoreComponent implements OnInit {

  captchaResponse?: CaptchaResponse;
  public score = 0;

  constructor(private recaptchaService: ReCaptchaService,
    private updateScoreService: UpdatescoreService) {

  }

  ngOnInit(): void {
  }

  // public onCaptchaResponse(e: any): void {
  //   this.recaptchaService.execute({ action: 'login' }).then(token => {
  //     console.log("this is the token :: " + token);
  //   });
  // }

  public submitScore(): void {
    this.recaptchaService.execute({ action: 'login' }).then(token => {
      console.log("this is the token :: " + token);
      console.log("this is the token :: " + this.score);
      this.updateScoreService.verifyToken(token, this.score).subscribe(captchaResponse => this.captchaResponse = captchaResponse);
    });
  }

}
