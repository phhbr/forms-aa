import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.scss']
})
export class OrderOverviewComponent implements OnInit {
  @ViewChild(FormGroupDirective, {static: false}) formDirective: FormGroupDirective;
  form: FormGroup;
  submitted: boolean;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      generalInfo: new FormControl(),
      billing: new FormGroup({
        info: new FormControl(),
        address: new FormControl(),
      }),
      delivery: new FormGroup({
        info: new FormControl(),
        address: new FormControl()
      })
    });
  }

  apply(): void {
    this.submitted = true;
    if (this.form.valid) {
      console.log('saved!');
      console.log(this.form.getRawValue());

      setTimeout(() => this.resetForm(), 5000);
    }
  }

  public resetForm(): void {
    this.submitted = false;
    this.formDirective.resetForm();
  }
}
