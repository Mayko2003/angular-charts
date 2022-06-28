import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { IgxCategoryChartModule, IgxDataChartAnnotationModule, IgxDataChartCategoryCoreModule, IgxDataChartCategoryModule, IgxDataChartCoreModule, IgxDataChartInteractivityModule, IgxDataChartVerticalCategoryModule, IgxItemLegendModule, IgxLegendModule, IgxPieChartModule } from 'igniteui-angular-charts';
import { CommonModule } from '@angular/common';
import { PiechartComponent } from './piechart/piechart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { ColumnchartComponent } from './columnchart/columnchart.component';
import { LinechartComponent } from './linechart/linechart.component';

@NgModule({
  declarations: [
    AppComponent,
    PiechartComponent,
    BarchartComponent,
    ColumnchartComponent,
    LinechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    IgxItemLegendModule,// for legends of charts
    IgxLegendModule,// other legend for charts
    // modules for pie chart
    IgxPieChartModule, 
    // modules for bar chart
    IgxDataChartCoreModule,
    IgxDataChartCategoryCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartInteractivityModule,
    IgxDataChartVerticalCategoryModule,
    IgxDataChartAnnotationModule,
    // modules for column chart
    IgxCategoryChartModule
    // modules for line chart
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
