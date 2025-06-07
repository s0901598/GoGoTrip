import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  showLogin:Subject<boolean> = new Subject();
  constructor() { }

  RegisterLoginListener(){
    return this.showLogin.asObservable();
  }

  NotifyLoginPanel(active:boolean){
    this.showLogin.next(active);
  }
}
