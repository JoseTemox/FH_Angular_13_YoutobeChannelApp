import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtubeService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private youtobeService: YoutubeService) { }

  ngOnInit(): void {

    this.youtobeService.getVideos().subscribe( videos =>{
      console.log(videos);
    })
  }

}
