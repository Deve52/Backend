import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com" ,
        profilePicture: "https://example.com/profile1.jpg",
        bio: "Music lover and aspiring musician."
    },
]

const userSlice = createSlice({
    name: "user",
    initialState,
})

export default userSlice.reducer;