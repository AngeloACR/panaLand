import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service'
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  cName: string;
  cMail: string;
  cContent: string;
  contactForm: FormGroup;

  constructor(
    private contactS: ContactService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      cName: new FormControl(''),
      cMail: new FormControl(''),
      cContent: new FormControl(''),
    });
  }

  sendContact() {
    const data = this.contactForm.value;
    this.contactS.submit(data);
  }

}
