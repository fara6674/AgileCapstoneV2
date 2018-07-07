import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {RegisterService} from '../register.service';
import { User } from '../user';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;

  model = new User('test@email.net','123',);

  constructor(private route: ActivatedRoute,
    private router: Router,
    private registerService: RegisterService) {
  }

  onSubmit(form: NgForm){
   
    
    console.log("Test TEST test");
     this.submitted = true;
      console.log("this is the form", form);
       this.save(form);
      }

      save(form: NgForm) {
        console.log("TEEESSSTTTTT");
        this.registerService.save(form).subscribe(result => {
          console.log("after subscribe", form);
          this.gotoList();
          console.log("after got to List", form);
        }, error => console.error(error));
      }
     
  ngOnInit() {
  }

  gotoList() {
    this.router.navigate(['/login']);
  }
 

}
