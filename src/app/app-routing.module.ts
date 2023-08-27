import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminSiteComponent } from './admin-site/admin-site.component';
import { UserSiteComponent } from './user-site/user-site.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './services/guard/auth.guard';
import { AddComponent } from './personal/add/add.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent, canActivate:[AuthGuard] },
  { path: '', component: LoginComponent },
  { path: 'admin', component:AdminSiteComponent, canActivate:[AuthGuard] },
  { path: 'user', component:UserSiteComponent, canActivate:[AuthGuard] },
  { path: 'add', component:AddComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
