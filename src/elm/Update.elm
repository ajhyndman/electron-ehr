module Update exposing (update, Action (..))

import Dict
import String

import Keys
import Model


type Action = Keypress Int
            | UpdateSelection Model.Selection
            | NoOp


update : Action -> Model.Model -> (Model.Model, Cmd Action)
update action model =
  case action of
    Keypress keycode ->
      let
        maybeKey = (Debug.log "key" (Dict.get keycode Keys.codes))
      in
        case maybeKey of
          Just key ->
            case key of
              Keys.Backspace ->
                let
                  focus = model.selection.focusOffset
                  next =
                    {
                      model
                        | note =
                          (
                            (String.left focus model.note) |> (String.slice 0 -1)
                          ) ++ String.dropLeft focus model.note
                    }
                in
                  ((Debug.log "Backspace!" next), Cmd.none)
              _ ->
                ((Debug.log "model" model), Cmd.none)
          _ ->
            (model, Cmd.none)
        -- case key of
        --   Left ->
        --     (model, Cmd.none)
        --   Right ->
        --     (model)
    UpdateSelection selection ->
      let
        next = { model | selection = selection }
      in
        ((Debug.log "model" next), Cmd.none)
    _ ->
      (model, Cmd.none)
