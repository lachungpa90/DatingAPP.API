import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;
  constructor(private http: HttpClient) { }
  ngOnInit()
  {
    this.getUsers();
  }
  getUsers()
  {
    this.http.get('http://localhost:5000/WeatherForecast').subscribe(response => {
      this.users = response
    }, error =>
      {
        console.log(error)
    });
  }
}
