import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import * as actions from "./api";

const slice = createSlice({
  name: "notes",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null
  },
  reducers: {
    notesDataRequested: (notes, action) => {
      notes.loading = true;
    },
    notesDataReceived: (notes, action) => {
      notes.list = []; //action.payload;
      notes.loading = false;
      notes.lastFetch = Date.now();
    },
    notesDataFailed: (notes, action) => {
      notes.loading = false;
    },
    noteAdded: (notes, action) => {
      notes.list.push({
        id: v4(),
        title: JSON.parse(action.payload.noteInfo),
        completed: false
      });
    },
    noteRemoved: (notes, action) => {
      notes.list = notes.list.filter((note) => note.id !== action.payload.id);
      return notes;
    }
  }
});

export const {
  noteAdded,
  noteRemoved,
  notesDataRequested,
  notesDataReceived,
  notesDataFailed
} = slice.actions;
export default slice.reducer;

export const loadNotesData = () => (dispatch, getState) => {
  dispatch(
    actions.apiCallBegan({
      url: "https://jsonplaceholder.typicode.com/todos/",
      onBegin: notesDataRequested.type,
      onSuccess: notesDataReceived.type,
      onFailure: notesDataFailed.type
    })
  );
};

export const addNote = (Note) =>
  actions.apiCallBegan({
    url: "https://jsonplaceholder.typicode.com/todos/",
    method: "post",
    data: Note,
    onSuccess: noteAdded.type
  });
