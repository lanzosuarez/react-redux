import React, {PropTypes} from 'react';

class CoursesPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            course:{ title:null }
        }
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onTitleChange(e){
        let course = this.state.course;
        course.title = e.target.value;
        this.setState({ course:course });
    }
    onSave(){
        alert(`Saving.. ${this.state.course.title}`);
    }

    render(){
        return(
            <div>
                <h1>Courses</h1>
                <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />

                <input type="submit" value="submit" onClick={this.onSave}/>
            </div>
        );
    }
}

export default CoursesPage;