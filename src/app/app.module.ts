﻿import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 
import { AppRoutingModule } from './app-routing.module';

import { ServiceInterceptor } from './service.interceptor';
import { SearchService } from './search.service';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';;
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        ResultComponent,
        NavBarComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        NgbModule
    ],
    providers: [
        SearchService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ServiceInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
