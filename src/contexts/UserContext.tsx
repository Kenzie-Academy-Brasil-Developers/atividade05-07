import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface IUserProps {
  children: ReactNode;
}

export interface IUser {
  email: string;
  senha: string;
}

interface IUserValue {
  login: (data: IUser) => void;
  isLoggin: boolean;
  setIsLoggin: Dispatch<SetStateAction<boolean>>;
}

export const UserContext = createContext<IUserValue>({} as IUserValue);

export const ContextProvider = ({ children }: IUserProps) => {
  const [isLoggin, setIsLoggin] = useState<boolean>(false);

  const login = (data: IUser) => {
    setIsLoggin(true);
  };

  return (
    <UserContext.Provider value={{ login, isLoggin, setIsLoggin }}>
      {children}
    </UserContext.Provider>
  );
};
