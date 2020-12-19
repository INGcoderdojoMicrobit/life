namespace SpriteKind {
    export const Bacteria = SpriteKind.create()
}
function doCallculateCell (num: number) {
    friends = 0
    if (num >= 1) {
        if (list[num - 1].z == 1) {
            friends += 1
        }
    }
    if (num <= 4798) {
        if (list[num + 1].z == 1) {
            friends += 1
        }
    }
    if (num >= wx) {
        if (list[num - wx].z == 1) {
            friends += 1
        }
    }
    if (num <= 4799 - wx) {
        if (list[num + wx].z == 1) {
            friends += 1
        }
    }
    if (num >= wx + 1) {
        if (list[num - (wx + 1)].z == 1) {
            friends += 1
        }
    }
    if (num >= wx - 1) {
        if (list[num - (wx - 1)].z == 1) {
            friends += 1
        }
    }
    if (num <= 4799 - (wx - 1)) {
        if (list[num + (wx - 1)].z == 1) {
            friends += 1
        }
    }
    if (num <= 4799 - (wx + 1)) {
        if (list[num + (wx + 1)].z == 1) {
            friends += 1
        }
    }
    return friends
}
function doLive () {
    for (let index = 0; index <= 4799; index++) {
        howmany = doCallculateCell(index)
        if (list[index].z == 0 && howmany == 3) {
            list[index].z = 2
        } else if (howmany != 2 && howmany != 3) {
            list[index].z = 3
        }
    }
    for (let index = 0; index <= 4799; index++) {
        if (list[index].z == 2) {
            list[index].z = 1
            list[index].setImage(img`
                7 7 
                7 7 
                `)
        } else if (list[index].z == 3) {
            list[index].z = 0
            list[index].setImage(img`
                d d 
                d d 
                `)
        }
    }
}
let howmany = 0
let friends = 0
let mySprite: Sprite = null
let wx = 0
let list: Sprite[] = []
list = []
let dx = 2
let dy = 2
let wy = 80
wx = 60
info.setScore(0)
for (let index = 0; index <= 4799; index++) {
    if (Math.percentChance(50)) {
        mySprite = sprites.create(img`
            7 7 
            7 7 
            `, SpriteKind.Bacteria)
        mySprite.z = 1
    } else {
        mySprite = sprites.create(img`
            d d 
            d d 
            `, SpriteKind.Bacteria)
        mySprite.z = 0
    }
    mySprite.setPosition((index - wy * Math.floor(index / wy)) * dx, dy * Math.floor(index / wy))
    list.insertAt(index, mySprite)
}
game.onUpdate(function () {
    doLive()
    info.changeScoreBy(1)
})
