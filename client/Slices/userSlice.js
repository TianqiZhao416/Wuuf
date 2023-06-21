import { createSlice, nanoid } from "@reduxjs/toolkit";
import { user } from "pg/lib/defaults";

const initialState = {
  user: "",
  matches: [],
  profiles: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getProfiles(state, action) {
      state.profiles = action.payload.profiles;
    },
    match(state, action) {
      state.matches.push(action.payload.user);
    },
  },
});

export const { getProfiles, match } = userSlice.actions;
export default userSlice.reducer;
