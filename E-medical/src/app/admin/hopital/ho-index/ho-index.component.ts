import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ho-index',
  templateUrl: './ho-index.component.html',
  styleUrls: ['./ho-index.component.css']
})


export class HoIndexComponent implements OnInit{

  hopitalList: any[] = []

  constructor(private http: HttpClient) {}



  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8011/hospital/all').subscribe(
      data => {
        console.log(data)
        this.hopitalList = data
      }
    )
  }
}


