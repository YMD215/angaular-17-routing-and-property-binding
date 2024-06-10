import { Component , ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  constructor(private element: ElementRef){}

  // private element = ElementRef
  ngOnInit(): void {
    document.body.appendChild( this.element.nativeElement )
  }
  ngOnDestroy(): void {
    this.element.nativeElement.remove()
  }
}
