import { Header, Footer } from './sections';
import { WebsiteComposer } from '../../contexts/WebsiteContext';

interface Profile {
  firstName: string;
  lastName: string;
  bio?: string;
  about?: string;
}

export interface ThemeProps {
  profile: Profile;
  editable: boolean;
}

export const GenericTheme = ({ profile, editable }: ThemeProps) => {
  return (
    <WebsiteComposer config={{ profile, editable }}>
      <div>
        <Header />
        <Footer />
      </div>
    </WebsiteComposer>
  );
};
