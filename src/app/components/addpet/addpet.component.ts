import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {PetserviceService} from '../../services/petservice.service';
import {Type} from '../../bean/Type';
import {OwnerService} from '../../services/owner.service';
import {MessageService} from '../../services/message.service';
import {ActivatedRoute} from '@angular/router';
import {Owner} from '../../bean/Owner';
import {Pet} from '../../bean/Pet';
import {LoginService} from '../../services/login.service';
@Component({
  selector: 'app-addpet',
  templateUrl: './addpet.component.html',
  styleUrls: ['./addpet.component.css']
})
export class AddpetComponent implements OnInit {
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  type: Type[] = new Array<Type>();
  pet: Pet = new Pet();
  owner: Owner = new Owner();
  animalControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  constructor(public petService: PetserviceService,
              public ownerService: OwnerService,
              public snackBar: MessageService,
              public route: ActivatedRoute,
              public login: LoginService) {
    this.login.returnlog();
    const id = +this.route.snapshot.paramMap.get('id');
    this.getType();
    this.getOwner(id);
  }
  getType() {
    this.petService.getType().subscribe( types => {
      this.type = types;
    });
  }
  getOwner(id: number) {
    this.ownerService.getOwnerById(id).subscribe(owner => {
      this.owner = owner;
    });
  }
  getName(name: string): Type {
    let type: Type = this.type.find(value => {
      return value.name === name;
    });
    return type;
  }
  addPet() {
    if (this.pet.name === '' || this.pet.typeName === ''
      || this.pet.brithDate === '' || this.pet.name === null
      || this.pet.typeName === null || this.pet.brithDate === null
      || this.pet.name === undefined || this.pet.typeName === undefined
      || this.pet.brithDate === undefined
    ) {
      this.snackBar.openSnackBar('请将信息填写完整！', 'Done');
    } else {
      console.log(this.pet.name);
      this.pet.typeId = this.getName(this.pet.typeName).id;
      this.pet.ownerId = this.owner.id;
      this.pet.ownerName = this.owner.name;
      this.petService.addpet(this.pet).subscribe(state => {
        this.snackBar.openSnackBar(state.message, 'Done');
      });
    }

  }
  ngOnInit() {
  }

}
