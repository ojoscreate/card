namespace SpriteKind {
          export const destroyer = SpriteKind.create()
      }
      controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
                
      })
      let mySprite: Sprite = null
      tiles.setCurrentTilemap(tilemap`level1`)
      mySprite.setStayInScreen(true)
      mySprite = sprites.create(img`
          . . . . . . . . . . . . . . . . 
          . . . . . . . . . . . . . . . . 
          . . . . . . . . . . . . . . . . 
          . . 8 . . . . . . . . . . . . . 
          . . 8 . . 8 8 8 8 8 . . . . . . 
          . . 8 8 . . 8 8 . . . . . . . . 
          . 8 8 8 . 8 8 8 8 . . . . . . . 
          . 8 8 8 8 8 8 8 8 . . . . . . . 
          . . . . 8 8 8 8 8 . . . . . . . 
          . . . . . . . . . . . . . . . . 
          . . . . . . . . . . . . . . . . 
          . . . . . . . . . . . . . . . . 
          . . . . . . . . . . . . . . . . 
          . . . . . . . . . . . . . . . . 
          . . . . . . . . . . . . . . . . 
          . . . . . . . . . . . . . . . . 
          `, SpriteKind.Player)
      scene.cameraFollowSprite(mySprite)
      controller.moveSprite(mySprite)
      let mySprite3 = sprites.create(img`
          . . f f f . . . . . . . . . . . 
          f f f c c . . . . . . . . f f f 
          f f c c c . c c . . . f c b b c 
          f f c 3 c c 3 c c f f b b b c . 
          f f c 3 b c 3 b c f b b c c c . 
          f c b b b b b b c f b c b c c . 
          c c 1 b b b 1 b c b b c b b c . 
          c b b b b b b b b b c c c b c . 
          c b 1 f f 1 c b b c c c c c . . 
          c f 1 f f 1 f b b b b f c . . . 
          f f f f f f f b b b b f c . . . 
          f f 2 2 2 2 f b b b b f c c . . 
          . f 2 2 2 2 2 b b b c f . . . . 
          . . f 2 2 2 b b b c f . . . . . 
          . . . f f f f f f f . . . . . . 
          . . . . . . . . . . . . . . . . 
          `, SpriteKind.destroyer)
      let mySprite2 = sprites.create(img`
          . . . . . . . . . . . . . . . . 
          . . . . . . . . . . . . . . . . 
          . . . 3 3 3 3 . . . . . . . . . 
          . . . 3 . . . 3 3 3 3 . . . . . 
          . . 3 . . . . 4 4 4 4 3 . . . . 
          . . 3 . 4 4 . 4 4 4 4 3 . . . . 
          . . 3 . 4 4 . 3 . 3 . 3 . . . . 
          . . 3 . 3 3 . . 3 . 3 3 . . . . 
          . . 3 . 3 3 . 3 4 4 4 . . . . . 
          . . 3 3 3 . 4 4 4 . 3 . . . . . 
          . . . . 3 . 4 . . 3 3 . . . . . 
          . . . . 3 3 3 3 3 3 . . . . . . 
          . . . . . . . . . . . . . . . . 
          . . . . . . . . . . . . . . . . 
          . . . . . . . . . . . . . . . . 
          . . . . . . . . . . . . . . . . 
          `, SpriteKind.Enemy)
      mySprite3.follow(mySprite, 10)
      