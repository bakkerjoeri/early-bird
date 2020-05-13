import { Position } from 'heks';
import { choose, getRandomNumberInRange } from 'roll-the-bones';
import { AnimationComponent, createAnimationComponent } from '../animations';

interface SpriteComponent {
	name: string;
	currentAnimationIndex: number;
}

export interface BirdEntity {
	isBird: true;
	color: 'blue' | 'red' | 'black';
	sprite: SpriteComponent,
	behaviour: 'idle' | 'singing' | 'pecking';
	idleCountdown: number,
	facing: 'left' | 'right';
	position: Position;
	animation: AnimationComponent,
}

export function createBird(x: number, y: number): BirdEntity {
	return {
		isBird: true,
		color: choose(['blue']),
		sprite: {
			name: 'bird-blue-hop-left',
			currentAnimationIndex: 0,
		},
		behaviour: 'idle',
		idleCountdown: 0,
		facing: choose(['left', 'right']),
		position: { x, y },
		animation: createAnimationComponent(),
	}
}
