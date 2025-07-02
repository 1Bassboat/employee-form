// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './employeesSlice';

const store = configureStore({
  reducer: {
    employees: employeesReducer, // ✅ Ensures state.employees is the array from your slice
  },
});

export default store;
