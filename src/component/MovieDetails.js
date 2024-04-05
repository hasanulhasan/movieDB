'use client'
import Image from 'next/image'

const MovieDetails = ({movie, movieId}) => {
  console.log(movie)
  const {id, title, backdrop_path, poster_path, overview, release_date, vote_average, vote_count} = movie
  return (
    <section>
        <div>
          <Image className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
            src={backdrop_path} alt="" />
        </div>

        <div className="grid grid-cols-12 py-12 gap-8">
          <div className="col-span-2">
            <Image src={poster_path} alt=""/>
          </div>
          <div className="col-span-8">
            <h2 className="font-bold text-slate-300 text-2xl">{title}</h2>
            <p className="my-2 text-slate-400 italic">{overview}</p>
            <ul className="text-slate-300 space-y-2 my-8">
              <li>Release Date : {release_date}</li>
              <li>Average Vote : {vote_average}</li>
              <li>Vote Count : {vote_count}</li>
              <li>Popularity : 2461.857</li>
            </ul>

          </div>
          <div className="col-span-2 space-y-4">
            <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
              Stream In HD
            </button>
            <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
              Download In HD
            </button>
          </div>
        </div>
      </section>
  );
};

export default MovieDetails;