import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{

  public dataSource = {
    datasets: [
      {
        data: [ 1, 2, 4, 5, 6, 10, 12 ],
        backgroundColor: [
          '#ffcd56',
          '#ff6384',
          '#36a2eb',
          '#fd6b19',
          '#2ECC71',
          '#8E44AD',
          '#5D6D7E'
        ]
      }
    ],
    labels: ['food', 'rent', 'insurance', 'gas', 'loans', 'car', 'phone']
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      for (var i = 0; i < res.myBudget.length; i++) {
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataSource.labels[i] = res.myBudget[i].title;

    this.createChart();
      }
    });
  }

  createChart() {
    //var ctx = document.getElementById("myChart").getContext("2d");
    var ctx = document.getElementById('myChart') as HTMLCanvasElement;
    var myPieChart = new Chart(ctx, {
         type: 'pie',
        data: this.dataSource
    });
}

}
