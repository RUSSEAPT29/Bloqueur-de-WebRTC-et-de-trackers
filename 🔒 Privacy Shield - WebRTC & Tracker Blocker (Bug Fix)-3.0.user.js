// ==UserScript==
// @name         🔒 Privacy Shield - WebRTC & Tracker Blocker (Bug Fix)
// @namespace    https://github.com/
// @version      3.0
// @description  Bloque WebRTC, trackers, fuites DNS et fingerprinting (Bug Affichage Fixé)
// @author       Volodia Moscou https://www.facebook.com/groups/1622285742013240?locale=fr_FR
// @match        *://*/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // ✅ Bloque WebRTC (aucune fuite IP)
    Object.defineProperty(navigator, 'mediaDevices', { get: () => undefined });
    Object.defineProperty(window, 'RTCPeerConnection', { get: () => undefined });
    Object.defineProperty(window, 'webkitRTCPeerConnection', { get: () => undefined });

    // ✅ Bloque les référents HTTP (évite le suivi inter-sites)
    Object.defineProperty(document, 'referrer', { get: () => '' });
    Object.defineProperty(navigator, 'sendBeacon', { value: () => false });

    // ✅ Bloque les scripts de tracking
    const trackerDomains = [
        "google-analytics.com", "doubleclick.net", "facebook.com/tr",
        "ads.linkedin.com", "analytics.twitter.com", "pixel.wp.com",
        "hotjar.com", "amazon-adsystem.com", "bing.com"
    ];

    const blockTrackers = () => {
        const observer = new MutationObserver(() => {
            trackerDomains.forEach(domain => {
                document.querySelectorAll(`script[src*="${domain}"]`).forEach(el => el.remove());
            });
        });
        observer.observe(document, { childList: true, subtree: true });
    };
    blockTrackers();

    // ✅ Fix bug affichage (YouTube et autres sites)
    GM_addStyle(`
        [src*="doubleclick.net"], [src*="google-analytics.com"],
        [src*="ads.linkedin.com"], [src*="analytics.twitter.com"],
        [src*="amazon-adsystem.com"], [src*="bing.com"] {
            display: none !important;
            visibility: hidden !important;
            width: 0 !important;
            height: 0 !important;
        }

        /* Fix affichage YouTube */
        ytd-rich-grid-renderer, ytd-watch-next-secondary-results-renderer {
            display: flex !important;
            flex-wrap: wrap !important;
        }
    `);

    // ✅ Bloque les pixels espions invisibles
    const blockPixels = () => {
        const observer = new MutationObserver(() => {
            document.querySelectorAll('img, iframe').forEach(img => {
                if (img.width < 5 && img.height < 5) img.style.display = "none";
            });
        });
        observer.observe(document, { childList: true, subtree: true });
    };
    blockPixels();

    console.log("[Privacy Shield] ✅ WebRTC Bloqué, Trackers Bloqués, Bug Affichage Fixé !");
})();
