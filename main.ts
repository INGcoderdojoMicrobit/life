namespace SpriteKind {
    export const Bacteria = SpriteKind.create()
}
function doGenerateSprites () {
    if (blockSettings.exists("tablica") && (blockSettings.readNumber("wx") == wx && blockSettings.readNumber("wy") == wy)) {
        dozapisu = blockSettings.readNumberArray("tablica")
        // game.splash("odczytane:", convertToText(dozapisu.length))
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
        for (let index32 = 0; index32 <= wx * wy - 1; index32++) {
            mySprite = sprites.create(img`
                f f 
                f f 
                `, SpriteKind.Bacteria)
            mySprite.z = 0
            mySprite.setPosition(index32 % wx * dx + px, dy * Math.floor(index32 / wx) + py)
            list.insertAt(index32, mySprite)
        }
        // if -1 as parameter - function generates Tree :-)
        doRegenerateSprites(20)
        dozapisu = []
        for (let index33 = 0; index33 <= wx * wy - 1; index33++) {
            dozapisu.insertAt(index33, list[index33].z)
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
    // game.splash("regenerating")
    // if false - regenerates Tree :-)
    if (true) {
        doRegenerateSprites(randint(16, 59))
    } else {
        doRegenerateSprites(-1)
    }
})
function doAddPlot (num: number) {
    list[num].setImage(img`
        7 7 
        7 7 
        `)
    list[num].z = 1
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
function doRegenerateSprites (percchance: number) {
    dozapisu = []
    if (percchance < 0) {
        for (let index34 = 0; index34 <= wx * wy - 1; index34++) {
            list[index34].setImage(img`
                f f 
                f f 
                `)
            list[index34].z = 0
        }
        doGenerateTree()
    }
    for (let index35 = 0; index35 <= wx * wy - 1; index35++) {
        if (percchance >= 0) {
            if (Math.percentChance(percchance)) {
                list[index35].setImage(img`
                    7 7 
                    7 7 
                    `)
                list[index35].z = 1
            } else {
                list[index35].setImage(img`
                    f f 
                    f f 
                    `)
                list[index35].z = 0
            }
        }
        dozapisu.insertAt(index35, list[index35].z)
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
    /*if (zmiany == 0) {
        game.splash("Stable :-)")
    }
    */
}
function doGenerateTree () {
    drzewko = [
    15,
    44,
    45,
    46,
    73,
    74,
    75,
    76,
    77,
    102,
    103,
    104,
    105,
    106,
    107,
    108,
    135,
    164,
    165,
    166,
    192,
    193,
    194,
    195,
    196,
    197,
    198,
    220,
    221,
    222,
    223,
    224,
    225,
    226,
    227,
    228,
    229,
    230,
    249,
    250,
    251,
    252,
    253,
    254,
    255,
    256,
    257,
    258,
    259,
    260,
    261,
    285,
    314,
    315,
    316,
    342,
    343,
    344,
    345,
    346,
    347,
    348,
    370,
    371,
    372,
    373,
    374,
    375,
    376,
    377,
    378,
    379,
    380,
    399,
    400,
    401,
    402,
    403,
    404,
    405,
    406,
    407,
    408,
    409,
    410,
    411,
    428,
    429,
    430,
    431,
    432,
    433,
    434,
    435,
    436,
    437,
    438,
    439,
    440,
    441,
    442,
    456,
    457,
    458,
    459,
    460,
    461,
    462,
    463,
    464,
    465,
    466,
    467,
    468,
    469,
    470,
    471,
    472,
    473,
    474,
    494,
    495,
    496,
    524,
    525,
    526
    ]
    for (let index36 = 0; index36 <= wx * wy - 1; index36++) {
        if (index36 % wx < 5 || index36 % wx > 25) {
            if (Math.percentChance(5)) {
                list[index36].setImage(img`
                    7 7 
                    7 7 
                    `)
                list[index36].z = 1
            } else {
                list[index36].setImage(img`
                    f f 
                    f f 
                    `)
                list[index36].z = 0
            }
        }
    }
    for (let value of drzewko) {
        doAddPlot(value)
    }
    game.splash("Nacisnij A")
    music.setTempo(60)
    for (let index = 0; index < 2; index++) {
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
}
let drzewko: number[] = []
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
wx = 30
info.setScore(0)
doGenerateSprites()
forever(function () {
    doLive()
    info.changeScoreBy(1)
})
