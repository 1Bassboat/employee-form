// src/redux/employeesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [], // ✅ MUST be an array
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
  },
});

export const { addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
