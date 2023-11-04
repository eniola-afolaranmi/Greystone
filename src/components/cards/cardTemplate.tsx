import Image from "next/image";


//This function is for selecting the image of the belt for the card based on the belt name provided.
function selectBeltImage(beltName: string) {
  switch (beltName) {
    case "White":
      console.log("White Image");
      return "/BeltImages/white-belt-ninja.png";
    case "Yellow":
      console.log("Yellow Image");
      return "/BeltImages/yellow-belt-ninja.png";
    case "Orange":
      return "/BeltImages/orange-belt-ninja.png";
    case "Green":
      return "/BeltImages/green-belt-ninja.png";
    case "Blue":
      return "/BeltImages/blue-belt-ninja.png";
    case undefined:
      return "/BeltImages/white-belt-ninja.png";
  }
}

//This component works by accepting the generated activity buttons and creating
//a new card component from it.
export default function CardTemplate({ beltName, beltData }: any) {
  return (
    <div className="text-[#034586] rounded-md bg-red-500">
      <div className="flex flex-col justify-start content-start m-2">
        <div className="belt-header flex flex-row text-3xl items-end">
          <Image
            //@ts-ignore
            src={selectBeltImage(beltName)}
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
