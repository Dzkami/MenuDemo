import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { SubmenuComponent } from './components/menu/submenu/submenu.component';
import { SubmenuTitleDirective } from './components/menu/submenu-title.directive';
import { MenuIconDirective } from './components/menu/menu-icon.directive';
import { MenuGroupTitleDirective } from './components/menu/menu-group-title.directive';
import { MenuGroupComponent } from './components/menu/menu-group/menu-group.component';
import { MenuItemDirective } from './components/menu/menu-item.directive';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SubmenuComponent,
    SubmenuTitleDirective,
    MenuIconDirective,
    MenuGroupTitleDirective,
    MenuGroupComponent,
    MenuItemDirective
  ],
  imports: [
    BrowserModule
  ],
  exports:[
    SubmenuTitleDirective,
    MenuIconDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
