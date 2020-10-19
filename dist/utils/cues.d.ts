import { CaptionScreen } from './cea-608-parser';
export interface CuesInterface {
    newCue(track: TextTrack | null, startTime: number, endTime: number, captionScreen: CaptionScreen): VTTCue[];
}
interface VTTCue extends TextTrackCue {
    new (start: number, end: number, cueText: string): VTTCue;
    line: number;
    align: string;
    position: number;
}
export declare function newCue(track: TextTrack | null, startTime: number, endTime: number, captionScreen: CaptionScreen): VTTCue[];
export {};
