var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.render();
    // this.on('change:collection', this.render, this);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
