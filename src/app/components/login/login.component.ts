import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {MessageService} from '../../services/message.service';
import {Employ} from '../../bean/Employ';
import {LoginService} from '../../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logonEmploy: Employ;
  loginEmploy: Employ = new Employ();
  pwd: any = {
    uname: '',
    pwd: '',
    rpwd: '',
  };
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  hide = true;
  radom: number;
  pic: string;
  constructor(private formBuilder1: FormBuilder , public snackBar: MessageService , public login: LoginService) {

    this.radom = Math.round(Math.random() * 23); // 每次访问刷新界面
    this.pic = '/assets/background/' + this.radom + '.jpg';
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder1.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder1.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder1.group({
      thirdCtrl: ['', Validators.required]
    });
  }

  Employlogin() { // 登录
    if (this.loginEmploy.name === '' ||
      this.loginEmploy.password === '' ||
      this.loginEmploy.name == null ||
      this.loginEmploy.password == null) {
      this.snackBar.openSnackBar('密码或账号不能空缺！', 'Done');
    } else {
      this.login.logIn(this.loginEmploy)
        .subscribe(state => {
          console.log(state);
          if (state.state === '1') {
            this.snackBar.openSnackBar(state.message, 'Done');
            this.login.setloglocal(this.loginEmploy.name);
            window.location.href = 'tool';
          } else {
            this.snackBar.openSnackBar(state.message, 'Done');
          }
        });
    }
  }


  Employlogon() { // 注册，两次密码输入检查
    let that = this;
    this.pwd.uname = this.pwd.uname.trim();
    this.logonEmploy = {
      name: this.pwd.uname,
      password: this.pwd.pwd,
      isactive: 1
    };
    if (this.pwd.pwd !== this.pwd.rpwd) {
      this.snackBar.openSnackBar('两次密码输入不一致！', 'Done');
    } else {
      this.login.logOn(this.logonEmploy)
        .subscribe(state => {
          console.log(state);
          this.snackBar.openSnackBar(state.message, 'Done');
        }
        );
  }
}
}
