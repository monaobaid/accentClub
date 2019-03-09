import { Component, OnInit ,NgModule } from '@angular/core';
import { MenuService } from '../services/menu.service';
import {Ireservation } from '../Iresevation';



@Component({
  selector: 'app-reservation-manage',
  templateUrl: './reservation-manage.component.html',
  styleUrls: ['./reservation-manage.component.css']
})
export class ReservationManageComponent implements OnInit {
  datares=[]
  delres=[]
  data :Ireservation
  email:string
  constructor(private reservation:MenuService) { }

  ngOnInit() {
  }
manage()
{  
  this.reservation.manageReservations(this.email).subscribe(data=>{
    this.datares=data
  })
  
}
delete(data) {
 
  this.reservation.delReservation(data.id).subscribe(()=>{
    alert("تم الحذف")
    this.manage()});
 
}
 
  update(data) {
    
    this.reservation.updateReservation(data).subscribe(()=>alert("تم تعديل")  )


}
}
