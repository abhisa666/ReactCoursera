// import {createStore,combineReducers,applyMiddleware} from 'redux';
// // import {Reducer,initalState} from './reducer'; Before Splitting Reducer
// import { createForms } from 'react-redux-form'; 
// import {Dishes} from './dishes';
// import {Comments} from './comments';
// import {Promotions} from './promotions';
// import {Leaders} from './leaders';

// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import { InitialFeedback } from './forms';

// export const ConfigureStore = () => {
//     const store = createStore(
//         // Reducer,
//         // initalState
//         combineReducers({
//             dishes: Dishes,
//             comments: Comments,
//             promotions: Promotions,
//             leaders: Leaders,
//             ...createForms({
//                 feedback: InitialFeedback
//             })
//         }),
//         applyMiddleware(thunk,logger)
//     );

//     return store;
// };

import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { InitialFeedback } from "./forms";
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
      ...createForms({
        feedback: InitialFeedback
      })
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};