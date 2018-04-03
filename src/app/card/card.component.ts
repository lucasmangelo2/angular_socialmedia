import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: any;
  @Output() onDeleteCard: EventEmitter<any> = new EventEmitter<any>();
  ativate_edit: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSelected(){
    this.ativate_edit = true;
  }

  onEdit_click(e){
    this.ativate_edit = false;
    this.card.content = e;
    this.card.date = Date.now();
  }

  onDelete(e){
    this.onDeleteCard.emit(e);
  }

}
