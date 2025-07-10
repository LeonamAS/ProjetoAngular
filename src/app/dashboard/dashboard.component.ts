import { Component, OnInit } from '@angular/core';
import { CabecalhoComponent } from '../componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from '../componentes/rodape/rodape.component';
import { CardsComponent } from '../componentes/cards/cards.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DashboardService } from '../services/dashboard.service';

// interface Food {
//   value: string;
//   viewValue: string;
// }

@Component({
  selector: 'app-dashboard',
  imports: [
    CabecalhoComponent, 
    RodapeComponent, 
    // CardsComponent, 
    MatCardModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  constructor( private dashboardservice: DashboardService) {}

  ngOnInit(): void {
    this.dashboardservice.getVehicles().subscribe((res)=>{
      console.log(res.vehicles)
    })
  } 
}

