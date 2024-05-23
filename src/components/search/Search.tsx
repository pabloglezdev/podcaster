import { FC } from 'react';

type SearchProps = {
  count: number;
  onSearch: (query: string) => void;
};

const Search: FC<SearchProps> = (props) => {
  const { count, onSearch } = props;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => onSearch(event.target.value);

  return (
    <div id="search" className="flex justify-end items-center gap-4 h-12">
      <div className="bg-blue-600 text-white rounded-lg px-1">{count}</div>
      <input
        className="border p-1 pl-2 w-[250px] rounded-sm shadow-sm"
        type="text"
        placeholder="Filter podcasts..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
