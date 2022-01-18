import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PmComponent } from './pm/pm.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'user',
      component: UserComponent
  },
  {
      path: 'pm',
      component: PmComponent
  },
  {
      path: 'admin',
      component: AdminComponent
  },
  {
      path: 'auth/login',
      component: LoginComponent
  },
  {
      path: 'signup',
      component: RegisterComponent
  },
  {
    path: 'contact',
    component: ContactComponent
},
  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
