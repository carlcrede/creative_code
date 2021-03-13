
class Util {

    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    randomHexColor() {
        return '#'+Math.floor(Math.random()*16777215).toString(16);
    }

}