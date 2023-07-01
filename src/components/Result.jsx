import Box from "@mui/material/Box"

export default function Result() {
    return (
        <>
            <div className="result">
                <div className="result-numbers">
                    <Box sx={{ display: { xs: "block", sm: "none" }, mr: 1 }}>
                        <h2>Need to bring a product to life?</h2>
                        <h6 style={{ margin: "20px 0" }}>
                            We can help. Our all-inclusive and strategic
                            approach help businesses grow. Businesses that
                            embrace our design generate on average:
                        </h6>
                        <div className="d-flex">
                            <div className="">
                                <div className="number">
                                    <h2 style={{ fontSize: "50px" }}>32%</h2>
                                    <p style={{ fontSize: "12px" }}>
                                        more revenue
                                    </p>
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
                    </Box>
                    <Box sx={{ display: { xs: "none", sm: "block" }, mr: 1 }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <h2>Need to bring a product to life?</h2>
                                    <h6 style={{ margin: "20px 0" }}>
                                        We can help. Our all-inclusive and
                                        strategic approach help businesses grow.
                                        Businesses that embrace our design
                                        generate on average:
                                    </h6>
                                    <div className="d-flex">
                                        <div className="">
                                            <div className="number">
                                                <h2
                                                    style={{ fontSize: "50px" }}
                                                >
                                                    32%
                                                </h2>
                                                <p style={{ fontSize: "12px" }}>
                                                    more revenue
                                                </p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="number">
                                                <h2
                                                    style={{ fontSize: "50px" }}
                                                >
                                                    56%
                                                </h2>
                                                <p style={{ fontSize: "12px" }}>
                                                    shareholder 'return
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 monitor-lg">
                                    <img
                                        src="./ReachOutToUs/SmilingCoworkers.png"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </Box>
                </div>
            </div>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
                <div className="monitor">
                    <img
                        src="./ReachOutToUs/SmilingCoworkers.png"
                        className="img-fluid"
                        alt=""
                    />
                </div>
            </Box>
        </>
    )
}
