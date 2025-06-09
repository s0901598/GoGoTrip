import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../share/service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  isModalOpen = false;
  currentTab = 'login';
  loginFormData = { email: '', password: '', remember: false };
  registerFormData = { name: '', email: '', password: '', confirmPassword: '', agreeTerms: false };

  constructor(private http: HttpClient,private loginService:AuthService) {
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
    if (!this.loginFormData.email || !this.loginFormData.password) {
      alert('請填寫所有必填欄位！');
      return;
    }
    this.http.post('http://127.0.0.1:8000/login/', {
      account: this.loginFormData.email,
      password: this.loginFormData.password
    }).subscribe(
      (response: any) => alert(response.message),
      (error) => alert('錯誤: ' + error.error.detail)
    );
  }

  submitRegister() {
    if (!this.registerFormData.name || !this.registerFormData.email || !this.registerFormData.password ||
        !this.registerFormData.confirmPassword || !this.registerFormData.agreeTerms) {
      alert('請填寫所有必填欄位並同意條款！');
      return;
    }
    if (this.registerFormData.password !== this.registerFormData.confirmPassword) {
      alert('密碼與確認密碼不符！');
      return;
    }
    this.http.post('http://127.0.0.1:8000/register/', {
      username: this.registerFormData.name,
      account: this.registerFormData.email,
      phonenumber: '', // 這裡暫時留空，需根據 API 要求調整
      bir: '',        // 這裡暫時留空，需根據 API 要求調整
      createtime: new Date().toISOString()
    }).subscribe(
      (response: any) => alert(response.message),
      (error) => alert('錯誤: ' + error.error.detail)
    );
  }

  forgotPassword() {
    alert('忘記密碼功能尚未實現！');
  }
}
