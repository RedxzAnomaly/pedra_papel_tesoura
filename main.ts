input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallDiamond)
    escolha = 1
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.pause(1000)
    escolha_player2 = randint(0, 3)
    if (escolha_player2 == 1) {
        basic.showIcon(IconNames.Scissors)
        if (escolha == 3) {
            basic.showString("Empate")
        } else if (escolha == 1) {
            basic.showString("Ganhaste")
        } else {
            basic.showString("Perdeste")
        }
    } else if (escolha_player2 == 2) {
        basic.showIcon(IconNames.Square)
        if (escolha == 2) {
            basic.showString("Empate")
        } else if (escolha == 3) {
            basic.showString("Ganhaste")
        } else {
            basic.showString("Perdeste")
        }
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        if (escolha == 1) {
            basic.showString("Empate")
        } else if (escolha == 2) {
            basic.showString("Ganhaste")
        } else {
            basic.showString("Perdeste")
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Scissors)
    escolha = 3
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Square)
    escolha = 2
})
let escolha_player2 = 0
let escolha = 0
basic.showString("1 2 3")
basic.forever(function () {
	
})
