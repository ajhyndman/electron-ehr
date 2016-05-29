import Html.App as App

import Model
import Update
import View


main : Program Never
main =
  App.beginnerProgram
    {
      model = Model.model,
      update = Update.update,
      view = View.view
    }
