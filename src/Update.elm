module Update exposing (update, Action (..))


type Action = Keypress Int | Other

type alias Keycode = Int

left : Keycode
left = 37
up = 38
right = 39
down = 40

update : Action -> model -> model
update action model =
  case action of
    Keypress keycode ->
      let code = (Debug.log "keycode" keycode)
      in
        model
    default ->
      model
