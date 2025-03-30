import { Component, OnInit } from '@angular/core';
import { BackgroundImageServiceService } from '../share/service/background-image-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
[x: string]: any;
background = ''
  constructor(private notifyService:BackgroundImageServiceService) { }

  ngOnInit(): void {
    this.notifyService.subject.subscribe(x=>{
      console.log('assets/'+x)
      this.background = '/assets/'+x;
    });
  }

}
