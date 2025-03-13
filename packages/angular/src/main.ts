import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// TODO: remove test app when storybook arrives
bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
