import { AppContext } from 'next/app';
import { getRange } from '@utils/index';
import { Dates } from '@components/Dates';

const SelectDate = () => {
  const range = getRange(5);

  return (
    <div>
      <Dates range={range} />
    </div>
  );
};

export async function getServerSideProps(context: AppContext) {
  return {
    props: {},
  };
}

export default SelectDate;
