import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  userName = "";
  buttonStatus;

   constructor() { 
    this.buttonStatus = false;
  }

  onCheckingStatus(){
    if (this.userName.length>0 ) {
      this.buttonStatus = true;
    }
    return this.buttonStatus;
  }

  ngOnInit() {
  }

}
