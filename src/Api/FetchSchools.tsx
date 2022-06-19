import { useEffect, useState } from "react";
import axio from "axios";
const url = `http://universities.hipolabs.com/search?name=middle`;

export const FetchUniversity = async (): Promise<any> => {
  try {
    const data = await axio.get(url).then((res) => res);

    return data;
  } catch (error) {
    throw error;
  }
};
type filterProp = {
  domains: string[];
  web_pages: string[];
  "state-province": null;
  name: string;
  country: string;
  alpha_two_code: string;
};

// convert name & term to lower case to cover all edge cases
export const useFilter = (array: filterProp[], term: string): filterProp[] => {
  if (term === "") return [];
  return array.filter((array) => {
    return array.name.toLowerCase().includes(term.toLowerCase());
  });
};

type emptySerch = {
  name: string;
};
function useDebounce(
  value: filterProp[],
  term: string,
  delay?: number
): filterProp[] | emptySerch[] {
  const [debouncedValue, setDebouncedValue] = useState<
    filterProp[] | emptySerch[]
  >([]);

  const filtered: filterProp[] = useFilter(value, term);

  useEffect(() => {
    const filteredResult: filterProp[] | emptySerch[] =
      term !== "" && filtered.length < 1
        ? [
            {
              name: "Sorry no school name matched your search.Please try searching again.",
            },
          ]
        : filtered;
    const timer = setTimeout(
      () => setDebouncedValue(filteredResult),
      delay || 500
    );

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay, filtered, term]);

  return debouncedValue;
}

export default useDebounce;
