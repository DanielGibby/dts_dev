/* Source and licensing information for the line(s) below can be found at http://10.6.63.104:800/modules/contrib/devel/webprofiler/js/app/collections/collectors.js. */
(function ($, Drupal, drupalSettings, Backbone) {

  "use strict";

  Drupal.webprofiler.collectors.Collectors = Backbone.Collection.extend({
    model: Drupal.webprofiler.models.Collector,

    url: Drupal.url('admin/reports/profiler/view/' + drupalSettings.webprofiler.token + '/collectors'),

    /**
     * Unselect all models.
     */
    resetSelected: function () {
      this.each(function (model) {
        model.set({"selected": false});
      });
    },

    /**
     * Select a specific model from the collection.
     *
     * @param id
     * @returns {*}
     */
    selectByID: function (id) {
      this.resetSelected();
      var collector = this.get(id);
      collector.set({"selected": true});

      return collector.id;
    }
  });

}(jQuery, Drupal, drupalSettings, Backbone));


/* Source and licensing information for the above line(s) can be found at http://10.6.63.104:800/modules/contrib/devel/webprofiler/js/app/collections/collectors.js. */