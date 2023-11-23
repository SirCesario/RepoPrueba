import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent {
  constructor(private router: Router) { }
  branches: any[] = [];
  showForm: boolean = false;
  newBranch: any = {};

  goToHome() {
    // Navega a la página de inicio
    this.router.navigate(['']); // Ajusta la ruta según la configuración de tu aplicación
  }

  showCreateForm() {
    this.showForm = true;
    this.newBranch = {}; // Limpia los datos del nuevo sucursal
  }

  createBranch() {
    // Agrega la lógica para crear una nueva sucursal con this.newBranch
    // Puedes llamar a un servicio para enviar los datos al servidor, por ejemplo
  }
  




 
}
