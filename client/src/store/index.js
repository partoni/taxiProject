import driverSlice from "./driverSlice";

import {configureStore} from "@reduxjs/toolkit";


export default configureStore({
    reducer:{
        drivers:driverSlice
    },
})