import { createSlice } from "@reduxjs/toolkit";

export const meetingList = createSlice({
  name: "MeetingList",
  initialState: {
    listMeeting: [],
  },
  reducers: {
    setMeeting: (state, action) => {
      state.listMeeting.push(action.payload);
    },
  },
});

export const { setMeeting } = meetingList.actions;

export const meeting = (state) => state.meetings.listMeeting;

export default meetingList.reducer;
