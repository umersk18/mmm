import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../model/auth.service';

@Component({
 templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  
  public username:string;
  public password:string;
  public errorMessage:string;
  constructor(private router:Router
    ,private auth :AuthService
    ) { }

  ngOnInit() {
  }

  authenticate(form:NgForm){
    if(form.valid){
     this.auth.authenticate(this.username,this.password)
    .subscribe(response => {
      if(response){
        this.router.navigateByUrl("/admin/main")
      }
      this.errorMessage="authentication failed..!!"

    });
    }
    else{
      this.errorMessage="Form data invalid";
    }
  }
}
