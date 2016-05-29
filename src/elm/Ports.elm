port module Ports exposing (selection)


import Model


-- This port receives updates whenever $('document').on('selectionchange')
-- fires.
port selection : (Model.Selection -> message) -> Sub message
