import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    count: 0
}

const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        countNumber(state) {
            state.count += 1
            return state.count;
        },
        
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return state = {
                ...state,
                ...action.payload.category
            };
        },
    },
});

export const { countNumber} = countSlice.actions;
export default countSlice.reducer;