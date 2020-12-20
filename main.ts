namespace SpriteKind {
    export const Bacteria = SpriteKind.create()
}
function doGenerateSprites () {
    if (blockSettings.exists("tablica") && (blockSettings.readNumber("wx") == wx && blockSettings.readNumber("wy") == wy)) {
        dozapisu = blockSettings.readNumberArray("tablica")
        game.splash("odczytane:", convertToText(dozapisu.length))
        for (let index3 = 0; index3 <= wx * wy - 1; index3++) {
            if (dozapisu[index3] == 1) {
                mySprite = sprites.create(img`
                    7 7 
                    7 7 
                    `, SpriteKind.Bacteria)
                mySprite.z = 1
            } else {
                mySprite = sprites.create(img`
                    f f 
                    f f 
                    `, SpriteKind.Bacteria)
                mySprite.z = 0
            }
            mySprite.setPosition(index3 % wx * dx + px, dy * Math.floor(index3 / wx) + py)
            list.insertAt(index3, mySprite)
        }
    } else {
        for (let index3 = 0; index3 <= wx * wy - 1; index3++) {
            if (Math.percentChance(16)) {
                mySprite = sprites.create(img`
                    7 7 
                    7 7 
                    `, SpriteKind.Bacteria)
                mySprite.z = 1
            } else {
                mySprite = sprites.create(img`
                    f f 
                    f f 
                    `, SpriteKind.Bacteria)
                mySprite.z = 0
            }
            mySprite.setPosition(index3 % wx * dx + px, dy * Math.floor(index3 / wx) + py)
            list.insertAt(index3, mySprite)
        }
        dozapisu = []
        for (let index3 = 0; index3 <= wx * wy - 1; index3++) {
            dozapisu.insertAt(index3, list[index3].z)
        }
        blockSettings.writeNumberArray("tablica", dozapisu)
        blockSettings.writeNumber("wx", wx)
        blockSettings.writeNumber("wy", wy)
    }
}
function doCheckSprite (num: number) {
    if (num >= 0 && num <= wx * wy - 1) {
        if (list[num].z == 1 || list[num].z == 3) {
            return 1
        } else {
            return 0
        }
    } else {
        return -1
    }
}
function doGenerateBlinker () {
    list[45].setImage(img`
        7 7 
        7 7 
        `)
    list[46].setImage(img`
        7 7 
        7 7 
        `)
    list[47].setImage(img`
        7 7 
        7 7 
        `)
    list[45].z = 1
    list[46].z = 1
    list[47].z = 1
}
function doCallculateCell (num: number) {
    friends = 0
    if (num % wx > 0 && doCheckSprite(num - 1) == 1) {
        friends += 1
    }
    if (num % wx < wx - 1 && doCheckSprite(num + 1) == 1) {
        friends += 1
    }
    if (num >= wx && doCheckSprite(num - wx) == 1) {
        friends += 1
    }
    if (num < (wy - 1) * wx && doCheckSprite(num + wx) == 1) {
        friends += 1
    }
    if (num % wx > 0 && num >= wx && doCheckSprite(num - (wx + 1)) == 1) {
        friends += 1
    }
    if (num >= wx && num % wx < wx - 1 && doCheckSprite(num - (wx - 1)) == 1) {
        friends += 1
    }
    if (num < (wy - 1) * wx && num % wx > 0 && doCheckSprite(num + (wx - 1)) == 1) {
        friends += 1
    }
    if (num < (wy - 1) * wx && num % wx < wx - 1 && doCheckSprite(num + (wx + 1)) == 1) {
        friends += 1
    }
    return friends
}
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    game.splash("regenerating")
    doRegenerateSprites(randint(16, 59))
})
function doGenerateAligator () {
    list[45].setImage(img`
        7 7 
        7 7 
        `)
    list[46].setImage(img`
        7 7 
        7 7 
        `)
    list[47].setImage(img`
        7 7 
        7 7 
        `)
    list[48].setImage(img`
        7 7 
        7 7 
        `)
    list[49].setImage(img`
        7 7 
        7 7 
        `)
    list[50].setImage(img`
        7 7 
        7 7 
        `)
    list[64].setImage(img`
        7 7 
        7 7 
        `)
    list[71].setImage(img`
        7 7 
        7 7 
        `)
    list[83].setImage(img`
        7 7 
        7 7 
        `)
    list[92].setImage(img`
        7 7 
        7 7 
        `)
    list[104].setImage(img`
        7 7 
        7 7 
        `)
    list[111].setImage(img`
        7 7 
        7 7 
        `)
    list[125].setImage(img`
        7 7 
        7 7 
        `)
    list[126].setImage(img`
        7 7 
        7 7 
        `)
    list[127].setImage(img`
        7 7 
        7 7 
        `)
    list[128].setImage(img`
        7 7 
        7 7 
        `)
    list[129].setImage(img`
        7 7 
        7 7 
        `)
    list[130].setImage(img`
        7 7 
        7 7 
        `)
    list[45].z = 1
    list[46].z = 1
    list[47].z = 1
    list[48].z = 1
    list[49].z = 1
    list[50].z = 1
    list[64].z = 1
    list[71].z = 1
    list[83].z = 1
    list[92].z = 1
    list[104].z = 1
    list[111].z = 1
    list[125].z = 1
    list[125].z = 1
    list[126].z = 1
    list[127].z = 1
    list[128].z = 1
    list[129].z = 1
    list[130].z = 1
}
function doGenerate1 () {
    doGenerateAligator()
}
function doRegenerateSprites (percchance: number) {
    dozapisu = []
    for (let index3 = 0; index3 <= wx * wy - 1; index3++) {
        if (Math.percentChance(percchance)) {
            list[index3].setImage(img`
                7 7 
                7 7 
                `)
            list[index3].z = 1
        } else {
            list[index3].setImage(img`
                f f 
                f f 
                `)
            list[index3].z = 0
        }
        dozapisu.insertAt(index3, list[index3].z)
    }
    blockSettings.writeNumberArray("tablica", dozapisu)
    blockSettings.writeNumber("wx", wx)
    blockSettings.writeNumber("wy", wy)
}
function doGenerateFrog () {
    list[45].setImage(img`
        7 7 
        7 7 
        `)
    list[46].setImage(img`
        7 7 
        7 7 
        `)
    list[64].setImage(img`
        7 7 
        7 7 
        `)
    list[87].setImage(img`
        7 7 
        7 7 
        `)
    list[105].setImage(img`
        7 7 
        7 7 
        `)
    list[106].setImage(img`
        7 7 
        7 7 
        `)
    list[45].z = 1
    list[46].z = 1
    list[64].z = 1
    list[87].z = 1
    list[105].z = 1
    list[106].z = 1
}
function doLive () {
    zmiany = 0
    for (let index = 0; index <= wx * wy - 1; index++) {
        howmany = doCallculateCell(index)
        z = list[index].z
        // list[index].setImage(img`
        // b b
        // b b
        // `)
        // list[index].setImage(img`
        // 2 2
        // 2 2
        // `)
        // list[index].setImage(img`
        // 9 9
        // 9 9
        // `)
        // list[index].setImage(img`
        // f f
        // f f
        // `)
        if (z == 0 && howmany == 3) {
            list[index].z = 2
            zmiany += 1
        } else if (z == 1 && howmany != 2 && howmany != 3) {
            list[index].z = 3
            zmiany += 1
        }
    }
    for (let index2 = 0; index2 <= wx * wy - 1; index2++) {
        z = list[index2].z
        if (z == 2) {
            list[index2].z = 1
            list[index2].setImage(img`
                7 7 
                7 7 
                `)
        } else if (z == 3) {
            list[index2].z = 0
            list[index2].setImage(img`
                f f 
                f f 
                `)
        }
    }
    if (zmiany == 0) {
        game.splash("Stable")
    }
}
let z = 0
let howmany = 0
let zmiany = 0
let friends = 0
let mySprite: Sprite = null
let dozapisu: number[] = []
let wx = 0
let wy = 0
let dy = 0
let dx = 0
let py = 0
let px = 0
let list: Sprite[] = []
list = []
px = 1
py = 1
dx = 2
dy = 2
wy = 20
wx = 20
info.setScore(0)
doGenerateSprites()
forever(function () {
    doLive()
    info.changeScoreBy(1)
})
