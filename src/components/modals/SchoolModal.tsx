import "./style.css";

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
  domains?: string[];
  web_pages?: string[];
  "state-province"?: null;
  country?: string;
  alpha_two_code?: string;
};

type props = {
  schoolInfo: filterProp | emptySerch | undefined;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const SchoolModal = ({ schoolInfo, setShowModal }: props) => {
  console.log(schoolInfo);
  return (
    <div className="Container">
      <div>
        <div className="schoolContainer">
          <div className="closebtn">
            <div>
              <p>Details</p>
            </div>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
          <p>
            <span>
              <strong>Name: </strong>
            </span>
            {schoolInfo?.name}
          </p>
          <p>
            <span>
              <strong>Country: </strong>
            </span>
            {schoolInfo?.country}
          </p>
          <p>
            <span>
              <strong>Country Code: </strong>
            </span>
            {schoolInfo?.alpha_two_code}
          </p>

          <span>
            <div>
              <span className="domains">
                <strong>Domains: </strong>
                {schoolInfo?.domains
                  ? schoolInfo.domains.map((domain, index) => (
                      <p key={index}> {domain},</p>
                    ))
                  : "Un available"}
              </span>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SchoolModal;
