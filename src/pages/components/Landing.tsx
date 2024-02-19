import { Grid, Typography, Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userEmailState } from "../store/selectors/userEmail";
import { isUserLoading } from "../store/selectors/isUserLoading";

export const Landing = () => {
    const navigate = useNavigate();
    const userEmail = useRecoilValue(userEmailState);
    const userLoading = useRecoilValue(isUserLoading);

    if (userLoading) {
        return <CircularProgress />;
    }

    if (!userEmail) {
        return (
            <div>
                <Grid container style={{ padding: "5vw" }}>
                    <Grid item xs={12} md={6} lg={6}>
                        <div style={{ marginTop: 100 }}>
                            <Typography variant={"h2"}>Coursera Admin</Typography>
                            <Typography variant={"h5"}>A place to learn, earn and grow</Typography>
                            <div style={{ display: "flex", marginTop: 20 }}>
                                <div style={{ marginRight: 10 }}>
                                    <Button size={"large"} variant={"contained"} onClick={() => navigate("/signup")}>
                                        Signup
                                    </Button>
                                </div>
                                <div>
                                    <Button size={"large"} variant={"contained"} onClick={() => navigate("/signin")}>
                                        Signin
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} style={{ marginTop: 20 }}>
                        <img src={"/class.jpeg"} alt="class" width={"100%"} />
                    </Grid>
                </Grid>
            </div>
        );
    }

    return null; // Or you can redirect to another page if the user is already authenticated
};
