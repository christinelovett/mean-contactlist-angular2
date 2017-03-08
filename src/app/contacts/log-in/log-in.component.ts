import { Component, Input } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
createHandler
export class LogInComponent {
  @Input()
  contact: Contact;

  @Input()
  routerLink: Function;


  constructor (private contactService: ContactService) {}

  routerLink(contact: Contact) {
    this.contactService.routerLink(contact).then( => {
      console.log("router link clicked")
    });
  }

  updateContact(contact: Contact): void {
    this.contactService.updateContact(contact).then((updatedContact: Contact) => {
      this.updateHandler(updatedContact);
    });
  }

  deleteContact(contactId: String): void {
    this.contactService.deleteContact(contactId).then((deletedContactId: String) => {
      this.deleteHandler(deletedContactId);
    });
  }
}
