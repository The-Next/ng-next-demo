import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {ToolComponent} from './components/tool/tool.component';
import {MaterialComponent} from './components/material/material.component';
import {VetsComponent} from './components/vets/vets.component';
import {OwnerlistComponent} from './components/ownerlist/ownerlist.component';
import {UpdataownerComponent} from './components/updataowner/updataowner.component';
import {PetdetailComponent} from './components/petdetail/petdetail.component';
import {AddpetComponent} from './components/addpet/addpet.component';
import {AddownerComponent} from './components/addowner/addowner.component';
import {PetlistComponent} from './components/petlist/petlist.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // 默认加载路由
  { path: 'tool',
    component: ToolComponent,
    children: [
      { path: '', redirectTo: '/tool/vets', pathMatch: 'full' }, // 默认加载路由
      { path: 'petdetail/:id', component: PetdetailComponent},
      { path: 'vets', component: VetsComponent},
      { path: 'ownerlist', component: OwnerlistComponent },
      { path: 'updataowner/:id', component: UpdataownerComponent },
      { path: 'addpet/:id', component: AddpetComponent },
      { path: 'addowner', component: AddownerComponent },
      { path: 'petlist', component: PetlistComponent},
    ]
  },
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule {

}
