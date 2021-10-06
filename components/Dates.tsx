import {formatISO} from "date-fns";
import Link from "next/link";

export const Dates = ({range}: { range: Date[]}) => {
  return <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
    {range.map((date) => {
      const iso = formatISO(date, { representation: 'date' });
      return (
        <div
          key={JSON.stringify(date)}
          className="text-blue-400 rounded bg-yellow-200 p-2 m-2 shadow-md"
        >
          <Link href={`/${iso}`}>
            <a>{iso}</a>
          </Link>
        </div>
      );
    })}
  </div>
}
