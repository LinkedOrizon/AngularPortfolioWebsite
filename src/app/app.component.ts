import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home/home.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { AboutComponent } from "./about/about.component";
import { ProjectsComponent } from "./projects/projects.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, HomeComponent, NavigationComponent, AboutComponent, ProjectsComponent]
})
export class AppComponent {
  title = 'AngularPortfolioWebsite';
}
