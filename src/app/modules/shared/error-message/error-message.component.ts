import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  template: `
    <div *ngIf="control?.hasError(error) && control?.touched" class="error-message">
      {{ message  }}
    </div>
  `,
  styles: [`
    ::ng-deep .error-message {
      color: red;
      font-size: 12px;
      margin-top: 5px;
    }
  `]
})
export class ErrorMessageComponent {
  @Input() control: AbstractControl | null = null;
  @Input() error: string = '';
  @Input() message: string = '';
}
