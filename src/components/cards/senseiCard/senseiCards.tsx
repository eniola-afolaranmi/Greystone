//This component is to generate a "fake" or empty card for the sensei page.
//The sensei page doesnt need any data from the database beyond the data in the Activities Table.

import CardTemplate from "../cardTemplate";
import GenerateSessionCard from "../generateSessionCard";

export default async function SenseiCards() {
  const curriculumnData = GenerateSessionCard("");
  return (
    <div className="sensei__card">
      <CardTemplate
        beltName="White"
        beltData=""
        ninjaImage="/BeltImages/white-belt-ninja.png"
      />
      <CardTemplate
        beltName="Yellow"
        beltData=""
        ninjaImage="/BeltImages/white-belt-ninja.png"
      />
      <CardTemplate
        beltName="Orange"
        beltData=""
        ninjaImage="/BeltImages/white-belt-ninja.png"
      />
      <CardTemplate
        beltName="Green"
        beltData=""
        ninjaImage="/BeltImages/white-belt-ninja.png"
      />
      <CardTemplate
        beltName="Blue"
        beltData=""
        ninjaImage="/BeltImages/white-belt-ninja.png"
      />
    </div>
  );
}
