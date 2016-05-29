module Model exposing (..)


type alias Model =
  {
    selection: Selection,
    note: String
  }

type alias Selection =
  {
    anchorOffset: Int,
    focusOffset: Int
  }
