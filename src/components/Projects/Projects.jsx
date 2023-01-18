import styles from "./projects.module.css";
import React, { useState, useEffect } from "react";
import { _getProjects } from "../../../_DATA";
import Project from "../Project/Project";

const Projects = () => {
  const [projects, setProjects] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await _getProjects();
        setProjects(res);
        setIsLoading(false);
      } catch (err) {
        throw new Error(`Error: ${err}`);
      }
    };
    getProjects();
  }, [isLoading]);

  if (isLoading === true) return "loading";

  return (
    <div className={styles.projects}>
      <div className={styles.projects_heading}>
        <h3>Projects</h3>
        <p>Collection of work</p>
      </div>
      <div className={styles.projects_gallery}>
        {Object.keys(projects).map((project) => {
          const id = projects[project].id;
          return <Project key={id} {...projects[project]} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
