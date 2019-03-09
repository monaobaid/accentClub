import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Ireservation } from '../Iresevation';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-resevation',
  templateUrl: './resevation.component.html',
  styleUrls: ['./resevation.component.css']
})
export class ResevationComponent implements OnInit {
  typeOfreservation=this.reservation.typeOfreservation
  newRes : Ireservation
  addObj ={}
  datares =[]
  dates :Ireservation
  submitted = false;
  isdate=false
  fristDate :string
  numOfday:number 
  submit=false
  total=0
  Price=0

  
  constructor(private reservation:MenuService) { }
  addForm : FormGroup=new FormGroup({
    name:new FormControl(null,Validators.required),
    email:new FormControl(null,[Validators.required,Validators.email]),
    fristDate:new FormControl("",Validators.required),
    numOfday:new FormControl(null,Validators.required),
    fristTime:new FormControl(null,Validators.required),
    numOfhour:new FormControl(null,Validators.required),
    typeOfreservation:new FormControl(null,Validators.required),
  
    numOfpeoples:new FormControl(null,Validators.required)

   } )

  ngOnInit() {
    
    this.reservation.getReservation().subscribe(data=>{
    console.log(data ,"data") }) 
    //this.datares=data

    }
    
//--- add new reservation ----

    get f() { return this.addForm.controls; }

    onSubmit() {
      this.newRes ={
        name:this.addForm.controls.name.value,
        email:this.addForm.controls.email.value,
        fristDate:this.addForm.controls.fristDate.value,
        numOfday:this.addForm.controls.numOfday.value,
        fristTime:this.addForm.controls.fristTime.value,
        numOfhour:this.addForm.controls.numOfhour.value,
        typeOfreservation:this.addForm.controls.typeOfreservation.value,
        numOfpeoples:this.addForm.controls.numOfpeoples.value
        } as Ireservation
      // //-------- check the reservation date ----------
        
      //   this.reservation.dateReservation(this.fristDate).subscribe(data=>{
      //     this.dates=data})
         
      //   if( this.dates.fristDate !==this.fristDate )  
      //    { 
     
          this.reservation.addNew(this.newRes).subscribe(data=>this.addObj=data )//,error=>console.log(error))
          console.log(this.addObj)
        alert('تم الحفظ')
        this.addForm.reset()
        this.addForm
     this.total=0
      //else {
      // alert('  نأسف اليوم محجوز ' )
      // console.log(this.dates)
      // }
      //    //json}//
      }
      reserv()
      {
        
        this.total=this.Price*this.addForm.controls.numOfpeoples.value* this.addForm.controls.numOfhour.value *this.addForm.controls.numOfday.value
        console.log(this.total)
      }



      getPrice(price)
      {
        this.Price=price
        console.log(this.Price)
      }
  }

