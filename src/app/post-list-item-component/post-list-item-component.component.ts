import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postDate: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;

  constructor() { }

  ngOnInit() {
  }

  getLike(){
    return this.postLoveIts ;
  }

  setLike(numb){
    if(numb < 0){
      this.postLoveIts--;
    }
    else if(numb > 0){
      this.postLoveIts++;
    }
  }

}
