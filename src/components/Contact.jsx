import { Box, Card, CardMedia, CardContent } from "@mui/material"

export default function Contact() {
    return (
        <div id="contactus">
            <Box display={{ xs: "block", md: "none" }}>
                <form
                    id="contact-form"
                    className="form-border contact p-5 d-flex flex-column flex-sm-row"
                    method="post"
                    data-netlify="true"
                >
                    <p className="fs-1 text-light fw-bold flex-shrink-1">
                        Enquire Now!
                    </p>
                    <div className="row g-4">
                        <div className="col-12">
                            <label className="form-label" htmlFor="name" hidden>
                                What is Your Name:
                            </label>
                            <input
                                id="name"
                                name="user_name"
                                type="text"
                                className="form-control py-1 enquire-box"
                                placeholder="First and Last Name"
                                required
                            />
                        </div>
                        <div className="col-12">
                            <label
                                className="form-label"
                                htmlFor="email"
                                hidden
                            >
                                Your Email Address:
                            </label>
                            <input
                                id="email"
                                name="user_email"
                                type="email"
                                className="form-control py-1 enquire-box"
                                placeholder="Email Address"
                                required
                            />
                        </div>
                        <div className="col-12">
                            <label
                                className="form-label"
                                htmlFor="form-message"
                                hidden
                            >
                                How can I Help you?:
                            </label>
                            <textarea
                                id="form-message"
                                name="message"
                                className="form-control py-1 enquire-box"
                                placeholder="Type your enquiry"
                                rows={1}
                                required
                                defaultValue={""}
                            />
                        </div>
                        <div className="col-12 text-center text-lg-start">
                            <button
                                id="submit-btn"
                                className="contact fw-bold"
                                type="submit"
                            >
                                <>Submit</>
                            </button>
                        </div>
                    </div>
                </form>
            </Box>
            <Box display={{ xs: "none", md: "block" }}>
                <Card
                    sx={{
                        display: "flex",
                        border: "none",
                        borderRadius: "0px",
                    }}
                >
                    <CardMedia
                        component="img"
                        image="./ReachOutToUs/SmilingCoworkers.png"
                        alt="SmilingCoworkers"
                        sx={{ flex: 2 }}
                    />

                    <CardContent sx={{ padding: 0, paddingBottom: 0, flex: 3 }}>
                        <div className="form-border">
                            <form
                                id="contact-form"
                                className="contact-form"
                                method="post"
                            >
                                <p className="fs-1 text-light fw-bold">
                                    Enquire Now!
                                </p>
                                <div className="row g-4">
                                    <div className="col-12">
                                        <label
                                            className="form-label"
                                            htmlFor="name"
                                            hidden
                                        >
                                            What is Your Name:
                                        </label>
                                        <input
                                            id="name"
                                            name="user_name"
                                            type="text"
                                            className="form-control py-1 enquire-box"
                                            placeholder="First and Last Name"
                                            required
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label
                                            className="form-label"
                                            htmlFor="email"
                                            hidden
                                        >
                                            Your Email Address:
                                        </label>
                                        <input
                                            id="email"
                                            name="user_email"
                                            type="email"
                                            className="form-control py-1 enquire-box"
                                            placeholder="Email Address"
                                            required
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label
                                            className="form-label"
                                            htmlFor="form-message"
                                            hidden
                                        >
                                            How can I Help you?:
                                        </label>
                                        <textarea
                                            id="form-message"
                                            name="message"
                                            className="form-control py-1 enquire-box"
                                            placeholder="Type your enquiry"
                                            rows={1}
                                            required
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="col-12 text-center text-lg-start">
                                        <button
                                            id="submit-btn"
                                            className="contact fw-bold"
                                            type="submit"
                                        >
                                            <>Submit</>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </CardContent>
                    <div></div>
                </Card>
            </Box>
        </div>
    )
}
