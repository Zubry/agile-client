export const START = 'pointing-poker/start';
export const JOIN = 'pointing-poker/join';

export const start = () => ({ type: START });
export const join = (room, name) => ({ type: JOIN, room: room, name: name });
