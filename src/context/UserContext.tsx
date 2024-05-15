import { createContext, useState } from 'react';

interface UserContextType {
  userSignedIn: boolean;
  setUserSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialState: UserContextType = {
  userSignedIn: false,
  setUserSignedIn: () => {},
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userSignedIn, setUserSignedIn] = useState(true);

  return (
    <UserContext.Provider value={{ userSignedIn, setUserSignedIn }}>
      {children}
    </UserContext.Provider>
  );
};
