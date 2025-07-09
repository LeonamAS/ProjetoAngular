import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cabecalho',
  imports: [CommonModule, NgbCollapseModule, NgbDropdownModule, MatIconModule],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {
  constructor(private router: Router) { }

  onLogin(): void {
    this.router.navigate(['/login'])
  }
  onDashboard(): void {
    this.router.navigate(['/dashboard'])
  }
  onHome(): void {
    this.router.navigate(['/home'])
  }
}
