import AttrList from '../utils/attr-list';
export interface AudioGroup {
    id: string;
    codec: string;
}
export declare type MediaPlaylistType = 'AUDIO' | 'VIDEO' | 'SUBTITLES' | 'CLOSED-CAPTIONS';
export interface MediaPlaylist {
    attrs: AttrList;
    audioCodec?: string;
    autoselect: boolean;
    default: boolean;
    forced: boolean;
    groupId?: string;
    id: number;
    instreamId?: string;
    lang?: string;
    name: string;
    type: MediaPlaylistType | 'main';
    url?: string;
}
