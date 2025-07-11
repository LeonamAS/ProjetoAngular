import { VehicleData } from './../models/vehicleData.model';
import { Component, OnInit } from '@angular/core';
import { CabecalhoComponent } from '../componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from '../componentes/rodape/rodape.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DashboardService } from '../services/dashboard.service';
import { Veiculo } from '../models/veiculo.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  imports: [
    CabecalhoComponent, 
    RodapeComponent, 
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  vehicles: Veiculo[] = [];
  selectedVehicle!: Veiculo;
  vehicleData!: VehicleData;

  selectCarForms = new FormGroup({
    carId: new FormControl('')
  })

  constructor( private dashboardservice: DashboardService) {}

  ngOnInit(): void {
    this.dashboardservice.getVehicles().subscribe((res)=>{
      console.log(res.vehicles)
      this.vehicles = res.vehicles
    })

    

    this.selectCarForms.controls.carId.valueChanges.subscribe((id)=> {
      this.selectedVehicle = this.vehicles[Number(id) -1]
    })
  } 
}

