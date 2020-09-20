import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.page.html',
  styleUrls: ['./verifyotp.page.scss'],
})
export class VerifyotpPage implements OnInit {
  OTP: any =  {
    first: '',
    second: '',
    third: '',
    forth: '',
    fifth: '',
    sixth: ''
  };
  hasFinished: boolean;
  remainingTime: number;
  displayTime: string;
  runTimer: any;
  hasStarted: boolean;
  timeInSeconds: number;
  time: number;
  constructor() { }

  ngOnInit() {
    this.initTimer();
  }
  initTimer() {
    // Pomodoro is usually for 25 minutes
   if (!this.timeInSeconds) { 
     this.timeInSeconds = 1500; 
   }
 
   this.time = this.timeInSeconds;
   this.runTimer = false;
   this.hasStarted = false;
   this.hasFinished = false;
   this.remainingTime = this.timeInSeconds;
   
   this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
 }
 startTimer() {
  this.runTimer = true;
 this.hasStarted = true;
 this.timerTick();
}

pauseTimer() {
 this.runTimer = false;
}

resumeTimer() {
 this.startTimer();
}

timerTick() {
 setTimeout(() => {

   if (!this.runTimer) { return; }
   this.remainingTime--;
   this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
   if (this.remainingTime > 0) {
     this.timerTick();
   }
   else {
     this.hasFinished = true;
   }
 }, 1000);
}

getSecondsAsDigitalClock(inputSeconds: number) {
 var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
 var hours = Math.floor(sec_num / 3600);
 var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
 var seconds = sec_num - (hours * 3600) - (minutes * 60);
 var secondsString = '';

 secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
 return secondsString;
}
  otpController(event,next,prev, index){


    if(index == 6) {
      console.log("submit")
    }
    if(event.target.value.length < 1 && prev){
      prev.setFocus()
    }
    else if(next && event.target.value.length>0){
      next.setFocus();
    }
    else {
     return 0;
    } 
 }
}
