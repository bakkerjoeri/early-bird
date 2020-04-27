export default function pipe<ReturnType>(...functions: ((argument: ReturnType) => ReturnType)[]): (argument: ReturnType) => ReturnType {
	return functions.reduce((pipedFunction, nextFunction) => {
		return (value: ReturnType): ReturnType => nextFunction(pipedFunction(value));
	}, value => value);
}
