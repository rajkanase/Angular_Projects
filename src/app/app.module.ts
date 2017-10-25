import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MasterCompoComponent } from './master-compo/master-compo.component';
import { CompoOneComponent } from './master-compo/compo-one.component';
import { CompoTwoComponent } from './master-compo/compo-two.component';
import { HoverDirective } from './master-compo/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    MasterCompoComponent,
    CompoOneComponent,
    CompoTwoComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
