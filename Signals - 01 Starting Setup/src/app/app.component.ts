import { Component } from '@angular/core';


import { SignalsComponent } from './Signals/signals.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [ SignalsComponent]
})
export class AppComponent {}
