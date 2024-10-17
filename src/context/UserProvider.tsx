import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { User } from "../types/schemaTypes";
import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { config } from "../../config";

type UserState = Pick<User, "id" | "email" | "name" | "nickname"> | null;

export type Context = {
  user: UserState;
  setUser: Dispatch<SetStateAction<UserState>>;
};

export const UserContext = createContext<Context | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserState>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_userStorage, setUserStorage] = useLocalStorage<UserState>(
    config.USER_KEY,
    null
  );

  useEffect(() => {
    setUserStorage(user);
  }, [setUserStorage, user]);

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
