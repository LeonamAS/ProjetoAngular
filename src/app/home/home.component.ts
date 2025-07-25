import { Component } from '@angular/core';
import { CabecalhoComponent } from '../componentes/cabecalho/cabecalho.component';
import { MatCardModule } from '@angular/material/card';
import { RodapeComponent } from '../componentes/rodape/rodape.component';

@Component({
  selector: 'app-home',
  imports: [CabecalhoComponent, MatCardModule, RodapeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
