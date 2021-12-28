import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { HighlightModule, HIGHLIGHT_OPTIONS, HighlightOptions } from "ngx-highlightjs";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopicsComponent } from './topics/topics.component';
import { TopicSearchPipe } from './topic-search.pipe';

@NgModule({
  declarations: [AppComponent, SearchBarComponent, TopicsComponent, TopicSearchPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    HighlightModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          javascript: () => import('highlight.js/lib/languages/javascript'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml')
        }
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
