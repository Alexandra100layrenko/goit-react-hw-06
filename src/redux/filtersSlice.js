import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

// selectors
export const selectNameFilter = state => state.filters.filter;
export const selectFilter = state => state.filters.filter;
// actions, rducers
export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;