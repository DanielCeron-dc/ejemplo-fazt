import React, { Component } from "react";
import { ITask } from "./Task";

export default class TaskList extends Component<ITaskListProps, any> {
	render(): JSX.Element[] {
		return this.props.tasks.map((task: ITask, i: number) => {
			return (
				<div className='col-md-4 mt-2 prueba' key={task.id}>
					<div className='card card-body'>
						<h3>{task.title}</h3>
						<p>{task.description}</p>
						<button
							onClick={() => this.props.deleteTask(task.id)}
							className='btn btn-danger btn-block'>
							Delete
						</button>
					</div>
				</div>
			);
		});
	}
}

interface ITaskListProps {
	tasks: ITask[];
	deleteTask: (id: number) => void;
}
