import {Component, OnInit} from '@angular/core';
import {IKonsumen, IKonsumenWrapper} from "../../interfaces/i-konsumen";
import {KonsumenService} from "../../services/konsumen.service";
import {faCircleCheck, faTrash} from "@fortawesome/free-solid-svg-icons";



@Component({
  selector: 'app-list-konsumen',
  templateUrl: './list-konsumen.component.html',
  styleUrls: ['./list-konsumen.component.css']
})
export class ListKonsumenComponent implements OnInit{

  icCircle = faCircleCheck
  icTrash = faTrash


  konsumens: Array<any> = []

  constructor(private konsumenService: KonsumenService) {
  }



  onAllKonsumen(): void {
    this.konsumenService.all().subscribe(
      (response: IKonsumenWrapper) => {
        let tempDate = response.data;
        this.konsumens = tempDate
        console.log(this.konsumens)
      }
    )
  }

  ngOnInit(): void {

    this.onAllKonsumen()
  }

}
