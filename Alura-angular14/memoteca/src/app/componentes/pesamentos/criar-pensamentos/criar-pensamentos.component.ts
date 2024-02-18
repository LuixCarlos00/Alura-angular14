import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentoComponent implements OnInit {
  
  constructor(private service:  PensamentoService , private router : Router) { }

  pensamento: Pensamento = {
     
    conteudo: ' ',
    autoria: ' ',
    modelo: 'modelo1'
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(()=>{
      this.router.navigate(['/listarPensamento']);
    })
    alert(' novo pensamento criado ')
    
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
    alert('foi cancelado  ')
  }

  


  ngOnInit(): void {
  }

}
