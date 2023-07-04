import axios from 'axios';
import { INoteResponse, INotesResponse } from './Types';

const BASE_URL = "http://localhost:8000/api/v1/";

export const noteApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  // withCredentials: true
});

// noteApi.defaults.headers.common["Content-Type"] = "application/json";
// noteApi.defaults.headers.common["Content-Type"] = "application/x-www-form-urlencoded";

export const createNote = async (note) => {
  console.log(note);
  // return note;
  const response = await noteApi.post("notes", note);
  return response.data;
};

export const updateNoteFn = async (noteId: string, note: UpdateNoteInput) => {
  const response = await noteApi.patch<INoteResponse>(`notes/${noteId}`, note);
  return response.data;
};

export const deleteNoteFn = async (noteId: string) => {
  return noteApi.delete<null>(`notes/${noteId}`);
};

export const getSingleNoteFn = async (noteId: string) => {
  const response = await noteApi.get<INoteResponse>(`notes/${noteId}`);
  return response.data;
};

export const getNotesFn = async (page = 1, limit = 10) => {
  const response = await noteApi.get<INotesResponse>(
    `notes?page=${page}&limit=${limit}`
  );
  return response.data;
};