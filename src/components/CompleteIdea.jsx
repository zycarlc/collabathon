import Box from "@mui/material/Box"

export default function CompleteIdea() {
    let ideas = [
        { number: "43", text: "Projects Completed" },
        { number: "20+", text: "Happy Customers" },
        { number: "15", text: "Years Experience" },
        { number: "13", text: "Awards + Achievements" },
    ]

    return (
        <div className="complete-idea">
            <div className="result-numbers w-100">
                <Box
                    sx={{
                        display: { xs: "block", md: "none" },
                    }}
                >
                    <div className="p-5">
                        <p className="fs-1 fw-bold">
                            We are a complete solution for every idea
                        </p>
                        <p className="fw-light" style={{ marginTop: "20px" }}>
                            Our dynamic team of UX designers, UI designers,
                            graphic designers, photographers, developers, and
                            marketing and branding experts are passionate about
                            transforming ideas into captivating digital
                            solutions.
                        </p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="complete-idea-number">
                            <div className="idea-number">
                                <h2
                                    style={{
                                        fontSize: "50px",
                                    }}
                                >
                                    {ideas[0].number}
                                </h2>
                                <p
                                    style={{
                                        fontSize: "12px",
                                    }}
                                >
                                    {ideas[0].text}
                                </p>
                            </div>
                        </div>
                        <div className="complete-idea-number">
                            <div className="idea-number">
                                <h2
                                    style={{
                                        fontSize: "50px",
                                    }}
                                >
                                    {ideas[1].number}
                                </h2>
                                <p
                                    style={{
                                        fontSize: "12px",
                                    }}
                                >
                                    {ideas[1].text}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="complete-idea-number">
                            <div className="idea-number">
                                <h2
                                    style={{
                                        fontSize: "50px",
                                    }}
                                >
                                    {ideas[2].number}
                                </h2>
                                <p
                                    style={{
                                        fontSize: "12px",
                                    }}
                                >
                                    {ideas[2].text}
                                </p>
                            </div>
                        </div>
                        <div className="complete-idea-number">
                            <div className="idea-number">
                                <h2
                                    style={{
                                        fontSize: "50px",
                                    }}
                                >
                                    {ideas[3].number}
                                </h2>
                                <p
                                    style={{
                                        fontSize: "12px",
                                    }}
                                >
                                    {ideas[3].text}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-100">
                        <img
                            src="./ReachOutToUs/CoworkerMeeting.png"
                            className="img-fluid w-100"
                            alt=""
                        />
                    </div>
                </Box>
                <Box
                    sx={{
                        display: { xs: "none", md: "block", lg: "none" },
                    }}
                >
                    <div className="p-5">
                        <p className="fs-1 fw-bold">
                            We are a complete solution for every idea
                        </p>
                        <p
                            className="fw-light"
                            style={{ margin: "20px 0", fontWeight: "normal" }}
                        >
                            Our dynamic team of UX designers, UI designers,
                            graphic designers, photographers, developers, and
                            marketing and branding experts are passionate about
                            transforming ideas into captivating digital
                            solutions.
                        </p>
                        <div className="d-flex justify-content-center">
                            {ideas.map((idea, i) => {
                                return (
                                    <div
                                        className="complete-idea-number"
                                        key={i}
                                    >
                                        <div className="idea-number">
                                            <h2
                                                style={{
                                                    fontSize: "50px",
                                                }}
                                            >
                                                {idea.number}
                                            </h2>
                                            <p
                                                style={{
                                                    fontSize: "12px",
                                                }}
                                            >
                                                {idea.text}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </Box>
                <Box sx={{ display: { xs: "none", lg: "block" }, mr: 1 }}>
                    <div className="d-flex justify-content-center align-items-stretch p-5">
                        <div className="complete-idea-img align-self-center">
                            <img
                                src="./ReachOutToUs/CoworkerMeeting.png"
                                className=""
                                alt=""
                            />
                        </div>
                        <div className="p-5">
                            <p
                                className="fs-1 fw-bold"
                                style={{ maxWidth: "520px" }}
                            >
                                We are a complete solution for every idea
                            </p>
                            <p
                                className="fw-light"
                                style={{
                                    margin: "20px 0",
                                    maxWidth: "520px",
                                }}
                            >
                                Our dynamic team of UX designers, UI designers,
                                graphic designers, photographers, developers,
                                and marketing and branding experts are
                                passionate about transforming ideas into
                                captivating digital solutions.
                            </p>

                            <div className="d-flex">
                                {ideas.map((idea, i) => {
                                    return (
                                        <div
                                            className="complete-idea-number"
                                            key={i}
                                        >
                                            <div className="idea-number">
                                                <h2
                                                    style={{
                                                        fontSize: "50px",
                                                    }}
                                                >
                                                    {idea.number}
                                                </h2>
                                                <p
                                                    style={{
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    {idea.text}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </Box>
            </div>
        </div>
    )
}
