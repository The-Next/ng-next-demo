import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PetserviceService} from '../../services/petservice.service';
import {MessageService} from '../../services/message.service';
import {Pet} from '../../bean/Pet';
import {FormControl, Validators} from '@angular/forms';
import {Type} from '../../bean/Type';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-petlist',
  templateUrl: './petlist.component.html',
  styleUrls: ['./petlist.component.css']
})
export class PetlistComponent implements OnInit {
  pets: Pet[] = new Array<Pet>();
  type: Type[] = new Array<Type>();
  typeid: number;
  animalControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  constructor( public snackBar: MessageService,
               public route: ActivatedRoute,
               public petService: PetserviceService,
               public login: LoginService) {
    this.login.returnlog();
    this.getType();
    this.getpeilist();
  }
  getpeilist() {
    this.petService.getPetlist().subscribe(pets => {
      this.pets = pets;
    });
  }
  getType() {
    this.petService.getType().subscribe( types => {
      this.type = types;
    });
  }
  getpetbytype() {
    console.log(this.typeid);
    if (this.typeid === undefined) {
      this.getpeilist();
    } else {
      this.petService.getPetByType(this.typeid).subscribe(pets => {
          this.pets = pets;
        }
      );
    }
  }
  ngOnInit() {
  }

}
