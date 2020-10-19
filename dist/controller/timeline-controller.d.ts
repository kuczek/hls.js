import EventHandler from '../event-handler';
import { CaptionScreen } from '../utils/cea-608-parser';
import Fragment from '../loader/fragment';
import { MediaPlaylist } from '../types/media-playlist';
declare class TimelineController extends EventHandler {
    private media;
    private config;
    private enabled;
    private Cues;
    private textTracks;
    private tracks;
    private initPTS;
    private unparsedVttFrags;
    private captionsTracks;
    private nonNativeCaptionsTracks;
    private captionsProperties;
    private readonly cea608Parser1;
    private readonly cea608Parser2;
    private lastSn;
    private prevCC;
    private vttCCs;
    constructor(hls: any);
    addCues(trackName: string, startTime: number, endTime: number, screen: CaptionScreen, cueRanges: Array<[number, number]>): void;
    onInitPtsFound(data: {
        id: string;
        frag: Fragment;
        initPTS: number;
    }): void;
    getExistingTrack(trackName: string): TextTrack | null;
    createCaptionsTrack(trackName: string): void;
    createNativeTrack(trackName: string): void;
    createNonNativeTrack(trackName: string): void;
    createTextTrack(kind: TextTrackKind, label: string, lang?: string): TextTrack | undefined;
    destroy(): void;
    onMediaAttaching(data: {
        media: HTMLMediaElement;
    }): void;
    onMediaDetaching(): void;
    onManifestLoading(): void;
    _cleanTracks(): void;
    onManifestLoaded(data: {
        subtitles: Array<MediaPlaylist>;
        captions: Array<MediaPlaylist>;
    }): void;
    onFragLoaded(data: {
        frag: Fragment;
        payload: ArrayBuffer;
    }): void;
    _parseVTTs(frag: Fragment, payload: ArrayBuffer): void;
    onFragDecrypted(data: {
        frag: Fragment;
        payload: any;
    }): void;
    onFragParsingUserdata(data: {
        samples: Array<any>;
    }): void;
    extractCea608Data(byteArray: Uint8Array): number[][];
}
export default TimelineController;
