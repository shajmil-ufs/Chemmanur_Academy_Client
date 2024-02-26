import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogBox_Component } from 'src/app/modules/shared/components/DialogBox/DialogBox.component';
import { environment } from 'src/environments/environment';
import { carousel_Service } from '../../services/carousel.Service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent  implements OnInit{
  filepath: string;  File_Name:string=''
  fileChanged: boolean=false;
  Banner: any={};
  constructor(  private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog,private carousel_Services:carousel_Service) { 
    this.filepath=environment.FilePath
}
  ngOnInit(): void {

  this.clear_Banner()
  this.Search_carousel()
  }
clear_Banner(){
  this.Banner={
    id:0,
    File_Name:'',
    fileChanged:false,
    file:'',
    FilePath:''
  }
}
Search_carousel(){
  this.carousel_Services.Search_carousel('').subscribe(res=>{
    console.log('res: ', res);
    if(res[0][0])
    {
       res=res[0][0]
 

       this.Banner.id=res.carousel_Id
       this.Banner.filepath=res.path
       this.Banner.File_Name=res.name
       console.log('  this.Banner: ',   this.Banner);


    }
 
   })        
}
  handleFileInput(event: any): void {
    this.Banner.fileChanged = true;
    const file = event.target.files[0]; // Get the first file selected by the user
    if (file) {
        // Check if the file type is an image
        if (file.type.startsWith('image/')) {
            this.Banner.File_Name = file.name;
            this.Banner.file = file;
            console.log('File:', file);
        } else {
            // File type is not supported (not an image)
            const dialogRef = this.dialogBox.open
            ( DialogBox_Component, {panelClass:'Dialogbox-Class'
            ,data:{Message:'Choose Image',Type:"3"}});
            
            
            // You can also provide a user-friendly error message or handle the error in another way
        }
    }
}
save_Banner(){
  this.carousel_Services.uploadFile(  this.Banner.file).then(
    res=>{
        console.log('res: ', res);
        if(res){

            this.Banner.FilePath =res['key']
            console.log('res: ', res);
            this.carousel_Services.Save_carousel(this.Banner).subscribe(res=>{
              this.Search_carousel()            })        }
    })

}

}
