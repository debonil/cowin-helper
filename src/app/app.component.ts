import { Component } from '@angular/core';
import { SwUpdateCheckerService } from './services/sw-update-checker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private updateChecker: SwUpdateCheckerService) {
    this.updateChecker.checkForUpdates();
  }
}
