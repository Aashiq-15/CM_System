import { Component } from '@angular/core';
import { Material } from '../../Tools/Material';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [Material],
  providers:[ConfirmationService],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {

}
