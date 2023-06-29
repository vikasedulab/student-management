import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; //import this for http link

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  url = 'http://localhost:3000/students';//create variable for url this is good practice while doing code

  constructor(private http:HttpClient) {}

  getAllStudent(){
	return this.http.get(this.url);//this.url call that url
  }
//to save Student data in json file
  saveStudentData(data:any){
  console.log(data);
  return this.http.post(this.url,data);
  }

  deleteStudent(id:any){
	return this.http.delete(`${this.url}/${id}`)

  }
  getStudentById(id:number){
	return this.http.get(`${this.url}/${id}`);
  }
  updateStudentData(id:number,data:any){
     return this.http.put(`${this.url}/${id}`,data);
  }


}
