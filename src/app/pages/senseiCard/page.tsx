import SenseiCards from "../../../components/cards/senseiCard/senseiCards";
import submitNote from "../../../components/database/submitNinjaData";

export default function Card() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="cards">
        <SenseiCards />
      </div>
    </main>
  );
}

{
  /* <DatePickerInput
  clearable
  defaultValue={new Date()}
  label="Enter today's date"
  radius="lg"
  size="lg"
  placeholder="Pick date"
  mx="auto"
  maw={400}
/> */
}

{
  /* <Rating
fractions={2}
defaultValue={0}
count={3}
color="blue"
size="5rem"
/> */
}
