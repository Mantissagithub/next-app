import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Appbar from "./components/Appbar";
import AddCourse from "./components/AddCourse";
import Courses from "./components/Courses";
import Course from "./components/Course";
import { Landing } from "./components/Landing";
import { userState } from "./store/atoms/user";
import { RecoilRoot, useSetRecoilState } from 'recoil';
import axios from "axios";
// import { BASE_URL } from "./config";
import { useEffect } from "react";

function App() {
    return (
        <RecoilRoot>
            <div style={{ width: "100vw", height: "100vh", backgroundColor: "#eeeeee" }}>
                <Router>
                    <Appbar />
                    <InitUser />
                    <Route path={"/addcourse"} element={<AddCourse />} />
                    <Route path={"/course/:courseId"} element={<Course />} />
                    <Route path={"/courses"} element={<Courses />} />
                    <Route path={"/signin"} element={<Signin />} />
                    <Route path={"/signup"} element={<Signup />} />
                    <Route path={"/"} element={<Landing />} />
                </Router>
            </div>
        </RecoilRoot>
    );
}

function InitUser() {
    const setUser = useSetRecoilState(userState);
    const init = async () => {
        try {
            const response = await axios.get(`http:localhost:3000/admin/me`, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            });

            if (response.data.username) {
                setUser({
                    isLoading: false,
                    userEmail: response.data.username
                });
            } else {
                setUser({
                    isLoading: false,
                    userEmail: null
                });
            }
        } catch (e) {
            setUser({
                isLoading: false,
                userEmail: null
            });
        }
    };

    useEffect(() => {
        init();
    }, []);

    return <></>;
}

export default App;
