import { useEffect, useState, useRef } from "react"
import EducationLiComp from "./EducationLiComp.jsx"
import ProjectLiComp from "./ProjectLIComp.jsx"

function Home(){

    const alpharay = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    

    const hackerTextEffect = () =>{
        document.querySelectorAll('.title > h3').forEach((titleRef)=>{
            const originalText = titleRef.textContent
            let iterations = 0
            const intervalFunc = setInterval(() => {
                titleRef.textContent 
                = titleRef.textContent
                .split('')
                .map((_, index) => index < iterations ? originalText[index] : alpharay[Math.floor(Math.random() * 26)])
                .join('').toUpperCase()
                
                iterations += 1/6;
                
                iterations > originalText.length && clearInterval(intervalFunc)
            }, 30);
        })
    }
    useEffect(()=>{
        hackerTextEffect()
    },[])
    return(
        <>  
            <div className="portfolio-header">
                <h1>
                <img src="/memoji.png" height="70px" alt="" />
                    Portfolio: Saurabh Mhatre
                </h1>
            </div>
            <div className="portfolio-container">
                {/* <div className="bg-slant"></div> */}
                <div className="summary">
                    <div className="title"><h3>SUMMARY</h3></div>
                    <div className="body">
                        <p>
                        BSc IT graduate with a <u>CGPI of 9.42 </u>. Proficient in Java, Flask, HTML, CSS, and JavaScript with a
                        passion for Python programming and web development. Experienced in full-stack development,
                        problem-solving, and independent project work. Currently pursuing a Full Stack Java course,
                        having completed the core Java module and passed the associated examination, demonstrating
                        ongoing commitment to staying updated in programming.
                        Strong communication skills, both verbal and written. Collaborative team player and active
                        listener. Typing speed of 135wpm for efficient work. Thank you for considering my profile.

                        </p>
                    </div>
                </div>
                <div className="skills">
                    <div className="title"><h3>SKILLS</h3></div>
                    <div className="body">
                        <ul>
                            <li>PYTHON</li>
                            <li>JAVA</li>
                            <li>PYTHON-FLASK</li>
                            <li>Express JS</li>
                            <li>MONGO-DB</li>
                            <li>MYSQL</li>
                            <li>REACT</li>
                            <li><a href="https://monkeytype.com/profile/Nerch79" onMouseOver={()=>
                                document.querySelector('.msg-to-click').style.display = "block"
                            }
                            onMouseOut={()=>
                                document.querySelector('.msg-to-click').style.display = "none"}
                            >ENGLISH-TYPING : 135 WPM</a></li>
                            <li>HTML, CSS, JAVASCRIPT</li>
                        </ul>
                        <p className="msg-to-click">click to view profile !</p>
                    </div>
                </div>
                <div className="education-and-training">
                    <div className="title"><h3>EDUCATION AND TRAINING</h3></div>
                    <div className="body">
                         
                        <ol>
                            <li>
                                <EducationLiComp eduQualification="BSC IT" eduDuration="July 2023" eduInstitution="J.S.M College, Alibag" eduScore="9.42 CGPI" eduBoard="Mumbai University" />
                            </li>
                            <li>
                                <EducationLiComp eduQualification="XII Std" eduDuration="July 2020" eduInstitution="J.S.M College, Alibag" eduScore="62.00%" eduBoard="Maharashtra State Board" />
                            </li>
                            <li>
                                <EducationLiComp eduQualification="X Std" eduDuration="March 2018" eduInstitution="C.K.V School, Alibag" eduScore="74.60%" eduBoard="Maharashtra State Board" />
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="certifications">
                    <div className="title"><h3>CERTIFICATIONS</h3></div>
                    <div className="body">
                        <p className="java-course-text" >Full Stack Java Course (Java Devloper)</p>
                    </div>
                </div>
                <div className="projects">
                    <div className="title"><h3>PROJECTS</h3></div>
                    <div className="body">
                        <ol>
                            <li>
                                < ProjectLiComp projTitle="Chatting Website" projText="Created a Python-Flask + SocketIO powered chat app with real-time messaging and user authentication" />
                            </li>
                            <li>
                                < ProjectLiComp projTitle="Spendings Website" projText="Developed a Python-Flask expense tracking web app with HTML, CSS, and JavaScript."  href="https://nerch26.pythonanywhere.com" hrefName="spendings"/>
                            </li>
                            <li>
                                < ProjectLiComp projTitle="Attendance Management System" projText="Implemented an Attendance Management System using Python-Flask for efficient tracking." />
                            </li>
                            <li>
                                < ProjectLiComp projTitle="Notes-taking Web Application"
                                    projText="Created a notes-taking web application using React.js, demonstrating proficiency in React development and modern JavaScript practices." 
                                    href="https://7saurabh.github.io/notes-react-app/#/"
                                    hrefName="notes-react-app"
                                 />
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="personal-info">
                    <div className="title"><h3>PERSONAL INFORMATION</h3></div>
                    <div className="body">
                        <ul>
                            <li>
                                <div className="age">
                                    <span className="personal-info-title">Age : </span>
                                    <span className="personal-info-text">21 years</span>
                                </div>
                            </li>
                            <li>
                                <div className="dob">
                                    <span className="personal-info-title">Date Of Birth : </span>
                                    <span className="personal-info-text">09/04/2002</span>
                                </div>
                            </li>
                            <li>
                                <div className="gender">
                                    <span className="personal-info-title">Gender : </span>
                                    <span className="personal-info-text">Male</span>
                                </div>
                            </li>
                            <li>
                                <div className="nationality">
                                    <span className="personal-info-title">Nationality : </span>
                                    <span className="personal-info-text">Indian</span>
                                </div>
                            </li>
                            <li>
                                <div className="marital-status">
                                    <span className="personal-info-title">Marital Status : </span>
                                    <span className="personal-info-text">Single</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="disclaimer">
                    <div className="title"><h3>DISCLAIMER</h3></div>
                    <div className="body">
                        <p>
                            I hereby declare that the above given information is correct and best of my knowledge and I will
                            be responsible for discrepancy if any.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bottom-margin-bug"></div>
        </>
    )
}

export default Home