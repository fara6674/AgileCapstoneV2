import { Component, OnInit } from '@angular/core';
//import { Dependency } from '../dependency';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {HeroService} from '../hero.service';


@Component({
  selector: 'app-dependency',
  templateUrl: './dependency.component.html',
  styleUrls: ['./dependency.component.css']
})

export class DependencyComponent implements OnInit {


  // model = new Hero('Test' ,  '01/01/2019' ,  '01/02/2019' ,  2 ,  123 , '1234');


  
  submitted = false;
 
 
  clickMessage = '';
  clicks = 1 ;
 
 onSubmit(form: NgForm) {
   
  console.log(NgForm);
     this.submitted = true;
    /* const evtMsg = event ? ' Event target is ' + event.target.tagName  : '';
     this.clickMessage = (`Click #${this.clicks++}. ${evtMsg}`);*/
     this.save(form);
    }
 
 
  save(form: NgForm) {
    this.heroService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error))
  }
 
  
 
    constructor(private route: ActivatedRoute,
      private router: Router,
      private heroService: HeroService) {
    }
 
 
  ngOnInit() {
  }
 
  gotoList() {
    this.router.navigate(['/heroes']);
  }
 

}
