import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import AllTask from "../AllTask/AllTask";
import { Calendar, Folder } from "lucide-react";

const ProjectCard = ({ project }) => (
    <div className={styles.card}>
        <div className={styles.title}>
            <div className={styles.nameWrapper}>
                <Folder className={styles.folderIcon} />
                <p>{project.name}</p>
            </div>
            <p className={styles.id}>ID: {project.id}</p>
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
                    <span>📄</span>
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

const Dashboard = () => {
    const [showAll, setShowAll] = useState(false);
    const [selectedTab, setSelectedTab] = useState("All Projects");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const projects = [
        { id: "P-01", name: "Project Name", progress: 50, date: "01/01/2024 - 31/01/2024", members: "10+", files: "12" },
        { id: "P-02", name: "Project Name", progress: 50, date: "01/01/2024 - 31/01/2024", members: "10+", files: "12" },
        { id: "P-03", name: "Project Name", progress: 50, date: "01/01/2024 - 31/01/2024", members: "10+", files: "12" },
        { id: "P-04", name: "Project Name", progress: 50, date: "01/01/2024 - 31/01/2024", members: "10+", files: "12" },
        { id: "P-05", name: "Project Name", progress: 50, date: "01/01/2024 - 31/01/2024", members: "10+", files: "12" },
        { id: "P-06", name: "Project Name", progress: 50, date: "01/01/2024 - 31/01/2024", members: "10+", files: "12" },
        { id: "P-07", name: "Project Name", progress: 50, date: "01/01/2024 - 31/01/2024", members: "10+", files: "12" },
        { id: "P-08", name: "Project Name", progress: 50, date: "01/01/2024 - 31/01/2024", members: "10+", files: "12" },
        { id: "P-09", name: "Project Name", progress: 50, date: "01/01/2024 - 31/01/2024", members: "10+", files: "12" },
        { id: "P-10", name: "Project Name", progress: 50, date: "01/01/2024 - 31/01/2024", members: "10+", files: "12" },
    ];

    const sections = ["Not Started", "In Progress", "Archived", "Completed"];

    return (
        <div className={styles.dashboard}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <h1>Projects</h1>
                    <button className={styles.addProject}>+ Projects</button>
                </div>
                <div className={styles.headerRight}>
                    <p>
                        Dashboard / <a href="/">Project Preview</a>
                    </p>
                </div>
            </div>

            <div className={styles.subHeader}>
                <div
                    className={styles.dropdownToggle}
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                >
                    <span>{selectedTab}</span>
                    {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                {isDropdownOpen && (
                    <div className={styles.dropdownMenu}>
                        <button
                            className={`${styles.dropdownOption} ${selectedTab === "All Projects" ? styles.active : ""
                                }`}
                            onClick={() => {
                                setSelectedTab("All Projects");
                                setIsDropdownOpen(false);
                            }}
                        >
                            All Projects
                        </button>
                        <button
                            className={`${styles.dropdownOption} ${selectedTab === "All Tasks" ? styles.active : ""
                                }`}
                            onClick={() => {
                                setSelectedTab("All Tasks");
                                setIsDropdownOpen(false);
                            }}
                        >
                            All Tasks
                        </button>
                    </div>
                )}
            </div>

            {selectedTab === "All Projects" ? (
                <div className={styles.sectionsGrid}>
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
            ) : (
                <div className={styles.emptyState}>
                    <AllTask />
                </div>
            )}
        </div>
    );
};

export default Dashboard;