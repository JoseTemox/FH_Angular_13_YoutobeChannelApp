import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { YoutobeResponse } from '../models/youtobeModels';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtobeUrl = 'https://www.googleapis.com/youtube/v3';
  private apikey = 'AIzaSyDr4mlfJIX9d5sqtnA69bTdjkfg9ryLc6o';
  private playlist = 'UU4UQFLK99sYuG1b8oRd5BvQ';
  private nextPageToken = '';




  constructor( private http: HttpClient) {

  }

  getVideos(){

    const url = `${this.youtobeUrl}/playlistItems`;
    const params = new HttpParams()
      .set('part','snippet')
      .set('maxResults','10')
      .set('playlistId', this.playlist)
      .set('key', this.apikey)
      .set('pageToken', this.nextPageToken)


    return this.http.get<YoutobeResponse>( url, { params}).pipe(
      map( resp => {
        this.nextPageToken = resp.nextPageToken
        return resp.items;
      }),
      map( items => items.map( video => video.snippet ))
    )

  }


}
