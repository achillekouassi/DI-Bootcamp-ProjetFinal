import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-index',
  templateUrl: './p-index.component.html',
  styleUrls: ['./p-index.component.css']
})
export class PIndexComponent implements OnInit {

  patientList: any[] = [];
  displayedPatients: any[] = [];
  limit: number = 5;
  offset: number = 0;
  searchTerm: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8011/patient/all').subscribe(
      data => {
        console.log(data);
        this.patientList = data;
        this.displayedPatients = this.patientList.slice(0, this.limit); // afficher les 5 premiers patients
      }
    );
  }

  afficherReste(): void {
    this.offset += this.limit;
    const remainingPatient = this.patientList.slice(this.offset, this.offset + this.limit);
    this.displayedPatients = this.displayedPatients.concat(remainingPatient);
  }

  search(): void {
    if (this.searchTerm.trim() === '') { // Si la recherche est vide, afficher les 5 premiers patients
      this.displayedPatients = this.patientList.slice(0, this.limit);
    } else {
      this.displayedPatients = this.patientList.filter(patient =>
        patient.nom.toLowerCase().includes(this.searchTerm.toLowerCase())
      ).slice(0, this.limit);
    }
    this.offset = 0; // Remettre l'offset à 0 pour la pagination
  }
}

