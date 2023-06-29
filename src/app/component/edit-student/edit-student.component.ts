import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { StudentsService } from 'src/app/students.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

	constructor(private student:StudentsService,private router: ActivatedRoute){}

	editStudent = new FormGroup({
		name : new FormControl(''),
		email : new FormControl('')
});


//create a message variable to display submit alert
message:boolean=false; 

	ngOnInit(): void {
		//console.log(this.router.snapshot.params['id']);
		this.student.getStudentById(this.router.snapshot.params['id']).subscribe((result:any)=>{
			//console.log(result);
			this.editStudent = new FormGroup({
				name : new FormControl(result['name']),
				email : new FormControl(result['email'])
		});
		});
		
	}
	//update and save Data while submit the form
	UpdateData(){
        this.student.updateStudentData(this.router.snapshot.params['id'],this.editStudent.value).subscribe((result)=>{
			//console.log(result);
			this.message=true;
			this.editStudent.reset({});
		})	
	} 

	//removing the submit alert
	removeMessage(){
		this.message=false;
	}

}
