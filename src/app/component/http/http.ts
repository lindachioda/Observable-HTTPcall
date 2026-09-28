import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Servicehttp } from '../../service/servicehttp';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-http',
  imports: [CommonModule],
  templateUrl: './http.html',
  styleUrl: './http.scss',
})
export class Http implements OnInit{

  people:any[] = []
    
  constructor (private serviceHttp:Servicehttp, private cdr: ChangeDetectorRef){}

  ngOnInit():void {
    this.serviceHttp.inserisciPersone()
    .subscribe ((people) =>{
      this.people = people
      console.log(this.people)

      this.cdr.detectChanges();
    })
  }
}
