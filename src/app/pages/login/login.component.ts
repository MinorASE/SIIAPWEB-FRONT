import { Component,OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatButtonModule,MatFormFieldModule,ReactiveFormsModule,MatInputModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit, OnDestroy {
  title = 'Login'; // Título del componente
  loginForm: FormGroup; // Grupo de formularios para el formulario de inicio de sesión
  imageUrlsLeft: string[] = [ // Arreglo de URLs de imágenes para la sección izquierda
    'assets/images/ase-1.jpg',
    'assets/images/ase-2.jpg',
    'assets/images/ase-3.jpg',
  ];
  imageUrlRight: string = 'assets/images/ase-1.jpg'; // URL de la imagen para la sección derecha
  currentLeftImageIndex: number = 0; // Índice de la imagen actual en la sección izquierda
  private imageChangeInterval: any; // Intervalo para cambiar las imágenes automáticamente

  constructor(private router: Router,private fb: FormBuilder) {
    // Inicialización del formulario con validadores
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Campo de email con validadores
      password: ['', [Validators.required, Validators.minLength(6)]], // Campo de contraseña con validadores
    });
  }
   ngOnInit(): void {
    // // Inicialización cuando el componente está cargado
    this.updateImageRight(); // Actualizar la imagen de la sección derecha


    // // Configurar intervalo para cambiar las imágenes en la sección izquierda cada 5 segundos
    
    // this.imageChangeInterval = setInterval(() => {
    //   this.updateImageLeft(); // Cambiar la imagen de la sección izquierda
    //   this.updateImageRight(); // Actualizar la imagen de la sección derecha
    // }, 5000);



   }

  ngOnDestroy(): void {
    // Realizar limpieza cuando el componente está a punto de ser destruido
    clearInterval(this.imageChangeInterval); // Limpiar el intervalo para evitar pérdida de memoria
  }

  private updateImageLeft() {
    // Cambiar a la siguiente imagen en la sección izquierda
    this.currentLeftImageIndex = (this.currentLeftImageIndex + 1) % this.imageUrlsLeft.length;
  }

  private updateImageRight() {
    // Actualizar la imagen de la sección derecha (simplemente se establece en la primera imagen)
    this.imageUrlRight = 'assets/images/ase-1.jpg';
  }

  onSubmit() {
    if (this.loginForm?.valid) { // Verificación de null usando el operador de navegación segura (?)
      const username = this.loginForm.get('email')?.value; // Verificación de null
      const password = this.loginForm.get('password')?.value; // Verificación de null
  
      if (username === 'usuario@dominio.com' && password === 'contraseña') {
        this.router.navigate(['/dashboard']);
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    } else {
      console.log('Formulario no válido');
    }
  }

  login(){
    this.router.navigate(['dashboard']);
  }


}
