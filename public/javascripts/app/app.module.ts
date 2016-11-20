/**
 * Created by chanhyeong on 2016-11-03.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {CircleService} from "./circle.service";
import {CircleDistanceComponent} from "./circle-distance.component";
import {CircleIntersectComponent} from "./circle-intersect.component";

@NgModule({
    imports: [ BrowserModule,FormsModule ],
    declarations: [ AppComponent, CircleDistanceComponent, CircleIntersectComponent ],
    bootstrap: [ AppComponent ],
    providers: [ CircleService ]
})
export class AppModule { }