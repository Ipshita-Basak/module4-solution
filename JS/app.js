
(function () {
   var names = ["Ipshita"];

   for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();


  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);    // Say "Good Bye"
  } else {
    helloSpeaker.speak(names[i]);  // Say "Hello"
  }
}

})();
