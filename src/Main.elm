port module Main exposing (main)

import Html.App as App

import Subscriptions
import Model
import Update
import View


main : Program Never
main =
  App.program
    {
      init = init,
      update = Update.update,
      subscriptions = Subscriptions.subscriptions,
      view = View.view
    }


init : (Model.Model, Cmd Update.Action)
init =
  (
    {
      selection = {
        anchorOffset = 0,
        focusOffset = 0
      },
      note = "Hello, Violet!"
    },
    Cmd.none
  )