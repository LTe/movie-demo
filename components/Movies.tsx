import { ExtendedEvent } from '@utils/cinema-city';
import { Movie } from '@components/Combo';

export const Movies = ({ movies }: { movies: ExtendedEvent[] }) => {
  return (
    <div className="relative flex gap-5 items-center bg-gray-50 p-5 rounded shadow-xl flex-col w-auto justify-center">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
