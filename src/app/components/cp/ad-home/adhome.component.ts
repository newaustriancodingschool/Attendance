import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { FunctionsService } from '../../../_services/_functions/functions.service';

@Component({
  selector: 'app-adhome',
  templateUrl: './adhome.component.html',
  styleUrls: ['./adhome.component.css']
})
export class AdhomeComponent implements OnInit {

  constructor(private AR: ActivatedRoute, public funs: FunctionsService) { }

  ngOnInit() {
    this.funs.pageTitle( this.AR ); // Change page tab title
  }

}
