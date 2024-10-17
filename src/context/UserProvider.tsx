import React, { Dispatch, SetStateAction, useMemo, useState } from "react";
import { User } from "@/types/schemaTypes";
import { createContext } from "react";

type UserState = Pick<User, "id" | "email" | "name" | "nickName"> | null;

export type Context = {
  user: UserState;
  setUser: Dispatch<SetStateAction<UserState>>;
};

export const UserContext = createContext<Context | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserState>(null);

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
