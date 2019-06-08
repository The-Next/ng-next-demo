import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {
  public name = '';
  constructor(public loginService: LoginService, public snackBar: MessageService) {
    this.name = this.loginService.getloglocal();
  }
  logout() {
    this.snackBar.openSnackBar('退出登录', 'Done');
    this.loginService.removeloglocal();
    window.location.href = 'login';
  }

  ngOnInit() {
  }

}
