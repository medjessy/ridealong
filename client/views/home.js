if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load({'libraries' : 'places'});
  });

  Template.home.helpers({
    smilemapOptions: function() {
      // Make sure the maps API has loaded
      if (GoogleMaps.loaded()) {

        // Map styles from https://snazzymaps.com/style/21568/racafe
        var mapStyle = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#c1c1c1"},{"visibility":"on"}]}]
        // Map initialization options
        return {
          center: new google.maps.LatLng(30.2669444, -97.7427778),
          zoom: 15,
          disableDefaultUI: true,
          styles: mapStyle
        };
      }
    }
  });

  Template.home.onCreated(function() {
    // We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('smilemap', function(map) {
      // Add a marker to the map once it's ready
      // var marker = new google.maps.Marker({
      //   position: map.options.center,
      //   map: map.instance
      // });

      google.maps.event.addListener(map.instance, 'mousemove', function() {
        // var smilemap = map.instance;
        // var center = smilemap.getCenter();
        // console.log("mousemove"); 
      });

      google.maps.event.addListener(map.instance, 'dragend', function() {
        var smilemap = map.instance;
        var center = smilemap.getCenter();
        var lat = center.A;
        var lng = center.F;
        // reactive client session variable ... lol
        $('#findtext').text(center.A + " " + center.F);
        var rgeocoded = Meteor.call('reverseGeocode',lat,lng);

        console.log("center", center);
        console.log("rgeocoded", rgeocoded);
        
      });
    });
  });

}
