namespace SpriteKind {
    export const Bacteria = SpriteKind.create()
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
        } else if (z == 1 && howmany != 2 && howmany != 3) {
            list[index].z = 3
        } else if (z == 1 && (howmany == 2 || howmany == 3)) {
        	
        } else if (z == 0 && howmany != 3) {
        	
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
                d d 
                d d 
                `)
        } else if (z == 0) {
            list[index2].setImage(img`
                d d 
                d d 
                `)
        } else if (z == 1) {
            list[index2].setImage(img`
                7 7 
                7 7 
                `)
        } else {
        	
        }
    }
}
let z = 0
let howmany = 0
let friends = 0
let mySprite: Sprite = null
let wx = 0
let wy = 0
let list: Sprite[] = []
list = []
let dx = 2
let dy = 2
wy = 80
wx = 60
info.setScore(0)
for (let index3 = 0; index3 <= wx * wy - 1; index3++) {
    if (Math.percentChance(16)) {
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
