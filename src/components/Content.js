import React, { useState, useEffect } from "react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    useMediaQuery,
    useTheme,
    Button,
    IconButton,
} from "@mui/material";
import axios from "axios";

const large = () => {
    return (
        <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
                <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
                <g transform="translate(212)" fill="#CEE3E9">
                    <rect width="6" height="16" rx="3" />
                    <rect x="14" width="6" height="16" rx="3" />
                </g>
            </g>
        </svg>
    );
};

const small = () => {
    return (
        <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
                <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
                <g transform="translate(138)" fill="#CEE3E9">
                    <rect width="6" height="16" rx="3" />
                    <rect x="14" width="6" height="16" rx="3" />
                </g>
            </g>
        </svg>
    );
};

const Content = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

    const [num, setNum] = useState(0);
    const [advice, setAdvice] = useState("");

    const getAdvice = async () => {
        await axios
            .get("https://api.adviceslip.com/advice")
            .then((response) => {
                setAdvice(response.data.slip.advice);
                setNum(response.data.slip.id);
            });
    };

    useEffect(() => {
        getAdvice();
    }, []);

    return (
        <Card sx={{ p: 5, m: 5 }}>
            <Typography
                variant="h6"
                sx={{ color: "primary.green", letterSpacing: 3 }}
            >
                {`ADVICE #${num}`}
            </Typography>
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                    maxWidth: { xs: 300, xl: 450 },
                }}
            >
                <Typography
                    sx={{ fontSize: 28, color: "white", textAlign: "center" }}
                >
                    {`"${advice}"`}
                </Typography>
                <Box sx={{ display: "flex", my: 4 }}>
                    {matches ? small() : large()}
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        mb: -11,
                        width: 55,
                        height: 55,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        overflow: "visible",
                    }}
                >
                    <IconButton
                        sx={{
                            width: 55,
                            height: 55,
                            background: "hsl(150, 100%, 66%)",
                            ":hover": {
                                backgroundColor: "hsl(150, 100%, 70%)",
                                boxShadow:
                                    "0px 0px 2px 2px hsla(150, 100%, 54%, 0.76)",
                            },
                        }}
                        onClick={() => getAdvice()}
                    >
                        <svg
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                                fill="#202733"
                            />
                        </svg>
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    );
};

export default Content;

//<svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
/* <svg
width="444"
height="16"
xmlns="http://www.w3.org/2000/svg"
>
<g fill="none" fill-rule="evenodd">
    <path
        fill="#4F5D74"
        d="M0 8h196v1H0zM248 8h196v1H248z"
    />
    <g transform="translate(212)" fill="#CEE3E9">
        <rect width="6" height="16" rx="3" />
        <rect x="14" width="6" height="16" rx="3" />
    </g>
</g>
</svg> */
//"The number of vampires in the average home, is directly proportional to the amount of garlic bread in the fridge."
