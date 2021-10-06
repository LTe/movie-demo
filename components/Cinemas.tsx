import {cinemas} from "@utils/cinema-city";
import Link from "next/link";

type CinemasType = typeof cinemas

export const Cinemas = ({cinemas, date}: { cinemas: CinemasType, date: string }) => {
  return (<div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
    {cinemas.map((cinema) => (
      <div
        key={JSON.stringify(cinema)}
        className="bg-yellow-200 rounded p-2 shadow-md text-blue-400"
      >
        <Link href={`/${date}/${cinema.id}/`}>
          <a>{cinema.name}</a>
        </Link>
      </div>
    ))}
  </div>)
}
