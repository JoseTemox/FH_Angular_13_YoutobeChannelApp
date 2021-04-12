export interface YoutobeResponse {
    kind:          string;
    etag:          string;
    nextPageToken: string;
    items:         Item[];
    pageInfo:      PageInfo;
}

export interface Item {
    kind:    ItemKind;
    etag:    string;
    id:      string;
    snippet: Video;
}

export enum ItemKind {
    YoutubePlaylistItem = "youtube#playlistItem",
}

export interface Video {
    publishedAt:            Date;
    channelId:              ChannelID;
    title:                  string;
    description:            string;
    thumbnails:             Thumbnails;
    channelTitle:           ChannelTitle;
    playlistId:             PlaylistID;
    position:               number;
    resourceId:             ResourceID;
    videoOwnerChannelTitle: ChannelTitle;
    videoOwnerChannelId:    ChannelID;
}

export enum ChannelID {
    UC4UQFLK99SYuG1B8ORd5BvQ = "UC4UQFLK99sYuG1b8oRd5BvQ",
}

export enum ChannelTitle {
    Trivium = "Trivium",
}

export enum PlaylistID {
    UU4UQFLK99SYuG1B8ORd5BvQ = "UU4UQFLK99sYuG1b8oRd5BvQ",
}

export interface ResourceID {
    kind:    ResourceIDKind;
    videoId: string;
}

export enum ResourceIDKind {
    YoutubeVideo = "youtube#video",
}

export interface Thumbnails {
    default:  Default;
    medium:   Default;
    high:     Default;
    standard: Default;
    maxres?:  Default;
}

export interface Default {
    url:    string;
    width:  number;
    height: number;
}

export interface PageInfo {
    totalResults:   number;
    resultsPerPage: number;
}
