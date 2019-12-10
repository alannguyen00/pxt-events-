let lime = sprites.create(img`
f f f . . f f f f f . . . . . . 
f 7 7 f f 7 7 7 7 7 f f . . . . 
b f 7 7 1 7 1 1 1 7 7 7 f . . . 
. b 7 7 7 7 1 1 7 7 1 1 7 f . . 
. b d 7 7 7 7 7 7 7 7 1 1 7 f . 
b f 7 7 7 7 7 7 7 7 7 7 1 7 f . 
c d 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
c d f 7 7 7 7 7 7 7 7 7 7 1 7 f 
c f 7 7 7 d 7 7 7 7 7 7 7 7 7 f 
c f d 7 f 7 d 7 7 7 7 7 7 7 7 f 
. c f 7 7 7 7 d d d 7 7 7 7 7 b 
. c f d 7 f 7 d f f d 7 7 7 f c 
. . c f f d f f f f f d d 7 d c 
. . . c f f f f f f f f 7 7 7 f 
. . . . c c b f f f b b f 7 f f 
. . . . . . c c c c c c b b f . 
`, SpriteKind.Player)
lime.setPosition(36, 25)
let beeef = sprites.create(img`
. . . . . . . . . . b b b b b b . . . . . . . . . . . . . . . . 
. . . . . . . b b b 4 4 4 4 4 4 b b . . . . . . . . . . . . . . 
. . . . . 2 2 4 4 4 4 4 d d d 4 4 4 b . . . . . . . . . . . . . 
. . . . 2 4 4 4 4 4 4 4 4 d d d d 4 4 e . . . . . . . . . . . . 
. . . 2 4 4 4 4 4 4 4 4 4 4 4 d d d 4 b e . . . . . . . . . . . 
. . 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d 4 4 b e . . . . . . . . . . 
. 2 b 4 4 4 4 6 4 4 4 6 6 4 4 4 4 4 d 4 b e . . . . . . . . . . 
. 2 b 4 4 4 4 6 4 4 4 6 4 6 4 4 4 4 4 4 b b e . . . . . . . . . 
2 b b b 4 4 4 6 4 4 6 4 4 6 4 4 4 4 4 4 b b e . . . . . . . . . 
2 b b b 4 4 6 4 4 6 4 4 4 6 4 4 4 4 4 4 b b e . . . . . . . . . 
2 b b 4 b 4 6 6 4 4 4 4 4 4 6 6 4 4 4 4 4 b b e . . . . . . . . 
2 b b 4 4 4 4 6 4 4 4 4 4 4 4 4 6 6 4 4 4 4 b e . . . . . . . . 
2 b b 4 4 4 4 6 4 4 4 4 4 4 4 4 4 4 6 4 4 4 4 e . . . . . . . . 
2 b b b 4 4 6 b b b 4 4 4 4 4 4 4 4 4 6 6 4 4 e . . . . . . . . 
2 2 b b b 4 4 4 b b 4 b b 4 4 4 4 4 4 4 4 6 b e . . . . . . . . 
. 2 b b b b b 4 4 b b b b 4 4 4 4 4 4 4 4 6 b e . . . . . . . . 
. 2 2 b b b b b b b 6 4 4 b b b 4 4 4 4 4 4 b b e . . . . . . . 
. . e e e b b b b b 6 b 4 4 b b b 4 6 4 4 4 4 b e . . . . . . . 
. . . e e e e e b b 6 b b b b b 4 4 6 4 4 4 4 b e . . . . . . . 
. . . . . e e e e e e 2 2 2 b b 4 4 b b b 4 b b e . . . . . . . 
. . . . . . . e e e e e 2 2 2 b b 4 4 b b b b e e . . . . . . . 
. . . . . . . . . . . . e 2 2 2 b b b b b b b e c . . . . . . . 
. . . . . . . . . . . . . . e e 2 b b b b e e b d b . . . . . . 
. . . . . . . . . . . . . . . . . e e e e e c d d d b . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . c d 1 1 b b b b . 
. . . . . . . . . . . . . . . . . . . . . . . . c d 1 1 1 d b b 
. . . . . . . . . . . . . . . . . . . . . . . . . b 1 1 1 1 1 c 
. . . . . . . . . . . . . . . . . . . . . . . . . c 1 1 d d 1 c 
. . . . . . . . . . . . . . . . . . . . . . . . . c d 1 d b c . 
. . . . . . . . . . . . . . . . . . . . . . . . . c b 1 1 c . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . c c c . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
beeef.setPosition(120, 96)
let pizza = sprites.create(img`
. . . . . . b b b b . . . . . . 
. . . . . . b 4 4 4 b . . . . . 
. . . . . . b b 4 4 4 b . . . . 
. . . . . b 4 b b b 4 4 b . . . 
. . . . b d 2 2 2 4 b 4 4 b . . 
. . . . b 5 5 5 2 2 4 e 4 4 b . 
. . . b d 5 5 3 5 2 2 4 e 4 4 e 
. . . b 5 5 5 5 5 5 2 2 e e e e 
. . b d 5 3 5 5 5 5 5 2 2 e e e 
. . b 5 5 5 5 5 3 5 3 5 2 d e e 
. b 5 5 5 5 3 5 3 5 5 5 d d e 4 
. b 5 3 5 5 5 5 5 5 5 d d e 4 . 
b d 5 5 5 5 5 5 d d d 4 4 . . . 
b 5 5 5 5 d d 4 4 4 4 . . . . . 
4 d d d 4 4 4 . . . . . . . . . 
4 4 4 4 . . . . . . . . . . . . 
`, SpriteKind.Player)
pizza.setPosition(40, 113)
let ham = sprites.create(img`
. . . . . . 2 2 2 2 . . . . . . 
. . . . 2 2 e e e e 2 e . . . . 
. . . 2 e d 1 1 d d e 2 e . . . 
. . 2 e 1 d e e e d d e e . . . 
. 2 e 1 e e e e e d 1 e b e . . 
. 2 1 d e e e e d e e 1 e b b . 
2 e 1 d e e 1 1 e e e 1 e 4 b b 
2 d e e d 1 e 1 e e e 1 e 4 4 b 
2 d e e e 1 e 1 e e e 1 b 4 4 e 
2 d e e e 1 1 e e e e 1 b 4 4 e 
e d e e e e d e e e d d b 4 4 e 
e d d e e e d e e e 1 e b 4 b e 
e e d e e 1 d d e d 1 b b e e . 
. e e 1 1 d d 1 1 1 b b e e e . 
. . e e e e e e e b e e e e . . 
. . . e e e e e e e e e e . . . 
`, SpriteKind.Player)
ham.setPosition(26, 86)
let donut = sprites.create(img`
. . . . . . b b b b a a . . . . 
. . . . b b d d d 3 3 3 a a . . 
. . . b d d d 3 3 2 2 2 3 a a . 
. . b d d 3 3 6 6 3 3 2 3 3 a . 
. b 3 d 7 7 3 3 3 b 3 3 3 3 a b 
. b 3 7 7 3 3 a a 3 3 4 4 3 a b 
b 3 3 7 3 3 a a 3 3 3 3 d a 4 b 
b 5 3 3 3 b a 3 3 3 a 3 d a 4 b 
b 5 3 9 3 3 3 1 1 a a d a 4 4 e 
a 5 5 9 9 3 1 3 a a d a 4 4 4 e 
a 3 3 3 9 3 3 3 d d a 4 4 4 e . 
a a 3 3 3 d d d a a 4 4 4 e e . 
. e a a a a a a 4 4 4 4 e e . . 
. . e e b b 4 4 4 4 b e e . . . 
. . . e e e e e e e e . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
donut.setPosition(12, 85)
