import { combineReducers } from "redux";

import catsReducer from "./catsReducer";
import favouritesReducer from "./favouritesReducer";
import breedsReducer from "./breedsReducer";

const reducers = combineReducers({
  cats: catsReducer,
  favourites: favouritesReducer,
  breeds: breedsReducer,
});

export default reducers;
