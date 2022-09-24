import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
})
export class TabelaComponent  {
 @Input() dados: Array<{ id: number, nome: string }> null = null;
}

<table>
     <tr *ngFor="let dadosLinha of dados">
     <td>{{dadosLinha.id}}</td>
     <td>{{dadosLinha.nome}}</td>
     </tr>
</table>
