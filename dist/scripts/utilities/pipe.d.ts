export default function pipe<ReturnType>(...functions: ((argument: ReturnType) => ReturnType)[]): (argument: ReturnType) => ReturnType;
