
function EducationLiComp(props){
    return(
        <>
            <div className="qualification">
                <span className="education-title">Qualification : </span>
                <span className="education-text">{props.eduQualification}</span>
            </div>
            <div className="duration">
                <span className="education-title">Duration : </span>
                <span className="education-text">{props.eduDuration}</span>
            </div>
            <div className="institution">
                <span className="education-title">Institution/ College : </span>
                <span className="education-text">{props.eduInstitution}</span>
            </div>
            <div className="score">
                <span className="education-title">Score : </span>
                <span className="education-text">{props.eduScore}</span>
            </div>
            <div className="board">
                <span className="education-title">University/ Board : </span>
                <span className="education-text">{props.eduBoard}</span>
            </div>
        </>
    )
}

export default EducationLiComp