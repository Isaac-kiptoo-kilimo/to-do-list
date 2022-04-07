import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { StrikethroughDirective } from './strikethrough.directive';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskDetailComponent,
    StrikethroughDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
