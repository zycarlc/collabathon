import { Box, Card, CardContent, CardMedia } from "@mui/material"

export default function Result() {
    return (
        <>
            <Box
                sx={{
                    display: { xs: "block", sm: "none" },
                }}
            >
                <div className="result">
                    <h2>Need to bring a product to life?</h2>
                    <h6 style={{ margin: "20px 0" }}>
                        We can help. Our all-inclusive and strategic approach
                        help businesses grow. Businesses that embrace our design
                        generate on average:
                    </h6>
                    <div className="d-flex justify-content-center">
                        <div className="">
                            <div className="number">
                                <h2 style={{ fontSize: "50px" }}>32%</h2>
                                <p style={{ fontSize: "12px" }}>more revenue</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="number">
                                <h2 style={{ fontSize: "50px" }}>56%</h2>
                                <p style={{ fontSize: "12px" }}>
                                    shareholder 'return
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Card
                    sx={{
                        display: "flex",
                        border: "none",
                        borderRadius: "0px",
                        maxHeight: "550px",
                    }}
                >
                    <CardContent
                        sx={{ padding: 0, paddingBottom: 0, minWidth: "400px" }}
                    >
                        <div className="result">
                            <h2>Need to bring a product to life?</h2>
                            <h6 style={{ margin: "20px 0" }}>
                                We can help. Our all-inclusive and strategic
                                approach help businesses grow. Businesses that
                                embrace our design generate on average:
                            </h6>
                            <div className="d-flex">
                                <div className="">
                                    <div className="number">
                                        <h2 style={{ fontSize: "50px" }}>
                                            32%
                                        </h2>
                                        <p style={{ fontSize: "12px" }}>
                                            more revenue
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="number">
                                        <h2 style={{ fontSize: "50px" }}>
                                            56%
                                        </h2>
                                        <p style={{ fontSize: "12px" }}>
                                            shareholder 'return
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardMedia
                        component="img"
                        image="./ReachOutToUs/monitor.png"
                        alt="monitor"
                        sx={{}}
                    />
                    <div></div>
                </Card>
            </Box>

            <Box sx={{ display: { xs: "block", sm: "none" } }}>
                <div className="monitor">
                    <img
                        src="./ReachOutToUs/monitor.png"
                        className="img-fluid"
                        alt=""
                    />
                </div>
            </Box>
        </>
    )
}
