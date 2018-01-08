// Using flexbox polyfill for IE Browsers. It's inconsistent on smaller screens though
flexibility(document.body);

/* Below I tried to fix font rendering issues on Chrome, it seems to not work properly, I'm not that comfortable with JS yet. I reverted the styles so it looks as it should on Chromium based browsers, in consequence non Chromium browsers end up with some havier font weights */

// document.addEventListener("load", fixFontRendering, false);

// function fixFontRendering() {
//     if (navigator.userAgent.match(/Windows/) && navigator.userAgent.match(/Chrome/)) {
//         var styleElement = document.createElement("style"),
//             rules        = document.createTextNode("body, .header-title--secondary, .figure-caption, .quote-caption, .social-letters, .footnote { font-weight: 400 }");

//         styleElement.appendChild(rules);
//         document.head.appendChild(style);
//     }
// }