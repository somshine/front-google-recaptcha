import { Component, OnInit } from '@angular/core';
import { ReCaptchaService } from 'angular-recaptcha3';

//Secret Key
//6LesTTYdAAAAAKL6a-zPCrBJgMXWUX5DOtQmtyk4

@Component({
  selector: 'app-update-score',
  templateUrl: './update-score.component.html',
  styleUrls: ['./update-score.component.scss']
})
export class UpdateScoreComponent implements OnInit {

  public score = 0;

  constructor(private recaptchaService: ReCaptchaService) { }

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
    });
  }

}
