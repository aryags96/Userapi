import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  login(){
  
    var uname=this.uname
    var pswd=this.pswd
    
    const result=this.ds.login(acno,pswd)
  
    if(result){
  
        alert("Login Sucess!!!")
        this.router.navigateByUrl("dashboard")
  
      }
    }   
  }
}
