import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-peligrosyriesgos',
  templateUrl: './peligrosyriesgos.page.html',
  styleUrls: ['./peligrosyriesgos.page.scss'],
})
export class PeligrosyriesgosPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['./sistema'])
  }
}
