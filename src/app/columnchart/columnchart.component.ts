import { Component, OnInit } from '@angular/core';
import { IgxCategoryChartComponent, IgxLegendComponent } from 'igniteui-angular-charts';
import { ColumnChartModel } from './column-chart-model';

@Component({
  selector: 'app-columnchart',
  templateUrl: './columnchart.component.html',
  styleUrls: ['./columnchart.component.css']
})
export class ColumnchartComponent implements OnInit {


  datos!:Array<ColumnChartModel>
  constructor() { 
    this.datos = new Array<ColumnChartModel>()

    this.datos.push({redsocial: "Facebook", usuarios: 100, usuariosActivos: 50})
    this.datos.push({redsocial: "Twitter", usuarios: 150, usuariosActivos: 110})
    this.datos.push({redsocial: "Instagram", usuarios: 167, usuariosActivos: 90})
  }

  private legend!: IgxLegendComponent
  private chart!: IgxCategoryChartComponent

  ngOnInit(): void {
  }

}
