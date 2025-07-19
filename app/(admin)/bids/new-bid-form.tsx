
export default function NewBidForm() {
    return (
        <form>
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
        </form>
    );
}