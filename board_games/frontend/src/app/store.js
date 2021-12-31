import { configureStore } from '@reduxjs/toolkit'
import sliderReducer from '../features/slider/sliderSlice'

export default configureStore({
  reducer: {
    slider: sliderReducer,
  },
})