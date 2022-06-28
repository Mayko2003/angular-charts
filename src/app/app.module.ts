import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { IgxItemLegendModule, IgxPieChartModule } from 'igniteui-angular-charts';
import { TestComponent } from './components/test/test.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    IgxItemLegendModule,
    IgxPieChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
