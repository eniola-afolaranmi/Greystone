// "use client";
import Image from "next/image";

function generateLevels(beltData: object) {
  let finishedLevels: any = [];
  for (let level = 0; level < Object.keys(beltData).length; level++) {
    finishedLevels.push([]);
    for (let item = 0; item < level; item++) {
      finishedLevels[-1];
    }
  }
  return finishedLevels;
}

export default function CardTemplate({ beltName, beltData, ninjaImage }: any) {
  return (
    <div className="text-[#034586] rounded-md bg-red-500">
      <div className="flex flex-col justify-start content-start m-2">
        <div className="belt-header flex flex-row text-3xl items-end">
          <Image
            src={ninjaImage}
            alt="Ninja image for the card."
            width={60}
            height={60}
          />
          <p>{beltName}</p>
        </div>
        <div className="levels flex flex-row items-center">{generateLevels(beltData)}</div>
      </div>
    </div>
  );
}
