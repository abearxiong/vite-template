import { basename } from '../modules/basename';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
console.log('basename', basename);
import { App as AppDemo } from './app-demo';
export const App = () => {
  return <div className='bg-slate-200 w-full h-full border'>123</div>;
};

export const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/app-demo/list' />} />
        <Route path='/app-demo/*' element={<AppDemo />} />
      </Routes>
    </Router>
  );
};
