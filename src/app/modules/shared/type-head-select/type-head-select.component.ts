import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-type-head-select',
  template: `
    <input type="text" [formControl]="control" [id]="id" [attr.list]="datalistId" placeholder="{{ placeholder }}">
    <datalist [id]="datalistId">
      <option *ngFor="let option of options" [value]="option"></option>
    </datalist>
  `,
  styles: [`
  
  input[type=text]:focus,input[type=select]:focus {
    background-color: #ddd;
    outline: none;
  }
  input[type=text], select {
    width: 92%;
    padding: 15px;
    margin: 5px 0;
    display: inline-block;
    border: none;
    background: #f7f7f7;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
  }
  
  `]
})
export class TypeHeadSelectComponent {
  @Input() control: FormControl | null = null;
  @Input() id: string = '';
  @Input() datalistId: string = '';
  @Input() options: string[] = [];
  @Input() placeholder: string = '';
}
