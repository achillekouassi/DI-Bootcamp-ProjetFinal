import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ho-index',
  templateUrl: './ho-index.component.html',
  styleUrls: ['./ho-index.component.css']
})
export class HoIndexComponent implements OnInit {

  hopitalList: any[] = [];
  displayedHopitaux: any[] = [];
  limit: number = 5;
  offset: number = 0;
  // filterHopital: any;
  searchTerm: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8011/hospital/all').subscribe(

      data => {
        // this.filterHopital = data;
        console.log(data);
        this.hopitalList = data;
        this.displayedHopitaux = this.hopitalList.slice(0, this.limit);

        // this.hopitalList.forEach((a:any) => {
        //   if(a.specialite ==="Achille kouassi" || a.specialite ==="Achille kouassi"){
        //     a.specialite ="Achille kouassi"
        //   }
        //   Object.assign(a,{quantity:1,total:a.price});
        // });
        // afficher les 5 premiers hopitaux
      }
    );
  }

  afficherReste(): void {
    this.offset += this.limit;
    const remainingHopitaux = this.hopitalList.slice(this.offset, this.offset + this.limit);
    this.displayedHopitaux = this.displayedHopitaux.concat(remainingHopitaux);
  }

  search(): void {
    if (this.searchTerm.trim() === '') { // Si la recherche est vide, afficher les 5 premiers hôpitaux
      this.displayedHopitaux = this.hopitalList.slice(0, this.limit);
    } else {
      this.displayedHopitaux = this.hopitalList.filter(hopital =>
        hopital.nom.toLowerCase().includes(this.searchTerm.toLowerCase())
      ).slice(0, this.limit);
    }
    this.offset = 0; // Remettre l'offset à 0 pour la pagination
  }

  // filter(specialite:string){
  //   this.filterHopital = this.hopitalList
  //   .filter((a:any)=>{
  //     if(a.hopital == specialite || specialite==''){
  //       return a;
  //     }
  //   })
  // }
}
