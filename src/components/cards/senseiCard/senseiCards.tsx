//This component is to generate a "fake" or empty card for the sensei page.
//The sensei page doesnt need any data from the database beyond the data in the Activities Table.

import getData from "../../database/getData";
import CardTemplate from "../cardTemplate";

export default function SenseiCards() {
  const curriculumnData = getData();
  return (
    <div className="sensei__card">
      <CardTemplate
        beltName="White"
        beltData=""
        ninjaImage="/BeltImages/white-belt-ninja.png"
      />
    </div>
  );
}
