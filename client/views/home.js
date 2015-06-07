if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load({'libraries' : 'places'});
  });

  Template.home.helpers({
    smilemapOptions: function() {
      // Make sure the maps API has loaded
      if (GoogleMaps.loaded()) {
        // Map initialization options
        return {
          center: new google.maps.LatLng(30.2669444, -97.7427778),
          zoom: 15,
          disableDefaultUI: true
        };
      }
    }
  });

  Template.home.onCreated(function() {
    // We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('smilemap', function(map) {
      // Add a marker to the map once it's ready
      var marker = new google.maps.Marker({
        position: map.options.center,
        map: map.instance
      });

      google.maps.event.addListener(map.instance, 'mousemove', function() {
        // var smilemap = map.instance;
        // var center = smilemap.getCenter();
        console.log("mousemove"); 
      });

      google.maps.event.addListener(map.instance, 'dragend', function() {
        var smilemap = map.instance;
        var center = smilemap.getCenter();
        console.log("center", center);
        $('#findsearch').text(center.A);
      });

    });
  });
}
