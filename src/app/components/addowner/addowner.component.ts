import { Component, OnInit } from '@angular/core';
import {Owner} from '../../bean/Owner';
import {OwnerService} from '../../services/owner.service';
import {MessageService} from '../../services/message.service';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-addowner',
  templateUrl: './addowner.component.html',
  styleUrls: ['./addowner.component.css']
})
export class AddownerComponent implements OnInit {
  owner: Owner = new Owner();
  constructor(public ownerService: OwnerService, public snackBar: MessageService, public login: LoginService) {
    this.login.returnlog();
  }
  addowner() {
    if (this.owner.name === '' || this.owner.address === '' || this.owner.telephone === '' ||
        this.owner.name === null || this.owner.address === null || this.owner.telephone === null ||
        this.owner.name === undefined || this.owner.address === undefined || this.owner.telephone === undefined) {
      this.snackBar.openSnackBar('请将信息填写完整！', 'Done');
    } else {
      this.ownerService.addOwner(this.owner).subscribe( state => {
        this.snackBar.openSnackBar(state.message, 'Done');
      });
    }
  }
  ngOnInit() {
  }

}
