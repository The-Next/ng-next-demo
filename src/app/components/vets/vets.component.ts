import {Component, OnInit, Inject, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Vets} from '../../bean/Vets';
import {VetsService} from '../../services/vets.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {SPSet} from '../../bean/SPSet';
import {MessageService} from '../../services/message.service';
import {LoginService} from '../../services/login.service';



@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.css']
})
export class VetsComponent implements OnInit {
  spset: SPSet = new SPSet();
  ELEMENT_DATA: Vets[];
  displayedColumns: string[] = ['id', 'name', 'specialtiesList'];
  dataSource: MatTableDataSource<Vets>;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(public vetService: VetsService,
              public dialog: MatDialog,
              public snackBar: MessageService,
              public login: LoginService) {
    this.login.returnlog();
    this.getlist();
  }
  ngOnInit() {
  }

  getlist() {
    this.vetService.getVets().subscribe(vets => {
        console.log(vets);
        this.ELEMENT_DATA = vets;

        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      }
    );
  }

  add() {
    this.vetService.addVets(this.spset)
      .subscribe(state => {
        console.log(state);
        this.snackBar.openSnackBar(state.message, 'Done');
        this.getlist();
      });
  }
}

