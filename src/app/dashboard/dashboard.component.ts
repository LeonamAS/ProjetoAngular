import { DashboardService } from './../services/dashboard.service';
import { VehicleData } from './../models/vehicleData.model';
import { Component, OnInit } from '@angular/core';
import { CabecalhoComponent } from '../componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from '../componentes/rodape/rodape.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Veiculo } from '../models/veiculo.model';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    CommonModule,
    FormsModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  vehicles: Veiculo[] = [];
  selectedVehicle!: Veiculo;
  // vehicleData!: VehicleData;

  selectCarForms = new FormGroup({
    carId: new FormControl('')
  })

  title = 'vehicle-dashboard';
  vinInput: string = '';
  vehicleData: VehicleData | null = null;
  errorMessage: string = '';

  constructor(private dashboardservice: DashboardService) { }

  ngOnInit(): void {
    this.dashboardservice.getVehicles().subscribe((res) => {
      console.log(res.vehicles)
      this.vehicles = res.vehicles
    })

    this.selectCarForms.controls.carId.valueChanges.subscribe((id) => {
      this.selectedVehicle = this.vehicles[Number(id) - 1]
    })
  }

  getVehicleInfo() {
      this.errorMessage = ''; 
      this.vehicleData = null; 

      if (!this.vinInput) {
        this.errorMessage = 'Por favor, insira um código VIN.';
        return;
      }

      this.dashboardservice.getVehicleData(this.vinInput).subscribe({
        next: (data) => {
          this.vehicleData = data;
        },
        error: (error) => {
          this.errorMessage = error.error?.message || 'Ocorreu um erro ao buscar os dados do veículo.';
        }
      });
    }
}
