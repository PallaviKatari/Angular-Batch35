import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
})
export class CareerComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
  //*ngFor and *ngSwitch
  CourseDetails = [
    {
      CourseName: 'Dotnet',
      CourseDescription: 'Dotnet Full Stack - .NET MVC,.NET CORE,SQL SERVER',
      Status: 'Active',
      img: 'https://th.bing.com/th/id/OIP._w4kEUAb7-YMEOc46aFcWQHaHD?w=171&h=180&c=7&r=0&o=5&dpr=1.56&pid=1.7',
    },
    {
      CourseName: 'Java',
      CourseDescription: 'Dotnet Full Stack - .NET MVC,.NET CORE,SQL SERVER',
      Status: 'InActive',
      img: 'https://th.bing.com/th/id/R.4f3b37b37b55aed0c11c64cc915cf0b7?rik=jkCsmuSEw1YE2Q&riu=http%3a%2f%2fzeptosystems.com%2fwp-content%2fuploads%2f2018%2f10%2fjava-1.jpg&ehk=HovaxzZAqHPCIjSELmwew9GO%2b5dvz2XtBgAezfMtUzA%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      CourseName: 'Python',
      CourseDescription: 'Dotnet Full Stack - .NET MVC,.NET CORE,SQL SERVER',
      Status: 'Active',
      img: 'https://tse1.mm.bing.net/th/id/OIP.CbL7Xeq2c29sTx9d-HTbXAHaHa?pid=ImgDet&rs=1',
    },
    {
      CourseName: 'PHP',
      CourseDescription: 'Dotnet Full Stack - .NET MVC,.NET CORE,SQL SERVER',
      Status: 'InActive',
      img: 'https://th.bing.com/th/id/R.204799a51cef12c61b314273bce403e4?rik=xuSjfbue9in07g&riu=http%3a%2f%2fassets.prestashop2.com%2fsites%2fdefault%2ffiles%2fstyles%2fblog_750x320%2fpublic%2fblog%2fen%2ffiles%2f2013%2f06%2fphp-logo_23.jpeg%3fitok%3dK4UTCWej&ehk=dqVEaASf95TviAGsfGALP4W6kUsc0VyjgRMiGrpiv%2bk%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      CourseName: 'Testing',
      CourseDescription: 'Dotnet Full Stack - .NET MVC,.NET CORE,SQL SERVER',
      Status: 'InActive',
      img: 'https://tse3.mm.bing.net/th/id/OIP.w-OJMa7KWZ-Rm14KDClBsAHaEc?pid=ImgDet&rs=1',
    },
  ];
}
