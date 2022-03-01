import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  register(){

    console.log(this.registerForm)
    var uname=this.uname
    var pswd=this.pswd

    const result=this.ds.register(uname,pswd)
    if(result){
      alert("Successfully Registered!!!")
      this.router.navigateByUrl("")
      }
      else{
      alert("User already exist...Please Log In!!!!")

      
    }
}
