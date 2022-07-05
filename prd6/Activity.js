import React from "react";
import styles from "./activity.module.css";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleIcon from '@mui/icons-material/Circle';
import food from "./food.jpg";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Subjects from "./Subjects";

function Activity() {
  // Active Button State
  const [active, setActive] = React.useState(1);
  const SetView = (active) => {
    setActive(active);
  };
  const percentage = 12.5;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.progressbar}>
            <CircularProgressbarWithChildren
              value={percentage}
              styles={buildStyles({
                pathTransitionDuration: 0.5,
                pathColor: `#13AE7E`,
                textColor: "#0B6E4F",
                width: "100px",
              })}
            ></CircularProgressbarWithChildren>
          </div>
          <div className={styles.contentOfBar}>
            <p className={styles.number}>{percentage}%</p>
            <p className={styles.text}>PROGRESS</p>
          </div>
          <p className={styles.topic}>5/7 Topics Completed</p>
          <div className={styles.streak}>
            <div className={styles.streakContent}>
              <p className={styles.streakNumber}>8</p>
              <p className={styles.streakText}>Current Streak</p>
            </div>
            <div className={styles.streakContent}>
              <p className={styles.streakNumber}>8</p>
              <p className={styles.streakText}>Max Streak</p>
            </div>
          </div>
          <div className={styles.subjects}>
            <p className={styles.heading}>Start Learning</p>
            {Subjects.map((subject) =>
              <div className={styles.list} key={subject.id} onClick={() => SetView(subject.id)}>
              {active===subject.id ? 
              <CircleIcon className="{styles.icon}"></CircleIcon> : 
              <CircleOutlinedIcon className={styles.icon}></CircleOutlinedIcon>}
              <p className={styles.point}>{subject.subjectName}</p>
              </div>
            )}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.upper}>
            <img src={food} alt="food" className={styles.img} />
            <p className={styles.upperHeading}>Food Technology</p>
            <div className={styles.upperIcons}>
              <div className={styles.upperIcon}>
                <PlayCircleIcon className={styles.uicon}></PlayCircleIcon>
                <p className={styles.upperText}>Expert Lectures</p>
              </div>
              <div className={styles.upperIcon}>
                <BorderColorIcon className={styles.uicon}></BorderColorIcon>
                <p className={styles.upperText}>5 Sectional Tests</p>
              </div>
              <div className={styles.upperIcon}>
                <FormatListBulletedIcon
                  className={styles.uicon}
                ></FormatListBulletedIcon>
                <p className={styles.upperText}>20 Chapter Notes</p>
              </div>
            </div>
          </div>
          <div className={styles.lower}>
            <div className={styles.lowerTop}>
              <p className={styles.lowerHeading}>{Subjects[active].subjectName}</p>
              <div className={styles.horizontalProgressBar}>
                <div className={styles.horizontalbar}>
                  <div
                    className={styles.progressShow}
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <p className={styles.progressBarText}>5/7 Topics Completed</p>
              </div>
            </div>
            <div className={styles.lowerBottom}>
              <div className={styles.lowerBottomOptions}>
              {Subjects[active].subTopics.map((subtopic) =>
                <div className={styles.lowerBottomPoints}>
                  <CheckCircleRoundedIcon
                    className={styles.lowerBottomicons}
                  ></CheckCircleRoundedIcon>
                  <p className={styles.lowerBottomText}>{subtopic}</p>
                </div>
              )}
              </div>
              <button className={styles.lowerBottomButton}>
                Resume Learning
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Activity;
