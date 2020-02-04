import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  cName: string;
  cMail: string;
  cContent: string;

  constructor(
  private contactS: ContactService,
  ) { }

  ngOnInit() {
  }

  sendContact() {
    const data = {
      cName: this.cName,
      cMail: this.cMail,
      cContent: this.cContent
    };
    this.contactS.submit(data);
  }

}
