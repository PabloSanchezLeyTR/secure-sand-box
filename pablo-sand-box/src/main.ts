import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { SafButton } from '@saffron/core-components';
SafButton();
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
