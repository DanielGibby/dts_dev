/* Source and licensing information for the line(s) below can be found at http://10.6.63.104:800/modules/contrib/devel/webprofiler/js/app/views/collectorsList.js. */
(function ($, Drupal, Backbone) {

  "use strict";

  Drupal.webprofiler.views.CollectorsList = Backbone.View.extend({
    tagName: 'section',

    /**
     *
     * @returns {Drupal.webprofiler.views.CollectorsList}
     */
    render: function () {
      var collectorsView = this.collection.map(function (collector) {
        return (new Drupal.webprofiler.views.CollectorView({model: collector})).render().el;
      });
      this.$el.html(collectorsView);
      return this;
    }
  });

}(jQuery, Drupal, Backbone));

/* Source and licensing information for the above line(s) can be found at http://10.6.63.104:800/modules/contrib/devel/webprofiler/js/app/views/collectorsList.js. */