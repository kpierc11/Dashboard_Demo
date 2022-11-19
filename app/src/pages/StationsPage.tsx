import StationCard from "../components/stationCard/StationCard";

export default function StationsPage() {
  let stationCards = [];

  for (let i = 0; i < 100; i++) {
    stationCards.push(
      <StationCard
        key={i}
        deviceName={""}
        stationLocation={""}
        lastReported={""}
        stationType={""}
        status={false}
      ></StationCard>
    );
  }

  return <div>{stationCards}</div>;
}
