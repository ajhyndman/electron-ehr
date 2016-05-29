port module Ports exposing (..)


import Model


port selection : (Model.Selection -> message) -> Sub message
