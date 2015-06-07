Meteor.publish('ride', function() {
  return Ride.find();
})

Meteor.methods({
    addRide: function(rider,rideFrom,rideTo) {
        Ride.insert({
            "rider" : rider,
            "from" : rideFrom,
            "to" : rideTo,
            "createdAt" : new Date()
        });
    },

    // called to do address lookup
    reverseGeocode: function (lat, lng) {
        this.unblock();
        return Meteor.http.call("GET", "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng);
    }

})
