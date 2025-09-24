import React, { createContext, useState } from 'react';

export const Context = createContext();

export const SampleQuestionProvider = ({children}) => {
  const [globalData, setGlobalData] = useState('');

  return (
    <Context.Provider value={[globalData, setGlobalData]}>
      {children}
    </Context.Provider>
  );
}
