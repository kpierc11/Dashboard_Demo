import StationCard from "../../components/stationCard/StationCard";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import SearchIcon from "@mui/icons-material/Search";
import "../stationsPage/stationsPage.css";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button/Button";

export default function StationsPage() {
  const [stationCards, setStationCards] = useState<any>([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        const results = data.results.map((element: any) => {
          return element;
        });
        setStationCards([...stationCards, ...results]);
      });
  }, []);

  return (
    <>
      <div className={"stations-page-search-container"}>
        <form method="POST">
          <div
            style={{
              position: "relative",
              width: "344px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <input
              id="stations-page-search"
              type="search"
              placeholder="Search For A Station..."
            ></input>
            <SearchIcon
              sx={{
                position: "absolute",
                right: 0,
                marginTop: "17px",
                top: 0,
                marginRight: 2,
              }}
              color="primary"
            ></SearchIcon>
          </div>
        </form>
      </div>
      {stationCards.map((element: any, index: any) => {
        return (
          <div style={{background:"white"}}>
            <Button onClick={() => {}}>
              <RemoveCircleIcon></RemoveCircleIcon>
            </Button>
            <StationCard
              key={index}
              stationId={""}
              deviceName={element.name}
              stationLocation={element.height}
              lastReported={""}
              stationType={""}
              status={false}
            ></StationCard>
          </div>
        );
      })}
    </>
  );
}
