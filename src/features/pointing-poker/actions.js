export const START = 'pointing-poker/start';
export const JOIN = 'pointing-poker/join';

export const start = () => ({ type: START });
export const join = (room) => ({ type: JOIN, room: room });
