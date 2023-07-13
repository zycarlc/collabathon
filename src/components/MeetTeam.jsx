export default function MeetTeam({ profiles }) {
    return (
        <>
            <p className="fs-1 fw-bold">Meet the Team</p>
            {profiles.map((profile, i) => {
                return (
                    <div key={i}>
                        <img
                            className="w-100 my-4"
                            src={profile.img}
                            alt=""
                            style={{
                                borderRadius: "30px",
                            }}
                        />

                        <p className="fs-4 fw-bold">{profile.name}</p>
                        <p className="fw-light">
                            {profile.title.join("   ·   ")}
                        </p>
                        <p className="fw-light">{profile.describe}</p>
                    </div>
                )
            })}
        </>
    )
}
