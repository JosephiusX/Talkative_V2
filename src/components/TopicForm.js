import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class TopicForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phrases: props.topic ? props.topic.phrases : '',
      note: props.topic ? props.topic.note : '',
      amount: props.topic ? (props.topic.amount / 100).toString() : '',
      createdAt: props.topic ? moment(props.topic.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onphraseChange = (e) => {
    const phrase = e.target.value;
    this.setState(() => ({ phrase }));
  };
  ontopicChange = (e) => {
    const topic = e.target.value;
    this.setState(() => ({ topic }));
  };
  onusageChange = (e) => {
    const usage = e.target.value;

    if (!usage || usage.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ usage }));
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

    if (!this.state.phrase || !this.state.usage) {
      this.setState(() => ({ error: 'Please provide phrase and usage.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        phrase: this.state.phrase,
        usage: parseFloat(this.state.usage, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        topic: this.state.topic
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
            placeholder="phrase"
            autoFocus
            value={this.state.phrase}
            onChange={this.onphraseChange}
          />
          <input
            type="text"
            placeholder="usage"
            value={this.state.usage}
            onChange={this.onusageChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a topic for your topic (optional)"
            value={this.state.topic}
            onChange={this.ontopicChange}
          >
          </textarea>
          <button>Add Topic</button>
        </form>
      </div>
    )
  }
}