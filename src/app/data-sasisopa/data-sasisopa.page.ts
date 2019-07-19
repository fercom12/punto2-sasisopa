import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-sasisopa',
  templateUrl: './data-sasisopa.page.html',
  styleUrls: ['./data-sasisopa.page.scss'],
})
export class DataSASISOPAPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['./home'])
  }
  goRiesgos(){
    this.router.navigate(['./formularioii'])
  }

}
