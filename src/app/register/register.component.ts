import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers : [UserdataService]
})
export class RegisterComponent {

  userdata = {
    name : '',
    email : '',
    password : '',
    image : ''
  }

  constructor(private service : UserdataService) { }

  abc() {

  }
}
