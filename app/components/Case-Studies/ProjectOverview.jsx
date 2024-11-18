// src/components/ProjectOverview.js
import React from 'react';
import casestudyStyles from '@/app/styles/Case-Study.module.css';

const ProjectOverview = ({ title, description, category, service }) => {
  return (
    <div className={casestudyStyles.Project_Overview_container}>
      <div className={casestudyStyles.Project_Overview_heding}>
        <h2>Project <br /> Overview</h2>
      </div>
      <div className={casestudyStyles.Project_Overview_Discovering}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={casestudyStyles.Project_Overview_Right_bottom}>
          <p className={casestudyStyles.Project_Overview_Category}>Category</p>
          <h2 className={casestudyStyles.Project_Overview_Tech}>{category}</h2>
          <br />
          <p className={casestudyStyles.Project_Overview_Category}>Service</p>
          <h2 className={casestudyStyles.Project_Overview_Tech}>{service}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
