import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MenuModule } from './components/menu/menu.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MenuModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
