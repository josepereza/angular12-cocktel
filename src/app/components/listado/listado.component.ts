import { Component, OnInit } from '@angular/core';
import { CocktelService } from 'src/app/services/cocktel.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
cocktels:string[]=[]
  constructor(private cocktelService:CocktelService) { }

  ngOnInit(): void {
    this.cocktelService.getAll().subscribe((data:any)=>{
     // this.cocktels=data.data.memes;
      console.log('mis cockterls ',data)
    })
  }

}
