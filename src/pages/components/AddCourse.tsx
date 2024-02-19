import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card"; // Import Card directly
import { useState } from "react";
import axios from "axios";
// import { BASE_URL } from "../config.js";

interface CourseData {
  title: string;
  description: string;
  imageLink: string;
  price: number;
  value: string;
}

function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = async () => {
    try {
      const response = await axios.post<any>(
        `http://localhost:3000/admin/courses`,
        {
          title,
          description,
          imageLink: image,
          published: true,
          price,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert("Added course!");
    } catch (error) {
      console.error("Error adding course:", error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", minHeight: "80vh", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant={"outlined"} style={{ width: 400, padding: 20, marginTop: 30, height: "100%" }}>
          <TextField
            style={{ marginBottom: 10 }}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            label="Title"
            variant="outlined"
          />
          <TextField
            style={{ marginBottom: 10 }}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            label="Description"
            variant="outlined"
          />
          <TextField
            style={{ marginBottom: 10 }}
            onChange={(e) => setImage(e.target.value)}
            fullWidth
            label="Image link"
            variant="outlined"
          />
          <TextField
            style={{ marginBottom: 10 }}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            fullWidth
            label="Price"
            variant="outlined"
          />
          <Button size="large" variant="contained" onClick={handleSubmit}>
            Add course
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default AddCourse;
