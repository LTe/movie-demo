import { GetServerSideProps } from 'next';
import {
  CinemaCityResponse,
  extendEvents,
  getMovies,
} from '@utils/cinema-city';
import { parseISO } from 'date-fns';
import { Movies } from '@components/Movies';

type Props = { data: CinemaCityResponse; cinema: string };
type Params = { date: string; cinema: string };

const Home = (props: Props) => {
  const { data } = props;
  const movies = extendEvents(data.body.films, data.body.events);

  return (
    <>
      <Movies movies={movies} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  const { date, cinema } = context.params!;

  const movies = await getMovies(cinema, parseISO(date));
  return {
    props: {
      data: movies,
      cinema: cinema,
    },
  };
};

export default Home;
