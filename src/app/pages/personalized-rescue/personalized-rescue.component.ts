import { Subject, takeUntil } from 'rxjs';
import { HomeService } from './../../services/home-service.service';
import { InvestmentListData, AcoesList } from './../../interfaces/investiment-list';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-personalized-rescue',
  templateUrl: './personalized-rescue.component.html',
  styleUrls: ['./personalized-rescue.component.scss'],
  providers: [ConfirmationService]
})
export class PersonalizedRescueComponent implements OnInit {
  private destroy: Subject<boolean> = new Subject<boolean>();

  public loading: boolean = true;
  public message: boolean = false;
  public investimentName: string = '';
  public investiment: InvestmentListData = {} as InvestmentListData;
  public rescueValue: number[] = [];
  public clonedProducts: { [s: string]: AcoesList; } = {};
  msgs: Message[] = [];

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public homeService: HomeService,
    public messageService: MessageService,
    public confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.investimentName = params['name'];

      this.getInvestmentsList();
    });
  }

  getInvestmentsList() {
    this.homeService.getInvestmentsList().pipe(takeUntil(this.destroy)).subscribe(
      response => {
        this.investiment = response.response.data.listaInvestimentos
          .find(item => item.nome === this.investimentName) as InvestmentListData;

        this.loading = false;
      }
    );
  }

  onRowEditInit(acao: AcoesList) {
    this.clonedProducts[acao.id] = {...acao};
  }

  onRowEditSave(acao: AcoesList) {
    if (acao.valorResgatado as number > 0) {
      delete this.clonedProducts[acao.id];
      this.messageService.add({severity:'success', summary: 'Success', detail:'Product is updated'});
    }
    else {
        this.messageService.add({severity:'error', summary: 'Error', detail:'Invalid Price'});
    }
  }

  onRowEditCancel(acao: AcoesList, index: number) {
      return this.investiment.acoes[index] = this.clonedProducts[acao.id];
  }

  setMessage(valueInput: number, percentualValue: number) {
    const media = (this.investiment.saldoTotal * percentualValue) / 100
    this.message = valueInput > media ? true : false
  }

  confirm() {
    this.confirmationService.confirm({
        message: 'Deseja efetuar um novo resgate',
        header: 'Resgate efetuado com sucesso',
        accept: () => { },
        reject: () => {
            this.router.navigate(['/']);
        }
    });
}
}
