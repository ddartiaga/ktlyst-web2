
export default function Switcher() {
    return (
        <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="switcher-canvas"
            aria-labelledby="offcanvasRightLabel"
        >
            <div className="offcanvas-header border-bottom">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">
                    Switcher
                </h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                />
            </div>
            <div className="offcanvas-body">
                <div className="">
                    <p className="switcher-style-head">Theme Color Mode:</p>
                    <div className="row switcher-style">
                        <div className="col-4">
                            <div className="form-check switch-select">
                                <label className="form-check-label" htmlFor="switcher-light-theme">
                                    Light
                                </label>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="theme-style"
                                    id="switcher-light-theme"
                                    defaultChecked
                                />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-check switch-select">
                                <label className="form-check-label" htmlFor="switcher-dark-theme">
                                    Dark
                                </label>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="theme-style"
                                    id="switcher-dark-theme"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <p className="switcher-style-head">Directions:</p>
                    <div className="row switcher-style">
                        <div className="col-4">
                            <div className="form-check switch-select">
                                <label className="form-check-label" htmlFor="switcher-ltr">
                                    LTR
                                </label>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="direction"
                                    id="switcher-ltr"
                                    defaultChecked
                                />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-check switch-select">
                                <label className="form-check-label" htmlFor="switcher-rtl">
                                    RTL
                                </label>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="direction"
                                    id="switcher-rtl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="theme-colors">
                    <p className="switcher-style-head">Theme Primary:</p>
                    <div className="d-flex align-items-center switcher-style">
                        <div className="form-check switch-select me-3">
                            <input
                                className="form-check-input color-input color-primary-1"
                                type="radio"
                                name="theme-primary"
                                id="switcher-primary"
                            />
                        </div>
                        <div className="form-check switch-select me-3">
                            <input
                                className="form-check-input color-input color-primary-2"
                                type="radio"
                                name="theme-primary"
                                id="switcher-primary1"
                            />
                        </div>
                        <div className="form-check switch-select me-3">
                            <input
                                className="form-check-input color-input color-primary-3"
                                type="radio"
                                name="theme-primary"
                                id="switcher-primary2"
                            />
                        </div>
                        <div className="form-check switch-select me-3">
                            <input
                                className="form-check-input color-input color-primary-4"
                                type="radio"
                                name="theme-primary"
                                id="switcher-primary3"
                            />
                        </div>
                        <div className="form-check switch-select me-3">
                            <input
                                className="form-check-input color-input color-primary-5"
                                type="radio"
                                name="theme-primary"
                                id="switcher-primary4"
                            />
                        </div>
                        <div className="form-check switch-select me-3 ps-0 mt-1 color-primary-light">
                            <div className="theme-container-primary" />
                            <div className="pickr-container-primary" />
                        </div>
                    </div>
                </div>
                <div>
                    <p className="switcher-style-head">reset:</p>
                    <div className="text-center">
                        <button id="reset-all" className="btn btn-danger mt-3">
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}