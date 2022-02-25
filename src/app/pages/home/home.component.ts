import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home-service.service';
import { InvestmentListData } from 'src/app/interfaces/investiment-list';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private destroy: Subject<boolean> = new Subject<boolean>();

  public investiments: InvestmentListData[] = [];
  public isLoading = true;

  constructor(
    public homeService: HomeService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getInvestmentsList();
  }

  getInvestmentsList() {
    this.homeService.getInvestmentsList().pipe(takeUntil(this.destroy)).subscribe(
      response => {
        this.investiments = response.response.data.listaInvestimentos;

        this.isLoading = false;
      }
    );
  }

  selecInvestiment(investiment: InvestmentListData) {
    this.router.navigate(['personalized-rescue', {name: investiment.nome}]);
  }

}
