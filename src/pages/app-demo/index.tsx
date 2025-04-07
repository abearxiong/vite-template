import { Routes, Route } from 'react-router';
import { List } from './pages/List';

export const App = () => {
  return (
    <Routes>
      <Route index element={<List />} />
      <Route path='/list' element={<List />} />
    </Routes>
  );
};
