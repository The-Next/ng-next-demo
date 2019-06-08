import { Component, OnInit, Input } from '@angular/core';
import {Animal} from './animal';
import {Pet} from '../../bean/Pet';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  @Input() pet: Pet;
  animal: Animal = {
    name: '狗逼周乐善',
    headimage: '',
    backimage: '',
    Type: 'Dog',
    content: 'shenxu',
  };
  constructor() {
    setTimeout(() => {
      this.animal.headimage = '/assets/head/' + this.pet.typeId + '.jpg';
      this.animal.backimage = '/assets/image/' + this.pet.typeId + '.jpg';
    });
  }

  ngOnInit() {
  }

}
