import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

// selectors
export const selectNameFilter = state => state.filters.name;
export const selectFilter = state => state.filters.filter;
// actions, rducers
export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;