
function ProjectLiComp(props){
    return(
        <>
            <div className="projects-title">{ props.projTitle }</div>
            <div className="projects-text">
                <p>
                    { props.projText } 
                    {props.href &&( 
                        <>
                        ( <a href={ props.href }>{ props.hrefName }</a> ).
                        </>
                    )}
                </p>
            </div>
        </>
    )
}

export default ProjectLiComp