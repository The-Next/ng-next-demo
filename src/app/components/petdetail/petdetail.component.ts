import { Component, OnInit } from '@angular/core';
import {Pet} from '../../bean/Pet';
import {ActivatedRoute} from '@angular/router';
import {PetserviceService} from '../../services/petservice.service';
import {MessageService} from '../../services/message.service';
import {Vets} from '../../bean/Vets';
import {MatTableDataSource} from '@angular/material';
import {Visits} from '../../bean/Visits';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-petdetail',
  templateUrl: './petdetail.component.html',
  styleUrls: ['./petdetail.component.css']
})
export class PetdetailComponent implements OnInit {
  ELEMENT_DATA: Visits[];
  displayedColumns: string[] = ['visitData', 'description'];
  dataSource: MatTableDataSource<Visits>;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  isLinear = true;
  pet: Pet = new Pet();
  visties: Visits[] = new Array<Visits>();
  vistis: Visits = new Visits();
  constructor(public route: ActivatedRoute,
              public petService: PetserviceService,
              public snackBar: MessageService,
              public login: LoginService) {
    this.login.returnlog();
    const id = +this.route.snapshot.paramMap.get('id');
    this.getPet(id);
  }
  getPet(id: number) {
    this.petService.getPetById(id).subscribe(pet => {
      console.log(pet);
      this.pet = pet;
      this.getpetsvisits(id);
    });
  }
  updatapet() {
    this.petService.updatapet(this.pet).subscribe( state => {
      console.log(state);
      this.snackBar.openSnackBar(state.message, 'Done');
    }
    );
  }
  getpetsvisits(id: number) {
    this.petService.getPetsVisit(id).subscribe(visties => {
      this.ELEMENT_DATA = visties;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    });
  }
  addvisites() {
    let date = new Date();
    this.vistis.petId = this.pet.id;
    this.vistis.visitDate = date.getFullYear() + '-' +
      (date.getMonth() + 1) + '-' +
      date.getDay() + ' ' +
      date.getHours() + ':' +
      date.getMinutes() + ':' +
      date.getSeconds();
    console.log(this.vistis.visitDate);
    this.petService.addvisites(this.vistis).subscribe(state => {
      this.snackBar.openSnackBar(state.message, 'Done');
      this.getPet(this.vistis.petId);
    });
  }
  ngOnInit() {
  }

}
