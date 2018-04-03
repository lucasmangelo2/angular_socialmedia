import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {FormGroup,FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postForm: FormGroup;

  @Input() content_value: string;
  @Output() onSubmit: EventEmitter<string> = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      description: this.formBuilder.control(this.content_value, [Validators.required, Validators.maxLength(140)]),
    });
  }

  get description(): any { return this.postForm.get('description'); }

  enviar_post(e){
    this.onSubmit.emit(e);
    this.postForm.reset();
  }

  total_chars(e){
    return e.length;
  }
}
