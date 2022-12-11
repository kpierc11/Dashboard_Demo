import * as React from "react";
import "../StationsDirectory/stationDirectory.css";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
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
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import SortIcon from "@mui/icons-material/Sort";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { type } from "os";
import { red } from "@mui/material/colors";
import { Icon } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface Data {
  stationName: string;
  location: string;
  reported: string;
  type: string;
  readings: string;
  status: string;
  edit: string;
}

function createData(
  stationName: any,
  location: any,
  reported: any,
  type: any,
  readings: any,
  status: any,
  edit: any
): Data {
  return {
    stationName,
    location,
    reported,
    type,
    readings,
    status,
    edit,
  };
}

const rows = [
  createData(
    "AFBI2 Fox River at Algonquin tailwater (Illinois)",
    "Fox River at Algonquin tailwater",
    "September 23rd 2022",
    "AHPS",
    <TimelineIcon color="primary"></TimelineIcon>,
    <Box sx={{display: "inline-flex"}}><FiberManualRecordIcon sx = {{color : "#81E78B"}}></FiberManualRecordIcon><Typography>Active</Typography></Box>,
    <MoreVertIcon color="primary"></MoreVertIcon>
  ),
  createData(
    "AFBI2 Fox River at Algonquin tailwater (Illinois)",
    "Fox River at Algonquin tailwater",
    "September 23rd 2022",
    "AHPS",
    <TimelineIcon color="primary"></TimelineIcon>,
    <Box sx={{display: "inline-flex"}}><FiberManualRecordIcon  sx={{ color: "#FF0000" }}></FiberManualRecordIcon><Typography>Inactive</Typography></Box>,
    <MoreVertIcon color="primary"></MoreVertIcon>
  ),
  createData(
    "AFBI2 Fox River at Algonquin tailwater (Illinois)",
    "Fox River at Algonquin tailwater",
    "September 23rd 2022",
    "AHPS",
    <TimelineIcon color="primary"></TimelineIcon>,
    <Box sx={{display: "inline-flex"}}><FiberManualRecordIcon sx={{ color: "#FF0000" }}></FiberManualRecordIcon><Typography>Inactive</Typography></Box>,
    <MoreVertIcon color="primary"></MoreVertIcon>
  ),
  createData(
    "AFBI2 Fox River at Algonquin tailwater (Illinois)",
    "Fox River at Algonquin tailwater",
    "September 23rd 2022",
    "AHPS",
    <TimelineIcon color="primary"></TimelineIcon>,
    <Box sx={{display: "inline-flex"}}><FiberManualRecordIcon sx = {{color : "#81E78B"}}></FiberManualRecordIcon><Typography>Active</Typography></Box>,
    <MoreVertIcon color="primary"></MoreVertIcon>
  ),
  createData(
    "AFBI2 Fox River at Algonquin tailwater (Illinois)",
    "Fox River at Algonquin tailwater",
    "September 23rd 2022",
    "AHPS",
    <TimelineIcon color="primary"></TimelineIcon>,
    <Box sx={{display: "inline-flex"}}><FiberManualRecordIcon sx = {{color : "#81E78B"}}></FiberManualRecordIcon><Typography>Active</Typography></Box>,
    <MoreVertIcon color="primary"></MoreVertIcon>
  ),
  createData(
    "AFBI2 Fox River at Algonquin tailwater (Illinois)",
    "Fox River at Algonquin tailwater",
    "September 23rd 2022",
    "AHPS",
    <TimelineIcon color="primary"></TimelineIcon>,
    <Box sx={{display: "inline-flex"}}><FiberManualRecordIcon  sx={{ color: "#FF0000" }}></FiberManualRecordIcon><Typography>Inactive</Typography></Box>,
    <MoreVertIcon color="primary"></MoreVertIcon>
  ),
  createData(
    "AFBI2 Fox River at Algonquin tailwater (Illinois)",
    "Fox River at Algonquin tailwater",
    "September 23rd 2022",
    "AHPS",
    <TimelineIcon color="primary"></TimelineIcon>,
    <Box sx={{display: "inline-flex"}}><FiberManualRecordIcon sx = {{color : "#81E78B"}}></FiberManualRecordIcon><Typography>Active</Typography></Box>,
    <MoreVertIcon color="primary"></MoreVertIcon>
  ),
  createData(
    "AFBI2 Fox River at Algonquin tailwater (Illinois)",
    "Fox River at Algonquin tailwater",
    "September 23rd 2022",
    "AHPS",
    <TimelineIcon color="primary"></TimelineIcon>,
    <Box sx={{display: "inline-flex"}}><FiberManualRecordIcon sx = {{color : "#81E78B"}}></FiberManualRecordIcon><Typography>Active</Typography></Box>,
    <MoreVertIcon color="primary"></MoreVertIcon>
  ),
  createData(
    "AFBI2 Fox River at Algonquin tailwater (Illinois)",
    "Fox River at Algonquin tailwater",
    "September 23rd 2022",
    "AHPS",
    <TimelineIcon color="primary"></TimelineIcon>,
    <Box sx={{display: "inline-flex"}}><FiberManualRecordIcon sx = {{color : "#81E78B"}}></FiberManualRecordIcon><Typography>Active</Typography></Box>,
    <MoreVertIcon color="primary"></MoreVertIcon>
  ),
  createData(
    "AFBI2 Fox River at Algonquin tailwater (Illinois)",
    "Fox River at Algonquin tailwater",
    "September 23rd 2022",
    "AHPS",
    <TimelineIcon color="primary"></TimelineIcon>,
    <Box sx={{display: "inline-flex"}}><FiberManualRecordIcon sx = {{color : "#81E78B"}}></FiberManualRecordIcon><Typography>Active</Typography></Box>,
    <MoreVertIcon color="primary"></MoreVertIcon>
  ),
  createData(
    "AFBI2 Fox River at Algonquin tailwater (Illinois)",
    "Fox River at Algonquin tailwater",
    "September 23rd 2022",
    "AHPS",
    <TimelineIcon color="primary"></TimelineIcon>,
    <Box sx={{display: "inline-flex"}}><FiberManualRecordIcon sx = {{color : "#81E78B"}}></FiberManualRecordIcon><Typography>Active</Typography></Box>,
    <MoreVertIcon color="primary"></MoreVertIcon>
  ),
  createData(
    "AFBI2 Fox River at Algonquin tailwater (Illinois)",
    "Fox River at Algonquin tailwater",
    "September 23rd 2022",
    "AHPS",
    <TimelineIcon color="primary"></TimelineIcon>,
    <Box sx={{display: "inline-flex"}}><FiberManualRecordIcon sx = {{color : "#81E78B"}}></FiberManualRecordIcon><Typography>Active</Typography></Box>,
    <MoreVertIcon color="primary"></MoreVertIcon>
  ),
  createData(
    "AFBI2 Fox River at Algonquin tailwater (Illinois)",
    "Fox River at Algonquin tailwater",
    "September 23rd 2022",
    "AHPS",
    <TimelineIcon color="primary"></TimelineIcon>,
    <Box sx={{display: "inline-flex"}}><FiberManualRecordIcon sx = {{color : "#81E78B"}}></FiberManualRecordIcon><Typography>Active</Typography></Box>,
    <MoreVertIcon color="primary"></MoreVertIcon>
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

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
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
  {
    id: "edit",
    numeric: true,
    disablePadding: false,
    label: "",
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
    <TableHead>
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
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              ),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: "1 1 100%" }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Station Directory
          </Typography>
        )}
      </Toolbar>
      <div className="sub-toolbar">
        <div className="directory-buttons">
          <button className="lightblue-button">
            Filter <FilterAltIcon className="filter-sort-icon"></FilterAltIcon>
          </button>
          <button className="lightblue-button">
            Sort <SortIcon className="filter-sort-icon"></SortIcon>
          </button>
        </div>
        <div className={"directory-search-container"}>
          <form>
            <div style={{ position: "relative" }}>
              <input
                id="directory-search"
                type="search"
                placeholder="Search For A Station..."
              ></input>
              <SearchIcon
                sx={{
                  position: "absolute",
                  right: 0,
                  marginRight: 2,
                  marginTop: "5%",
                  top: 0,
                }}
                color="primary"
              ></SearchIcon>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("location");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
      <Paper sx={{ width: "100%", height: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
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
                      hover
                      onClick={(event) => handleClick(event, row.stationName)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.stationName}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
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
                      <TableCell align="center">{row.edit}</TableCell>
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
