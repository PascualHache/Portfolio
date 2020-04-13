import { Component, OnInit } from '@angular/core';
import { Validation } from './validation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { 
    
  }
  model = new Validation("","","","")

  ngOnInit(): void {
    
  }

  submitted = false;

  onSubmit() {
    this.submitted=true;
    console.log("name: "+this.model.name);
    console.log("email: "+this.model.email);
    console.log("message: "+this.model.name);
  }

 
  
}
