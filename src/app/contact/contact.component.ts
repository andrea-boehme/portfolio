import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  
  submitMessage = '';
  submitStatus = false;

  constructor() { }


  ngOnInit(): void {
  }

  async sendContact() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('email', emailField.value);
    formData.append('message', messageField.value);

    await fetch('https://andrea-boehme.developerakademie.net/portfolio/send_mail.php',
    {
      method: 'POST',
      body: formData
    }
    );
    
    this.submitMessage = "Your message has been successfully sent. I will contact you very soon!";
    this.submitStatus = true;

    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }

  closeConfirmation() {
    this.submitStatus = false;
    this.submitMessage = '';
  }
}
