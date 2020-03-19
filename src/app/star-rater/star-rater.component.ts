import { Component, OnInit, forwardRef  } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-star-rater',
  templateUrl: './star-rater.component.html',
  styleUrls: ['./star-rater.component.scss'],
  providers: [     
    {
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => StarRaterComponent),
      multi: true     
    }   
  ],
  host: {       
    'class': 'star-rater'    
  }
})
export class StarRaterComponent implements OnInit, ControlValueAccessor {

  public ratings = [
    {
      stars: 1,
      text: 'first'
    },
    {
      stars: 2,
      text: 'second'
    },
    {
      stars: 3,
      text: 'third'
    },
    {
      stars: 4,
      text: 'good'
    },
    {
      stars: 5,
      text: 'Exalente!'
    }
  ]

  public _value:number;
  public disabled: boolean;
  public ratingText: string;

  constructor() { }

  onChange: any = () => {}
  onTouched: any = () => { }


  ngOnInit() {
  }

  writeValue(val) {    
    this._value = val;
  }

  registerOnChange(fn: any){
    this.onChange = fn
  }
  registerOnTouched(fn: any){
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
    
    this.disabled = isDisabled;
  }

  setRating(star: any) {
    if(!this.disabled) {      
      this._value = star.stars;
      this.ratingText = star.text
      this.onChange(star.stars);
      this.onTouched();
    }
  }


}
