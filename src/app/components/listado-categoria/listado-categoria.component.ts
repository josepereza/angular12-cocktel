import { Component, OnInit } from '@angular/core';
import { CocktelService } from 'src/app/services/cocktel.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap,map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado-categoria',
  templateUrl: './listado-categoria.component.html',
  styleUrls: ['./listado-categoria.component.css']
})
export class ListadoCategoriaComponent implements OnInit {
categoria!:any
  constructor(private cocktelService:CocktelService,private route: ActivatedRoute,
    private router: Router, ) { }

  ngOnInit(): void {
    // this.route.params
    // .pipe(
    //   switchMap(({categoria}) => this.cocktelService.getListadoCategoria(categoria))
    //   )
    // .subscribe((data:any)=>this.categoria=data.drinks)

  this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>this.cocktelService.getListadoCategoria(params.get('categoria'))
     
      ),map((data:any)=>data.drinks)
      ).subscribe(data=>this.categoria=data)
  }
 
   verDetail(id:any){
     this.router.navigate(['detalle', id])
   }
 
}


 