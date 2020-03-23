import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstChartComponent } from './first-chart/first-chart.component';


const routes: Routes = [
  { path: '', component: FirstChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
