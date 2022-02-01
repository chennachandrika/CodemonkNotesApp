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
    notesApiRequest: (notes, action) => {
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
      notes.loading = false;
      notes.list.push({
        id: v4(),
        title: JSON.parse(action.payload.title),
        completed: false
      });
    },
    noteDataEdited: (notes, action) => {
      notes.list = notes.list.map((note) => {
        if (note.id === action.payload.id) {
          const innerObj = note.title;
          return {
            ...note,
            title: {
              ...innerObj,
              noteTitle: action.payload.noteTitle,
              noteText: action.payload.noteText
            }
          };
        } else {
          return note;
        }
      });
    },
    noteRemoved: (notes, action) => {
      notes.list = notes.list.filter((note) => note.id !== action.payload.id);
    }
  }
});

export const {
  noteAdded,
  noteDataEdited,
  noteRemoved,
  notesApiRequest,
  notesDataReceived,
  notesDataFailed
} = slice.actions;
export default slice.reducer;

export const loadNotesData = () => (dispatch, getState) => {
  dispatch(
    actions.apiCallBegan({
      url: "https://jsonplaceholder.typicode.com/todos/",
      onBegin: notesApiRequest.type,
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
    onBegin: notesApiRequest.type,
    onSuccess: noteAdded.type,
    onFailure: notesDataFailed.type
  });

export const removeNote = (Note) =>
  actions.apiCallBegan({
    url: `https://jsonplaceholder.typicode.com/todos/Note`,
    method: "delete",
    data: Note,
    onBegin: notesApiRequest.type,
    onSuccess: noteRemoved.type,
    onFailure: notesDataFailed.type
  });
