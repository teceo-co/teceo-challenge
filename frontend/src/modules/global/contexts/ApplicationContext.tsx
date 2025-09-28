/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import { LoadingStatus } from '../enums/LoadingStatus.enum';
import type { HandleLoadingStatusProps } from '../interfaces/applicationContext.interfaces';

interface ApplicationContextProps {
  search: string;
}

const defaultFn = () => {};

const ApplicationContext = createContext<ApplicationContextProps>({
  search: '',
  onChangeSearch: defaultFn,
  handleLoadingStatus: defaultFn as never,
  loadingStatus: LoadingStatus.SUCCESS,
});

interface ApplicationContextProviderProps {
  children: React.ReactNode;
}

export const ApplicationContextProvider = ({
  children,
}: ApplicationContextProviderProps) => {
  const [loadingStatus, setLoadingStatus] = useState(LoadingStatus.SUCCESS);
  const [search, setSearch] = useState('');

  const handleLoadingStatus = async <T,>({
    requestFn,
    onSuccess,
    disabled,
  }: HandleLoadingStatusProps<T>) => {
    if (disabled) {
      return requestFn();
    }

    setLoadingStatus(LoadingStatus.LOADING);
    const response = await requestFn();
    setLoadingStatus(LoadingStatus.SUCCESS);

    if (onSuccess) {
      onSuccess();
    }
    return response;
  };

  return (
    <ApplicationContext.Provider
      value={{
        search,
        onChangeSearch: setSearch,
        handleLoadingStatus,
        loadingStatus,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

interface ApplicationContextProps {
  search: string;
  onChangeSearch: (newSearch: string) => void;
  handleLoadingStatus: <T>(props: HandleLoadingStatusProps<T>) => Promise<T>;
  loadingStatus: LoadingStatus;
}

export const useApplicationContext = () =>
  useContext<ApplicationContextProps>(ApplicationContext);
