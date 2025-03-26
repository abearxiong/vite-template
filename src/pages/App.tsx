import { basename } from '../modules/basename';

console.log('basename', basename);
export const App = () => {
  return (
    <div className='bg-slate-200 w-full h-full border'>
      <div className='test-loading bg-black'>
        <div></div>
      </div>
    </div>
  );
};
