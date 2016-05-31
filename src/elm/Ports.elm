port module Ports exposing (selection, setSelection)


import Model


-- This port receives updates whenever $('document').on('selectionchange')
-- fires.
port selection : (Model.Selection -> message) -> Sub message

-- This port is used to imperatively re-sync the selection with our model
-- state.
port setSelection : Model.Selection -> Cmd message
