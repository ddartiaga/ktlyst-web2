
export default function SignUpForm() {
    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fs-12">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="form-control border border-primary"
                            aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" className="form-text text-danger">
                            Message
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <div className="mb-4">
                        <label htmlFor="firstName" className="form-label fs-12">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className="form-control border border-primary"
                            aria-describedby="firstNameHelp"
                        />
                        <div id="firstNameHelp" className="form-text text-danger">
                            Message
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="mb-4">
                        <label htmlFor="lastName" className="form-label fs-12">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className="form-control border border-primary"
                            aria-describedby="lastNameHelp"
                        />
                        <div id="lastNameHelp" className="form-text text-danger">
                            Message
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="d-grid mt-2 mb-2">
                        <button className="btn btn-primary btn-wave" type="submit">Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    );
}