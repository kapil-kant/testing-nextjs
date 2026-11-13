import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

type UiState = { searchText: string }

const uiSlice = createSlice({
  name: 'ui',
  initialState: { searchText: '' } as UiState,
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload
    },
  },
})

export const { setSearchText } = uiSlice.actions

export const store = configureStore({ reducer: { ui: uiSlice.reducer } })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
