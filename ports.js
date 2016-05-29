/*jslint es6: true, browser: true */
/*global Elm */


// get a reference to the div where we will show our UI
const container = document.getElementById('app');

// start the elm app in the container
// and keep a reference for communicating with the appp
const app = Elm.Main.embed(container);


document.addEventListener("selectionchange", function(e) {
  'use strict';

  const DOMSelection = document.getSelection();

  app.ports.selection.send({
    anchorOffset: DOMSelection.anchorOffset,
    focusOffset: DOMSelection.focusOffset,
  });
}, false);
