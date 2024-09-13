import { Component } from '@angular/core';
import { NodeAPIService } from '../../services/node-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

  apiResponse: any;

  constructor(private API: NodeAPIService) { }

  ngOnInit() {
    this.API.helloWorld().then((response: any) => {
      this.apiResponse = response.message;
    });
  }

}
