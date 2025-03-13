import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button/button.component';

// TODO: remove test app when storybook arrives
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular';
}
