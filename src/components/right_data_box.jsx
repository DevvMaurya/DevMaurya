import "../all_CSS/rightbox.css";
import development from "../assets/icons8-development-48.png";
import webdev from "../assets/icons8-website-development-67.png";
import ml from "../assets/icons8-algorithm-60.png";
import vision from "../assets/icons8-vision-24.png";
import { useState } from "react";

function MenuBtns({ setCompo }) {
  const btns = ["About", "Resume", "Works", "Acadamics"];

  return (
    <>
      <nav className="menubtns">
        {btns.map((btn, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setCompo(index);
                console.log(index, " is setted.!");
              }}
            >
              {btn}
            </button>
          );
        })}
      </nav>
    </>
  );
}

function About() {
  return (
    <main>
      <section id="about">
        <h2>About Me</h2>
        <p>
          Hey there! 👋 I'm <strong>Dev Maurya</strong>, a passionate and
          versatile tech enthusiast forging my path through the dynamic fields
          of <strong>Information Technology</strong> and{" "}
          <strong>Artificial Intelligence</strong>.
        </p>
        <h3>Who Am I? 🚀</h3>
        <p>
          I am a proactive final year undergraduate pursuing a Bachelor's in
          Technology from Sarvajanik College Of Engineering and Technology
          (SCET), Surat. My academic journey is marked by a strong foundation in
          Information Technology, and I am deeply passionate about the
          transformative potential of AI and Machine Learning.
        </p>
      </section>

      <section id="doing">
        <h2>What I'm Doing</h2>
        <div className="cards">
          <div className="card">
            <img
              width="48"
              height="48"
              src={development}
              alt="address-book--v2"
            />
            <h3>Product Development</h3>
            <p>Make product to solve real world issues, make life easy</p>
          </div>
          <div className="card">
            <img width="48" height="48" src={webdev} alt="" />
            <h3>Web Development</h3>
            <p>High-quality development of sites at the professional level.</p>
          </div>
          <div className="card">
            <img width="48" height="48" src={vision} alt="" />

            <h3>Computer Vision</h3>
            <p>Professional development of applications for real-time data.</p>
          </div>
          <div className="card">
            <img width="48" height="48" src={ml} alt="" />

            <h3>Machine Learning</h3>
            <p>Creating models for data-driven decision making.</p>
          </div>
        </div>
      </section>
      <section id="about">
        <h3>Beyond Tech? 🌍🤝</h3>
        <p>
        While I revel in the intricate world of tech, my experiences extend beyond the screen. I've led teams, secured sponsorships, and navigated the dynamic landscape of events, leveraging my leadership and networking skills.
        </p>
        <h3>What Drives Me? 🚀📚</h3>
        <p>
        The thrill of learning fuels my journey. I'm always exploring new technologies, refining my skills, and embracing challenges that broaden my horizons.
        </p>
      </section>
      <footer class="footer">
        <div class="footer-content">
          <div>
            <h4>Phone</h4>
            <p>+91 8200270283</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>devvmaurya@gmail.com</p>
          </div>
          <div>
            <h4>Follow Me</h4>
            <p>
              <a href="https://www.linkedin.com/in/dev-maurya-238405222">LinkedIn</a> | <a href="https://github.com/DevvMaurya">GitHub</a> |{" "}
              <a href="https://leetcode.com/u/DevvMaurya/">LeetCode</a>
            </p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2024 by Dev Maurya.</p>
        </div>
      </footer>
    </main>
  );
}

