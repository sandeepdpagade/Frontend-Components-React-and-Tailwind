import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Switch from "@mui/material/Switch";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const columns = [
  { id: "blogId", label: "Blog ID", minWidth: 100, align: "center" },
  { id: "uploadDate", label: "Upload Date", minWidth: 120, align: "center" },
  {
    id: "imagePreview",
    label: "Image Preview",
    minWidth: 150,
    align: "center",
  },
  { id: "blogTitle", label: "Blog Title", minWidth: 300, align: "center" },
  { id: "status", label: "Status", minWidth: 100, align: "center" },
  { id: "action", label: "Action", minWidth: 150, align: "center" },
];

// Sample Data
const initialBlogData = [
  {
    id: "AYUSH123",
    uploadDate: "02/02/23",
    title: "Lorem ipsum dolor sit amet.",
    status: "active",
  },
  {
    id: "AYUSH124",
    uploadDate: "03/02/23",
    title: "Consectetur adipiscing elit.",
    status: "inactive",
  },
];

export default function BlogDataTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [blogData, setBlogData] = useState(initialBlogData);
  const [openDeleteModal, setOpenDeleteModal] = useState(false); // Modal open state
  const [selectedBlogId, setSelectedBlogId] = useState(null); // Blog ID for deletion
  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEdit = (blogId) => {
    console.log("Edit Blog ID:", blogId);
    navigate(`edit-blog/${blogId}`);
  };

  const handleDelete = (blogId) => {
    setSelectedBlogId(blogId);
    setOpenDeleteModal(true); // Open the delete confirmation modal
  };

  const confirmDelete = () => {
    console.log("Confirmed Delete for Blog ID:", selectedBlogId);
    setBlogData((prevData) =>
      prevData.filter((blog) => blog.id !== selectedBlogId)
    );
    setOpenDeleteModal(false); // Close the modal after confirming
  };

  const cancelDelete = () => {
    setOpenDeleteModal(false); // Just close the modal if canceled
  };

  const toggleStatus = (blogId) => {
    setBlogData((prevData) =>
      prevData.map((blog) =>
        blog.id === blogId
          ? {
              ...blog,
              status: blog.status === "active" ? "inactive" : "active",
            }
          : blog
      )
    );
  };

  return (
    <div style={{ width: "100%" }}>
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || "center"}
                  style={{
                    minWidth: column.minWidth,
                    verticalAlign: "middle",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(blogData || [])
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((blog) => (
                <TableRow hover key={blog.id}>
                  <TableCell className="justify-center" align="center">
                    {blog.id}
                  </TableCell>
                  <TableCell className="justify-center" align="center">
                    {blog.uploadDate}
                  </TableCell>
                  <TableCell className="justify-center" align="center">
                    <div className="border w-32 bg-[#f0f0f0] rounded h-16 overflow-hidden mx-auto">
                      {blog.imagePreview ? (
                        <img
                          src={blog.imagePreview}
                          alt="Preview"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 50 50"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            backgroundColor: "#F6F0F0",
                          }}
                        ></svg>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="justify-center" align="center">
                    {blog.title}
                  </TableCell>
                  <TableCell className="justify-center" align="center">
                    <Switch
                      checked={blog.status === "active"}
                      onChange={() => toggleStatus(blog.id)}
                    />
                  </TableCell>
                  <TableCell className="justify-center" align="center">
                    <IconButton
                      aria-label="edit"
                      onClick={() => handleEdit(blog.id)}
                      style={{ color: "#1D3557" }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDelete(blog.id)}
                      style={{ color: "#E63946" }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={blogData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {/* Delete Confirmation Modal */}
      <Dialog
        open={openDeleteModal}
        onClose={cancelDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Blog?"}</DialogTitle>
        <DialogContent>
          <p>
            Are you sure you want to delete this blog? This action cannot be
            undone.
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDelete} color="secondary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
