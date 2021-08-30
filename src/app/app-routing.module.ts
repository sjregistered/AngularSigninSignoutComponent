import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './child-components/login/login.component';
import { NotFoundComponent } from './child-components/not-found/not-found.component';
import { SignupComponent } from './child-components/signup/signup.component';
import { AuthenticatorGuard } from './guards/authenticator.guard';

const routes: Routes = [
  {path: '', redirectTo: '/authenticate/login', pathMatch:'full'},
  {path: 'authenticate/login', component: LoginComponent},
  {path: 'authenticate/signup', component: SignupComponent},
  {path: 'admin', 
  canActivate: [AuthenticatorGuard],
  loadChildren: () => import('./modules/admin/admin.module').then((m)=> m.AdminModule)},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
