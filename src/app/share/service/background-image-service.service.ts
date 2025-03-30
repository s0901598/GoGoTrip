import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundImageServiceService {

  subject = new Subject<string>();
  public Notify(bgImage:string){
    this.subject.next(bgImage);
  }
  constructor() { }
}
