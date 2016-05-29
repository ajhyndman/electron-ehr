module Model exposing (..)


type alias Model = String

type alias Selection =
  {
    anchorOffset: Int,
    focusOffset: Int
  }
