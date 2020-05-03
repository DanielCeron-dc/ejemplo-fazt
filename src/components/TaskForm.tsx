import React, { Component } from "react";
import { ITask } from "./Task";

export default class TaskForm extends Component<ITaskFormProps, any> {
	constructor(props: ITaskFormProps) {
		super(props);
		this.state = {
			title: "",
			description: "",
		};
	}

	getCurrentTimeStamp() {
		return new Date().getTime();
	}

	public handleNewTask(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const newTask: ITask = {
			id: this.getCurrentTimeStamp(),
			title: this.state.title,
			description: this.state.description,
			completed: false,
		};
		if (newTask.title === "" || newTask.description === "") return;
		this.props.addANewTask(newTask);
		this.setState({
			title: "",
			description: "",
		});
	}

	handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	}

	render() {
		return (
			<div className='card card-body'>
				<form onSubmit={(e) => this.handleNewTask(e)}>
					<div className='form-group'>
						<input
							type='text'
							name='title'
							onChange={(e) => this.handleInputChange(e)}
							className='form-control'
							placeholder='task Title'
							value={this.state.title}
						/>
					</div>
					<div className='form-group'>
						<textarea
							name='description'
							onChange={(e) => this.handleInputChange(e)}
							className='form-control'
							placeholder='Task Description'
							value={this.state.description}></textarea>
					</div>
					<button type='submit' className='btn btn-primary btn-block'>
						Save
					</button>
				</form>
			</div>
		);
	}
}

interface ITaskFormProps {
	addANewTask: (task: ITask) => void;
}

interface ITaskFormState {
	title: string;
	description: string;
}
