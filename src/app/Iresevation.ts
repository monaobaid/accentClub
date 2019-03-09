import { Time } from '@angular/common';

export interface Ireservation{
    id :number,
    name: string,
    email: string,
    fristDate: string,
    numOfday:number,
    fristTime: Time,
    numOfhour: number,
    typeOfreservation: string,
    numOfpeoples: number
  }
