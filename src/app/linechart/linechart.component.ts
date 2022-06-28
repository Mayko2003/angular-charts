import { Component, OnInit } from '@angular/core';
import { IgxCategoryChartComponent, IgxLegendComponent } from 'igniteui-angular-charts';
import { LineChartModel } from './line-chart-model';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {


  datos!:Array<LineChartModel>
  constructor() {
    this.datos = new Array<LineChartModel>()

    this.datos.push({year: 2015, cordoba: 100, buenosAires: 50, santaFe: 30})
    this.datos.push({year: 2016, cordoba: 150, buenosAires: 110, santaFe: 80})
    this.datos.push({year: 2017, cordoba: 167, buenosAires: 90, santaFe: 70})
    this.datos.push({year: 2018, cordoba: 200, buenosAires: 120, santaFe: 90})
    this.datos.push({year: 2019, cordoba: 250, buenosAires: 140, santaFe: 100})
  }

  private legend!: IgxLegendComponent
  private chart!: IgxCategoryChartComponent

  ngOnInit(): void {
  }

}
