import { NgControl } from '@angular/forms';
import { Component, Directive, ElementRef, Input, OnInit, Optional, ViewEncapsulation } from '@angular/core';

@Directive({
  selector: '[ariaSupport]',
  host:{
    '[attr.aria-required]':'required',
    '[attr.aria-invalid]':'_ngControl.invalid',
    '[attr.aria-readonly]':'readonly',
    '[attr.aria-disabled]':'_ngControl.disabled',
    '[tabindex]':'0'
  }
})
export class AriaSupport{
  private _required = false;
  private _readonly = false;

  @Input()
  get required(){
    return this._required;
  }
  set required(value: any){
    this._required = coerceBooleanProperty(value);
  }

  @Input()
  get readonly(){
    return this._readonly;
  }
  set readonly(value: any){
    this._readonly = coerceBooleanProperty(value);
  }

  
  constructor(private _elementRef: ElementRef,public _ngControl: NgControl){ 
  }

}

export function coerceBooleanProperty(value: any): boolean {
  return value != null && `${value}` !== 'false';
}

