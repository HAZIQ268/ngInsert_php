import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http : HttpClient) { }

  xyz(data : any) {
    return this.http.post('http://localhost:3000/php_conn/index.php', data);
  }
}
