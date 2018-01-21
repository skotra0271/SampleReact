import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
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
        this.props.actions.CreateCourse(this.state.course);
        //this.props.CreateCourse(this.state.course);
        //this.props.dispatch(courseAction.CreateCourse(this.state.course));
        //alert(`saving ${this.state.course.title}`);
    }

    courseRow(course,index){
        return(
            <div key={index}>
                {course.title}
            </div>
        );
    }

    render(){
        return(
            <div>  
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
                <input type="submit" value="Save" onClick={this.OnClickSave} /> 
            </div>
        );
    }

}

CoursePage.propTypes = {
    //dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    //CreateCourse: PropTypes.func.isRequired
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return{
        courses:state.courses
    };

}

function mapDispatchToProps(dispatch){
    return{
        //CreateCourse : course => dispatch(courseAction.CreateCourse(course))
        actions: bindActionCreators(courseAction,dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps) (CoursePage);