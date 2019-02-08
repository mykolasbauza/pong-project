import Board from './Board';
import Paddle from './Paddle';
import { SVG_NS } from '../settings';
import { KEYS } from '../settings';

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;

		// Other code goes here...
		this.gameElement = document.getElementById(this.element);
    //create a board object and set width and height to game width and heights
    this.board = new Board(this.width, this.height);

    this.paddleWidth = 8;
    this.paddleHeight = 56;
    this.boardGap = 10;

    this.player1 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.boardGap,
      ((this.height - this.paddleHeight) /2),
      KEYS.a,
      KEYS.z
    )

    this.player2 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      (this.width -this.boardGap - this.paddleWidth),
      ((this.height - this.paddleHeight) /2),
      KEYS.up,
      KEYS.down
    )
  }

  render() {
    //Create a svg element

    //Be sure to empty out before rendering 
    this.gameElement.innerHTML = '';

    let svg = document.createElementNS(SVG_NS, 'svg');
    //set attributes
    svg.setAttributeNS(null, 'width', this.width);
    svg.setAttributeNS(null, 'height', this.height);
    svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
    //append svg to our game element (selected by id)
    this.gameElement.appendChild(svg);

    //render the game components inside the SVG
    this.board.render(svg);
    this.player1.render(svg);
    this.player2.render(svg);




  }
}
