import MovieCard from '@/Components/Movies/MovieCard';
import React from 'react'
import { QueryClient, dehydrate, useQuery } from 'react-query';

const api = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const getMovies = async () => await (await fetch(api, {
//   headers: {
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWM2NTI3MGMxYmJhZmExNDUyNGVhNDQxNzQwNjJhOCIsInN1YiI6IjYyODBiOWU2ZGNmODc1MzM0ZTQ1N2NiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._ueveNAVwEPen0kwpg_VnaNg6iqUGA9av6BzNzHxzlg',
//   }
// }).json())

const fetchMovies = () =>
  fetch(api, {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWM2NTI3MGMxYmJhZmExNDUyNGVhNDQxNzQwNjJhOCIsInN1YiI6IjYyODBiOWU2ZGNmODc1MzM0ZTQ1N2NiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._ueveNAVwEPen0kwpg_VnaNg6iqUGA9av6BzNzHxzlg',
    },
  }).then((response) => response.json());
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