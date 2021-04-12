import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtubeService.service';
import { Video } from '../../models/youtobeModels';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos: Video[] = [];

  constructor( private youtobeService: YoutubeService) { }

  ngOnInit(): void {

    this.youtobeService.getVideos().subscribe( videos =>{

      this.videos.push(...videos);
      console.log(this.videos);
    })
  }

  mostrarVideo(video: Video){
    console.log(video);
    Swal.fire({
      html:`<h4>${ video.title }</h4>
            <hr>
              <iframe width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/${video.resourceId.videoId}"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer;
                    autoplay;
                    clipboard-write;
                    encrypted-media;
                    gyroscope;
                    picture-in-picture"
                    allowfullscreen>
              </iframe>`
    });
  }

}
