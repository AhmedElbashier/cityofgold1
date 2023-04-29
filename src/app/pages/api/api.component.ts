import { ConfirmationService, MessageService } from 'primeng/api';
import { MainService, Result } from './../../services/main.service';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent {

  constructor(
    private mainService: MainService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  results!: Result[];

   ngOnInit()
  {
     this.getData();
  }
  async getData()
  {
    this.mainService.getResults().subscribe(
      (res) =>
      {
        this.results = res,
        console.log(this.results)
      },
      (error) =>
      {
        console.log(error);
      }
    )
  }
}
