var VideoListView = Backbone.View.extend({

  el: '.list',
  
  initialize: function() {    
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    this.collection.models.forEach((video, index) => {
      if (index === 0) {
        new VideoPlayerView(video);
      }      
      new VideoListEntryView(video);
    });
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
