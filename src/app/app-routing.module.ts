import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { LoginComponent } from './login/login.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { OtentikasiGuard } from './otentikasi.guard';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: "admin", component: AdminComponent },
  { path: "dashbord", component: DashboardComponent,canActivate : [OtentikasiGuard]},
  { path: "dashbord2", component: Dashboard2Component,canActivate : [OtentikasiGuard]},
  { path: "dashbord3", component: Dashboard3Component},
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: "mahasiswa", component: MahasiswaComponent, canActivate : [OtentikasiGuard]},
  { path: "", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}