import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ThemeTogglerComponentComponent} from "./theme-toggler-component/theme-toggler-component.component";
import {HeaderComponent} from "./header/header.component";
import {CarouselComponent} from "./carousel/carousel.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThemeTogglerComponentComponent, HeaderComponent, CarouselComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-world';
}
