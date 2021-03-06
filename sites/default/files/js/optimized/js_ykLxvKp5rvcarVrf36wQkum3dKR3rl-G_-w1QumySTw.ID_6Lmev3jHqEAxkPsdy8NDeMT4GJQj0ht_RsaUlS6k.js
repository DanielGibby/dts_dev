/* Source and licensing information for the line(s) below can be found at http://10.6.63.104:800/modules/contrib/addtoany/js/addtoany.js. */
/* global a2a*/
(function (Drupal) {
  'use strict';

  Drupal.behaviors.addToAny = {
    attach: function (context, settings) {
      // If not the full document (it's probably AJAX), and window.a2a exists
      if (context !== document && window.a2a) {
        a2a.init_all('page'); // Init all uninitiated AddToAny instances
      }
    }
  };

})(Drupal);

/* Source and licensing information for the above line(s) can be found at http://10.6.63.104:800/modules/contrib/addtoany/js/addtoany.js. */