
export default function MyTasks() {
    return (
        <>
            <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
                <h1 className="page-title fw-semibold fs-18 mb-0">Task List View</h1>
                <div className="ms-md-1 ms-0">
                    {/* <nav>
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item">
                                <a href="javascript:void(0);">Task</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Task List View
                            </li>
                        </ol>
                    </nav> */}
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="card custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">Total Tasks</div>
                            <div className="d-flex">
                                <button
                                    className="btn btn-sm btn-primary btn-wave waves-light"
                                    data-bs-toggle="modal"
                                    data-bs-target="#create-task"
                                >
                                    <i className="ri-add-line fw-semibold align-middle me-1" /> Create
                                    Task
                                </button>
                                {/* Start::add task modal */}
                                <div
                                    className="modal fade"
                                    id="create-task"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h6 className="modal-title">Add Task</h6>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                />
                                            </div>
                                            <div className="modal-body px-4">
                                                <div className="row gy-2">
                                                    <div className="col-xl-6">
                                                        <label htmlFor="task-name" className="form-label">
                                                            Task Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="task-name"
                                                            placeholder="Task Name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <label htmlFor="task-id" className="form-label">
                                                            Task ID
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="task-id"
                                                            placeholder="Task ID"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <label className="form-label">Assigned Date</label>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <div className="input-group-text text-muted">
                                                                    {" "}
                                                                    <i className="ri-calendar-line" />{" "}
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="assignedDate"
                                                                    placeholder="Choose date and time"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <label className="form-label">Due Date</label>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <div className="input-group-text text-muted">
                                                                    {" "}
                                                                    <i className="ri-calendar-line" />{" "}
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="dueDate"
                                                                    placeholder="Choose date and time"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <label className="form-label">Status</label>
                                                        <select
                                                            className="form-control"
                                                            data-trigger=""
                                                            name="choices-single-default"
                                                            id="choices-single-default"
                                                        >
                                                            <option value="New">New</option>
                                                            <option value="Completed">Completed</option>
                                                            <option value="Inprogress">Inprogress</option>
                                                            <option value="Pending">Pending</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <label className="form-label">Priority</label>
                                                        <select
                                                            className="form-control"
                                                            data-trigger=""
                                                            name="choices-single-default"
                                                            id="choices-single-default1"
                                                        >
                                                            <option value="High">High</option>
                                                            <option value="Medium">Medium</option>
                                                            <option value="Low">Low</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-12">
                                                        <label className="form-label">Assigned To</label>
                                                        <select
                                                            className="form-control"
                                                            name="choices-multiple-remove-button1"
                                                            id="choices-multiple-remove-button1"
                                                            multiple
                                                        >
                                                            <option value="Choice 1">Angelina May</option>
                                                            <option value="Choice 2">Kiara advain</option>
                                                            <option value="Choice 3">Hercules Jhon</option>
                                                            <option value="Choice 4">Mayor Kim</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button
                                                    type="button"
                                                    className="btn btn-light"
                                                    data-bs-dismiss="modal"
                                                >
                                                    Cancel
                                                </button>
                                                <button type="button" className="btn btn-primary">
                                                    Add Task
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End::add task modal */}
                                <div className="dropdown ms-2">
                                    <button
                                        className="btn btn-icon btn-secondary-light btn-sm btn-wave waves-light"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="ti ti-dots-vertical" />
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                New Tasks
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                Pending Tasks
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                Completed Tasks
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                Inprogress Tasks
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table text-nowrap table-bordered">
                                    <thead>
                                        <tr>
                                            <th>
                                                <input
                                                    className="form-check-input check-all"
                                                    type="checkbox"
                                                    id="all-tasks"
                                                    defaultValue=""
                                                    aria-label="..."
                                                />
                                            </th>
                                            <th scope="col">Task</th>
                                            <th scope="col">Task ID</th>
                                            <th scope="col">Assigned Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Due Date</th>
                                            <th scope="col">Priority</th>
                                            <th scope="col">Assigned To</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="task-list">
                                            <td className="task-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    aria-label="..."
                                                />
                                            </td>
                                            <td>
                                                <span className="fw-semibold">Design New Landing Page</span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">SPK - 01</span>
                                            </td>
                                            <td>02-06-2023</td>
                                            <td>
                                                <span className="fw-semibold text-primary">New</span>
                                            </td>
                                            <td>10-06-2023</td>
                                            <td>
                                                <span className="badge bg-secondary-transparent">
                                                    Medium
                                                </span>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../assets/images/faces/8.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <a
                                                        className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white"
                                                        href="javascript:void(0);"
                                                    >
                                                        +2
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-primary-light btn-icon btn-sm"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    data-bs-title="Edit"
                                                >
                                                    <i className="ri-edit-line" />
                                                </button>
                                                <button className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn">
                                                    <i className="ri-delete-bin-5-line" />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="task-list">
                                            <td className="task-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    aria-label="..."
                                                    defaultChecked
                                                />
                                            </td>
                                            <td>
                                                <span className="fw-semibold">New Project Buleprint</span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">SPK - 04</span>
                                            </td>
                                            <td>05-06-2023</td>
                                            <td>
                                                <span className="fw-semibold text-secondary">
                                                    Inprogress
                                                </span>
                                            </td>
                                            <td>15-06-2023</td>
                                            <td>
                                                <span className="badge bg-danger-transparent">High</span>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../assets/images/faces/12.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../assets/images/faces/11.jpg" alt="img" />
                                                    </span>
                                                    <a
                                                        className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white"
                                                        href="javascript:void(0);"
                                                    >
                                                        +4
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-primary-light btn-icon btn-sm"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    data-bs-title="Edit"
                                                >
                                                    <i className="ri-edit-line" />
                                                </button>
                                                <button className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn">
                                                    <i className="ri-delete-bin-5-line" />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="task-list">
                                            <td className="task-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    aria-label="..."
                                                />
                                            </td>
                                            <td>
                                                <span className="fw-semibold">Server Side Validation</span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">SPK - 11</span>
                                            </td>
                                            <td>12-06-2023</td>
                                            <td>
                                                <span className="fw-semibold text-warning">Pending</span>
                                            </td>
                                            <td>16-06-2023</td>
                                            <td>
                                                <span className="badge bg-success-transparent">Low</span>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../assets/images/faces/5.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../assets/images/faces/9.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../assets/images/faces/13.jpg" alt="img" />
                                                    </span>
                                                    <a
                                                        className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white"
                                                        href="javascript:void(0);"
                                                    >
                                                        +5
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-primary-light btn-icon btn-sm"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    data-bs-title="Edit"
                                                >
                                                    <i className="ri-edit-line" />
                                                </button>
                                                <button className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn">
                                                    <i className="ri-delete-bin-5-line" />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="task-list">
                                            <td className="task-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    aria-label="..."
                                                />
                                            </td>
                                            <td>
                                                <span className="fw-semibold">New Plugin Development</span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">SPK - 24</span>
                                            </td>
                                            <td>08-06-2023</td>
                                            <td>
                                                <span className="fw-semibold text-success">Completed</span>
                                            </td>
                                            <td>17-06-2023</td>
                                            <td>
                                                <span className="badge bg-success-transparent">Low</span>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../assets/images/faces/8.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <a
                                                        className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white"
                                                        href="javascript:void(0);"
                                                    >
                                                        +2
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-primary-light btn-icon btn-sm"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    data-bs-title="Edit"
                                                >
                                                    <i className="ri-edit-line" />
                                                </button>
                                                <button className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn">
                                                    <i className="ri-delete-bin-5-line" />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="task-list">
                                            <td className="task-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    aria-label="..."
                                                    defaultChecked
                                                />
                                            </td>
                                            <td>
                                                <span className="fw-semibold">
                                                    Designing New Authentication Page
                                                </span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">SPK - 16</span>
                                            </td>
                                            <td>03-06-2023</td>
                                            <td>
                                                <span className="fw-semibold text-secondary">
                                                    Inprogress
                                                </span>
                                            </td>
                                            <td>08-06-2023</td>
                                            <td>
                                                <span className="badge bg-secondary-transparent">
                                                    Medium
                                                </span>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../assets/images/faces/10.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../assets/images/faces/15.jpg" alt="img" />
                                                    </span>
                                                    <a
                                                        className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white"
                                                        href="javascript:void(0);"
                                                    >
                                                        +3
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-primary-light btn-icon btn-sm"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    data-bs-title="Edit"
                                                >
                                                    <i className="ri-edit-line" />
                                                </button>
                                                <button className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn">
                                                    <i className="ri-delete-bin-5-line" />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="task-list">
                                            <td className="task-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    aria-label="..."
                                                    defaultChecked
                                                />
                                            </td>
                                            <td>
                                                <span className="fw-semibold">
                                                    Documentation For New Template
                                                </span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">SPK - 07</span>
                                            </td>
                                            <td>12-06-2023</td>
                                            <td>
                                                <span className="fw-semibold text-primary">New</span>
                                            </td>
                                            <td>25-06-2023</td>
                                            <td>
                                                <span className="badge bg-danger-transparent">High</span>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../assets/images/faces/12.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-primary-light btn-icon btn-sm"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    data-bs-title="Edit"
                                                >
                                                    <i className="ri-edit-line" />
                                                </button>
                                                <button className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn">
                                                    <i className="ri-delete-bin-5-line" />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="task-list">
                                            <td className="task-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    aria-label="..."
                                                />
                                            </td>
                                            <td>
                                                <span className="fw-semibold">Updating Old UI</span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">SPK - 13</span>
                                            </td>
                                            <td>06-06-2023</td>
                                            <td>
                                                <span className="fw-semibold text-success">Completed</span>
                                            </td>
                                            <td>12-06-2023</td>
                                            <td>
                                                <span className="badge bg-success-transparent">Low</span>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../assets/images/faces/11.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../assets/images/faces/1.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../assets/images/faces/10.jpg" alt="img" />
                                                    </span>
                                                    <a
                                                        className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white"
                                                        href="javascript:void(0);"
                                                    >
                                                        +1
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-primary-light btn-icon btn-sm"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    data-bs-title="Edit"
                                                >
                                                    <i className="ri-edit-line" />
                                                </button>
                                                <button className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn">
                                                    <i className="ri-delete-bin-5-line" />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="task-list">
                                            <td className="task-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    aria-label="..."
                                                    defaultChecked
                                                />
                                            </td>
                                            <td>
                                                <span className="fw-semibold">
                                                    Developing New Events In Plugins
                                                </span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">SPK - 20</span>
                                            </td>
                                            <td>14-06-2023</td>
                                            <td>
                                                <span className="fw-semibold text-warning">Pending</span>
                                            </td>
                                            <td>19-06-2023</td>
                                            <td>
                                                <span className="badge bg-danger-transparent">High</span>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../assets/images/faces/3.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../assets/images/faces/9.jpg" alt="img" />
                                                    </span>
                                                    <a
                                                        className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white"
                                                        href="javascript:void(0);"
                                                    >
                                                        +2
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-primary-light btn-icon btn-sm"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    data-bs-title="Edit"
                                                >
                                                    <i className="ri-edit-line" />
                                                </button>
                                                <button className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn">
                                                    <i className="ri-delete-bin-5-line" />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="task-list">
                                            <td className="task-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    aria-label="..."
                                                />
                                            </td>
                                            <td>
                                                <span className="fw-semibold">Fixing Minor Ui Issues</span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">SPK - 26</span>
                                            </td>
                                            <td>11-06-2023</td>
                                            <td>
                                                <span className="fw-semibold text-success">Completed</span>
                                            </td>
                                            <td>18-06-2023</td>
                                            <td>
                                                <span className="badge bg-secondary-transparent">
                                                    Medium
                                                </span>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../assets/images/faces/5.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../assets/images/faces/14.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../assets/images/faces/12.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../assets/images/faces/3.jpg" alt="img" />
                                                    </span>
                                                    <a
                                                        className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white"
                                                        href="javascript:void(0);"
                                                    >
                                                        +1
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-primary-light btn-icon btn-sm"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    data-bs-title="Edit"
                                                >
                                                    <i className="ri-edit-line" />
                                                </button>
                                                <button className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn">
                                                    <i className="ri-delete-bin-5-line" />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="task-list">
                                            <td className="task-checkbox">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    aria-label="..."
                                                />
                                            </td>
                                            <td>
                                                <span className="fw-semibold">
                                                    Designing Of New Ecommerce Website
                                                </span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">SPK - 32</span>
                                            </td>
                                            <td>03-06-2023</td>
                                            <td>
                                                <span className="fw-semibold text-secondary">
                                                    Inprogress
                                                </span>
                                            </td>
                                            <td>09-06-2023</td>
                                            <td>
                                                <span className="badge bg-success-transparent">Low</span>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../assets/images/faces/12.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../assets/images/faces/6.jpg" alt="img" />
                                                    </span>
                                                    <a
                                                        className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white"
                                                        href="javascript:void(0);"
                                                    >
                                                        +4
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-primary-light btn-icon btn-sm"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    data-bs-title="Edit"
                                                >
                                                    <i className="ri-edit-line" />
                                                </button>
                                                <button className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn">
                                                    <i className="ri-delete-bin-5-line" />
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card-footer">
                            <nav aria-label="Page navigation">
                                <ul className="pagination mb-0 float-end">
                                    <li className="page-item disabled">
                                        <a className="page-link">Previous</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="javascript:void(0);">
                                            1
                                        </a>
                                    </li>
                                    <li className="page-item active" aria-current="page">
                                        <a className="page-link" href="javascript:void(0);">
                                            2
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="javascript:void(0);">
                                            3
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="javascript:void(0);">
                                            Next
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}