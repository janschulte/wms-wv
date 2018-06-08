import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelgolandCachingModule } from '@helgoland/caching';
import { HelgolandCoreModule } from '@helgoland/core';
import { GeoSearch, HelgolandMapModule, NominatimGeoSearchService } from '@helgoland/map';
import { HelgolandMapViewModule } from '@helgoland/map/view';

import { AppComponent, GetValuesPipe } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    GetValuesPipe
  ],
  imports: [
    BrowserModule,
    HelgolandCoreModule,
    HelgolandMapModule,
    HelgolandMapViewModule,
    HelgolandCachingModule
  ],
  providers: [
    {
      provide: GeoSearch,
      useClass: NominatimGeoSearchService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
