import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeViewComponent } from './components/tree-view/tree-view.component';
import { TreeViewNodeComponent } from './components/tree-view-node/tree-view-node.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    TreeViewNodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
