function validate(stringArg) {
  var lowercaseLtrs = ['a','b','c','d','e','f','g','h','i','j'];
  var uppercaseLtrs = ['N', 'L', 'Q', 'R'];
  var stringLength = stringArg.length;

  if (stringLength === 1) {
	if (lowercaseLtrs.indexOf(stringArg) > -1) {
	  return true;
	} else {
      return false;
	}
  }

  if (stringArg.charAt(0) === 'Z') {
    return validate(stringArg.substring(1));
  } else if (!(uppercaseLtrs.indexOf(stringArg.charAt(0)) > -1 )) {
	return false;
  }

  for (var i = 0; i < (stringLength - 1); i++) {
    if (validate(stringArg.substr(1, 1+i)) && validate(stringArg.substr(2+i))) {
	  return true;
	}
  }
}

function validateString(stringArg){
  var strings = stringArg.split(/\s+/);

  for (var i = 0; i < strings.length; i++) {
  	var valid = "";
  	if (validate(strings[i])) {
  	  valid = "VALID";
  	} else {
  	  valid = "INVALID";
  	}
 	console.log(strings[i] + " " + valid);
  }
}