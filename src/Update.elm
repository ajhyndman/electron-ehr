module Update exposing (update, Action (..))


import Keys
import Model


type Action = Keypress Int
            | UpdateSelection Model.Selection
            | NoOp


update : Action -> model -> (model, Cmd Action)
update action model =
  case action of
    Keypress keycode ->
      let code = (Debug.log "keycode" keycode)
      in
        if
          code == Keys.left
        then
          ((Debug.log "left" model), Cmd.none)
        else
          (model, Cmd.none)
    _ ->
      (model, Cmd.none)
