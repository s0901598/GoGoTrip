import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  {
    path:'',redirectTo:'Home',pathMatch:'full'
  },
  {
    path:'Home/:bgImg',component:HomeComponent,
  },
  {
    path:'Rooms/:bgImg',component:RoomsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
