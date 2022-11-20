import StationCard from "../components/stationCard/StationCard";

export default function StationsPage() {
  return (
    <>
      <StationCard
        deviceName={"HydroBio e-tracker"}
        stationLocation={"Piney Flats, TN"}
        lastReported={"September 23rd 2022 8:56:58 pm"}
        stationType={"AHPS"}
        status={false}
      ></StationCard>
      <StationCard
        deviceName={"Test Device"}
        stationLocation={"Elizabethton, TN"}
        lastReported={"September 30rd 2022 8:56:58 pm"}
        stationType={"Kktol"}
        status={false}
      ></StationCard>
    </>
  );
}
