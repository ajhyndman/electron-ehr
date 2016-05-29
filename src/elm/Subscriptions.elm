module Subscriptions exposing (subscriptions)


import Model
import Ports
import Update


subscriptions : Model.Model -> Sub Update.Action
subscriptions model =
  Ports.selection
    (\selection -> Update.UpdateSelection selection)