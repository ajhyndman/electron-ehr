module View exposing (view)

import Html as H
import Html.Attributes exposing (..)
import Json.Decode


view model =
  H.div
    [
      contenteditable True,
      style [
        ("background", "#FFF"),
        ("color", "#222233"),
        ("min-height", "200px"),
        ("padding", "0.5em")
      ],
    ]
    [
      H.text "Hello, Violet!"
    ]
