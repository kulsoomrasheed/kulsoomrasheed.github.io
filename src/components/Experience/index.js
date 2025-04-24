import React from "react";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExperienceCard from "../Cards/ExperienceCard";
import { experiences } from "../../data/constants";
import GitHubCalendar from "react-github-calendar";
import { img } from "@mui/icons-material";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 80px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const index = () => {
  return (
    <Container id="experience">
      {/* <Title>Github Calender</Title>
      <Wrapper>
        <Title className="react-activity-calendar">
          <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/370213373_792259139367366_9170705927947989379_n.png?_nc_cat=102&ccb=1-7&_nc_sid=510075&_nc_ohc=nzBs-CxC2eYAX8ZDbzC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT0-JTqA7mWvdXbwulLa4T_XzIZ28G93q6wVlyc4Ztfqg&oe=65520A72" />
        </Title>{" "}
      </Wrapper>
      <Wrapper>
        <Title>Github Stats</Title>
        <img
          id="github-stats-card"
          borderRadius="20px"
          src="https://github-readme-stats.vercel.app/api?username=kulsoomrasheed&theme=blue-purple&hide_border=true&include_all_commits=true&count_private=true"
        ></img>
        <Title>Github Streaks</Title>
        <img
          id="github-streak-stats"
          borderRadius="20px"
          src="https://github-readme-streak-stats.herokuapp.com/?user=kulsoomrasheed&theme=blue-green&hide_border=true"
        ></img>

        <Title>Github Languages</Title>
        <img
          id="github-top-langs"
          borderRadius="20px"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=kulsoomrasheed&theme=blue-green&hide_border=true&include_all_commits=true&count_private=true&layout=compact"
        ></img>

        <Title>Github Trophies</Title>

        <img src="https://github-profile-trophy.vercel.app/?username=kulsoomrasheed&theme=radical&no-frame=false&no-bg=false&margin-w=4" />
      </Wrapper> */}
      <Wrapper>
        <Title>Experience</Title>
       {experiences?.map((el,i)=>(
        <ExperienceCard experience={el} />
       ))}
      </Wrapper>
    </Container>
  );
};

export default index;
