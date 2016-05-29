module Keys exposing (codes, Keycode (..))

import Dict


type Keycode
  = Backspace
  | Tab
  | Return
  | Alt
  | Esc
  | Space
  | Left
  | Up
  | Right
  | Down


direction : List Keycode
direction =
  [
    Left,
    Up,
    Right,
    Down
  ]

codes : Dict.Dict number Keycode
codes = Dict.fromList
  [
    (8, Backspace),
    (9, Tab),
    (13, Return),
    (18, Alt),
    (27, Esc),
    (32, Space)
  ]


-- backspace : Keycode
-- backspace = 8

-- tab : Keycode
-- tab = 9

-- return : Keycode
-- return = 13

-- alt : Keycode
-- alt = 18

-- esc : Keycode
-- esc = 27

-- space : Keycode
-- space = 32

-- pageUp : Keycode
-- pageUp = 33

-- pageDown : Keycode
-- pageDown = 34

-- end : Keycode
-- end = 35

-- home : Keycode
-- home = 36

-- left : Keycode
-- left = 37

-- up : Keycode
-- up = 38

-- right : Keycode
-- right = 39

-- down : Keycode
-- down = 40

-- delete : Keycode
-- delete = 46

-- comma : Keycode
-- comma = 188

-- period : Keycode
-- period = 190

-- a : Keycode
-- a = 65

-- z : Keycode
-- z = 90

-- zero : Keycode
-- zero = 48

-- numpad0 : Keycode
-- numpad0 = 96

-- numpad9 : Keycode
-- numpad9 = 10
