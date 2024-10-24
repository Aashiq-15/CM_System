import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NgToastModule } from 'ng-angular-popup';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AdminLoginComponent } from "./Auth/admin-login/admin-login.component";
import { AdminRegisterComponent } from "./Auth/admin-register/admin-register.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, NgToastModule, NgxSpinnerModule, AdminLoginComponent, AdminRegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CM_System';
}
