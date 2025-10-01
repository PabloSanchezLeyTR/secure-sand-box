import { Component } from '@angular/core';

@Component({
  selector: 'saffron-implementation-100',
  templateUrl: './saffron-implementation-100.component.html',
  styleUrls: ['./saffron-implementation-100.component.scss']
})
export class SaffronImplementation100Component {
  selectedView = 'inputtext';
  selectedYear = '2025';
  onViewChange(event: Event) {
  const value = (event.target as HTMLSelectElement)?.value;
    if (typeof value === 'string') {
      this.selectedView = value;
    }
  }

  onYearChange(event: Event) {
  const value = (event.target as HTMLSelectElement)?.value;
    if (typeof value === 'string') {
      this.selectedYear = value;
    }
  }
}
