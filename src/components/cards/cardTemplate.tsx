// "use client";
import Image from "next/image";

export default function CardTemplate({ beltName, beltData, ninjaImage }: any) {
  return (
    <div className="text-[#034586] rounded-md bg-red-500">
      <div className="flex flex-col justify-start content-start m-2">
        <div className="belt-header flex flex-row text-3xl items-end">
          <Image
            src={ninjaImage}
            alt="Ninja image for the card."
            width={52}
            height={52}
          />
          <p>{beltName}</p>
        </div>
        <div className="levels grid grid-cols-2">{beltData}</div>
      </div>
    </div>
  );
}
