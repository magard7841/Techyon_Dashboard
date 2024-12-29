import React, { useState } from "react";
import styles from './AllTask.module.scss';
import { Folder, Calendar, FileText } from "lucide-react";

const ProjectCard = ({ project }) => (
    <div className={styles.card}>
        <div className={styles.title}>
            <div className={styles.nameWrapper}>
                <Folder className={styles.folderIcon} />
                <p>{project.name}</p>
            </div>
            <div className={styles.idWrapper}>
                <span className={styles.id}>ID: {project.id}</span>
                <span className={project.status === "Delayed" ? styles.statusDelayed : styles.statusOnTrack}>
                    {project.status === "Delayed" ? "Delayed" : "On Track"}
                </span>
            </div>
        </div>

        <div className={styles.progressWrapper}>
            <div className={styles.progressLabels}>
                <span>07</span>
                <span>14</span>
            </div>
            <div className={styles.progressBar}>
                <div
                    className={styles.progress}
                    style={{ width: `${project.progress}%` }}
                />
            </div>
        </div>

        <div className={styles.details}>
            <div className={styles.dateRow}>
                <Calendar className={styles.calendarIcon} />
                <span>{project.date}</span>
            </div>
            <div className={styles.infoRow}>
                <div className={styles.memberWrapper}>
                    <div className={styles.avatars}>
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className={styles.avatar} />
                        ))}
                    </div>
                    <span>{project.members}</span>
                </div>
                <div className={styles.filesWrapper}>
                    <FileText className={styles.fileIcon} />
                    <span>{project.files} Files</span>
                </div>
            </div>
        </div>
    </div>
);

const ProjectSection = ({ title, projects, showAll, setShowAll }) => (
    <div className={styles.section}>
        <div className={styles.sectionHeader}>
            <h3>{title}</h3>
            <span className={styles.count}>2</span>
        </div>
        <div className={styles.sectionContent}>
            {(showAll ? projects : projects.slice(0, 3)).map((project, idx) => (
                <ProjectCard key={idx} project={project} />
            ))}
            {!showAll && projects.length > 3 && (
                <button
                    className={styles.viewMore}
                    onClick={() => setShowAll(true)}
                >
                    view more
                </button>
            )}
        </div>
    </div>
);

const AllTask = () => {
    const [showAll, setShowAll] = useState(false);

    const projects = [
        { id: "P-01", name: "Project Name", progress: 50, date: "01/01/2024 - 31/01/2024", members: "10+", files: "12", status: "On Track" },
        { id: "P-02", name: "Project Name", progress: 50, date: "01/01/2024 - 31/01/2024", members: "10+", files: "12", status: "Delayed" },
        { id: "P-03", name: "Project Name", progress: 50, date: "01/01/2024 - 31/01/2024", members: "10+", files: "12", status: "On Track" },
        { id: "P-04", name: "Project Name", progress: 50, date: "01/01/2024 - 31/01/2024", members: "10+", files: "12", status: "On Track" },
        { id: "P-05", name: "Project Name", progress: 50, date: "01/01/2024 - 31/01/2024", members: "10+", files: "12", status: "On Track" },
        { id: "P-06", name: "Project Name", progress: 50, date: "01/01/2024 - 31/01/2024", members: "10+", files: "12", status: "On Track" },
        { id: "P-07", name: "Project Name", progress: 50, date: "01/01/2024 - 31/01/2024", members: "10+", files: "12", status: "On Track" },
        { id: "P-08", name: "Project Name", progress: 50, date: "01/01/2024 - 31/01/2024", members: "10+", files: "12", status: "On Track" },
        { id: "P-09", name: "Project Name", progress: 50, date: "01/01/2024 - 31/01/2024", members: "10+", files: "12", status: "On Track" },
        { id: "P-10", name: "Project Name", progress: 50, date: "01/01/2024 - 31/01/2024", members: "10+", files: "12", status: "On Track" },
    ];

    const sections = ["In Progress", "In Review", "In Revision", "Completed"];

    return (
        <div className={styles.dashboard}>
            <div className={styles.grid}>
                {sections.map((status) => (
                    <ProjectSection
                        key={status}
                        title={status}
                        projects={projects}
                        showAll={showAll}
                        setShowAll={setShowAll}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllTask;