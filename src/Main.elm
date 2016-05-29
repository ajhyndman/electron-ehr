import Html
import Html.App as App


main : Program Never
main =
  App.beginnerProgram
    {
      model = model,
      update = update,
      view = view
    }


model = 3

view model =
  Html.div
    []
    [
      Html.text "Hello, Violet!"
    ]

update model action =
  model
