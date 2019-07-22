import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ComboChartComponent } from './admin-body-component/Charts/combochart.component'
import { AdminBodyComponentComponent } from './admin-body-component/admin-body-component.component'
import { FormsModule }   from '@angular/forms';
import { GoogleComboChartService } from './Services/google-combo-chart.service';
import { GooglePieChartService } from './Services/google-pie-chart.service';
import { NgModule } from '@angular/core';
import { PieChartComponent } from './admin-body-component/Charts/piechart.component'

@NgModule({
  declarations: [
    AppComponent,
    AdminBodyComponentComponent,
    PieChartComponent
    // GoogleComboChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GoogleComboChartService,GooglePieChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
