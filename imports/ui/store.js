import { createStore, applyMiddleware } from 'redux';
import Async from './middlewares/async';

export const store = applyMiddleware(Async)(createStore)
