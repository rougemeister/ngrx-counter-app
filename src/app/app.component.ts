import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showCounterModal = false;
  showIntervalModal = false;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.showCounterModal$.subscribe(show => {
      this.showCounterModal = show;
    });

    this.modalService.showIntervalModal$.subscribe(show => {
      this.showIntervalModal = show;
    });
  }

  closeCounterModal() {
    this.modalService.closeCounterModal();
  }

  closeIntervalModal() {
    this.modalService.closeIntervalModal();
  }

}
