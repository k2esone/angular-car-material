import {Component} from '@angular/core';
import {Car, CAR_FORM_DEFAULT_VALUES, CarManufacturer} from "../model/car";
import {CarService} from "../car-service/car.service";

@Component({
  selector: 'app-page-car-form',
  templateUrl: './page-car-form.component.html',
  styleUrls: ['./page-car-form.component.css']
})
export class PageCarFormComponent {
  carModel: Car;

  constructor(private carService: CarService) {
    this.carModel = Object.assign({}, CAR_FORM_DEFAULT_VALUES);
  }

  getAllCarManufacturers(): string[] {
    return Object.values(CarManufacturer)
  }

  clear() {
    this.carModel = Object.assign({}, CAR_FORM_DEFAULT_VALUES);
  }

  submit() {
    this.carService.addCar(this.carModel);
    this.clear();
  }
}