function Resume() {
  return (
    <main>
      <div class="resume-container">
        <section class="resume-section">
          <h2>Resume</h2>
          <div class="resume-content">
            <div class="resume-category">
              <h3><u>Work Experience</u></h3>
              <div class="resume-item">
                <span>May 2024</span>
                <div>
                  <h4>Voice Personal Assistant</h4>
                  <p>
                    Made a voice-operated Personal Desktop Assistant with Gemini
                    AI Integration, capable of handling various tasks such as
                    initiating workspace, opening apps, and solving problems
                    using AI.
                    <br />
                    Tech: Python, Gemini AI
                  </p>
                </div>
              </div>
              <div class="resume-item">
                <span>April 2024</span>
                <div>
                  <h4>Supervisor Allocation System</h4>
                  <p>
                    Developed a system to automate the allocation of professors
                    during examination sessions for the institute's examination
                    department.
                    <br />
                    Tech: Python, Django
                  </p>
                </div>
              </div>
              <div class="resume-item">
                <span>Virtual Internship</span>
                <div>
                  <h4>LetsGrowMore</h4>
                  <p>
                    Worked as a Python developer during a virtual internship.
                  </p>
                </div>
              </div>
              <div class="resume-item">
                <span>HackTheTank 2.0</span>
                <div>
                  <h4>Back-End API Developer (Node.js)</h4>
                  <p>Runner-up in HackTheTank 2.0 competition at SVNIT.</p>
                </div>
              </div>
              <div class="resume-item">
                <span>Open Source Contributor</span>
                <div>
                  <h4>Various Projects</h4>
                  <p>Contributed to various open-source projects.</p>
                </div>
              </div>
            </div>
            <hr />
            <div class="resume-category">
              <h3><u>Education</u></h3>
              <div class="resume-item">
                <span>November 2021 - June 2025</span>
                <div>
                  <h4>
                    SCET - Sarvajanik College Of Engineering and Technology
                  </h4>
                  <p>
                    Bachelor of Technology in Information Technology, currently
                    in 7th semester. Recent CGPA score: 9+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section class="skills-section">
          <h3><u>Skills & Expertise</u></h3>
          <ul>
            <li>Problem-solving, analytical, and technical skills</li>
            <li>Communication, decision-making, teamwork skills</li>
            <li>Programming Languages: Python, JavaScript, C</li>
            <li>
              Libraries/Frameworks: pandas, numpy, scikit-learn, easyOCR,
              Pyside6, Django, React, NodeJs
            </li>
            <li>Databases: MySQL, MongoDB</li>
            <li>Other: IoT, Linux, Git, and GitHub</li>
          </ul>
        </section>
        <hr />
        <section class="projects-section">
          <h3><u>Projects</u></h3>
          <div class="resume-item">
            <span>December 2023 - Ongoing</span>
            <div>
              <h4>Atmosphere Weather Predictor System</h4>
              <p>
                A team research project under the guidance of Dr. Niket Shastri
                to develop a system that can predict weather conditions more
                accurately using machine learning, image processing, data
                processing, and visualization.
                <br />
                Tech: Python, Data processing, Automation
              </p>
            </div>
          </div>
          <div class="resume-item">
            <span>October 2023</span>
            <div>
              <h4>Smart Plant System</h4>
              <p>
                Developed an IoT system to take care of plants remotely and
                collect data for future research. The project was part of an
                inter-college IoT product competition.
                <br />
                Tech: Arduino, BlinkCloud
              </p>
            </div>
          </div>
          <div class="resume-item">
            <span>February 2024</span>
            <div>
              <h4>Lost & Found</h4>
              <p>
                Created a web app for registering and finding lost items within
                an organization.
                <br />
                Tech: ReactJs, ExpressJs, MongoDB
              </p>
            </div>
          </div>
          <div class="resume-item">
            <span>January 2024</span>
            <div>
              <h4>Dexdel</h4>
              <p>
                Developed a platform to showcase professional information,
                demonstrating website development and database management
                skills.
                <br />
                Tech: Python, Django
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Work() {
  return (
    <main>
      <h2>Projects | Work</h2>
      <div className="workList">
        
         <div className="article-card">
          <div className="content">
            <strong>
              <p className="date">Sep 25, 2024</p>
              <p className="title">Zorlo.eat</p>
            </strong>
          </div>
          <img
            src="https://github.com/user-attachments/assets/5c156b3b-c55f-4431-a851-9437016cb699"
            alt="article-cover"
          />
        </div>
        
        <div className="article-card">
          <div className="content">
            <strong>
              <p className="date">May 1, 2024</p>
              <p className="title">Personal Ai Voice Assistant</p>
            </strong>
          </div>
          <img
            src="https://github.com/DevvMaurya/LeetCode/assets/105772302/9648d7ad-8e0c-488f-9b8b-768459a6f0f6"
            alt="article-cover"
          />
        </div>
        
        <div className="article-card">
          <div className="content">
            <strong>
              <p className="date">Apr 15, 2024</p>
              <p className="title">Allocation Automation</p>
            </strong>
          </div>
          <img
            src="https://github.com/DevvMaurya/Supervisor_Allocation_System/assets/105772302/4381c349-6112-4648-a25f-04021b2ef0ce"
            alt="article-cover"
          />
        </div>
        
        <div className="article-card">
          <div className="content">
            <strong>
              <p className="date">Feb 1, 2024</p>
              <p className="title">Lost & Found</p>
            </strong>
          </div>
          <img
            src="https://github.com/DevvMaurya/LeetCode/assets/105772302/c7408cf7-26dd-4e68-8851-b51d34edae6b"
            alt="article-cover"
          />
        </div>
        <div className="article-card">
          <div className="content">
            <strong>
              <p className="date">Jan 1, 2024</p>
              <p className="title">Music Recommendation</p>
            </strong>
          </div>
          <img
            src="https://github.com/DevvMaurya/LeetCode/assets/105772302/a955a083-9220-48f9-9272-7ef82e51b767"
            alt="article-cover"
          />
        </div>
        <div className="article-card">
          <div className="content">
            <strong>
              <p className="date">Jun 1, 2024</p>
              <p className="title">Personal Presence</p>
            </strong>
          </div>
          <img
            src="https://github.com/DevvMaurya/LeetCode/assets/105772302/c7b2678e-a3f8-43be-9e4e-4fcdbc8b1b0f"
            alt="article-cover"
          />
        </div>
      </div>
    </main>
  );
}

function Acadamics(){
  return(
    <main>
      <div class="resume-category">
  <h3>Education</h3>
  <div class="resume-item">
    <span>November 2021 - June 2025</span>
    <div>
      <h4>SCET - Sarvajanik College Of Engineering and Technology</h4>
      <p>
        Bachelor of Technology in Information Technology, currently in 7th semester. 
        <br/>Current CGPA: 9.67
        <br/>Participated in various seminars and workshops on CyberSecurity and AI.
        <br/>Engaged in a research project under the guidance of Dr. Niket Shastri.
        <br/>Awarded Scholar of the Department.
        <br/>Coordinated and managed various college events.
      </p>
    </div>
  </div>
  <div class="resume-item">
    <span>2009 - 2021</span>
    <div>
      <h4>P.H. Bachakaniwala Vidya Mandir</h4>
      <p>
        Completed schooling from Jr. KG to 12th Standard.
        <br/>12th Science (Boards): 89% (School Topper)
        <br/>JEE: 85% (Rank: 1,30,000)
        <br/>10th Boards: 87%
      </p>
    </div>
  </div>
</div>
<hr />
<div class="resume-category">
  <h3>Extra-Curricular Activities</h3>
  <div class="resume-item">
    <div>
      <h4>Achievements and Hobbies</h4>
      <p>
        Champion in Karate and Skating.
        <br/>Engaged in various activities such as Drawing, Art & Craft.
      </p>
    </div>
  </div>
</div>

    </main>
  )
}

function RenderComponent({ index }) {
  switch (index) {
    case 1:
      return <Resume />;

    case 2:
      return <Work />;

    case 3:
      return <Acadamics />; 
    default:
      return <About />;
  }
}

const Rightbox = () => {
  const [selectCompo, setCompo] = useState(0);
  return (
    <div className="right-data-box">
      <MenuBtns setCompo={setCompo} />
      <RenderComponent index={selectCompo} />
    </div>
  );
};
export default Rightbox;
