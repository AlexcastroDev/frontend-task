import { FunctionComponent } from "react";
import { Pagination } from "../components/Pagination";
import { useAppContext } from "../contexts/AppProvider";
import { Movies } from "./Movies";

export const Home: FunctionComponent = () => {
    const { movies: { fetchMovies, pagination }} = useAppContext()

  return (
    <>
        <Movies></Movies>
        <Pagination onChange={fetchMovies} size={pagination.size}></Pagination>
    </>
  )
}