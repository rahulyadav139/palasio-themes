import { Theme } from '../components/Theme';

export const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Theme
        theme="generic"
        profile={{ firstName: 'rahul', lastName: 'yadav' }}
      />
    </div>
  );
};
