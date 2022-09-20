import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name: string | undefined;
  email: string | undefined;
  message: string | undefined;
  endpoint = "https://andrea-boehme.developerakademie.net/portfolio/send_mail.php";
  submitReport = '';
  submitComplete = false;


  constructor(private http: HttpClient) { }


  ngOnInit(): void {
  }

  /**
   * send the form when it has been filled in
   *
   * @param myForm - form content
   */
  onSubmit(myForm: NgForm) {
    if (myForm.valid) {
      this.sendForm(myForm);
    }
    
  }


  /**
   * send the form content
   *
   * @param form - form content
   */
  sendForm(form: any) {
    console.log(form);
    this.name = '';
    this.email = '';
    this.message = '';
    
  }


  /**
   * show text on successful send
   *
   * @param response - send response
   * @param form - form content
   */
  handleResponse(response: any, form: any) {
    console.log(response);
    this.submitReport = "Thank you for your message! I will contact you very soon!";
    this.submitComplete = true;
    form.reset();
  }


  /**
   * show text on unsuccessful send
   *
   * @param error - send error
   * @param form - form content
   */
  handleError(error: any, form: any) {
    console.log(error);
    this.submitReport = "Error occured while sending your message.. Please contact me sending an email to: andrea.bohme@gmail.com";
    this.submitComplete = true;
    form.reset();
  }


  /**
   * closing the reportBox
   */
  closeConfirmation() {
    this.submitComplete = false;
    this.submitReport = '';

  }
}
/*
  name: string | undefined;
  email: string | undefined;
  message: string | undefined;

  public contact: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ], []),
    email: new FormControl('', [
      Validators.required
    ], []),
    message: new FormControl('', [
      Validators.required
    ], []),

  });


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
      this.name = '';
      this.email = '';
      this.message = '';
}
  
}
*/