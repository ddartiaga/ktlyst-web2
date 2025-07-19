import StatisticCard from "@/components/ui/core/widgets/StatisticCard"

export default function TaskDashboard() {
    return (
        <>
            <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
                <h1 className="page-title fw-semibold fs-18 mb-0">Tasks Dashboard</h1>
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
            <div className="row align-items-center">
                <div className="col-sm-12">
                    <div className="row gx-3 ">
                        <div className="col-3">
                            <StatisticCard title="New Tasks" value="12,345" icon="ri-list-check-3" trendIcon="ti ti-trending-up" trendValue="3.25%" />
                        </div>

                        <div className="col-3">

                            <StatisticCard title="Completed Tasks" value="4,176" icon="ri-check-double-fill" iconClass="bg-success-transparent text-success" trendIcon="ti ti-trending-up" trendValue="1.16%" />
                        </div>

                        <div className="col-3">

                            <StatisticCard title="Pending Tasks" value="7,064" icon="ri-stop-circle-line" iconClass="bg-warning-transparent text-warning" trendIcon="ti ti-trending-down" trendValue="0.25%" />

                        </div>

                        <div className="col-3">
                            <StatisticCard title="In Progress Tasks" value="1,105" icon="ri-progress-5-line" iconClass="bg-info-transparent text-info" trendIcon="ti ti-trending-up" trendValue="0.46%" />
                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-sm-12">
                        <div className="card custom-card">
                            <div className="card-body p-0">
                                <div className="p-4 pb-2">
                                    <p className="fs-15 fw-semibold">
                                        Tasks Statistics{" "}
                                        <span className="text-muted fw-normal">(Last 6 months) :</span>
                                    </p>
                                    <div id="task-list-stats" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}