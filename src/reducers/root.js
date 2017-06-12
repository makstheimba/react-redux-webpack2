import { combineReducers } from 'redux';
import playerReducer from 'reducers/player';
import dungeonReducer from 'reducers/dungeon';

const rootReducer = combineReducers({
  playerReducer,
  dungeonReducer,
});

export default rootReducer;
