import { Component ,OnInit} from '@angular/core';
import { PieChartConfig } from './../Models/PieChartConfig';
import { PieChartComponent } from './Charts/piechart.component';

@Component({
  selector: 'app-admin-body-component',
  templateUrl: './admin-body-component.component.html',
  styleUrls: ['./admin-body-component.component.scss']
})
export class AdminBodyComponentComponent implements OnInit{

  constructor(){

  }
  
  mainpagelabel: String;

  data1: any[];
  config1: PieChartConfig;
  elementId1: String;

  data2: any[];
  config2: PieChartConfig;
  elementId2: String;
  
  title="Hellow";
  // boxtitle: String[];
   table1_header: String[];
  // table1_data_head: String[];
  table1_datas: {};
  boxtitle: String;
  table2_headers: String[];
  table2_datas:{};
  policies:[];
  // public myId=["myPieChart1","MyPieChart2"];
  // public graphdata = [['Task', 'Hours per Day'],
  // ['Work',     11],
  // ['Eat',      2],
  // ['Commute',  2],
  // ['Watch TV', 2],
  // ['Sleep',    7]];
  
  ngOnInit(): void{
    // this.boxtitle= ["Vurnablities1","Vurnablities2","Vurnablities3","Vurnablities4"];
    this.table1_header= [,"Enabled/Yes","Disabled/No","Total Scans"];
    // this.table1_data_head=["Through Tests 1","Through Tests 2","Through Tests 3","Through Tests 4","Through Tests 5"];
    this.table1_datas=[{header:"scan1", infos:[0,10,20]},
    {header:"scan2", infos:[0,14,20]},
    {header:"scan3", infos:[0,15,20]},
    {header:"scan4", infos:[0,12,20]},
    {header:"scan5", infos:[0,17,20]},
    {header:"scan6", infos:[0,20,20]}
    ];
    this.boxtitle="vurnablity";
    this.mainpagelabel = "daily";
    this.table2_headers=[,"Enabled/Yes","Disabled/No","Total Scans","Total"]
    this.table2_datas=[{header:"header1", infos:[10,20,30,40]},
  {header:"header1", infos:[10,20,30,40]},
  {header:"header1", infos:[10,20,30,40]},
  {header:"header1", infos:[10,20,30,40]},
  {header:"header1", infos:[10,20,30,40]}];
  
   //Piechart1 Data & Config
   this.data1 = [['Task', 'Hours per Day'],
   ['Eat',      30],
   ['Commute',  25],
   ['Watch TV', 5],
   ['Video games', 4],
   ['Sleep',    10]];

   this.config1 = new PieChartConfig('My Daily Activities at 20 years old', 0.4);
   this.elementId1 = 'myPieChart1';

   //Piechart2 Data & Config
   this.data2 = [['Task', 'Hours per Day'],
                 ['Work',     11],
                 ['Eat',      2],
                 ['Commute',  2],
                 ['Watch TV', 2],
                 ['Sleep',    7]]

   this.config2 = new PieChartConfig('My Daily Activities at 30 years old', 0.4);
   this.elementId2 = 'myPieChart2';
  }
}
