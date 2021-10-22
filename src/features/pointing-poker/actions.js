export const START = 'pointing-poker/start';
export const JOIN = 'pointing-poker/join';
export const VOTE = 'pointing-poker/vote';
export const CLEAR_VOTES = 'pointing-poker/clear_votes';
export const REVEAL_VOTES = 'pointing-poker/reveal_votes';
export const UNREVEAL_VOTES = 'pointing-poker/unreveal_votes';

export const start = () => ({ type: START });
export const join = (room, name) => ({ type: JOIN, room: room, name: name });
export const vote = (vote) => ({ type: VOTE, vote: vote });
export const clearVotes = () => ({ type: CLEAR_VOTES });
export const revealVotes = () => ({ type: REVEAL_VOTES });
export const unrevealVotes = () => ({ type: UNREVEAL_VOTES });
