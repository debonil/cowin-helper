import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwUpdateCheckerService {

  constructor(private swUpdate: SwUpdate) {
    if (this.swUpdate.isEnabled) {
      interval(60 * 60 * 1000).subscribe(() => this.swUpdate.checkForUpdate()
        .then(() => console.log('checking for updates')));
      this.checkForUpdates();
    } else {
      console.warn('%cService worker not enabled!', 'font-weight: bold;color:red;font-size: xx-large;', 'PWA features will not work as expected.');
    }
  }

  public checkForUpdates(): void {
    this.swUpdate.available.subscribe(event => this.promptUser());
  }

  private promptUser(): void {
    console.log('updating to new version');
    if (confirm("New version available. Load New Version?")) {
      this.swUpdate.activateUpdate().then(() => document.location.reload());
    }
  }
}
