import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {
  const { gif, loading, fetchData } = useGif();
  console.log(gif);
  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 '>
      <h1 className='mt-[15px] underline text-2xl font-bold'> A RANDOM GIF</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width="450" alt='nhi arhi hai'></img>)
      }
      <button onClick={() => fetchData()} className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]'>Generate</button>
    </div>
  )
}
export default Random;  