import { useContext } from "react";
import UserContext from "./UserContext";

function Child() {
  const user = useContext(UserContext);

  return (
    <div>
      <h3>Child Component</h3>

      <p>User Name: {user}</p>
    </div>
  );
}

export default Child;