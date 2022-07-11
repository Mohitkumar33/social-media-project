// import { createContext, useContext, useReducer, useEffect } from "react";

// const postsContext = createContext();

// const PostsProvider = ({ children }) => {
//   const [postsState, postsDispatch] = useReducer(postsReducer, {
//     postsData: [],
//   });
//   return (
//     <postsContext.Provider value={{ postsState, postsDispatch }}>
//       {children}
//     </postsContext.Provider>
//   );
// };

// const usePosts = () => useContext(postsContext);

// export { PostsProvider, usePosts };
