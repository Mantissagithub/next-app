import { Card, Grid, Typography, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Loading } from "./Loading"; // Check the path to ensure it's correct
import { courseState } from "../store/atoms/course";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { courseTitle, coursePrice, isCourseLoading, courseImage } from "../store/selectors/course";

interface CourseDetails {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

function Course() {
  const { courseId } = useParams<{ courseId: string }>();
  const setCourse = useSetRecoilState(courseState);
  const courseLoading = useRecoilValue(isCourseLoading);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<CourseDetails>(`http://localhost:3000/admin/course/${courseId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        setCourse({ isLoading: false, course: response.data });
      } catch (error) {
        console.error("Error fetching course:", error);
        setCourse({ isLoading: false, course: null });
      }
    };

    fetchData();
  }, [courseId, setCourse]);

  if (courseLoading) {
    return <Loading />;
  }

  return (
    <div>
      <GrayTopper />
      <Grid container>
        <Grid item lg={8} md={12} sm={12}>
          <UpdateCard />
        </Grid>
        <Grid item lg={4} md={12} sm={12}>
          <CourseCard />
        </Grid>
      </Grid>
    </div>
  );
}

function GrayTopper() {
  const title = useRecoilValue(courseTitle);
  return (
    <div style={{ height: 250, background: "#212121", top: 0, width: "100vw", zIndex: 0, marginBottom: -250 }}>
      <div style={{ height: 250, display: "flex", justifyContent: "center", flexDirection: "column" }}>
        <div>
          <Typography style={{ color: "white", fontWeight: 600 }} variant="h3" textAlign={"center"}>
            {title}
          </Typography>
        </div>
      </div>
    </div>
  );
}

function UpdateCard() {
  const [courseDetails, setCourse] = useRecoilState(courseState);
  const [description, setDescription] = useState(courseDetails?.course?.description || "");
  const [_id, set_id] = useState(courseDetails?.course?._id || "");
  const [image, setImage] = useState(courseDetails?.course?.image || "");
  const [price, setPrice] = useState(courseDetails?.course?.price || "");

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card variant={"outlined"} style={{ maxWidth: 600, marginTop: 200 }}>
        <div style={{ padding: 20 }}>
          <Typography style={{ marginBottom: 10 }}>Update course details</Typography>
          <TextField
            value={description}
            style={{ marginBottom: 10 }}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth={true}
            label="Description"
            variant="outlined"
          />

          <TextField
            value={_id}
            style={{ marginBottom: 10 }}
            onChange={(e) => set_id(e.target.value)}
            fullWidth={true}
            label="ID"
            variant="outlined"
          />
          <TextField
            value={image}
            style={{ marginBottom: 10 }}
            onChange={(e) => setImage(e.target.value)}
            fullWidth={true}
            label="Image link"
            variant="outlined"
          />
          <TextField
            value={price}
            style={{ marginBottom: 10 }}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            fullWidth={true}
            label="Price"
            variant="outlined"
          />

          <Button
            variant="contained"
            onClick={async () => {
              try {
                await axios.put(
                  `http://localhost:3000/admin/courses/${_id}`,
                  {
                    description,
                    image,
                    price
                  },
                  {
                    headers: {
                      "Content-type": "application/json",
                      Authorization: "Bearer " + localStorage.getItem("token")
                    }
                  }
                );

                const updatedCourse: CourseDetails = {
                  _id,
                  title: courseDetails?.course?.title || "",
                  description,
                  image,
                  price : price as number
                };
                setCourse({ course: updatedCourse, isLoading: false });
              } catch (error) {
                console.error("Error updating course:", error);
              }
            }}
          >
            Update course
          </Button>
        </div>
      </Card>
    </div>
  );
}

function CourseCard() {
  const title = useRecoilValue(courseTitle);
  const imageLink = useRecoilValue(courseImage);
  return (
    <div style={{ display: "flex", marginTop: 50, justifyContent: "center", width: "100%" }}>
      <Card
        style={{
          margin: 10,
          width: 350,
          minHeight: 200,
          borderRadius: 20,
          marginRight: 50,
          paddingBottom: 15,
          zIndex: 2
        }}
      >
        <img src={imageLink} style={{ width: 350 }} alt="course-img" />
        <div style={{ marginLeft: 10 }}>
          <Typography variant="h5">{title}</Typography>
          <Price />
        </div>
      </Card>
    </div>
  );
}

function Price() {
  const price = useRecoilValue(coursePrice);
  return (
    <>
      <Typography variant="subtitle2" style={{ color: "gray" }}>
        Price
      </Typography>
      <Typography variant="subtitle1">
        <b>Rs {price} </b>
      </Typography>
    </>
  );
}

export default Course;
