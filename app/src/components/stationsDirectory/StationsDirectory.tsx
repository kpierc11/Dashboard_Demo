import "./stationDirectory.css";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TimelineIcon from "@mui/icons-material/Timeline";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import SearchIcon from "@mui/icons-material/Search";
import { visuallyHidden } from "@mui/utils";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useState } from "react";
import IconMenu from "../iconMenu/IconMenu";
import Button from "@mui/material/Button/Button";

interface Data {
  stationName: string;
  location: string;
  reported: string;
  type: string;
  readings: string;
  status: string;

}

function createData(
  stationName: any,
  location: any,
  reported: any,
  type: any,
  readings: any,
  status: any,
): Data {
  return {
    stationName,
    location,
    reported,
    type,
    readings,
    status,
  };
}

const rows = [
  createData(
    "AFBI2 Fox River at Algonquin tailwater (IN)",
    "Fox River at Algonquin tailwater",
    "September 23rd 2022",
    "AHPS",
    <Button onClick={() => {}}>
      <TimelineIcon
        color="primary"
        cursor="pointer"
        fontSize="large"
      ></TimelineIcon>
    </Button>,
    <Box sx={{ display: "inline-flex" }}>
      <FiberManualRecordIcon sx={{ color: "#81E78B" }}></FiberManualRecordIcon>
      <Typography>Active</Typography>
    </Box>,
   
  ),
  createData(
    "AFBI2 Fox River at Algonquin tailwater (ID)",
    "Fox River at Algonquin tailwater",
    "September 23rd 2022",
    "AHPS",
    <Button>
      <TimelineIcon
        color="primary"
        cursor="pointer"
        fontSize="large"
      ></TimelineIcon>
    </Button>,
    <Box sx={{ display: "inline-flex" }}>
      <FiberManualRecordIcon
        sx={{ color: "#FF0000", marginLeft: "12px" }}
      ></FiberManualRecordIcon>
      <Typography>Inactive</Typography>
    </Box>,
    
  ),
  createData(
    "AFBI2 Fox River at Algonquin tailwater (HI)",
    "Fox River at Algonquin tailwater",
    "September 23rd 2022",
    "AHPS",
    <Button>
      <TimelineIcon
        color="primary"
        cursor="pointer"
        fontSize="large"
      ></TimelineIcon>
    </Button>,
    <Box sx={{ display: "inline-flex" }}>
      <FiberManualRecordIcon
        sx={{ color: "#FF0000", marginLeft: "12px" }}
      ></FiberManualRecordIcon>
      <Typography>Inactive</Typography>
    </Box>,
   
  ),
  createData(
    "AFBI2 Fox River at Algonquin tailwater (GA)",
    "Fox River at Algonquin tailwater",
    "September 23rd 2022",
    "AHPS",
    <Button>
      <TimelineIcon
        color="primary"
        cursor="pointer"
        fontSize="large"
      ></TimelineIcon>
    </Button>,
    <Box sx={{ display: "inline-flex" }}>
      <FiberManualRecordIcon sx={{ color: "#81E78B" }}></FiberManualRecordIcon>
      <Typography>Active</Typography>
    </Box>,
   
  ),
  createData(
    "AFBI2 Fox River at Algonquin tailwater (AZ)",
    "Fox River at Algonquin tailwater",
    "September 23rd 2022",
    "AHPS",
    <Button>
      <TimelineIcon
        color="primary"
        cursor="pointer"
        fontSize="large"
      ></TimelineIcon>
    </Button>,
    <Box sx={{ display: "inline-flex" }}>
      <FiberManualRecordIcon sx={{ color: "#81E78B" }}></FiberManualRecordIcon>
      <Typography>Active</Typography>
    </Box>,
    
  ),
  createData(
    "AFBI2 Fox River at Algonquin tailwater (AL)",
    "Fox River at Algonquin tailwater",
    "September 23rd 2022",
    "AHPS",
    <Button>
      <TimelineIcon
        color="primary"
        cursor="pointer"
        fontSize="large"
      ></TimelineIcon>
    </Button>,
    <Box sx={{ display: "inline-flex" }}>
      <FiberManualRecordIcon
        sx={{ color: "#FF0000", marginLeft: "12px" }}
      ></FiberManualRecordIcon>
      <Typography>Inactive</Typography>
    </Box>,
   
  ),
  createData(
    "AFBI2 Fox River at Algonquin tailwater (CA)",
    "Fox River at Algonquin tailwater",
    "September 23rd 2022",
    "AHPS",
    <Button>
      <TimelineIcon
        color="primary"
        cursor="pointer"
        fontSize="large"
      ></TimelineIcon>
    </Button>,
    <Box sx={{ display: "inline-flex" }}>
      <FiberManualRecordIcon sx={{ color: "#81E78B" }}></FiberManualRecordIcon>
      <Typography>Active</Typography>
    </Box>,
    
  ),
  createData(
    "AFBI2 Fox River at Algonquin tailwater (NY)",
    "Fox River at Algonquin tailwater",
    "September 23rd 2022",
    "AHPS",
    <Button>
      <TimelineIcon
        color="primary"
        cursor="pointer"
        fontSize="large"
      ></TimelineIcon>
    </Button>,
    <Box sx={{ display: "inline-flex" }}>
      <FiberManualRecordIcon sx={{ color: "#81E78B" }}></FiberManualRecordIcon>
      <Typography>Active</Typography>
    </Box>,
    
  ),
  createData(
    "AFBI2 Fox River at Algonquin tailwater (FL)",
    "Fox River at Algonquin tailwater",
    "September 23rd 2022",
    "AHPS",
    <Button>
      <TimelineIcon
        color="primary"
        cursor="pointer"
        fontSize="large"
      ></TimelineIcon>
    </Button>,
    <Box sx={{ display: "inline-flex" }}>
      <FiberManualRecordIcon sx={{ color: "#81E78B" }}></FiberManualRecordIcon>
      <Typography>Active</Typography>
    </Box>,
  
  ),
  createData(
    "AFBI2 Fox River at Algonquin tailwater (TN)",
    "Fox River at Algonquin tailwater",
    "September 23rd 2022",
    "AHPS",
    <Button>
      <TimelineIcon
        color="primary"
        cursor="pointer"
        fontSize="large"
      ></TimelineIcon>
    </Button>,
    <Box sx={{ display: "inline-flex" }}>
      <FiberManualRecordIcon sx={{ color: "#81E78B" }}></FiberManualRecordIcon>
      <Typography>Active</Typography>
    </Box>,
    
  ),
  createData(
    "AFBI2 Fox River at Algonquin tailwater (AR)",
    "Fox River at Algonquin tailwater",
    "September 23rd 2022",
    "AHPS",
    <Button>
      <TimelineIcon
        color="primary"
        cursor="pointer"
        fontSize="large"
      ></TimelineIcon>
    </Button>,
    <Box sx={{ display: "inline-flex" }}>
      <FiberManualRecordIcon sx={{ color: "#81E78B" }}></FiberManualRecordIcon>
      <Typography>Active</Typography>
    </Box>,
   
  ),
  createData(
    "AFBI2 Fox River at Algonquin tailwater (CO)",
    "Fox River at Algonquin tailwater",
    "September 23rd 2022",
    "AHPS",
    <Button>
      <TimelineIcon
        color="primary"
        cursor="pointer"
        fontSize="large"
      ></TimelineIcon>
    </Button>,
    <Box sx={{ display: "inline-flex" }}>
      <FiberManualRecordIcon sx={{ color: "#81E78B" }}></FiberManualRecordIcon>
      <Typography>Active</Typography>
    </Box>,
    
  ),
  createData(
    "AFBI2 Fox River at Algonquin tailwater (LA)",
    "Fox River at Algonquin tailwater",
    "September 23rd 2022",
    "AHPS",
    <Button>
      <TimelineIcon
        color="primary"
        cursor="pointer"
        fontSize="large"
      ></TimelineIcon>
    </Button>,
    <Box sx={{ display: "inline-flex" }}>
      <FiberManualRecordIcon sx={{ color: "#81E78B" }}></FiberManualRecordIcon>
      <Typography>Active</Typography>
    </Box>,
    
  ),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "stationName",
    numeric: false,
    disablePadding: true,
    label: "Station Name",
  },
  {
    id: "location",
    numeric: true,
    disablePadding: false,
    label: "Location",
  },
  {
    id: "reported",
    numeric: true,
    disablePadding: false,
    label: "Reported",
  },
  {
    id: "type",
    numeric: true,
    disablePadding: false,
    label: "Station Type",
  },
  {
    id: "readings",
    numeric: true,
    disablePadding: false,
    label: "Readings",
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },

];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead
      sx={{
        border: "1px solid rgba(145, 158, 171, 1)",
        borderRadius: "15px",
        background: "#F2F2F2",
      }}
    >
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "center" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;

  return (
    <>
      <Toolbar
        sx={{
          borderBottom: "1px solid #919EAB",
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {}),
        }}
      >
        <div className={"stations-directory-topbar"}>
          <div className={"stations-title-column"}>
            <h2 className="directory-title">Stations Directory</h2>
          </div>
          <div className={"stations-directory-search-column"}>
            <div className="directory-buttons"></div>
            <form method="POST" style={{ width: "100%" }}>
              <div style={{ position: "relative" }}>
                <input
                  id="directory-search"
                  type="search"
                  placeholder="Find A Station..."
                ></input>
                <SearchIcon
                  sx={{
                    position: "absolute",
                    right: 0,
                    marginRight: 2,
                    marginTop: "6%",
                    top: 0,
                  }}
                  color="primary"
                ></SearchIcon>
              </div>
            </form>
          </div>
        </div>
      </Toolbar>
    </>
  );
}

export default function StationsDirectory() {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Data>("location");
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [dense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.stationName);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        sx={{
          width: "100%",
          height: "100%",
          mb: 2,
          boxShadow: "none",
          borderRadius: "15px",
          border: "1px solid rgba(145, 158, 171, 1)",
        }}
      >
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer
          sx={{ paddingLeft: "30px", paddingRight: "30px", marginTop: "32px" }}
        >
          <Table
            sx={{
              minWidth: 750,
              [`& .${tableCellClasses.root}`]: {
                borderBottom: "none",
              },
            }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.stationName);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.stationName}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          onClick={(event) =>
                            handleClick(event, row.stationName)
                          }
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.stationName}
                      </TableCell>

                      <TableCell align="center">{row.location}</TableCell>
                      <TableCell align="center">{row.reported}</TableCell>
                      <TableCell align="center">{row.type}</TableCell>
                      <TableCell align="center">{row.readings}</TableCell>
                      <TableCell align="center">{row.status}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
