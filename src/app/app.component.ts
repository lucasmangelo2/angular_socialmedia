import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: any = null;
  cards: any = [];
  searchValue: string;

  constructor(private service: AppService){
    this.user = this.service.user_logged();
  }

  ngOnInit() {}

  onSubmit_click(e){
    this.cards.push({
      userId:this.user.id,
      user: this.user,
      date: Date.now(),
      content: e
    });
  }

  onSearch(e){
    this.searchValue = e;
  }

  onDelete_click(e){
    this.cards.splice(r => r.indexOf(e),1);
  }
}
