import { combineReducers, createStore, Store } from 'redux';
import { persistStore, persistReducer, Persistor } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/reducer';
import { IAuthState } from './auth/type';

/*
 * combines all the existing reducers
 */
export interface IState {
  authReducer: IAuthState;
}

const persistConfig = {
  key: 'fibr-root',
  storage,
}

const rootReducers = combineReducers<IState>({
  authReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducers)

const configureStore = (): { store: Store<IState>, persistor: Persistor } => {
  const store = createStore(persistedReducer)
  const persistor = persistStore(store)
  return { store, persistor }
};

export default configureStore();
