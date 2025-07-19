
export default function StatisticCard({ title, value, icon, iconClass = "bg-primary-transparent text-primary", trendIcon, trendValue }: { title: string, value: string, icon: string, iconClass?: string, trendIcon: string, trendValue: string }) {
    return (
        <div className="card custom-card">
            <div className="card-body">
                <div className="d-flex flex-wrap align-items-top justify-content-between align-items-center">
                    <div className="me-3">
                        <span className={`avatar avatar-md fs-18 ${iconClass}`}>
                            <i className={`${icon} fs-20`} />
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="mb-0 text-muted">{title}</p>
                        <div className="d-flex align-items-center">
                            <span className="fs-5 fw-semibold">{value}</span>
                            <span className="fs-12 text-success ms-2">
                                <i className={`${trendIcon} me-1 d-inline-block`} />
                                {trendValue}
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}