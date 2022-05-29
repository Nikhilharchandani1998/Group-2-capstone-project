import { Component, OnInit } from '@angular/core';
import { TravelAppService } from '../services/travel-app.service';

@Component({
  selector: 'app-otp-for-unblocking',
  templateUrl: './otp-for-unblocking.component.html',
  styleUrls: ['./otp-for-unblocking.component.scss']
})
export class OtpForUnblockingComponent implements OnInit {
  public travelAppArticlesSource1: any = null;

  constructor(
    private travelAppService: TravelAppService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.travelAppService.getData('Articles Source 1').subscribe(data => this.travelAppArticlesSource1 = data);
  }
}
