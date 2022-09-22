import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class TopicForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.topic ? props.topic.description : '',
      phrases: props.topic ? props.topic.phrases : '',
      error: ''
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onPhrasesChange = (e) => {
    const phrases = e.target.value;
    this.setState(() => ({ phrases }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description) {
      this.setState(() => ({ error: 'Please provide description' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        phrases: this.state.phrases
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="description here"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <textarea
            placeholder="Add a phrases for your topic (optional)"
            value={this.state.phrases}
            onChange={this.onPhrasesChange}
          >
          </textarea>
          <button>Add topic</button>
        </form>
      </div>
    )
  }
}