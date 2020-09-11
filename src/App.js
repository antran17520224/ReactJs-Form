import React, { Component } from 'react';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			description: "",
			gender: 0,
			language: 'vi',
			status: true,
		}
	}

	onHandleChange = (event) => {
		var target = event.target;
		var name = target.name;
		var value = target.type === 'checkbox' ? target.checked : target.value;
		this.setState({
			[name]: value
		})

	}

	onHandleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
	}

	render() {
		return (
			<div className="container mt-30">
				<div className="row">
					<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
						<div className="panel panel-primary">
							<div className="panel-heading">
								<h3 className="panel-title">Form</h3>
							</div>
							<div className="panel-body">

								<form onSubmit={this.onHandleSubmit} >
									<div className="form-group">
										<label className="col-sm-1-12 col-form-label">Username:</label>
										<div className="col-sm-1-12">
											<input
												type="text"
												className="form-control"
												name="username"
												onChange={this.onHandleChange}
												value={this.state.username}
											/>
										</div>
									</div>


									<div className="form-group">
										<label className="col-sm-1-12 col-form-label">Password:</label>
										<div className="col-sm-1-12">
											<input
												type="password"
												className="form-control"
												name="password"
												onChange={this.onHandleChange}
												value={this.state.password}

											/>
										</div>
									</div>



									<div className="form-group">
										<label className="col-sm-1-12 col-form-label">Mô tả:</label>
										<textarea
											className="form-control"
											name="description"
											rows="3"
											onChange={this.onHandleChange}
											value={this.state.description}

										></textarea>
									</div>



									<div className="form-check">
										<label className="form-check-label">
											<input
												type="radio"
												className="form-check-input"
												name="language"
												value="vi"
												onChange={this.onHandleChange}
												checked={this.state.language === "vi"} />
										Vietnamese
									  </label>
									</div>

									<div className="form-check">
										<label className="form-check-label">
											<input
												type="radio"
												className="form-check-input"
												name="language"
												value="en"
												onChange={this.onHandleChange}
												checked={this.state.language === "en"} />
										English
									  </label>
									</div>

									<div className="form-group">
										<input
											name="status"
											value={this.state.status}
											type="checkbox"
											onChange={this.onHandleChange}
										/>
										<label >Trạng thái</label>
									</div>

									<div className="form-group row">
										<div className="offset-sm-2 col-sm-10">
											<button type="submit" className="btn btn-primary">Lưu</button>
											<button type="reset" className="btn btn-default ">Xoá</button>
										</div>
									</div>
								</form>

							</div>
						</div>

					</div>
				</div>
			</div>
		);
	}
}

export default App;
