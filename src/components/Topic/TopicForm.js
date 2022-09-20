import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class TopicForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topic: props.topic ? props.topic.topic : '',
      phrases: props.topic ? props.topic.phrases : '',
      error: ''
    };
  }
  onTopicChange = (e) => {
    const topic = e.target.value;
    this.setState(() => ({ topic }));
  };
  onPhrasesChange = (e) => {
    const phrases = e.target.value;
    this.setState(() => ({ phrases }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.topic) {
      this.setState(() => ({ error: 'Please provide topic' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        topic: this.state.topic,
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
            placeholder="topic"
            autoFocus
            value={this.state.topic}
            onChange={this.onTopicChange}
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