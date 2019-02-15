/* Source and licensing information for the line(s) below can be found at http://10.6.63.104:800/modules/contrib/devel/webprofiler/js/app/models/collector.js. */
(function ($, Drupal, drupalSettings, Backbone) {

  "use strict";

  Drupal.webprofiler.models.Collector = Backbone.Model.extend({
    idAttribute: 'name',
    urlRoot: Drupal.url('admin/reports/profiler/view/' + drupalSettings.webprofiler.token + '/collectors'),
    defaults: {
      name: "default",
      data: [],
      selected: false
    }
  });

}(jQuery, Drupal, drupalSettings, Backbone));

/* Source and licensing information for the above line(s) can be found at http://10.6.63.104:800/modules/contrib/devel/webprofiler/js/app/models/collector.js. */