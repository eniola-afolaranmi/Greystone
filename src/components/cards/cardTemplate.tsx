export default function CardTemplate({ levelIndex, activityButtons }: any) {
  return (
    <div className="justify-start content-start items-center">
      <div className="levelNumber">
        <p>{levelIndex}</p>
      </div>
      <div className="activities flex flex-row items-center">{activityButtons}</div>
    </div>
  );
}
