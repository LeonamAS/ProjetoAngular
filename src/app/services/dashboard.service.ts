import { VehicleData } from './../models/vehicleData.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VeiculosAPI } from '../models/veiculo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseUrl = 'http://localhost:3001'

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<VeiculosAPI>{
    return this.http.get<VeiculosAPI>(`${this.baseUrl}/vehicles`)
  }

  // getVehiclesData(): Observable<VehicleData>{
  //   return this.http.get<VehicleData>(`${this.baseUrl}/data`)
  // }

  getVehicleData(vin: string): Observable<VehicleData> {
    return this.http.post<VehicleData>(`${this.baseUrl}/VehicleData`, { vin });
  }
}
