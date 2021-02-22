import { Component, OnInit } from '@angular/core';
import { AppService} from '../../servicios/app.service'

@Component({
  selector: 'app-panelgeneral',
  templateUrl: './panelgeneral.component.html',
  styleUrls: ['./panelgeneral.component.css']
})
export class PanelgeneralComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    // console.log(this.appService.metadata.value)
  }

}
