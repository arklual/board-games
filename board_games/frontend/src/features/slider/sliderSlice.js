import { createSlice } from '@reduxjs/toolkit'

export const sliderSlice = createSlice({
  name: 'slider',
  initialState: {
    slides: [
        {
            image: "https://coolmaterial.com/wp-content/uploads/2017/09/Best-Board-Games.jpg"
        },
        {
            image: "https://www.boardgamehalv.com/wp-content/uploads/2019/07/carcassonne2rev2_game_1050x700.jpg"
        },
        {
            image: "https://assets.dicebreaker.com/arkham-horror-the-card-game-lcg-layout.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/arkham-horror-the-card-game-lcg-layout.jpg"
        },
        {
            image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
        },
    ],
  },
  reducers: {},
})
export const selectSlides = state => state.slider.slides;
export default sliderSlice.reducer;