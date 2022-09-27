import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jogo-charada';

  teclado = [
    { tecla: 'Q', class: '' }, { tecla: 'W', class: '' }, { tecla: 'E', class: '' }, { tecla: 'R', class: '' }, { tecla: 'T', class: '' }, { tecla: 'Y', class: '' }, { tecla: 'U', class: '' }, { tecla: 'I', class: '' }, { tecla: 'O', class: '' }, { tecla: 'P', class: '' },

    { tecla: 'A', class: '' }, { tecla: 'S', class: '' }, { tecla: 'D', class: '' }, { tecla: 'F', class: '' }, { tecla: 'G', class: '' }, { tecla: 'H', class: '' }, { tecla: 'J', class: '' }, { tecla: 'K', class: '' }, { tecla: 'L', class: '' },

    { tecla: 'Z', class: '' }, { tecla: 'X', class: '' }, { tecla: 'C', class: '' }, { tecla: 'V', class: '' }, { tecla: 'B', class: '' }, { tecla: 'N', class: '' }, { tecla: 'M', class: '' }, { tecla: 'BACKSPACE', class: '' }, { tecla: 'ENTER', class: '' }
  ]

  matrix= [
    [{ class: '', tecla: '' }, { class: '', tecla: '' }, { class: '', tecla: '' }, { class: '', tecla: '' }, { class: '', tecla: '' }],

    [{ class: '', tecla: '' }, { class: '', tecla: '' }, { class: '', tecla: '' }, { class: '', tecla: '' }, { class: '', tecla: '' }],

    [{ class: '', tecla: '' }, { class: '', tecla: '' }, { class: '', tecla: '' }, { class: '', tecla: '' }, { class: '', tecla: '' }],

    [{ class: '', tecla: '' }, { class: '', tecla: '' }, { class: '', tecla: '' }, { class: '', tecla: '' }, { class: '', tecla: '' }],

    [{ class: '', tecla: '' }, { class: '', tecla: '' }, { class: '', tecla: '' }, { class: '', tecla: '' }, { class: '', tecla: '' }],

    [{ class: '', tecla: '' }, { class: '', tecla: '' }, { class: '', tecla: '' }, { class: '', tecla: '' }, { class: '', tecla: '' }],
  ]
}
