import React from 'react';

export default class TopicForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
            autoFocus
            placeholder="Add a phrases for your topic (optional)"
            value={this.state.phrases}
            onChange={this.onPhrasesChange}
          />
          
          <button>Add topic</button>
        </form>
      </div>
    )
  }
}