import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodadpeComponent } from './componentes/rodadpe/rodadpe.component';
import { CriarPensamentoComponent } from './componentes/pesamentos/criar-pensamentos/criar-pensamentos.component';
import { FormsModule } from '@angular/forms';
import { ListarPensamentoComponent  } from './componentes/pesamentos/listar-pensamentos/listar-pensamentos.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PensamentoComponent } from './componentes/pesamentos/pensamento/pensamento.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirPensamentosComponent } from './componentes/pesamentos/excluir-pensamentos/excluir-pensamentos.component';
import { EditarPensamentoComponent } from './componentes/pesamentos/editar-pensamento/editar-pensamento.component';

 

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodadpeComponent,
    CriarPensamentoComponent,
    ListarPensamentoComponent,
    PensamentoComponent,
    ExcluirPensamentosComponent,
    EditarPensamentoComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule ,
    HttpClientModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
