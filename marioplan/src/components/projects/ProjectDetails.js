import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
      <div>
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates veritatis recusandae aliquam illum fugiat earum! Necessitatibus fugiat magni in quae quisquam quos deleniti voluptatum, voluptatibus numquam, consequatur aut deserunt. Aperiam.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by CT !</div>
                    <div>29 November 20am</div>
                </div>
            </div>
        </div>
      </div>
    )
  
}

export default ProjectDetails
