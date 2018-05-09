import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public posts;
  /**
   *
   */
  constructor(private _appService: AppService) {}

  ngOnInit() {
    this.getPosts();
  
  }

  getPosts() {
    this._appService.getPosts().subscribe(
      // the first argument is a function which runs on success
      data => { this.posts = data; },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading posts')
    );
  }
}
