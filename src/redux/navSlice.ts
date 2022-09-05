import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface NavState {
  dark: boolean
  lang: 'gb' | 'sk'
  transition?: boolean
}

const initialState: NavState = {
  dark: false,
  lang: 'gb',
  transition: true,
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    toggleDarkMode: (state: NavState) => {
      if (state.dark) localStorage.theme = 'dark'
      else localStorage.theme = 'light'
      state.dark = !state.dark
    },
    toggleLanguage: (state: NavState) => {
      state.lang = state.lang === 'sk' ? 'gb' : 'sk'
    },
    setDarkMode: (state: NavState, action: PayloadAction<boolean>) => {
      state.dark = action.payload
    },
    toggleTransition: (state: NavState, action: PayloadAction<boolean>) => {
      state.transition = action.payload
    },
  },
})

export const { toggleDarkMode, toggleLanguage, setDarkMode, toggleTransition } = navSlice.actions
export default navSlice.reducer
