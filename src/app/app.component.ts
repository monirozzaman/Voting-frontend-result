import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Submit the form
   * @param { value, valid }: { value: Todo, valid: boolean }
   */
  onSubmit(): void {
  }

}
