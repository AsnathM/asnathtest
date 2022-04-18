// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
// @ts-ignore
import { FormsModule } from '@angular/forms';
// @ts-ignore
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
// @ts-ignore
import { UserListComponent } from './user-list/user-list.component';
// @ts-ignore
import { UserFormComponent } from './user-form/user-form.component';
// @ts-ignore
import { UserService } from './service/user.service';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
