import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstapp';
  data: any[]= [];


  constructor(private http: HttpClient) {} //para consumir apis

  ngOnInit(): void {  // carga el componente por primera vez
    this.http.get('https://api.spacexdata.com/v5/launches/latest')
    .subscribe((data: any) => {
      this.data = data;
    })
  }
}
