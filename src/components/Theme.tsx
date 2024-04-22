import { useEffect, useState, FC } from 'react';
// import { ThemeProvider } from '../contexts/WebsiteContext';

interface Profile {
  firstName: string;
  lastName: string;
  bio?: string;
  about?: string;
}

interface ThemeProps {
  theme: string;
  profile: Profile;
  editable?: boolean;
}

// interface ThemeMetaData {
//   id: string;
//   name: string;
//   description: string;
//   author: string;
//   version: string;
//   url: string;
// }

// const genericThemeMetaData: ThemeMetaData = {
//   id: 'generic',
//   name: 'Generic Theme',
//   description: 'test',
//   author: 'Rahul',
//   version: '0.0.1',
//   url: '/themes/generic.js',
// };

interface ThemeComponentProps {
  profile: Profile;
  editable: boolean;
}

export const Theme = ({ theme, profile, editable = false }: ThemeProps) => {
  // const [themeMetaData, setThemeMetaData] = useState<ThemeMetaData | null>(
  //   null
  // );
  const [ThemeComponent, setThemeComponent] =
    useState<FC<ThemeComponentProps> | null>(null);

  console.log(ThemeComponent, 'c');

  // useEffect(() => {
  //   (async () => {
  //     // DUMMY CODE
  //     // const response = await fetch(`/api/theme/${themeId}`);
  //     // const data = await response.json();
  //     // setThemeMetadata(data);
  //     console.log(theme);

  //     setThemeMetaData(genericThemeMetaData);
  //   })();
  // }, [theme]);

  useEffect(() => {
    // if (themeMetaData) {
    // const { url } = themeMetaData;
    (async () => {
      console.log('here it is');
      // /* @vite-ignore */
      // const module = await import(
      //   /* @vite-ignore */
      //   // @ts-expect-error error
      //   `http://localhost:8000/themes/${theme}.js`
      // );

      // console.log(module, 'm');
      // const cdnUrl = 'http://localhost:8000/themes/generic.js';
      // loadScript(cdnUrl, () => {
      //   // Script has loaded, you can use the component here
      //   // @ts-expect-error error
      //   // console.log(cdnUrl);
      //   const { GenericTheme } = window; // Replace 'YourComponent' with the actual name of the component exported by the script
      //   // Now you can use ComponentFromCDN in your React application
      //   setThemeComponent(GenericTheme);
      // });
      try {
        // Dynamically import the module from the CDN URL
        const cdnUrl = 'http://localhost:8000/themes/generic.js';
        // const module = await import(/* @vite-ignore */ cdnUrl);
        loadScript(cdnUrl, () => {
          console.log('here');
        });

        // Set the component from the imported module
        // setThemeComponent(module.default);
      } catch (error) {
        console.error('Error loading component from CDN:', error);
      }
    })();
    // }
    // }, [themeMetaData]);
  }, [theme]);

  return ThemeComponent ? (
    <ThemeComponent profile={profile} editable={editable} />
  ) : null;
};

function loadScript(url: any, callback: any) {
  const script = document.createElement('script');
  script.src = url;
  script.onload = callback;
  document.head.appendChild(script);
}

// const cdnUrl = 'https://example.com/your-component.js';
// loadScript(cdnUrl, () => {
//   // Script has loaded, you can use the component here
// });
