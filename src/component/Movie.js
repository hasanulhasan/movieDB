import Image from "next/image"
import Star from "../assets/star.svg"

const Movie = ({movie}) => {
  const {id, title, backdrop_path, original_title} = movie
  console.log(movie)
  return (
    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <Image className="w-full object-cover" width={100} height={100} src={backdrop_path} alt="" />
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1">{title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">{original_title}</p>
        <div className="flex items-center space-x-1 mb-5">
          <Image src={Star} width="14" height="14" alt="" />
          <Image src={Star} width="14" height="14" alt="" />
          <Image src={Star} width="14" height="14" alt="" />
          <Image src={Star} width="14" height="14" alt="" />
          <Image src={Star} width="14" height="14" alt="" />
        </div>
        <a
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href="./modal.html"
        >
          <img src="./assets/tag.svg" alt="" />
          <span>Details</span>
        </a>
      </figcaption>
    </figure>
  );
};

export default Movie;
