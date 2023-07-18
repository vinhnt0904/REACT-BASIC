import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      {id: 'abcJob1', title: 'developer', salary: '200'},
      {id: 'abcJob2', title: 'Tester', salary: '100'},
      {id: 'abcJob3', title: 'Project Manager', salary: '1000'},
    ]
  };

  addNewJob = (job) => {
    console.log('check job from parent: ', job)
    this.setState({
      arrJobs: [...this.state.arrJobs, job]
    })
  }

  deleteAJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter(item => item.id !== job.id);
    this.setState({
      arrJobs: currentJobs
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('>>>> Run didupdate: ', 'prev state: ', prevState, 'current state: ', this.state)
  }

  componentDidMount() {
    console.log('>>> Run component did mount')
  }

  // re-render
  render() {
    console.log('>>> Call render: ', this.state)
    return (
      // console.log('Call')
      <>
        <AddComponent
          addNewJob = {this.addNewJob}
        />
        <ChildComponent 
          arrJobs = {this.state.arrJobs}
          deleteAJob = {this.deleteAJob}
        />
      </>
    );
  }
}

export default MyComponent;
