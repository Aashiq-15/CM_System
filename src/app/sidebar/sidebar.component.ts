import { Component, ViewChild } from '@angular/core';
import { Material } from '../Tools/Material';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [Material],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

}
