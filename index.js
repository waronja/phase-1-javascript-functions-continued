// code your solution here

function saturdayFun () {
  const lastpart = "bathe my dog";
    console.log ("This Saturday, I want to " + lastpart + "!") ;

    return saturdayFun ();
}

function mondayWork () {
  const lastpart = "work from home";
    console.log ("This Monday, I will " + lastpart + ".") ;

    return mondayWork ();
}


function wrapAdjective (delimiter) {
  return function (adjective) {
    return "You are " + delimiter + adjective + delimiter + "!";
  }
}

