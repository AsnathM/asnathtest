import { NgModule } from '@angular/core';
// @ts-ignore
import { Routes, RouterModule } from '@angular/router';
// @ts-ignore
import { UserListComponent } from './user-list/user-list.component';
// @ts-ignore
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent }
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
