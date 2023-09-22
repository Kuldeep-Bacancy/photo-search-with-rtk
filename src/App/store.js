import { configureStore } from '@reduxjs/toolkit'
import PhotoSearchReducer from '../features/PhotoSearchSlice'

export const store = configureStore({
  reducer: PhotoSearchReducer
})