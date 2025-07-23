import { Component } from "@angular/core";
import { ContactCustomerComponent } from "./contact-customer/contact-customer"; // adjust the path as needed

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ContactCustomerComponent],
  templateUrl: "./app.html",
  styleUrls: ["./app.less"], // fixed typo: was `styleUrl` instead of `styleUrls`
})
export class App {}