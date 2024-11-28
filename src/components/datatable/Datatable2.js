import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import ToggleSwitch from "../../../../components/toggleSwitch/ToggleSwitch";
import ViewButton from "../../../../components/viewButton/ViewButton";

const columns = [
  { id: "ProductID", label: "Product ID", minWidth: 120 },
  { id: "CreationDate", label: "Creation Date", minWidth: 120 },
  { id: "ProductName", label: "Product Name", minWidth: 150 },
  { id: "ProductPrice", label: "Price", minWidth: 100, align: "center" },
  {
    id: "CategoryName",
    label: "Category Name",
    minWidth: 150,
    align: "center",
  },
  { id: "MinOrder", label: "Min Order", minWidth: 100, align: "center" },
  {
    id: "ProductPreview",
    label: "Product Preview",
    minWidth: 100,
    align: "center",
  },
  {
    id: "ProductStatus",
    label: "Product Status",
    minWidth: 100,
    align: "center",
    format: (value) => <ToggleSwitch checked={value === "active"} />,
  },
  {
    id: "Action",
    label: "Action",
    minWidth: 100,
    align: "center",
    format: () => <ViewButton />,
  },
];

const defaultImage = "https://via.placeholder.com/150x150"; // Default placeholder image

export default function ExampleDatatable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Inline rows with example data (with and without images)
  const rows = [
    {
      ProductID: "#P1001",
      CreationDate: "2024-01-01",
      ProductName: "Wireless Mouse",
      ProductPrice: "$29.99",
      CategoryName: "Electronics",
      MinOrder: "100 units",
      ProductPreview: "", // Uploaded image
      ProductStatus: "active",
    },
    {
      ProductID: "#P1002",
      CreationDate: "2024-01-10",
      ProductName: "Bluetooth Keyboard",
      ProductPrice: "$49.99",
      CategoryName: "Electronics",
      MinOrder: "50 units",
      ProductPreview: "", // No image uploaded, will use default
      ProductStatus: "inactive",
    },
    {
      ProductID: "#P1003",
      CreationDate: "2024-02-15",
      ProductName: "Gaming Headset",
      ProductPrice: "$89.99",
      CategoryName: "Electronics",
      MinOrder: "200 units",
      ProductPreview: "", // No image uploaded, will use default
      ProductStatus: "active",
    },
    {
      ProductID: "#P1005",
      CreationDate: "2024-03-15",
      ProductName: "USB-C Cable",
      ProductPrice: "$9.99",
      CategoryName: "Accessories",
      MinOrder: "1000 units",
      ProductPreview: "", // No image uploaded, will use default
      ProductStatus: "active",
    },
  ];

  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleToggleProductStatus = (productID) => {
    // Update the product status locally on toggle
    const updatedRows = rows.map((product) => {
      if (product.ProductID === productID) {
        return {
          ...product,
          ProductStatus:
            product.ProductStatus === "active" ? "inactive" : "active",
        };
      }
      return product;
    });

    setRows(updatedRows); // Update rows with new status
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleViewButtonClick = (productID) => {
    navigate(`/product/${productID}`);
  };

  return (
    <div className="max-w-[98vw] sm:max-w-full">
      <TableContainer sx={{ maxHeight: 440, maxWidth: "100%" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    justifyContent: "center",
                  }}
                  sx={{
                    padding: "8px",
                    borderBottom: "2px solid #031E3E",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={product.ProductID}
                  >
                    <TableCell align="center">{product.ProductID}</TableCell>
                    <TableCell align="center">
                      {new Date(product.CreationDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell align="center">{product.ProductName}</TableCell>
                    <TableCell align="center">{product.ProductPrice}</TableCell>
                    <TableCell align="center">{product.CategoryName}</TableCell>
                    <TableCell align="center">{product.MinOrder}</TableCell>
                    <TableCell align="center">
                      <img
                        src={
                          product.ProductPreview
                            ? product.ProductPreview
                            : defaultImage
                        } // Use uploaded image if available, otherwise default placeholder
                        alt="Product Preview"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          margin: "0 auto",
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <ToggleSwitch
                        checked={product.ProductStatus === "active"}
                        onChange={() =>
                          handleToggleProductStatus(product.ProductID)
                        } // Toggle status locally
                      />
                    </TableCell>
                    <TableCell align="center">
                      <ViewButton
                        onClick={() => handleViewButtonClick(product.ProductID)}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
