import "./images/1.png!image";
import "./images/2.png!image";
import "./images/3.png!image";
import "./images/4.png!image";
import "./images/5.png!image";
import "./images/6.png!image";
import "./images/7.png!image";
import "./images/8.png!image";
import "./images/9.png!image";
import "./images/10.png!image";
import "./images/11.png!image";
import "./images/12.png!image";
import "./images/13.png!image";
import "./images/14.png!image";
import "./images/15.png!image";
import "./images/16.png!image";
import "./images/17.png!image";
import "./images/18.png!image";
import "./images/19.png!image";
import "./images/20.png!image";
import "./images/21.png!image";
import "./images/22.png!image";
import "./images/23.png!image";
import "./images/24.png!image";
import "./images/25.png!image";
import "./images/26.png!image";
import "./images/27.png!image";
import "./images/28.png!image";
import "./images/29.png!image";
import "./images/30.png!image";
import "./images/31.png!image";
import "./images/32.png!image";
import "./images/33.png!image";
import "./images/34.png!image";
import "./images/35.png!image";
import "./images/36.png!image";
import "./images/37.png!image";
import "./images/38.png!image";
import "./images/39.png!image";
import "./images/40.png!image";
import "./images/41.png!image";
import "./images/42.png!image";
import "./images/43.png!image";
import "./images/44.png!image";
import "./images/45.png!image";
import "./images/46.png!image";
import "./images/47.png!image";
import "./images/48.png!image";
import "./images/49.png!image";
import "./images/50.png!image";
import "./images/51.png!image";
import "./images/52.png!image";
import "./images/53.png!image";
import "./images/54.png!image";


export default function Card(card) {
    this.suit = card.suit;
    this.rank = card.rank;
    this.image =
        (Card.ranksInImagesOrder.indexOf(this.rank) * 4 + Card.suitsInImagesOrder.indexOf(this.suit) + 1) + ".png";
    this.color = card.suit === "Spades" || card.suit === "Clubs" ? "black" : "red";
    this.turnedUp = false;
}

Card.ranksInImagesOrder = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
Card.suitsInImagesOrder = ["Clubs", "Spades", "Hearts", "Diamonds"];

Card.prototype.turnUp = function () {
    this.turnedUp = true;
};
Card.prototype.turnDown = function () {
    this.turnedUp = false;
};
