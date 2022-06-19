import React, { useEffect, useState } from "react";
import useDebounce, { FetchUniversity } from "../Api/FetchSchools";
import SchoolModal from "./modals/SchoolModal";

type filterProp = {
  domains: string[];
  web_pages: string[];
  "state-province": null;
  name: string;
  country: string;
  alpha_two_code: string;
};

type emptySerch = {
  name: string;
};
function SchoolComponent() {
  const [university, setUniversity] = useState<filterProp[]>([]);
  const [term, setTerm] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    async function getNames() {
      const { data } = await FetchUniversity();

      setUniversity(data);
    }
    getNames();
  }, []);

  const debouncedValue = useDebounce(university, term);
  const [schoolInfo, setSchoolInfo] = useState<
    filterProp | emptySerch | undefined
  >();
  const handleShowModal = (value: string, index: number) => {
    if (value.toLocaleLowerCase().includes("sorry")) return;

    setSchoolInfo(debouncedValue[index]);
    console.log("the index is", index);
    setTerm("");
    setShowModal(!showModal);
  };
  return (
    <div className="SchoolContainer">
      <div className="inputContainer">
        <input
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          placeholder="Enter a school name to search"
        />

        {!showModal && (
          <ul>
            {debouncedValue.map((uni, index) => (
              <li key={index} onClick={() => handleShowModal(uni.name, index)}>
                {uni.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {showModal && (
        <SchoolModal schoolInfo={schoolInfo} setShowModal={setShowModal} />
      )}
    </div>
  );
}

export default SchoolComponent;
