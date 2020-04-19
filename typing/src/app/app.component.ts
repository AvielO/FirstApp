import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  enteredText: string = '';
  userSuccessed: boolean = false;
  randomText: string = lorem.sentence();

  userTyped(value: string) {
    this.enteredText = value;
    
    if(value == this.randomText) {
      this.userSuccessed = true;
    }
  }

  compare(randomLetter: string, enteredLetter: string) {
    if(!enteredLetter) {
      return 'pending';
    }
    
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
