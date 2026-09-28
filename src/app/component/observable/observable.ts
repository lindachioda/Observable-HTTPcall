import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-observable',
  imports: [DecimalPipe],
  templateUrl: './observable.html',
  styleUrl: './observable.scss',
})
export class Observable implements OnInit {

  ore: number = 0;
  min: number = 0;
  sec: number = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {

    interval(1000).subscribe(() => {

      this.sec++

      console.log(this.sec)

      if (this.sec === 60) {
        this.sec = 0
        this.min++
      }

      if (this.min === 60) {
        this.min = 0
        this.ore++
      }

      if (this.ore === 24) {
        this.ore = 0
      }

      this.cdr.detectChanges()
    })
  }
}