module View exposing (view)

import Html as H
import Html.Attributes as A
import Html.Events
import Json.Decode

import Model
import Update


onKeyDown : (Int -> msg) -> H.Attribute msg
onKeyDown tagger =
  Html.Events.onWithOptions
    "keydown"
    {
      stopPropagation = True,
      preventDefault = True
    }
    (Json.Decode.map tagger Html.Events.keyCode)

view : Model.Model -> H.Html Update.Action
view model =
  H.div
    [
      A.contenteditable True,
      A.style [
        ("background", "#FFF"),
        ("color", "#222233"),
        ("min-height", "200px"),
        ("padding", "0.5em")
      ],
      -- Html.Events.onClick "click detected!"
      onKeyDown Update.Keypress
    ]
    [
      H.text model.note
    ]
