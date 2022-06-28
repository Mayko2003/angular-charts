import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarchartComponent } from './barchart/barchart.component';
import { ColumnchartComponent } from './columnchart/columnchart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { PiechartComponent } from './piechart/piechart.component';

const routes: Routes = [
  { path: 'piechart', component: PiechartComponent },
  { path: 'barchart', component: BarchartComponent },
  { path: 'columnchart', component: ColumnchartComponent },
  { path: 'linechart', component: LinechartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
