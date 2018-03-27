import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-alert-info',
  templateUrl: './alert-info.component.html',
  styleUrls: ['./alert-info.component.css']
})
export class AlertInfoComponent implements OnDestroy {
  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertService) {
    this.subscription = alertService.getMessage().subscribe(message => { this.message = message; });
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

}
