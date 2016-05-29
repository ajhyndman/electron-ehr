port module Main exposing (main)

import Html.App as App

import Ports
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
  ("Hello, Violet!", Cmd.none)