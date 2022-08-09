import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VKAutomate To Do app';

  toggleAddTask() {
    console.log('Toggled!')
  }
}
