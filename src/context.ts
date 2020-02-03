import * as React from "react";
import {User} from "./hooks/useSession";


const UserContext = React.createContext<[User | null, boolean]>(null);

export const Consumer = UserContext.Consumer;

export default UserContext;
