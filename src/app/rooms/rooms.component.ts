import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackgroundImageServiceService } from '../share/service/background-image-service.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

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
