import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { QuestionsComponent } from './questions/questions.component';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [AppComponent, QuestionsComponent],
  imports: [BrowserModule, MatButtonModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, NgxSkeletonLoaderModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {}
