import { Component, OnInit } from '@angular/core';
import { TraineesService } from 'src/Services/trainees.service';
import { Trainee } from 'src/Models/trainees';
@Component({
  selector: 'app-traineedetails',
  templateUrl: './traineedetails.component.html',
  styleUrls: ['./traineedetails.component.css']
})
export class TraineedetailsComponent implements OnInit {

  trainees: Trainee[] = [];

  constructor(private traineeservice: TraineesService) {}

  ngOnInit() {
      const traineesObservable = this.traineeservice.getTrainees();
      traineesObservable.subscribe((traineesData: Trainee[]) => {
          this.trainees = traineesData;
          console.log(this.trainees);
      });
  }


}
