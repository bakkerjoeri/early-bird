import {
	Game,
	GameState,
	EventEmitter,
	EventHandlerContext,
	GameEvents,
	DrawEvent,
	addEntity,
	getEntities,
	getSprite,
	drawSprite,
	findEntities,
	importSpriteSheet,
} from 'heks';
import { spritesheet } from '../assets/spritesheet';
import { pipe } from '@bakkerjoeri/fp';
import { getRandomNumberInRange, choose } from 'roll-the-bones';
import { setEntities } from './entities';
import { createBird, SpriteComponent } from './entities/bird';
import { AnimationComponent, createChangeComponentAnimation, addAnimation, createWaitAnimation, handleAnimation } from './animations';
import { setComponent } from './utilities/setComponent';

const backgroundColor = '#e7f0ce';
const scale = 3;
const width = 320;
const height = 180;
const fps = 60;

const eventEmitter = new EventEmitter<GameEvents>();

const game = new Game(
	{ width, height },
	eventEmitter,
	{ containerSelector: '.game', scale }
);

eventEmitter.on('start', setupGame);
eventEmitter.on('beforeDraw', animateSprites);
// eventEmitter.on('update', handleBirdBehaviour);
// eventEmitter.on('update', handleAnimation);
// eventEmitter.on('beforeDraw', updateBirdSprites);
eventEmitter.on('draw', draw);

function setupGame(state: GameState) {
	return pipe(
		importSpriteSheet(spritesheet),
		addEntity(createBird(0, 16)),
	)(state);
}

function animateSprites(state: GameState): GameState {
	const entitiesWithSprites = findEntities(getEntities(state), {
		sprite: true,
	});

	const updatedEntities = entitiesWithSprites.map(entity => {
		const spriteComponent = entity.sprite as SpriteComponent;
		const spriteOfEntity = getSprite(state, entity.sprite.name);

		if (
			!spriteComponent.isAnimating
			|| spriteOfEntity.frames.length <= 1
		) {
			return entity;
		}

		const isLastFrame = spriteComponent.currentFrameIndex === spriteOfEntity.frames.length - 1;

		if (isLastFrame && !spriteComponent.isLooping) {
			return entity;
		}

		if (isLastFrame && spriteComponent.isLooping) {
			return setComponent('sprite')({
				...entity.sprite,
				currentFrameIndex: 0,
			})(entity);
		}

		return setComponent('sprite')({
			...entity.sprite,
			currentFrameIndex: entity.sprite.currentFrameIndex + 1,
		})(entity);
	});

	return setEntities(...updatedEntities)(state);
}

function updateBirdSprites(state: GameState): GameState {
	const birds = findEntities(getEntities(state), { isBird: true });
	const updatedBirds = birds.map(bird => ({
		...bird,
		sprite: `bird-${bird.color}-${bird.behaviour}-${bird.facing}`,
	}));

	return setEntities(...updatedBirds)(state);
}

function handleBirdBehaviour(state: GameState): GameState {
	let boredBirds = findEntities(getEntities(state), {
		isBird: true,
		animation: (animation: AnimationComponent) => animation.queue.length === 0,
	});

	boredBirds = boredBirds.map(bird => {
		const newBehaviour = choose(['idle', 'pecking', 'singing']);

		if (newBehaviour === 'idle') {
			return pipe(
				addAnimation(createChangeComponentAnimation('behaviour', 'idle')),
				addAnimation(createChangeComponentAnimation('facing', choose(['left', 'right']))),
				addAnimation(createWaitAnimation(getRandomNumberInRange(1 * fps, 7 * fps))),
			)(bird);
		}

		if (newBehaviour === 'pecking') {
			return pipe(
				addAnimation(createChangeComponentAnimation('behaviour', 'pecking')),
				addAnimation(createWaitAnimation(0.05 * fps)),
				addAnimation(createChangeComponentAnimation('behaviour', 'idle')),
				addAnimation(createWaitAnimation(0.1 * fps)),
				addAnimation(createChangeComponentAnimation('behaviour', 'pecking')),
				addAnimation(createWaitAnimation(0.05 * fps)),
				addAnimation(createChangeComponentAnimation('behaviour', 'idle')),
				addAnimation(createWaitAnimation(0.1 * fps)),
			)(bird);
		}

		if (newBehaviour === 'singing') {
			return pipe(
				addAnimation(createWaitAnimation(1 * fps)),
				addAnimation(createChangeComponentAnimation('behaviour', 'singing')),
				addAnimation(createWaitAnimation(0.5 * fps)),
				addAnimation(createChangeComponentAnimation('behaviour', 'idle')),
				addAnimation(createWaitAnimation(1 * fps)),
			)(bird);
		}

		return bird;
	});

	return setEntities(...boredBirds)(state);
}

function draw(state: GameState, { context, scale }: DrawEvent, { emit }: EventHandlerContext<GameEvents>): GameState {
	context.clearRect(0, 0, width * scale, height * scale);
	context.fillStyle = backgroundColor;
	context.fillRect(0, 0, width * scale, height * scale);

	const drawableEntities = findEntities(getEntities(state), { sprite: true, position: true });
	drawableEntities.sort((a, b) => {
		return a.position.y - b.position.y;
	});

	drawableEntities.forEach(entity => {
		const sprite = getSprite(state, entity.sprite.name);
		drawSprite(sprite, context, entity.position, entity.sprite.currentFrameIndex, { scale });
	});

	return state;
}

game.start();

console.log(game);
