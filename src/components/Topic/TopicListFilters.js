import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, setStartDate, setEndDate } from '../../actions/filters';

class TopicListFilters extends React.Component {
  state = {
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === 'date') {
              this.props.dispatch(sortByDate());
            }
          }}
        >
        </select>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(TopicListFilters);
