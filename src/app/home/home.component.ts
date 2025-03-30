import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackgroundImageServiceService } from '../share/service/background-image-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  backgroundImage: string = '';


  constructor(private route: ActivatedRoute,private notifyService:BackgroundImageServiceService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const bgImg = params['bgImg'];
      console.log(bgImg);
      this.notifyService.Notify(bgImg);  // do something with id
    });

  }

}
