import {Specialties} from './Specialties';

export class Vets {
  id: number;
  name: string;
  specialtiesList: Specialties[];
  public toString(): string {
    let str = '';
    for (let entry of this.specialtiesList) {
      str = str + entry + ' ';
    }
    return str;
  }
}


