import { onLCP, onFID, onCLS } from "web-vitals";

onCLS(console.log);
onFID(console.log);
onLCP(console.log);

(function ($) {
  "use strict";

  // NAVBAR
  $(".navbar-nav .nav-link").click(function () {
    $(".navbar-collapse").collapse("hide");
  });
})(window.jQuery);
