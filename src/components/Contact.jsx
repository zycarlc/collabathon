import { Box, Card, CardMedia, CardContent } from "@mui/material"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Contact() {
    const [sendingMail, setSendingMail] = useState(false)

    const sendEmail = e => {
        e.preventDefault()
        setSendingMail(true)

        const myForm = e.target
        const formData = new FormData(myForm)
        const messageData = new URLSearchParams(formData).toString()
        console.log(messageData)

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: messageData,
        })
            .then(result => {
                if (result.ok) {
                    document.getElementById("contact-form").reset()
                    toast.success("Message sent successfully!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    })
                    setSendingMail(false)
                } else {
                    toast.error("Something went wrong!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    })
                    setSendingMail(false)
                }
            })
            .catch(error => {
                toast.error("Something went wrong!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                console.log(error)
                setSendingMail(false)
            })
    }
    return (
        <div id="contactus">
            <Box display={{ xs: "block", md: "none" }}>
                <form
                    id="contact-form"
                    className="form-border contact p-5 d-flex flex-column flex-sm-row"
                    method="post"
                    name="contact"
                    data-netlify="true"
                    onSubmit={sendEmail}
                >
                    <input type="hidden" name="form-name" value="contact" />
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
                                {sendingMail ? <>sending...</> : <>Submit</>}
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
                                name="contact"
                                method="post"
                                onSubmit={sendEmail}
                            >
                                <input
                                    type="hidden"
                                    name="form-name"
                                    value="contact"
                                />
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
                                            {sendingMail ? (
                                                <>sending...</>
                                            ) : (
                                                <>Submit</>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </CardContent>
                    <div></div>
                </Card>
            </Box>
            <ToastContainer />
        </div>
    )
}
