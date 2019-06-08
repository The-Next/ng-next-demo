import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Vets} from '../../bean/Vets';
import {Pet} from '../../bean/Pet';
import {OwnerService} from '../../services/owner.service';
import {MessageService} from '../../services/message.service';
import {Owner} from '../../bean/Owner';
import {LoginService} from '../../services/login.service';
@Component({
  selector: 'app-ownerlist',
  templateUrl: './ownerlist.component.html',
  styleUrls: ['./ownerlist.component.css']
})
export class OwnerlistComponent implements OnInit {
  ELEMENT_DATA: Owner[];
  displayedColumns: string[] = ['id' , 'name', 'address', 'telephone', 'no'];
  dataSource: MatTableDataSource<Owner>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public ownerService: OwnerService, public snackBar: MessageService, public login: LoginService) {
    this.login.returnlog();
    this.getownerlist();
  }
  getownerlist() {
    this.ownerService.getOwnerList().subscribe(owners => {
      this.ELEMENT_DATA = owners;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit() {}

}
