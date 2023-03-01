import StationCard from "../../components/stationCard/StationCard";
import SearchIcon from "@mui/icons-material/Search";
import "../stationsPage/stationsPage.css";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import Pagination from "@mui/material/Pagination";
import { useTheme } from "@mui/material/styles";

export default function StationsPage() {
  const [stationCards, setStationCards] = useState<any>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const theme = useTheme();
  const itemsPerPage = 5;

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data.results);
        const results = data.results.map((element: any) => {
          return element;
        });
        setStationCards([...stationCards, ...results]);
        setLoading(false);
      });
  }, []);

  const handleChangePage = (event: any, page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <CircularProgress></CircularProgress>;
  } else {
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={
                  theme.palette.mode === "dark"
                    ? { background: "transparent" }
                    : { background: "white" }
                }
              ></input>
              <SearchIcon
                sx={{
                  position: "absolute",
                  right: 0,
                  marginTop: "17px",
                  top: 0,
                  marginRight: 2,
                }}
              ></SearchIcon>
            </div>
          </form>
        </div>

        {stationCards

          .filter((element: any) =>
            element.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
          )

          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((element: any, index: any) => {
            return (
              <StationCard
                key={index}
                stationId={index}
                deviceName={element.name}
                stationLocation={"Piney, Flats TN"}
                lastReported={"September 23rd 2022 8:56:58 pm"}
                stationType={"AHPS"}
                status={false}
              ></StationCard>
            );
          })}
        <Pagination
          size="large"
          sx={{
            display: "flex",
            justifyContent: "center",
            marginRight: "15px",
          }}
          count={Math.ceil(stationCards.length / itemsPerPage)}
          page={currentPage}
          onChange={handleChangePage}
        />
      </>
    );
  }
}
