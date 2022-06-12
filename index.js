//code your solution here

let activity = "roller-skate";

function saturdayFun (activity) {

  return `This Saturday, I want to ${activity}!`

}


function mondayWork (activity="go to the office") {
    return mondayWork (`This Monday, I will ${activity}.`)
}


wrapAdjective = function(style="*") {
  return function(adjective="special") {
    return `You are ${style}${adjective}${style}!`
  }
}


