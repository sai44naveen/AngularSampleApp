import { CoursesService } from './courses.service';
import { Component } from '@angular/core';


@Component({
    selector: 'courses',
    template: `
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
    `
})
export class CoursesComponent {
        email ="sai@example.com";
    onKeyUp(){
         console.log(this.email);
    }
    }
