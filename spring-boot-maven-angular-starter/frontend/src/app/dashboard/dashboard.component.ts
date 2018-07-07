import { Component, OnInit } from '@angular/core';
import { Dependency } from '../dependency';
import { HeroService } from '../hero.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Dependency[] = [];
  LineChart=[];
  BarChart=[];
  PieChart=[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();

    // Line chart:
this.LineChart = new Chart('lineChart', {
  type: 'line',
data: {
 labels: ["Jan", "Feb", "March", "April", "May", "June","July","Aug","Sep","Oct","Nov","Dec"],
 datasets: [{
     label: 'Number of Dependencies in Month',
     data: [9,7 , 3, 5, 2, 10,15,16,19,3,1,9],
     fill:false,
     lineTension:0.2,
     borderColor:"red",
     borderWidth: 1
 }]
}, 
options: {
 title:{
     text:"Dependency Line Chart",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});

//pie
this.PieChart = new Chart('pieChart', {
    type: 'pie',
    data: {
        labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
        datasets: [
            {
                data: [300, 50, 100, 40, 120],
                backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
            }
        ]
    },
    options: {
        responsive: true
    }
});

// Bar chart:
this.BarChart = new Chart('barChart', {
  type: 'bar',
data: {
 labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
 datasets: [{
     label: '# of Dependencies',
     data: [9,7 , 3, 5, 2, 10],
     backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.2)',
         'rgba(255, 159, 64, 0.2)'
     ],
     borderColor: [
         'rgba(255,99,132,1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)',
         'rgba(255, 159, 64, 1)'
     ],
     borderWidth: 1
 }]
}, 
options: {
 title:{
     text:"Dependency Bar Chart",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});


  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 3));
  }
}
