import UserContext from "./UserContext";
import Child from "./Child";

function Parent() {
  const username = "Rishika";

  return (
    <UserContext.Provider value={username}>
      <h2>Parent Component</h2>

      <Child />
    </UserContext.Provider>
  );
}

export default Parent;