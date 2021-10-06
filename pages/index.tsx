import { getRange } from '@utils/index';
import { Dates } from '@components/Dates';
import { GetServerSideProps } from 'next';

const SelectDate = () => {
  const range = getRange(5);

  return (
    <div>
      <Dates range={range} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default SelectDate;
