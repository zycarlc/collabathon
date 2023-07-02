export default function Contact() {
    return (
        <form
            id="contact-form"
            className="form-border contact p-5"
            method="post"
        >
            <div className="row g-4">
                <div className="col-12">
                    <label className="form-label" htmlFor="name">
                        What is Your Name:
                    </label>
                    <input
                        id="name"
                        name="user_name"
                        type="text"
                        className="form-control py-1"
                        required
                    />
                </div>
                <div className="col-12">
                    <label className="form-label" htmlFor="email">
                        Your Email Address:
                    </label>
                    <input
                        id="email"
                        name="user_email"
                        type="email"
                        className="form-control py-1"
                        required
                    />
                </div>
                <div className="col-12">
                    <label className="form-label" htmlFor="form-message">
                        How can I Help you?:
                    </label>
                    <textarea
                        id="form-message"
                        name="message"
                        className="form-control py-1"
                        rows={4}
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
                        <>
                            Submit{" "}
                            <span className="ms-3">
                                <i className="fas fa-arrow-right" />
                            </span>
                        </>
                    </button>
                </div>
            </div>
        </form>
    )
}
