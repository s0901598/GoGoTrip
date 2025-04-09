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

  // 定義每個房間的照片陣列
  roomImages = [
    ['/assets/room2.jpg', '/assets/room3.jpg', '/assets/room4.jpg'],
    ['/assets/room3.jpg', '/assets/room1.jpg', '/assets/room2.jpg'],
    ['/assets/room4.jpg', '/assets/room2.jpg', '/assets/room1.jpg'],
    ['/assets/room2.jpg', '/assets/room3.jpg', '/assets/room4.jpg'],
    ['/assets/room3.jpg', '/assets/room1.jpg', '/assets/room2.jpg'],
    ['/assets/room2.jpg', '/assets/room3.jpg', '/assets/room4.jpg'],
    ['/assets/room4.jpg', '/assets/room2.jpg', '/assets/room1.jpg'],
    ['/assets/room2.jpg', '/assets/room3.jpg', '/assets/room4.jpg']

  ];
  // 追蹤當前顯示的照片索引
  currentImageIndices: number[] = [0, 0, 0, 0,0,0,0,0];

  constructor(private route: ActivatedRoute,private notifyService:BackgroundImageServiceService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const bgImg = params['bgImg'];
      console.log(bgImg);
      this.notifyService.Notify(bgImg);  // do something with id
    });

  }

  // 切換到上一張照片
  prevImage(roomIndex: number) {
    this.currentImageIndices[roomIndex] = 
      (this.currentImageIndices[roomIndex] - 1 + this.roomImages[roomIndex].length) % 
      this.roomImages[roomIndex].length;
  }

  // 切換到下一張照片
  nextImage(roomIndex: number) {
    this.currentImageIndices[roomIndex] = 
      (this.currentImageIndices[roomIndex] + 1) % 
      this.roomImages[roomIndex].length;
  }

}
