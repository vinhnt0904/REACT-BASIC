const initState = {
  users: [
    { id: 1, name: "Vinh" },
    { id: 2, name: "Thai" },
    { id: 3, name: "Nguyen" },
  ],
  posts : [],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      console.log(">>>RUN into delete user: ", action);

      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);

      return {
        ...state,
        users,
      };

    case "CREAT_USER":
      let id = Math.floor(Math.random() * 10000) + 1 ;
      let user = { id: id, name: `random - ${id}` };
      return {
        ...state,
        users: [...state.users, user],
      };

    default:
      return state;
  }
};

export default rootReducer;
