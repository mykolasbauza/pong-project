import { SVG_NS } from '../settings';
export default class Paddle {
	constructor (boardHeight, width, height, x, y, up, down) {
		this.boardHeight = boardHeight;
		this.width = width;
		this.height = height;
		this.x = x;
		this.y = y;
		this.speed = 15;
		this.score = 0;
		document.addEventListener('keydown', event => {
  			switch (event.key) {
  				case up: 
  					this.up();
  					break;
  				case down:
  					this.down();
  					break;
  			}
	
		});
	}	

	up() {
		//find the max
		//paddle either needs to be at 0 or the position minus the speed
		this.y = Math.max(0, this.y - this.speed);


	}

	down() {
		//get the min number
		//either the height or the board minus the height of the paddle 
		//or the y position plus the speed 
		this.y = Math.min(this.boardHeight - this.height, this.y + this.speed);


	}


	render(svg) {
		let rect = document.createElementNS(SVG_NS, 'rect');

		//create a rectangle matching element below
		// <rect height="56" width="8" fill="white" x="494" y="100" />
		rect.setAttributeNS(null,'fill','white');
		rect.setAttributeNS(null,'width',this.width);
		rect.setAttributeNS(null,'height',this.height);
		rect.setAttributeNS(null,'x', this.x);
		rect.setAttributeNS(null,'y', this.y);

		//append to svg
		svg.appendChild(rect);

	}
}