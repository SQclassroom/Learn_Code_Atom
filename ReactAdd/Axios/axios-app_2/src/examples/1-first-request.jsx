import { useEffect } from 'react';

const FirstRequest = () => {
  useEffect(() => {
    console.log('first axios request');
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
