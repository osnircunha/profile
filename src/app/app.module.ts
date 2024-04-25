import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from "./app.component";
import {ExperienceAreaComponent} from "./experience-area/experience-area.component";
import {BrowserModule} from "@angular/platform-browser";
import {ResumeComponent} from "./resume/resume.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InfoAreaComponent} from "./info-area/info-area.component";

@NgModule(
  {
    declarations: [AppComponent, ExperienceAreaComponent, ResumeComponent, InfoAreaComponent],
    imports: [
      CommonModule,
      BrowserModule,
      BrowserAnimationsModule
    ],
    bootstrap: [AppComponent]
  }
)

export class AppModule {
}
