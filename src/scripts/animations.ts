import { Entity, GameState, findEntities, getEntities } from 'heks';
import { pipe } from '@bakkerjoeri/fp';
import arrayWithout from '@bakkerjoeri/array-without';
import { setComponent } from './utilities/setComponent';
import { setEntities } from './entities';

interface EntityWaitAnimation {
	type: 'wait';
	elapsed: number;
	duration: number;
}

interface EntityChangeComponentAnimation {
	type: 'changeComponent';
	name: string;
	value: any;
}

type EntityAnimation = EntityWaitAnimation | EntityChangeComponentAnimation;

export interface AnimationComponent {
	current: EntityAnimation | null;
	queue: EntityAnimation[];
	isFinished: boolean;
}

export function createAnimationComponent(): AnimationComponent {
	return {
		current: null,
		queue: [],
		isFinished: true,
	};
}

export function createWaitAnimation(duration: number): EntityWaitAnimation {
	return {
		type: 'wait',
		elapsed: 0,
		duration,
	};
}

export function createChangeComponentAnimation(name: string, value: any): EntityChangeComponentAnimation {
	return {
		type: 'changeComponent',
		name,
		value,
	};
}

export const addAnimation = (animation: EntityAnimation) => (entity: Entity): Entity => {
	return setComponent('animation')({
		...entity.animation,
		queue: [
			...entity.animation.queue,
			animation,
		],
	})(entity);
}

export const handleAnimation = (state: GameState): GameState => {
	let entitiesToAnimate = findEntities(getEntities(state), {
		animation: (animation: AnimationComponent) => animation.queue.length > 0
	}) as (Entity & { animation: AnimationComponent })[];

	const animatedEntities = entitiesToAnimate.map(executeAnimation);

	return setEntities(...animatedEntities)(state);
}

export default function executeAnimation(entity: Entity & {
	animation: AnimationComponent;
}): (Entity & { animation: AnimationComponent }) {
	if (!entity.animation.current && entity.animation.queue.length === 0) {
		return setComponent('animation')({
			...entity.animation,
			isFinished: true,
		})(entity);
	}

	debugger;

	if (!entity.animation.current && entity.animation.queue.length > 0) {
		const nextAnimation = entity.animation.queue[0];

		entity = setComponent('animation')({
			...entity.animation,
			current: nextAnimation,
			queue: arrayWithout(entity.animation.queue, nextAnimation),
			isFinished: false,
		})(entity);
	}

	const currentAnimation = entity.animation.current as EntityAnimation;

	if (currentAnimation.type === 'changeComponent') {
		return pipe(
			setComponent(currentAnimation.name)(currentAnimation.value),
			setComponent('animation')({ ...entity.animation, current: null }),
		)(entity);
	}

	if (currentAnimation.type === 'wait' && currentAnimation.elapsed < currentAnimation.duration) {
		return setComponent('animation')({
			...entity.animation,
			current: {
				...entity.animation.current,
				elapsed: currentAnimation.elapsed + 1,
			}
		})(entity);
	}

	return setComponent('animation')({
		...entity.animation,
		current: null,
		isFinished: entity.animation.queue.length === 0,
	})(entity);
}
