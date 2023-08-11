import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AppDispatch, AppState } from '../make-store/makeStore';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
