import React, {Component} from 'react';
import {Doughnut} from "react-chartjs";

import './TrackProgress.css';

class TrackProgress extends Component {
    renderCompletedTasks(tasks) {
        return tasks.map((task, index) => {
            return (
                <li key={index} className="grey-text"> <del> {task.title} </del> </li>
            )
        })
    }

    render() {
        const {tasks} = this.props;
        const taskCompletionStatus = tasks.reduce((status, task) => {
            (task.complete)
                ? status.complete += 1
                : status.incomplete += 1;
            return status;
        }, {complete: 0, incomplete: 0});
        const tasksCompleted = tasks.filter(task => {
            return task.complete;
        })

        const chartData = [
            {
                value: taskCompletionStatus.incomplete ? taskCompletionStatus.incomplete : 0,
                color:"#d84315",
                highlight: "#d84315",
                label: "Incomplete"
            },
            {
                value: taskCompletionStatus.complete ? taskCompletionStatus.complete : 0,
                color: "#43a047",
                highlight: "#43a047",
                label: "Complete"
            },
            {
                value: ((!taskCompletionStatus.incomplete) && (!taskCompletionStatus.complete)) ? 1 : 0,
                color: "gold",
                highlight: "gold",
                label: "No Tasks"
            }
        ];
        console.log(taskCompletionStatus.incomplete);
        console.log(taskCompletionStatus.complete);
        console.log(chartData);
        const chartOptions = {
            //Boolean - Whether we should show a stroke on each segment
            segmentShowStroke : true,

            //String - The colour of each segment stroke
            segmentStrokeColor : "#fff",

            //Number - The width of each segment stroke
            segmentStrokeWidth : 2,

            //Number - The percentage of the chart that we cut out of the middle
            percentageInnerCutout : 50, // This is 0 for Pie charts

            //Number - Amount of animation steps
            animationSteps : 100,

            //String - Animation easing effect
            animationEasing : "easeOutBounce",

            //Boolean - Whether we animate the rotation of the Doughnut
            animateRotate : true,

            //Boolean - Whether we animate scaling the Doughnut from the centre
            animateScale : false
        };

        return (
            <div className="track-progress">
                <h4 className="center-align"> Track <br/> Progress </h4>
                <div className="chart-keys">
                    <div className="chart">
                        <Doughnut data={chartData} options={chartOptions} />
                    </div>
                    <div className="keys">
                        <div className="complete key-container">
                            <div className="key-block"></div>
                            <p className="label"> Complete </p>
                        </div>
                        <div className="incomplete key-container">
                            <div className="key-block"></div>
                            <p className="label"> Incomplete </p>
                        </div>
                    </div>
                </div>
                <div className="task-completed">
                    <h5 className="name grey-text"> Completed </h5>
                    <div className="divider"></div>
                    <ol className="completed-tasks-list">
                        {
                            this.renderCompletedTasks(tasksCompleted)
                        }
                    </ol>

                </div>
            </div>
        )
    }
}

export default TrackProgress;