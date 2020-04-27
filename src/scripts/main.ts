import {
	Game,
	GameState,
	GameEvents,
	EventEmitter,
	addEntity,
	getEntities,
	addSprite,
	getSprite,
	drawSprite,
	findEntities,
} from 'heks';
import { spritesheet } from '../assets/spritesheet';
import { pipe } from '@bakkerjoeri/fp';
import { choose, getRandomNumberInRange } from 'roll-the-bones';

const backgroundColor = '#e7f0ce';
const scale = 3;
const width = 320;
const height = 180;

const eventEmitter = new EventEmitter<GameEvents>();

const game = new Game(
	{ width, height },
	eventEmitter,
	{ containerSelector: '.game', scale }
);

function createBird() {
	return {
		isBird: true,
		color: choose(['blue', 'red', 'black']),
		behaviour: choose(['idle', 'singing', 'pecking']),
		facing: choose(['left', 'right']),
		position: {
			x: getRandomNumberInRange(0, width - 16),
			y: getRandomNumberInRange(0, height - 16),
		},
	}
}

eventEmitter.on('start', (state: GameState) => {
	return pipe(
		...spritesheet.map(addSprite),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
		addEntity(createBird()),
	)(state);
});

eventEmitter.on('beforeDraw', (state: GameState) => {
	return {
		...state,
		entities: {
			...state.entities,
			...findEntities(getEntities(state), { isBird: true }).reduce((newBirds, bird) => {
				return {
					...newBirds,
					[bird.id]: {
						...bird,
						sprite: `bird-${bird.color}-${bird.behaviour}-${bird.facing}`,
					},
				};
			}, {}),
		}
	}
});

eventEmitter.on('draw', (state: GameState, { context, scale }) => {
	context.clearRect(0, 0, width * scale, height * scale);
	context.fillStyle = backgroundColor;
	context.fillRect(0, 0, width * scale, height * scale);

	const drawableEntities = findEntities(getEntities(state), { sprite: true, position: true });
	drawableEntities.sort((a, b) => {
		return a.position.y - b.position.y;
	});

	drawableEntities.forEach(entity => {
		const sprite = getSprite(state, entity.sprite);

		drawSprite(sprite, context, entity.position, { scale });
	});

	return state;
});

game.start();

console.log(game);
