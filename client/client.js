var isValidPassword = function(val, field) {
  if (val.length >= 6) {
    return true;
  } else {
    Session.set('displayMessage', 'Error. Too short.')
    return false;
  }
};

var trimInput = function(val) {
  return val.replace(/^\s*|\s*$/g, "");
};
