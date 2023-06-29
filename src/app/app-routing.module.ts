import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './component/add-student/add-student.component';
import { EditStudentComponent } from './component/edit-student/edit-student.component';
import { LoginStudentComponent } from './component/login-student/login-student.component';
import { RegistrationStudentComponent } from './component/registration-student/registration-student.component';
import { ListStudentComponent } from './component/list-student/list-student.component';

const routes: Routes = [
	{
		path:'add',
		component: AddStudentComponent
	},
	{
		path:'edit/:id',
		component: EditStudentComponent
	},
	{
		path:'list',
		component: ListStudentComponent
	},
	{
		path:'login',
		component: LoginStudentComponent
	},
	{
		path:'registration',
		component: RegistrationStudentComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
