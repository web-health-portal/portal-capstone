const {createSlice} = require("@reduxjs/toolkit");


export const toggleSlice = createSlice({
    name: "toggle",
    initialState: [],
    reducers: {
        setToggle: (toggle, action) => {
            return action.payload;
        },
    },
})

export const {setToggle} = toggleSlice.actions

export default toggleSlice.reducer