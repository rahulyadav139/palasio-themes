import { ReactNode, createContext } from 'react';

interface Profile {
  firstName: string;
  lastName: string;
  bio?: string;
  about?: string;
}

export interface WebsiteContextType {
  profile: Profile;
  editable: boolean;
}

export const WebsiteContext = createContext<WebsiteContextType | null>(null);

export const WebsiteComposer = ({
  config,
  children,
}: {
  config: WebsiteContextType;
  children: ReactNode;
}) => {
  return (
    <WebsiteContext.Provider value={config}>{children}</WebsiteContext.Provider>
  );
};
