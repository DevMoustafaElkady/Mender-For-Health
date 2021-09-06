import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialatis',
  templateUrl: './specialatis.component.html',
  styleUrls: ['./specialatis.component.scss']
})
export class SpecialatisComponent implements OnInit {

specialaties: any[] = [
    {
      id: 1,
      name: "Dermatology",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      id: 2,
      name: "Teeth",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      id: 3,
      name: "Teeth",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      id: 4,
      name: "Teeth",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
