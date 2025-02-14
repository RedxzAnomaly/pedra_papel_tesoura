escolha = 0
escolha_player2 = 0

def on_button_pressed_a():
    global escolha
    basic.show_icon(IconNames.SMALL_DIAMOND)
    escolha = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global escolha_player2
    basic.clear_screen()
    basic.pause(1000)
    escolha_player2 = randint(0, 3)
    if escolha_player2 == 1:
        basic.show_icon(IconNames.SCISSORS)
    elif escolha_player2 == 2:
        basic.show_icon(IconNames.SQUARE)
    else:
        basic.show_icon(IconNames.SMALL_DIAMOND)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_ab():
    global escolha
    basic.show_icon(IconNames.SCISSORS)
    escolha = 3
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global escolha
    basic.show_icon(IconNames.SQUARE)
    escolha = 2
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    pass
basic.forever(on_forever)
