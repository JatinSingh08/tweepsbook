import MovieCard from '@/Components/Movies/MovieCard';
import { fetchMovies } from '@/utils/fetchMovies';
import React from 'react'
import { QueryClient, dehydrate, useQuery } from 'react-query';



const Movies = () => {
  const { data, isLoading, isFetching } = useQuery('movies', fetchMovies);
  console.log(data.results);
  return (
    <div className='grid grid-cols-4 gap-2 items-center justify-center mx-auto mt-10'>
      {
        data?.results?.map(movie => <MovieCard movie={movie} key={movie?.id}/>)
      }
    </div>
  )
}

export default Movies

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('movies', fetchMovies);

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}