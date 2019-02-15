/* Source and licensing information for the line(s) below can be found at http://10.6.63.104:800/modules/contrib/devel/webprofiler/js/app/views/collector.js. */
(function ($, Drupal, Backbone) {

  "use strict";

  Drupal.webprofiler.views.CollectorView = Backbone.View.extend({
    tagName: 'li',
    template: _.template($("script#collector").html()),

    /**
     *
     */
    initialize: function () {
      _.bindAll(this, "render");
      this.listenTo(this.model, 'change:selected', this.render);
    },

    /**
     *
     * @returns {Drupal.webprofiler.views.CollectorView}
     */
    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      this.$el.toggleClass('is--selected', this.model.get('selected'));
      return this;
    }

  });

}(jQuery, Drupal, Backbone));

/* Source and licensing information for the above line(s) can be found at http://10.6.63.104:800/modules/contrib/devel/webprofiler/js/app/views/collector.js. */