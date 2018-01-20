import React, {PropTypes} from "react";
import {connect} from "react-redux";
import * as courseAction  from "../../actions/courseAction";

class CoursePage extends React.Component{
    constructor(props,context){
        super(props,context);

        this.state={
            course:{title:" "}
        };

        this.onTitleChange=this.onTitleChange.bind(this);
        this.OnClickSave = this.OnClickSave.bind(this);
    }

    onTitleChange(event)
    {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course:course});
    }

    OnClickSave(){
        this.props.dispatch(courseAction.CreateCourse(this.state.course));
        alert(`saving ${this.state.course.title}`);
    }

    courseRow(couse,index){
        return(
            <div key={index}>
                {couse.title}
            </div>
        );
    }

    render(){
        return(
            <div>  
                <h1>Courses</h1>
                {this.props.Courses.map(this.courseRow)}
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
                <input type="submit" value="Save" onClick={this.OnClickSave} /> 
            </div>
        );
    }

}

CoursePage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    Courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    return{
        Courses:state.Courses
    };

}


export default connect(mapStateToProps) (CoursePage);