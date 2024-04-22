import { useContext } from 'react';
import { WebsiteContext, WebsiteContextType } from '../contexts/WebsiteContext';

export const useWebsite = () =>
  useContext(WebsiteContext) as WebsiteContextType;
