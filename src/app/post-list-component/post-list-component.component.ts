import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {



    posts = [
      {
        title: "Premier Post",
        content: "Lorem ipsum",
        loveIts: 0,
        created_at: new Date()
      },
      {
        title:"Post2",
        content:"Lorem ipsum ipsum",
        loveIts:0,
        created_at: new Date()
      }
    ];


  constructor() { }

  ngOnInit() { }
}
