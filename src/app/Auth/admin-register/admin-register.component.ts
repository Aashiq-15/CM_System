import { Component } from '@angular/core';
import { Material } from '../../Tools/Material';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-admin-register',
  standalone: true,
  imports: [Material],
  providers:[ConfirmationService],
  templateUrl: './admin-register.component.html',
  styleUrl: './admin-register.component.css'
})
export class AdminRegisterComponent {

}
