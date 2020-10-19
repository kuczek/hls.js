/**
 * @author Stephan Hesse <disparat@gmail.com> | <tchakabam@gmail.com>
 *
 * DRM support for Hls.js
 */
import EventHandler from '../event-handler';
import { KeySystems, MediaKeyFunc } from '../utils/mediakeys-helper';
/**
 * Controller to deal with encrypted media extensions (EME)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Encrypted_Media_Extensions_API
 *
 * @class
 * @constructor
 */
declare class EMEController extends EventHandler {
    private _widevineLicenseUrl?;
    private _licenseXhrSetup?;
    private _emeEnabled;
    private _requestMediaKeySystemAccess;
    private _drmSystemOptions;
    private _config;
    private _mediaKeysList;
    private _media;
    private _hasSetMediaKeys;
    private _requestLicenseFailureCount;
    private mediaKeysPromise;
    /**
       * @constructs
       * @param {Hls} hls Our Hls.js instance
       */
    constructor(hls: any);
    /**
     * @param {string} keySystem Identifier for the key-system, see `KeySystems` enum
     * @returns {string} License server URL for key-system (if any configured, otherwise causes error)
     * @throws if a unsupported keysystem is passed
     */
    getLicenseServerUrl(keySystem: KeySystems): string;
    /**
       * Requests access object and adds it to our list upon success
       * @private
       * @param {string} keySystem System ID (see `KeySystems`)
       * @param {Array<string>} audioCodecs List of required audio codecs to support
       * @param {Array<string>} videoCodecs List of required video codecs to support
       * @throws When a unsupported KeySystem is passed
       */
    private _attemptKeySystemAccess;
    get requestMediaKeySystemAccess(): MediaKeyFunc;
    /**
       * Handles obtaining access to a key-system
       * @private
       * @param {string} keySystem
       * @param {MediaKeySystemAccess} mediaKeySystemAccess https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySystemAccess
       */
    private _onMediaKeySystemAccessObtained;
    /**
     * Handles key-creation (represents access to CDM). We are going to create key-sessions upon this
     * for all existing keys where no session exists yet.
     *
     * @private
     */
    private _onMediaKeysCreated;
    /**
       * @private
       * @param {*} keySession
       */
    private _onNewMediaKeySession;
    /**
     * @private
     * @param {MediaKeySession} keySession
     * @param {ArrayBuffer} message
     */
    private _onKeySessionMessage;
    /**
     * @private
     * @param e {MediaEncryptedEvent}
     */
    private _onMediaEncrypted;
    /**
     * @private
     */
    private _attemptSetMediaKeys;
    /**
     * @private
     */
    private _generateRequestWithPreferredKeySession;
    /**
     * @private
     * @param {string} url License server URL
     * @param {ArrayBuffer} keyMessage Message data issued by key-system
     * @param {function} callback Called when XHR has succeeded
     * @returns {XMLHttpRequest} Unsent (but opened state) XHR object
     * @throws if XMLHttpRequest construction failed
     */
    private _createLicenseXhr;
    /**
     * @private
     * @param {XMLHttpRequest} xhr
     * @param {string} url License server URL
     * @param {ArrayBuffer} keyMessage Message data issued by key-system
     * @param {function} callback Called when XHR has succeeded
     */
    private _onLicenseRequestReadyStageChange;
    /**
     * @private
     * @param {MediaKeysListItem} keysListItem
     * @param {ArrayBuffer} keyMessage
     * @returns {ArrayBuffer} Challenge data posted to license server
     * @throws if KeySystem is unsupported
     */
    private _generateLicenseRequestChallenge;
    /**
     * @private
     * @param keyMessage
     * @param callback
     */
    private _requestLicense;
    onMediaAttached(data: {
        media: HTMLMediaElement;
    }): void;
    onMediaDetached(): void;
    onManifestParsed(data: any): void;
}
export default EMEController;
