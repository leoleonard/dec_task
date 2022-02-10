import { Component, forwardRef, HostBinding, HostListener, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProductItemComponent),
      multi: true
    }
  ]
})
export class ProductItemComponent implements ControlValueAccessor {
  @Input() name: string  = '';
  @Input() id: number = 0;
  @Input() selected: boolean = false;
  @Input() tooltip: string = '';

  @HostBinding('class.selected') get isSelected() {
    return this.selected;
  };

  onChange = () => {};

  onTouched = () => {
    this.selected = !this.selected;
    console.log({ Id: this.id, name: this.name, description: this.tooltip });
  };

  writeValue(selected: boolean): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }





}
