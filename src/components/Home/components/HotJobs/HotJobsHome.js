import { Container, Row, Col } from "react-bootstrap";
import JobCard from "../../../commonComp/JobCard/JobCard";
import "./HotJobsHome.css";

import { useEffect, useState } from "react";

export default function HotJobsHome() {
  const [hotJobsInfo, setHotJobsInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((res) => {
        setHotJobsInfo(res);
        console.log(res);
      });
  }, []);
  return (
    <div className="hot-jobs-section">
      <Container>
        <Row className="hot-jobs-title">
          <h1>Hot Jobs Across you</h1>
        </Row>
        <Row className="card-row">
          {hotJobsInfo.map((job, index) => {
            return (
              <Col key={index}>
                <JobCard salary={job.salary} position={job.position} location={job.location}/>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
