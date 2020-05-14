import { Position } from 'heks';
import { choose, getRandomNumberInRange } from 'roll-the-bones';
import { AnimationComponent, createAnimationComponent } from '../animations';

export interface SpriteComponent {
	name: string;
	currentFrameIndex: number;
	isLooping: boolean;
	isAnimating: boolean;
}

interface CreateSpriteOptions {
	startingFrame?: number;
	isLooping?: boolean;
	isAnimating?: boolean;
}

function createSpriteComponent(name: string, {
	startingFrame = 0,
	isLooping = true,
	isAnimating = true
}: CreateSpriteOptions = {}) {
	return {
		name,
		currentFrameIndex: startingFrame,
		isLooping,
		isAnimating,
	};
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
		sprite: createSpriteComponent('bird-blue-hop-left'),
		behaviour: 'idle',
		idleCountdown: 0,
		facing: choose(['left', 'right']),
		position: { x, y },
		animation: createAnimationComponent(),
	}
}
