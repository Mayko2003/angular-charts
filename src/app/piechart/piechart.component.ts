import { Component, OnInit } from '@angular/core';
import { IgxItemLegendComponent, IgxPieChartComponent } from 'igniteui-angular-charts';
import { Pierchartmodel } from './pierchartmodel';


@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  ngOnInit(): void {
  }

  datos!:Array<Pierchartmodel>
  public constructor() {
    this.datos = new Array<Pierchartmodel>()
    this.datos.push({valor: 40, categoria: "Niños"})
    this.datos.push({valor: 30, categoria: "Adultos"})
    this.datos.push({valor: 30, categoria:"Jovenes"})
  }

  private legend!: IgxItemLegendComponent
  private chart!: IgxPieChartComponent

}
