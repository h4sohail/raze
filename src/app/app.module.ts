import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {ResultComponent} from './result/result.component';
import {NavBarComponent} from './app-shell/nav-bar/nav-bar.component';
import {FooterComponent} from './app-shell/footer/footer.component';
import {ServiceInterceptor} from './service.interceptor';

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
        AppRoutingModule
    ],
    providers: [
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
