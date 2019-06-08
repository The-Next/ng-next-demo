import { Component, OnInit } from '@angular/core';
import {Owner} from '../../bean/Owner';
import {OwnerService} from '../../services/owner.service';
import {ActivatedRoute} from '@angular/router';
import {PetserviceService} from '../../services/petservice.service';
import {Pet} from '../../bean/Pet';
import {MessageService} from '../../services/message.service';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-updataowner',
  templateUrl: './updataowner.component.html',
  styleUrls: ['./updataowner.component.css']
})
export class UpdataownerComponent implements OnInit {
  id: number;
  owner: Owner = new Owner();
  pets: Pet[];
  isLinear = true;
  constructor(public ownerService: OwnerService,
              public snackBar: MessageService,
              public route: ActivatedRoute,
              public petService: PetserviceService,
              public login: LoginService) {
    this.login.returnlog();
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getOwner(this.id);
    this.getpetbyowner(this.id);
  }
  getOwner(id: number) {
    this.ownerService.getOwnerById(id).subscribe(owner => {
        console.log(owner);
        this.owner = owner;
      }
    );
  }
  getpetbyowner(id: number) {
    this.petService.getPetListByOwner(id).subscribe( pets => {
      this.pets = pets;
      console.log(pets);
    });
  }
  updataowner() {
    this.ownerService.updataOwner(this.owner).subscribe( state => {
      console.log(state);
      this.snackBar.openSnackBar(state.message, 'Done');
      this.getpetbyowner(this.id);
    });
  }
  ngOnInit() {
  }

}
