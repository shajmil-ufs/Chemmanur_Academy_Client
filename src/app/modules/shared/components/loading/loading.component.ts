import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnChanges {
  @Input() isLoading: boolean = false;
lottieOptions = {
    path: 'assets/lottie/book_load.json', // Set the path to your Lottie JSON file
    autoplay: true,
    loop: true
  };

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes: ', changes);
    if (changes['isLoading']) {
      this.isLoading=changes['isLoading'].currentValue
      // Do something when the isLoading property changes
      console.log('isLoading changed:', this.isLoading);
    }
  }}