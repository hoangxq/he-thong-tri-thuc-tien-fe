import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChuanDoanBenhComponent } from './components/chuan-doan-benh/chuan-doan-benh.component';
import { ListCaseDoneComponent } from './components/list-case-done/list-case-done.component';
import { ListCasePendingComponent } from './components/list-case-pending/list-case-pending.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'chuan-doan', component: ChuanDoanBenhComponent},
  {path: 'case-done', component: ListCaseDoneComponent},
  {path: 'case-pending', component: ListCasePendingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
