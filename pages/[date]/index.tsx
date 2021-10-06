import { Cinemas } from '@components/Cinemas';
import { cinemas } from '@utils/cinema-city';
import { GetServerSideProps } from 'next';

const SelectCinema = ({ date }: { date: string }) => {
  return (
    <>
      <Cinemas cinemas={cinemas} date={date} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: context.params!,
  };
};

export default SelectCinema;
