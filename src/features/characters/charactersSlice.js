import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCharacters as fetchData } from "./charactersAPI";

const initialState = {
    data: [],
    isLoading: false,
    page: 1,
    total: 0,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(fetchCharacters(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchCharacters = createAsyncThunk(
    "characters/fetchData",
    async (page) => {
        const response = await fetchData(page);
        return response;
    }
);

export const charactersSlice = createSlice({
    name: "characters",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addData: (state, action) => {
            state.data = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacters.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload.results;
                state.total = action.payload.count;
            });
    },
});

export const { addData, setLoading, setPage } = charactersSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectData = (state) => state.characters.data;

export const selectIsLoading = (state) => state.characters.isLoading;

export const selectPage = (state) => state.characters.page;

export const selectTotal = (state) => state.characters.total;

export default charactersSlice.reducer;
