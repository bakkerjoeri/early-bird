import { Entity } from 'heks';

export const setComponent = (componentName: string) => <
	ValueType = any
>(value: ValueType) => <EntityType = Entity>(entity: EntityType): EntityType => {
	return {
		...entity,
		[componentName]: value,
	};
}
