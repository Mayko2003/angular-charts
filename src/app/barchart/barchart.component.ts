import { Component, OnInit } from '@angular/core';
import { IgxBarSeriesComponent, IgxCategoryHighlightLayerComponent, 
  IgxCategoryYAxisComponent, IgxDataChartComponent, 
  IgxNumericXAxisComponent, IgxLegendComponent, IgxItemToolTipLayerComponent } from 'igniteui-angular-charts';
import { BarChartModel } from './bar-chart-model';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  constructor() { 
    this.datos = new Array<BarChartModel>()

    this.datos.push({jugador: "Juan", goles: 20, golestemporada: 10})
    this.datos.push({jugador: "Pedro", goles: 50, golestemporada: 30})
    this.datos.push({jugador: "Messi", goles: 90, golestemporada: 40})
  }

  //legend

  private legend!: IgxLegendComponent
  
  //chart
  private chart!: IgxDataChartComponent
  
  //ejes
  private yAxis!: IgxCategoryYAxisComponent
  
  private xAxis!: IgxNumericXAxisComponent
  
  private categoryHighlightLayer!: IgxCategoryHighlightLayerComponent
  
  //baras de goles
  private barSeries1!: IgxBarSeriesComponent
  
  private barSeries2!: IgxBarSeriesComponent

  //tooltip
  private tooltips!: IgxItemToolTipLayerComponent

  datos!:Array<BarChartModel>

  ngOnInit(): void {
  }

}
