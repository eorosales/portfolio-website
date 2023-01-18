import React from "react";
import styles from "./project.module.css";
import { FaGithub } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";

const Project = ({ id, client, type, image, description, tech }) => {
  return (
    <div className={styles.project}>
      <img className={styles.project_image} src={`${image}`} />
      <div className={styles.project_info}>
        <h3 className={styles.project_client}>{client}</h3>
        <p className={styles.project_type}>{type}</p>
        <p className={styles.project_description}>{description}</p>

        <ul className={styles.project_tech}>
          {tech.map((t) => (
            <li>{t}</li>
          ))}
        </ul>
        <div className={styles.project_links}>
          <span className={styles.project_link}>
            <FaGithub className={styles.project_icon} />
            GitHub
          </span>
          <span className={styles.project_link}>
            <AiFillEye className={styles.project_icon} />
            Live Project
          </span>
        </div>
      </div>
    </div>
  );
};

export default Project;
