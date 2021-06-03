import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent {

  menuItems = [
    { label: 'Availability', url: '/avl', icon: 'event_available' },
    { label: 'Districts', url: '/districts', icon: 'maps_home_work' },
    { label: 'States', url: '/states', icon: 'map' },
    { label: 'Auto Check', url: '/auto-check', icon: 'published_with_changes' },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

}
