import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../share/service/auth.service';
import { HttpService } from '../share/service/http.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  isModalOpen = false;
  currentTab = 'login';
  loginFormData = { account: '', password: '', remember: false };
  registerFormData = { name: '', account: '', password: '', confirmPassword: '', agreeTerms: false };

  constructor(private http: HttpService,private loginService:AuthService) {
    this.loginService.RegisterLoginListener().subscribe(x=>this.isModalOpen = x);
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal(event:MouseEvent) {
    this.isModalOpen = false;
    this.currentTab='login';
    event.stopPropagation(); // 防止事件傳播到 .modal-overlay
  }

  setTab(tab: string,event:MouseEvent) {
    this.currentTab = tab;
    event.stopPropagation(); // 防止事件傳播到 .modal-overlay
  }


  submitLogin() {
    if (!this.loginFormData.account || !this.loginFormData.password) {
      alert('請填寫所有必填欄位！');
      return;
    }
    this.http.post('login/', {
      account: this.loginFormData.account,
      password: this.loginFormData.password
    }).subscribe(
      (response: any) => {
        alert(response.message);
        this.isModalOpen = false
      },
    );
  }

  submitRegister() {
    if (!this.registerFormData.name || !this.registerFormData.account || !this.registerFormData.password ||
        !this.registerFormData.confirmPassword || !this.registerFormData.agreeTerms) {
      alert('請填寫所有必填欄位並同意條款！');
      return;
    }
    if (this.registerFormData.password !== this.registerFormData.confirmPassword) {
      alert('密碼與確認密碼不符！');
      return;
    }
    this.http.post('register/', {
      username: this.registerFormData.name,
      account: this.registerFormData.account,
      password:this.registerFormData.password,
      phonenumber: '', // 這裡暫時留空，需根據 API 要求調整
      bir: '',        // 這裡暫時留空，需根據 API 要求調整
      gender:false,
      createtime: new Date().toISOString(),
      isdelete:false
    }).subscribe(
      (response: any) => alert(response.message),
      (error) => alert('錯誤: ' + error.error.detail)
    );
  }

  forgotPassword() {
    alert('忘記密碼功能尚未實現！');
  }
}
