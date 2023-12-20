import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

 export const routes: Routes = [
      {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
      }
 ];
//     {
//         path: '',
//         component: LoginComponent,
//         pathMatch: 'full'
//       },
//       {
//         path: 'login',
//         component: LoginComponent,
//         pathMatch: 'full'
//       },
//       {
//         path: 'dashboard',
//         component: DashboardComponent,
//         // canActivate: [AdminGuard],
//         // children: [
//         //   {
//         //     path: "profile",
//         //     component: ProfileComponent
//         //   },
//         //   {
//         //     path: "",
//         //     component: WelcomeComponent
//         //   },
//         //   {
//         //     path: "users",
//         //     component: UsuariosComponent
//         //   },
//         //   {
//         //     path: "rols",
//         //     component: RolesComponent
//         //   },
//         //   {
//         //     path: "proveedores",
//         //     component: ProveedoresComponent
//         //   },
//         //   {
//         //     path: "proveedores-asig",
//         //     component: ProveedoresasigComponent
//         //   },
//         //   {
//         //     path: "catalogos",
//         //     component: CatalogosComponent
//         //   }
//         // ]
//       },
// ];
