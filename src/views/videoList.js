var VideoListView = Backbone.View.extend({
  
  initialize: function() {    
    // this.collection.models.forEach(video => {
    //   new VideoListEntryView(video); 
    // });
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    console.log(this);
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
