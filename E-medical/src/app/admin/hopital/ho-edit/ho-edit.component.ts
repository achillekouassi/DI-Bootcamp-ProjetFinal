import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AddhopitalService } from 'src/app/_services/addhopital.service';


@Component({
  selector: 'app-ho-edit',
  templateUrl: './ho-edit.component.html',
  styleUrls: ['./ho-edit.component.css']
})
export class HoEditComponent implements OnInit{


  id! :any
  hopital:any ;// Define the hopital property

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private serviceHopital : AddhopitalService

  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      console.log(params['id']);
      this.http.get("http://localhost:8011/hospital/one/"+params['id'])
            .subscribe((res:any) => { console.log(res);
             this.hopital = res});

    });


  }

EditHopital(){
  this.id = this.route.snapshot.params['id']
  this.serviceHopital.updateHopital(this.id).subscribe(
    (data:any)=>{
      this.hopital = data.data;
    }
  )
}

}
