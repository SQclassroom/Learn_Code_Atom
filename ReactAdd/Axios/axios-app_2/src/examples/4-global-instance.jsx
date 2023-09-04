import { useEffect } from 'react';

const GlobalInstance = () => {
  const fetchData = async () => {
    console.log('global axios instance');
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>global instance</h2>;
};
export default GlobalInstance;
