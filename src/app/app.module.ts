import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialComponent } from './components/material/material.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material';
import { BarComponent } from './components/bar/bar.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ToolComponent } from './components/tool/tool.component';
import {MatTreeModule} from '@angular/material/tree';
import { TreeComponent } from './components/tree/tree.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './components/login/login.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {Form, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {MatRippleModule} from '@angular/material/core';
import {VetsComponent} from './components/vets/vets.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import { OwnerlistComponent } from './components/ownerlist/ownerlist.component';
import { UpdataownerComponent } from './components/updataowner/updataowner.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { PetdetailComponent } from './components/petdetail/petdetail.component';
import { AddpetComponent } from './components/addpet/addpet.component';
import {MatSelectModule} from '@angular/material/select';
import { AddownerComponent } from './components/addowner/addowner.component';
import { PetlistComponent } from './components/petlist/petlist.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatPaginatorModule, MatPaginatorIntl} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    BarComponent,
    ToolComponent,
    TreeComponent,
    LoginComponent,
    VetsComponent,
    OwnerlistComponent,
    UpdataownerComponent,
    PetdetailComponent,
    AddpetComponent,
    AddownerComponent,
    PetlistComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTreeModule,
    MatProgressBarModule,
    MatListModule,
    MatInputModule,
    MatTabsModule,
    MatStepperModule,
    MatSnackBarModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    MatRippleModule,
    MatTableModule,
    MatDialogModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatSelectModule,
    DragDropModule,
    MatPaginatorModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
