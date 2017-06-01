var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();  
  },
  

  render: function() {
    this.$el.html(this.template());
    console.log('this is the parent object of AppView ', this);
    this.view = new VideoListView({collection: this.videos}); 
    //this.currentVideo = new 
    this.search = new SearchView();
    return this;
  },

  template: templateURL('src/templates/app.html')

});

