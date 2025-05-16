import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import movieReducer from "../features/movies/movieSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;