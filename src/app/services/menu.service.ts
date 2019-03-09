import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams, HttpHeaders } from '@angular/common/http';
import {Ireservation} from '../Iresevation'
import { Observable, of } from 'rxjs';
import { EmailValidator } from '@angular/forms';
import { EventManagerPlugin } from '@angular/platform-browser/src/dom/events/event_manager';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
foodMenuType=[{id:1,type:'مشروبات ساخنه'},
{id:2,type:'مشروبات باردة'},
{id:3,type:'حلويات'}]
typeOfreservation=[{type:"دورة تدريبية ", price:20},
{type:"لقاء ثقافي/", price:15},
{type:"حفل تخرج", price:20},
{type:"أخرى", price:15}]
foodMenu=[
    {id:1, dtype:'  قهوة  Coffee' , price:8 },
    {id:1, dtype:' شكولاتة ساخنة  Hot Chocolate', price:8 },
    {id:1, dtype:' كابتشينو Cappuccino ' , price:10 },
    {id:1, dtype:' نسكافيه  Nescafe' , price:10},
    {id:1, dtype:' حليب ساخن  Hot Milk ' , price:8  },
    {id:1, dtype:' شاي   Tea' , price:6},
    {id:2, dtype:' عصير برتقال  Orange juice' , price:7 },
    {id:2, dtype:' عصير ليمون  Lemon juice ' , price:7 },
    {id:2, dtype:' عصير مانخو  Mango juice' , price:7},
    {id:2, dtype:' مشروبات غازية Soft drink', price:5},
    {id:3, dtype:' تشيزكيك  Cheese cake' , price:15 },
    {id:3, dtype:' كيك الفراولة  Strawberry cake' , price:10},
    {id:3, dtype:' كيك الشكولاتة  Chocolate cake', price:10},
  ]
  resData=[]
  url="http://localhost:3000/jsdbReservation"
  constructor(private http:HttpClient) { }

  getReservation():Observable<Ireservation[]>{
 return this.http.get<Ireservation[]>(this.url)
  }

  addNew(obj:Ireservation):Observable<Ireservation>{
  console.log(obj ,"obj")
    return this.http.post<Ireservation >(this.url,obj)

  }


manageReservations(email :string): Observable<Ireservation[]>
{
  let httpParams=new HttpParams().set('email',email)
  console.log(httpParams.toString())
  return this.http.get<Ireservation[]>(this.url,{params:httpParams})

}
dateReservation(date :string)
{
  let httpParams=new HttpParams().set('fristDate',date)
  console.log(httpParams.toString())
  
  return this.http.get<Ireservation>(this.url,{params:httpParams})

}
  delReservation (id:number): Observable<Ireservation> {
    
    return this.http.delete<Ireservation>(`${this.url}/${id}`)
      

}
updateReservation(data:Ireservation):Observable<Ireservation>{

return this.http.put<Ireservation>(`${this.url}/${data.id}`, data)

}
}
