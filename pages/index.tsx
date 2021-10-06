import type { NextPage } from 'next';
import { AppContext } from 'next/app';
import {getRange} from "@utils/index";
import {Dates} from '@components/Dates'

const SelectDate: NextPage<{}> = (props) => {
  const range = getRange(5)

  return (
    <div>
      <Dates range={range}/>
    </div>
  );
};

export async function getServerSideProps(context: AppContext) {
  return {
    props: {},
  };
}

export default SelectDate;
