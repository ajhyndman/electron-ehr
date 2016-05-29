module View exposing (view)

import Html as H
import Html.Attributes exposing (..)


view : model -> H.Html view
view model =
  H.div
    [
      style [("padding", "0.5em")]
    ]
    [
      H.text "Hello, Violet!"
    ]
