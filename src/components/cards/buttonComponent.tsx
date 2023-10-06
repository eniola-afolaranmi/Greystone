import * as btn from "./iconButtons";

export default function ButtonCompnent(name: string, activity_name: string, level: string, note: string) {
  const handleClick = () => {
    return;
  };
  return (
    <div
      className="buttonContainer"
      key={name + activity_name}
    >
      <div className="focus:outline">{activity_name}</div>
    </div>
  );
}
