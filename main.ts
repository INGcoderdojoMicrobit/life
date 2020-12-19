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
    if (num <= wx * wy - 2) {
        if (list[num + 1].z == 1) {
            friends += 1
        }
    }
    if (num >= wx) {
        if (list[num - wx].z == 1) {
            friends += 1
        }
    }
    if (num <= wx * wy - 1 - wx) {
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
    if (num <= wx * wy - 1 - (wx - 1)) {
        if (list[num + (wx - 1)].z == 1) {
            friends += 1
        }
    }
    if (num <= wx * wy - 1 - (wx + 1)) {
        if (list[num + (wx + 1)].z == 1) {
            friends += 1
        }
    }
    return friends
}
function doLive () {
    for (let index = 0; index <= wx * wy - 1; index++) {
        howmany = doCallculateCell(index)
        if (list[index].z == 0 && howmany == 3) {
            list[index].z = 2
            list[index].setImage(img`
                b b 
                b b 
                `)
        } else if (list[index].z == 1 && howmany != 2 && howmany != 3) {
            list[index].z = 3
            list[index].setImage(img`
                2 2 
                2 2 
                `)
        } else if (list[index].z == 1 && (howmany == 2 || howmany == 3)) {
            list[index].setImage(img`
                9 9 
                9 9 
                `)
        } else if (list[index].z == 0 && howmany != 3) {
            list[index].setImage(img`
                f f 
                f f 
                `)
        }
    }
    pause(1000)
    for (let index2 = 0; index2 <= wx * wy - 1; index2++) {
        if (list[index2].z == 2) {
            list[index2].z = 1
            list[index2].setImage(img`
                7 7 
                7 7 
                `)
        } else if (list[index2].z == 3) {
            list[index2].z = 0
            list[index2].setImage(img`
                d d 
                d d 
                `)
        } else if (list[index2].z == 0) {
            list[index2].setImage(img`
                d d 
                d d 
                `)
        } else if (list[index2].z == 1) {
            list[index2].setImage(img`
                7 7 
                7 7 
                `)
        } else {
        	
        }
    }
}
let howmany = 0
let friends = 0
let mySprite: Sprite = null
let wx = 0
let wy = 0
let list: Sprite[] = []
list = []
let dx = 2
let dy = 2
wy = 4
wx = 4
info.setScore(0)
for (let index3 = 0; index3 <= wx * wy - 1; index3++) {
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
    mySprite.setPosition((index3 - wy * Math.floor(index3 / wy)) * dx, dy * Math.floor(index3 / wy))
    list.insertAt(index3, mySprite)
}
forever(function () {
    doLive()
    info.changeScoreBy(1)
})
