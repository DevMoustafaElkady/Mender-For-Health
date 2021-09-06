import { Doctors } from './../doctors';
import { Component, OnInit } from '@angular/core';
import doctors from './../../_files/doctors.json';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  doctorsList: {id: number, name: string, spec: string, address: string, phone: string}[] = doctors;
  Doctorsss: Doctors[];
  searchValue: string; 
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('../../_files/doctors.json').subscribe((result: Doctors[])=> {
      this.Doctorsss = result;
    })
  }

}
