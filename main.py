@namespace
class SpriteKind:
    Bacteria = SpriteKind.create()
def doCallculateCell(num: number):
    global friends
    friends = 0
    if num >= 1:
        if list2[num - 1].z == 1:
            friends += 1
    if num <= 4798:
        if list2[num + 1].z == 1:
            friends += 1
    if num >= wx:
        if list2[num - wx].z == 1:
            friends += 1
    if num <= 4799 - wx:
        if list2[num + wx].z == 1:
            friends += 1
    if num >= wx + 1:
        if list2[num - (wx + 1)].z == 1:
            friends += 1
    if num >= wx - 1:
        if list2[num - (wx - 1)].z == 1:
            friends += 1
    if num <= 4799 - (wx - 1):
        if list2[num + (wx - 1)].z == 1:
            friends += 1
    if num <= 4799 - (wx + 1):
        if list2[num + (wx + 1)].z == 1:
            friends += 1
    return friends
def doLive():
    global howmany
    for index in range(4800):
        howmany = doCallculateCell(index)
        if list2[index].z == 0 and howmany == 3:
            list2[index].z = 2
        elif howmany != 2 and howmany != 3:
            list2[index].z = 3
    for index2 in range(4800):
        if list2[index2].z == 2:
            list2[index2].z = 1
            list2[index2].set_image(img("""
                7 7 
                                7 7
            """))
        elif list2[index2].z == 3:
            list2[index2].z = 0
            list2[index2].set_image(img("""
                d d 
                                d d
            """))
howmany = 0
friends = 0
mySprite: Sprite = None
wx = 0
list2: List[Sprite] = []
list2 = []
dx = 2
dy = 2
wy = 80
wx = 60
info.set_score(0)
for index3 in range(4800):
    if Math.percent_chance(50):
        mySprite = sprites.create(img("""
                7 7 
                            7 7
            """),
            SpriteKind.Bacteria)
        mySprite.z = 1
    else:
        mySprite = sprites.create(img("""
                d d 
                            d d
            """),
            SpriteKind.Bacteria)
        mySprite.z = 0
    mySprite.set_position((index3 - wy * Math.floor(index3 / wy)) * dx,
        dy * Math.floor(index3 / wy))
    list2.insert_at(index3, mySprite)

def on_on_update():
    doLive()
    info.change_score_by(1)
game.on_update(on_on_update)
