import SearchIcon from "@mui/icons-material/Search";
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
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { visuallyHidden } from "@mui/utils";
import "../ReportsTable/reportsTable.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import IconButton from "@mui/material/IconButton/IconButton";
import {
  Popper,
  Fade,
  Typography,
  PopperPlacementType,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import Edit from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

interface Data {
  type: string;
  name: string;
  description: string;
  role: string;
  parameters: string;
  link: string;
  edit: string;
}

function createData(
  type: any,
  name: any,
  description: any,
  role: any,
  parameters: any,
  link: any,
  edit: any
): Data {
  return {
    type,
    name,
    description,
    role,
    parameters,
    link,
    edit,
  };
}

const rows = [
  createData(
    "On-Demand",
    "Hydro Report",
    "This is an example description",
    "Administrator",
    "15",
    <button className="download-button">Download</button>,
    <MoreVertIcon
      color="primary"
      fontSize="large"
      cursor="pointer"
    ></MoreVertIcon>
  ),
  createData(
    "On-Demand",
    "Hydro Report",
    "This is an example description",
    "Administrator",
    "13",
    <button className="download-button">Download</button>,
    <MoreVertIcon
      color="primary"
      fontSize="large"
      cursor="pointer"
    ></MoreVertIcon>
  ),
  createData(
    "On-Demand",
    "Hydro Report",
    "This is an example description",
    "Administrator",
    "29",
    <button className="download-button">Download</button>,
    <MoreVertIcon
      color="primary"
      fontSize="large"
      cursor="pointer"
    ></MoreVertIcon>
  ),
  createData(
    "On-Demand",
    "Hydro Report",
    "This is an example description",
    "Administrator",
    "31",
    <button className="download-button">Download</button>,
    <MoreVertIcon
      color="primary"
      fontSize="large"
      cursor="pointer"
    ></MoreVertIcon>
  ),
  createData(
    "On-Demand",
    "Hydro Report",
    "This is an example description",
    "Administrator",
    "56",
    <button className="download-button">Download</button>,
    <MoreVertIcon
      color="primary"
      fontSize="large"
      cursor="pointer"
    ></MoreVertIcon>
  ),
  createData(
    "On-Demand",
    "Hydro Report",
    "This is an example description",
    "Administrator",
    "72",
    <button className="download-button">Download</button>,
    <MoreVertIcon
      color="primary"
      fontSize="large"
      cursor="pointer"
    ></MoreVertIcon>
  ),
  createData(
    "On-Demand",
    "Hydro Report",
    "This is an example description",
    "Administrator",
    "93",
    <button className="download-button">Download</button>,
    <MoreVertIcon
      color="primary"
      fontSize="large"
      cursor="pointer"
    ></MoreVertIcon>
  ),
  createData(
    "On-Demand",
    "Hydro Report",
    "This is an example description",
    "Administrator",
    "15",
    <button className="download-button">Download</button>,
    <MoreVertIcon
      color="primary"
      fontSize="large"
      cursor="pointer"
    ></MoreVertIcon>
  ),
  createData(
    "On-Demand",
    "Hydro Report",
    "This is an example description",
    "Administrator",
    "12",
    <button className="download-button">Download</button>,
    <MoreVertIcon
      color="primary"
      fontSize="large"
      cursor="pointer"
    ></MoreVertIcon>
  ),
  createData(
    "On-Demand",
    "Hydro Report",
    "This is an example description",
    "Administrator",
    "90",
    <button className="download-button">Download</button>,
    <MoreVertIcon
      color="primary"
      fontSize="large"
      cursor="pointer"
    ></MoreVertIcon>
  ),
  createData(
    "On-Demand",
    "Hydro Report",
    "This is an example description",
    "Administrator",
    "76",
    <button className="download-button">Download</button>,
    <MoreVertIcon
      color="primary"
      fontSize="large"
      cursor="pointer"
    ></MoreVertIcon>
  ),
  createData(
    "On-Demand",
    "Hydro Report",
    "This is an example description",
    "Administrator",
    "43",
    <button className="download-button">Download</button>,
    <MoreVertIcon
      color="primary"
      fontSize="large"
      cursor="pointer"
    ></MoreVertIcon>
  ),
  createData(
    "On-Demand",
    "Hydro Report",
    "This is an example description",
    "Administrator",
    "104",
    <button className="download-button">Download</button>,
    <MoreVertIcon
      color="primary"
      fontSize="large"
      cursor="pointer"
    ></MoreVertIcon>
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
    id: "type",
    numeric: false,
    disablePadding: true,
    label: "Type",
  },
  {
    id: "name",
    numeric: true,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "description",
    numeric: true,
    disablePadding: false,
    label: "Description",
  },
  {
    id: "role",
    numeric: true,
    disablePadding: false,
    label: "Role",
  },
  {
    id: "parameters",
    numeric: true,
    disablePadding: false,
    label: "Parameters",
  },
  {
    id: "link",
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
        <div className={"reports-topbar"}>
          <div className={"reports-title-column"}>
            <h2 className="reports-title">Reports</h2>
          </div>
          <div className={"reports-search-column"}>
            <button
              className="add-button"
              onClick={(event) => {
                alert("Add Report");
              }}
            >
              Add Report
            </button>
            <form method="POST" style={{ width: "100%" }}>
              <div style={{ position: "relative" }}>
                <input
                  id="reports-search"
                  type="search"
                  placeholder="Search Report"
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

        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton></IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton></IconButton>
          </Tooltip>
        )}
      </Toolbar>
    </>
  );
}

export default function EnhancedTable() {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Data>("name");
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<PopperPlacementType>();

  const navigate = useNavigate();

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
      const newSelected = rows.map((n) => n.type);
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

  const handlePopover =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      if (event.currentTarget) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };

  return (
    <Box sx={{ width: "100%" }}>
      <Popper open={open} anchorEl={anchorEl} placement={"left"} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={2}>
            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "10px 15px 10px",
                borderRadius: "10px",
                boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;",
                width: "180px",
                marginTop: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: "10px",
                  alignItems: "flex-start",
                }}
              >
                <Button
                  className="popover-buttons"
                  onClick={() => {
                    navigate("/report/edit");
                  }}
                >
                  <Edit sx={{ marginRight: 1 }} />
                  <Typography sx={{ color: "#505050" }}>Edit</Typography>
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                }}
              >
                <Button className="popover-buttons" onClick={() => {}}>
                  <DeleteIcon sx={{ color: "#f44949", marginRight: 1 }} />

                  <Typography sx={{ color: "#505050" }}>Delete</Typography>
                </Button>
              </Box>
            </Paper>
          </Fade>
        )}
      </Popper>
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
          sx={{
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingTop: "32px",
          }}
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
                  const isItemSelected = isSelected(row.parameters);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.type}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          onClick={(event) =>
                            handleClick(event, row.parameters)
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
                        {row.type}
                      </TableCell>

                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.description}</TableCell>
                      <TableCell align="center">{row.role}</TableCell>
                      <TableCell align="center">{row.parameters}</TableCell>
                      <TableCell align="center">{row.link}</TableCell>
                      <Button
                        className="edit-report-dots"
                        onClick={handlePopover("left")}
                      >
                        <TableCell align="center">{row.edit}</TableCell>
                      </Button>
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
