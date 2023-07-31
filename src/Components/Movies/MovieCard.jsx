import Image from "next/image";
import React from "react";
import { StarIcon } from '@heroicons/react/24/outline'

const MovieCard = ({ movie }) => {
  const { title, poster_path,vote_average } = movie;
  const Image_url = `http://image.tmdb.org/t/p/w185/${poster_path}`;
  return (
    <div className=" flex flex-col items-center justify-center gap-4 mt-12 relative transform transition-transform duration-700 ease-in-out hover:scale-110 overflow-hidden cursor-pointer">
      <div >
        <Image src={Image_url} width={230} alt={title} height={300} className="rounded-md"/>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <p className="text-xl font-medium text-center">{title}</p>
        <div className="flex items-center justify-center gap-2 h-4">
          <StarIcon className="w-5 h-5 " fill="white" stroke="none" />
          <p>{vote_average}/10</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
