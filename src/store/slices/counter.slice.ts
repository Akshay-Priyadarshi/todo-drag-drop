import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    count: number;
}

const initialCounterState: CounterState = {
    count: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment: (state: CounterState) => {
            state.count += 1;
        },
        decrement: (state: CounterState) => {
            state.count -= 1;
        },
        reset: (state: CounterState) => {
            state.count = 0;
        },
    },
});

export const { decrement, increment, reset } = counterSlice.actions;
export default counterSlice.reducer;
