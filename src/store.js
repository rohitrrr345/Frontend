import { configureStore } from "@reduxjs/toolkit";
import { profileReducer, subscriptionReducer, userReducer } from "./Components/Reducer/userReducer";
import { courseReducer } from "./Components/Reducer/courseReducer";
import { adminReducer } from "./Components/Reducer/Admin";
import { otherReducer } from "./Components/Reducer/Contact";
const store=configureStore({
    reducer:{
     user:userReducer,
     profile:profileReducer,
     course:courseReducer,
     subscription: subscriptionReducer,
     admin: adminReducer,
     other: otherReducer,

    }
})
export default store;