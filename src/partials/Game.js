import Board from './Board';
import {SVG_NS} from '../settings';

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;

		// Other code goes here...
		this.gameElement = document.getElementById(this.element);
    //create a board object and set width and height to game width and heights
    this.board = new Board(this.width, this.height);
  }

  render() {
		// More code goes here....
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
    



  }
}
