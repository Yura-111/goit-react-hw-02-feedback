import { Component } from 'react';
import PropTypes from 'prop-types';

import {Statistics} from 'components/Statistics/Statistics';
import {FeedbackOptions} from 'components/StatisticButtons/StatisticButtons';
import {Notification} from 'components/Notification/Notification';
import {Title} from 'components/Title/Title';



export class Section extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      };

  onUpdateStats = event => {
    const targetName = event.currentTarget.name;

    this.setState(prevState => ({ [targetName]: prevState[targetName] + 1 }));
  };

  countTotalFeedback = data => {
    return Object.values(data).reduce((acc, total) => acc + total, 0);
  };

  countPositiveFeedback() {
    return Number.parseInt(
      (this.state.good / this.countTotalFeedback(this.state)) * 100
    );
}
    render () {
        const { good, neutral, bad } = this.state;
        const totalFeedback = this.countTotalFeedback(this.state);
        const positiveFeedback = this.countPositiveFeedback();
        const message = 'There is no feedback';

        return (
            <section>
                <Title title={this.props.title}/>
                    <FeedbackOptions
                        onLeaveFeedback={this.onUpdateStats}
                        options={['good', 'neutral', 'bad']}
                        />
                    {totalFeedback > 0 ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={totalFeedback}
                            positivePercentage={positiveFeedback}
                        />
                    ) : (
                    <Notification message={message} />
                    )}
            </section>
        )
    }
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
};