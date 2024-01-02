import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.css']
})
export class HotelBookingComponent {
  hotelBookingForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.hotelBookingForm = this.formBuilder.group({
      roomType: ['', Validators.required],
      numberOfRooms: ['', Validators.required],
      numberOfPersons: ['', Validators.required],
      numberOfChildren: [''],
      restaurantFacilities: ['']
    });
  }

  calculateTotalCost(): string {
    // Logic to calculate total cost based on form inputs
    // For demonstration purposes, let's assume a simple calculation
    const roomsControl = this.hotelBookingForm.get('numberOfRooms');
    const personsControl = this.hotelBookingForm.get('numberOfPersons');
    const childrenControl = this.hotelBookingForm.get('numberOfChildren');

    const rooms = roomsControl ? roomsControl.value || 0 : 0;
    const persons = personsControl ? personsControl.value || 0 : 0;
    const children = childrenControl ? childrenControl.value || 0 : 0;

    const totalRoomsCost = 100 * rooms; // Cost per room
    const totalPersonsCost = 50 * persons; // Cost per person
    const totalChildrenCost = 25 * children; // Cost per child

    const totalCost = totalRoomsCost + totalPersonsCost + totalChildrenCost;
    return `$${totalCost}`;
  }

  submitForm() {
    if (this.hotelBookingForm.valid) {
      // Handle form submission logic here
      console.log('Form submitted!', this.hotelBookingForm.value);
    } else {
      // Highlight invalid fields, display errors, etc.
      this.markFormGroupTouched(this.hotelBookingForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
