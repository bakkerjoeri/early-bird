import { Entity, GameState } from 'heks';

export const createEntityIndex = (entities: Entity[]): { [entityId: string]: Entity } => {
	return entities.reduce((entityIndex, entity) => {
		return {
			...entityIndex,
			[entity.id]: entity,
		}
	}, {})
}

export const setEntities = (...entities: Entity[]) => (state: GameState) => {
	return {
		...state,
		entities: {
			...state.entities,
			...createEntityIndex(entities),
		}
	};
}
