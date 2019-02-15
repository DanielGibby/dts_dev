/* Source and licensing information for the line(s) below can be found at http://10.6.63.104:800/modules/contrib/devel/webprofiler/js/app/views/details.js. */
(function ($, Drupal, Backbone) {

  "use strict";

  Drupal.webprofiler.views.DetailsView = Backbone.View.extend({
    el: '#details',

    /**
     *
     * @returns {Drupal.webprofiler.views.DetailsView}
     */
    render: function () {
      var template = _.template($("script#" + this.model.get('name')).html());

      this.$el.html(template(this.model.toJSON()));
      return this;
    }
  });

}(jQuery, Drupal, Backbone));

/* Source and licensing information for the above line(s) can be found at http://10.6.63.104:800/modules/contrib/devel/webprofiler/js/app/views/details.js. */