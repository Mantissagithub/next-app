import { Button, Card, Typography, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface CourseDetails {
    _id: string;
    title: string;
    description: string;
    image: string;
    price: number;
}

function Courses() {
    const [courses, setCourses] = useState<CourseDetails[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get<CourseDetails[]>(`http://localhost:3000/admin/courses/`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setCourses(response.data);
                setLoading(false);
            } catch (error) {
                setError("Error fetching courses. Please try again later.");
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Typography variant="h6" color="error">{error}</Typography>;
    }

    if (courses.length === 0) {
        return <Typography variant="h6">No courses available.</Typography>;
    }

    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {courses.map((course) => (
                <Course key={course._id} course={course} />
            ))}
        </div>
    );
}

function Course({ course }: { course: CourseDetails }) {
    const navigate = useNavigate();

    return (
        <Card style={{ margin: 10, width: 300, minHeight: 200, padding: 20 }}>
            <Typography textAlign={"center"} variant="h5">
                {course.title}
            </Typography>
            <Typography textAlign={"center"} variant="subtitle1">
                {course.description}
            </Typography>
            <img src={course.image} style={{ width: 300 }} alt={course.title} />
            <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
                <Button variant="contained" size="large" onClick={() => navigate(`/course/${course._id}`)}>
                    Edit
                </Button>
            </div>
        </Card>
    );
}

export default Courses;
