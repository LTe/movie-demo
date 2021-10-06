import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import {Cinemas} from "@components/Cinemas";
import {cinemas} from "@utils/cinema-city";

const SelectCinema: NextPage = ({
  date,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Cinemas cinemas={cinemas} date={date}/>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: context.params || {},
  };
};

export default SelectCinema;
