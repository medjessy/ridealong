Meteor.publish('ride', function() {
  return Ride.find();
})

Meteor.methods({
  addRide: function(rider,rideFrom,rideTo){
    Ride.insert({
      "rider" : rider,
      "from" : rideFrom,
      "to" : rideTo,
      "createdAt" : new Date()
    })
  }

})
