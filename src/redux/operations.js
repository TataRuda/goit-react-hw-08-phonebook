import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://64b67d61df0839c97e15a7b9.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkApi) => {
    try {
    const response = await axios.get("/contacts");
    return response.data;
} catch (e) {
    return thunkApi.rejectWithValue(e.message)
}
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact,  thunkApi) => {
    try{
        const response = await axios.post("/contacts", contact )
        return response.data
    } catch (e) {
        return thunkApi.rejectWithValue(e.message) 
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkApi) => {
    try{
        const response = await axios.delete(`/contacts/${contactId}`)
        return response.data
    } catch (e) {
        return thunkApi.rejectWithValue(e.message) 
    }
});

