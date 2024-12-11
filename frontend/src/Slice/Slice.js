import {createSlice} from '@reduxjs/toolkit'
import { food_list } from '../assets/assets';


const initialState = food_list;



export const foodListSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        
    }
})
export default foodListSlice.reducer;