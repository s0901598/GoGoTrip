import { Component, OnInit } from '@angular/core';
import { BackgroundImageServiceService } from '../share/service/background-image-service.service';
import { AuthService } from '../share/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
[x: string]: any;
background = ''
  constructor(private notifyService:BackgroundImageServiceService,private loginService:AuthService) { }

  ngOnInit(): void {
    this.notifyService.subject.subscribe(x=>{
      console.log('assets/'+x)
      this.background = '/assets/'+x;
    });
  }

  OpenSignInModal(){
   this.loginService.NotifyLoginPanel(true);
  }

}
