var AppView = Backbone.View.extend({
  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.listenTo(this.videos, 'sync', this.selectFirst);
    this.videos.search('javascript tutorial');
    this.render();  
  },
  
  selectFirst: function() {
    if (this.videos.length > 0) {
      this.videos.at(0).select();
    } 
  },

  render: function() {
    this.$el.html(this.template());

    new VideoListView({
      collection: this.videos,
      el: this.$('.list')
    }).render(); 

    new VideoPlayerView({
      model: this.videos.at(0),
      el: this.$('.player'),
      collection: this.videos
    }).render();

    new SearchView({
      collection: this.videos,
      el: this.$('.search')
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});

