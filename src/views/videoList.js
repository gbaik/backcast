var VideoListView = Backbone.View.extend({
  
  initialize: function() {    
    this.collection.models.forEach(video => {
      new VideoListEntryView(video); 
    });
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
