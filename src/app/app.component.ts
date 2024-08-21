import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ModalService } from './services/modal.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showCounterModal = false;
  showIntervalModal = false;
  count$: Observable<number>;

 

  initialCountValue: number;

  constructor(private store: Store<{ count: number }>, private modalService: ModalService) {
    this.count$ = this.store.select('count');
    this.initialCountValue = JSON.parse(localStorage.getItem('count') ?? '0');
  }

  closeIntervalModal() {
    const intervalInput = document.getElementById('interval') as HTMLInputElement;
    intervalInput.value = this.initialCountValue.toString();
    this.showIntervalModal = false;
  }




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

 
}
