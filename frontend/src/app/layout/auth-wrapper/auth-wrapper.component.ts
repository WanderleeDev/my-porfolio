import { ChangeDetectionStrategy, Component } from "@angular/core";
import { NavDesktopControlComponent } from "../../modules/navbarDesktop/components/navDesktopControl/navDesktopControl.component";
import { LoaderComponent } from "../../shared/components/loader/loader.component";
import { UbuntuLogoComponent } from "../../shared/components/ubuntu-logo/ubuntu-logo.component";
import { ClockComponent } from "../../modules";

@Component({
  selector: "app-auth-wrapper",
  standalone: true,
  imports: [
    UbuntuLogoComponent,
    NavDesktopControlComponent,
    LoaderComponent,
    ClockComponent,
  ],
  templateUrl: "./auth-wrapper.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthWrapperComponent {}
