if (Meteor.isClient) {

  var initAutoComplete = function() {
    var autocomplete = new google.maps.places.Autocomplete(
      (document.getElementById('rideFrom')),{types: ['geocode'] }
    );
  };
  
  Template.giveride.rendered = initAutoComplete;

  Template.giveride.events({
    'submit #giveride-form' : function(e,t){
      e.preventDefault();
      var rider = e.target.rider.value;
      var rideFrom = e.target.rideFrom.value;
      var rideTo = e.target.rideTo.value;
      Meteor.call('addRide',rider,rideFrom,rideTo);

      e.target.rider.value = "";
      e.target.rideFrom.value = "";
      e.target.rideTo.value = "";

      return false;
    },
    'onfocus #rideFrom' : function(e){
      e.preventDefault();
      var autocomplete = new google.maps.places.Autocomplete(e.target.rideFrom.value);
      console.log(autocomplete);

    }
  });
}
