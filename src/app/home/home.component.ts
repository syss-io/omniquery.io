import { Component, ElementRef, ViewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  @ViewChild("footer") footer?: ElementRef;
  @ViewChild("header") header?: ElementRef;

  get height(): string {
    if (!this.footer || !this.header) {
      return "0px";
    }

    const height =
      this.footer.nativeElement.offsetHeight +
      this.header.nativeElement.offsetHeight;
      
    return `calc(100vh - ${height}px)`;
  }
}
