import { Filters } from "./Filters";

export function Header({ changesFilter }) {
  return (
    <header>
      <h1>React Shop</h1>
      <Filters onChange={changesFilter} />
    </header>
  );
}
