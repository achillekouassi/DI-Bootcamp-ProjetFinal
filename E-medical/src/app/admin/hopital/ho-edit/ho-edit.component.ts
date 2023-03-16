import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ho-edit',
  templateUrl: './ho-edit.component.html',
  styleUrls: ['./ho-edit.component.css']
})
export class HoEditComponent implements OnInit{

  hopital: any = {
    id: '',
    nom: '',
    adresse: '',
    commune: '',
    telephone: '',
    id_administrateur: '',
  }

  constructor(
    private activited: ActivatedRoute,
    private http: HttpClient
  ){}

  ngOnInit(): void {
    let hid = this.activited.snapshot.paramMap.get('hid');
    if (hid !== null) {
      console.log(hid);
      this.http.get<any>('http://localhost:8011/hospital/' + hid).subscribe(
        data => {
          console.log(data);
          this.hopital = data;
          console.log('Information de l\'hôpital:', this.hopital);
        },
        error => console.log(error)
      );
    }
  }


  onSubmit(): void {
    this.http.put('http://localhost:8011/hospital/update', this.hopital).subscribe(
      () => console.log('Hopital modifié avec succès'),
      error => console.log(error)
    )
  }

}
