// Web Components ---------------------------------------------
// Reusable custom web components
class AppDrawer extends HTMLElement {  }
window.customElements.define('app-drawer', AppDrawer);
// This helps you attach event listener inside class itself, like hover for tooltip

// App Shell Model ---------------------------------------------
// Minimum HTML/CSS/JS to power UI like nav and component, cache them and send them first

// PRPL (Push, Render, Pre-cache, Lazy-load) ---------------------------------------------
// optimize by aggressive code-splitting and caching

// Optimize JS first send with tree shaking and code-splitting ---------------------------------------------

// Cache API for cache network req. used by Service Worker but we can also used ---------------------------------------------

// Lazy loading images - load after scroll reached the viewport ---------------------------------------------
// user IntersectionObserver

// Critical Rendering Path ---------------------------------------------
// Optimize to allow browser to paint the page asap
// HTML and CSS parse in following way
// Byte -> Character -> Token(tags) -> Lexing(token->object) -> DOM/CSSOM markup object tree
// Combine DOM & CSSOM -> Render tree(only visible node) -> Layout Computes -> Paint
// until CSSOM is complete paint won't happen use media="print" to keep it later (only specific)
// JS initial execution use async/defer
// avoid two roundtrips use same basic css in index file

// HTTP/2 ---------------------------------------------
// Binary Framing <==
// Header Frame and Data Frame
// Multiplexing <==
// Browser can ask for multiple request(css and js encounter) at same time from server 
// and without cutting the connection get all responses in stream.
// HTTP/2 push <==
// Can be performed by server to push css even when only HTML is asked
// Can be done in .htaccess using Link HEADER
// <FilesMatch "\.html$">
//    Header set Link "</css/styles.css>; rel=preload; as=style"
// <FilesMatch>
// Header compression <==
// Why send same header again and again only send unique


// Rendering Performance ---------------------------------------------
// JS execution <==
// Avoid long-running JS code
// requestAnimationFrame(cancelAnimationFrame) rather than setTimeout and setInterval
// requestAnimationFrame stop for inactive tab, and optimized by browser
// function step(time){ id = requestAnimationFrame(step); }
// time can use and it is time from opening of that tab
// use micro task happening to make DOM changes in several frames
// Style complexity <==
// reduce css complexity like last child first child
// because it needs resources
// Avoid large complex layout <==
// use flexbox for position it is optimized
// Reduce paint area <==
// Reduce shadows
// promote element you want to animate
// .moving-element {
//     transform: translateZ(0);
//   }
// This will allow to that element to be in different layer and repaint will happen only in that layer
// Debouncing your input handler <==