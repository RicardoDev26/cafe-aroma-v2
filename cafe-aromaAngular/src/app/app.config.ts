import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideEntityData, DefaultDataServiceConfig, withEffects, HttpUrlGenerator } from '@ngrx/data';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { entityConfig } from './entity-metadata';
import { environment } from '../environments/environment';
import { DefaultHttpUrlGenerator, HttpResourceUrls, normalizeRoot, Pluralizer } from '@ngrx/data';
import { Injectable } from '@angular/core';


@Injectable()
export class AppHttpUrlGenerator extends DefaultHttpUrlGenerator {

  private apiRoot = environment.apiUrl;

  constructor(private pluralize: Pluralizer) {
      super(pluralize);
  }

  public override getResourceUrls(entityName: string, root?: string): HttpResourceUrls {

      let resourceUrls = this.knownHttpResourceUrls[entityName]
      if (!resourceUrls) {
          const nRoot = normalizeRoot(this.apiRoot)

          const baseUrl = `${nRoot}/${this.pluralize.pluralize(entityName)}`.toLowerCase()

          resourceUrls = {
              entityResourceUrl: baseUrl,
              collectionResourceUrl: baseUrl,
          };
          this.registerHttpResourceUrls({ [entityName]: resourceUrls })
      }
      return resourceUrls
  }
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    provideStore(),
    provideEffects([]),
    provideEntityData(entityConfig, withEffects()),
    {
      provide: HttpUrlGenerator,
      useClass: AppHttpUrlGenerator,
    }
  ]
};
