import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-DialogBox',
  templateUrl: './DialogBox.component.html',
  styleUrls: ['./DialogBox.component.css']
})

export class DialogBox_Component implements OnInit {
  lottieOptions: Object;

  message: any;
  showNo: string;
  show: boolean;
  Heading: string;
  NoButton: String;
  YesButton: String;
  Image_Url:string;
  constructor(
    public dialogRef: MatDialogRef<DialogBox_Component>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.lottieOptions = {
        path: 'assets/lottie/error.json', // Set the path to your Lottie JSON file
        autoplay: true,
        loop: false
      };
    this.message = data.Message;
    this.showNo = data.Type;
    this.showNo= this.showNo.toString();
     
    if (this.showNo == "false" || this.showNo == "False") {
      this.NoButton = "No";
      this.YesButton = "OK";
      this.Image_Url='/assets/img/Green_Tick.png';
      //giphy.gif
      this.show=false;
    }
    else if(this.showNo == "true" ||this.showNo == "True") {
      this.NoButton = "No";
      this.YesButton = "Yes";
      this.Image_Url='/assets/img/Question_Mark.gif';
      this.show=true;
    }
    else if(this.showNo == "2" )
    {
      this.NoButton = "No";
      this.YesButton = "OK";
      this.Image_Url='/assets/img/Red_Into.gif';
      this.show=false;
    }
    else if(this.showNo == "3" )
    {
      this.NoButton = "No";
      this.YesButton = "OK";
      this.Image_Url='/assets/img/White_Img.png';
      this.show=false;
    }
   
    this.Heading = data.Heading;
    if (this.Heading == '' || this.Heading == undefined) {
      this.Heading = 'Error';
    }
  }
  onNoClick(): void {
    this.dialogRef.close('No');
  }
  onYesClick(): void {
    this.dialogRef.close('Yes');
  }
  ngOnInit() {
  }
}
