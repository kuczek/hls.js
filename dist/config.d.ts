/**
 * HLS config
 */
import BufferController from './controller/buffer-controller';
import * as Cues from './utils/cues';
import EMEController from './controller/eme-controller';
import { MediaKeyFunc } from './utils/mediakeys-helper';
declare type ABRControllerConfig = {
    abrEwmaFastLive: number;
    abrEwmaSlowLive: number;
    abrEwmaFastVoD: number;
    abrEwmaSlowVoD: number;
    abrEwmaDefaultEstimate: number;
    abrBandWidthFactor: number;
    abrBandWidthUpFactor: number;
    abrMaxWithRealBitrate: boolean;
    maxStarvationDelay: number;
    maxLoadingDelay: number;
};
export declare type BufferControllerConfig = {
    appendErrorMaxRetry: number;
    liveDurationInfinity: boolean;
    liveBackBufferLength: number;
};
declare type CapLevelControllerConfig = {
    capLevelToPlayerSize: boolean;
};
export declare type DRMSystemOptions = {
    audioRobustness?: string;
    videoRobustness?: string;
};
export declare type EMEControllerConfig = {
    licenseXhrSetup?: (xhr: XMLHttpRequest, url: string) => void;
    emeEnabled: boolean;
    widevineLicenseUrl?: string;
    drmSystemOptions: DRMSystemOptions;
    requestMediaKeySystemAccessFunc: MediaKeyFunc | null;
};
declare type FragmentLoaderConfig = {
    fLoader: any;
    fragLoadingTimeOut: number;
    fragLoadingMaxRetry: number;
    fragLoadingRetryDelay: number;
    fragLoadingMaxRetryTimeout: number;
};
declare type FPSControllerConfig = {
    capLevelOnFPSDrop: boolean;
    fpsDroppedMonitoringPeriod: number;
    fpsDroppedMonitoringThreshold: number;
};
declare type LevelControllerConfig = {
    startLevel?: number;
};
declare type MP4RemuxerConfig = {
    stretchShortVideoTrack: boolean;
    maxAudioFramesDrift: number;
};
declare type PlaylistLoaderConfig = {
    pLoader: any;
    manifestLoadingTimeOut: number;
    manifestLoadingMaxRetry: number;
    manifestLoadingRetryDelay: number;
    manifestLoadingMaxRetryTimeout: number;
    levelLoadingTimeOut: number;
    levelLoadingMaxRetry: number;
    levelLoadingRetryDelay: number;
    levelLoadingMaxRetryTimeout: number;
};
declare type StreamControllerConfig = {
    autoStartLoad: boolean;
    startPosition: number;
    defaultAudioCodec?: string;
    initialLiveManifestSize: number;
    maxBufferLength: number;
    maxBufferSize: number;
    maxBufferHole: number;
    lowBufferWatchdogPeriod: number;
    highBufferWatchdogPeriod: number;
    nudgeOffset: number;
    nudgeMaxRetry: number;
    maxFragLookUpTolerance: number;
    liveSyncDurationCount: number;
    liveMaxLatencyDurationCount: number;
    liveSyncDuration?: number;
    liveMaxLatencyDuration?: number;
    maxMaxBufferLength: number;
    startFragPrefetch: boolean;
    testBandwidth: boolean;
};
declare type TimelineControllerConfig = {
    cueHandler: Cues.CuesInterface;
    enableCEA708Captions: boolean;
    enableWebVTT: boolean;
    captionsTextTrack1Label: string;
    captionsTextTrack1LanguageCode: string;
    captionsTextTrack2Label: string;
    captionsTextTrack2LanguageCode: string;
    captionsTextTrack3Label: string;
    captionsTextTrack3LanguageCode: string;
    captionsTextTrack4Label: string;
    captionsTextTrack4LanguageCode: string;
    renderTextTracksNatively: boolean;
};
declare type TSDemuxerConfig = {
    forceKeyFrameOnDiscontinuity: boolean;
};
export declare type HlsConfig = {
    debug: boolean;
    enableWorker: boolean;
    enableSoftwareAES: boolean;
    minAutoBitrate: number;
    loader: any;
    xhrSetup?: (xhr: XMLHttpRequest, url: string) => void;
    audioStreamController?: any;
    audioTrackController?: any;
    subtitleStreamController?: any;
    subtitleTrackController?: any;
    timelineController?: any;
    emeController?: typeof EMEController;
    abrController: any;
    bufferController: typeof BufferController;
    capLevelController: any;
    fpsController: any;
} & ABRControllerConfig & BufferControllerConfig & CapLevelControllerConfig & EMEControllerConfig & FPSControllerConfig & FragmentLoaderConfig & LevelControllerConfig & MP4RemuxerConfig & PlaylistLoaderConfig & StreamControllerConfig & TimelineControllerConfig & TSDemuxerConfig;
export declare const hlsDefaultConfig: HlsConfig;
export {};
