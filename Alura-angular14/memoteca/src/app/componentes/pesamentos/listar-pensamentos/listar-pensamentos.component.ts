import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos_PAI : Pensamento[] = [];
  
  constructor(private service : PensamentoService) { }

  ngOnInit(): void {
    this.service.lista().subscribe((listaPensamentosSubscribe) => {
      this.listaPensamentos_PAI = listaPensamentosSubscribe
    })

  }




}
