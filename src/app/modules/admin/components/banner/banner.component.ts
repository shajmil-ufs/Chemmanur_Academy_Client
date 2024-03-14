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
  isLoading:boolean=false
  Banner: any={};
  constructor(  private route: ActivatedRoute,    public dialog: MatDialog
,    private router: Router,private carousel_Services:carousel_Service) { 
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
  this.isLoading=true
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
    this.isLoading=false

   })        
}
  handleFileInput(event: any): void {
    this.Banner.fileChanged = true;
    const file = event.target.files[0]; // Get the first file selected by the user
    if (file) {


      console.log('file.size: ', file.size);
      console.log(' 5 * 1024 * 1024: ',  5 * 1024 * 1024);
      if (file.size > 5 * 1024 * 1024) { // Check if file size exceeds 5 MB


        const dialogRef = this.dialog.open(DialogBox_Component, {
          panelClass: 'dialogbox-class',
          data: {Message: 'File size exceeds 5 MB. Please select a smaller file.',Type: "3" }
        });

      } else{

        // Check if the file type is an image
        if (file.type.startsWith('image/')) {
          this.Banner.File_Name = file.name;
          this.Banner.file = file;
          console.log('File:', file);
        } else {
          // File type is not supported (not an image)
          const dialogRef = this.dialog.open
          ( DialogBox_Component, {panelClass:'Dialogbox-Class'
          ,data:{Message:'Choose Image',Type:"3"}});
          
          
        }
            // You can also provide a user-friendly error message or handle the error in another way
        }
    }
}
save_Banner(){
  this.isLoading=true
  this.carousel_Services.uploadFile(  this.Banner.file).then(
    res=>{
        console.log('res: ', res);
        if(res){

            this.Banner.FilePath =res['key']
            console.log('res: ', res);
            this.carousel_Services.Save_carousel(this.Banner).subscribe(res=>{
              this.openDialog('Saved', 'false');

              this.Search_carousel()        
            
            
            })        }
    })

}
openDialog(message: string, type: string) {
  console.log('type: ', type);
  console.log('message: ', message);
 
  const dialogRef = this.dialog.open(DialogBox_Component, {
        panelClass: 'dialogbox-class',
        data: {Message: message,Type: type }
      });
    }
}
