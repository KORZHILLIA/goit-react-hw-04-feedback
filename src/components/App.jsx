import { Component } from 'react';
import Section from './Section';
import NotificationMessage from './NotificationMessage';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import feedbackOptions from 'components/feedbackGrades';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeFeedback = grade => {
    return this.setState(prevState => ({ [grade]: prevState[grade] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedbacks = this.countTotalFeedback();
    const { good } = this.state;
    const preparedResult = `${Math.ceil((good / totalFeedbacks) * 100)}%`;
    return totalFeedbacks === 0 ? '0%' : preparedResult;
  };

  render() {
    const { good, bad, neutral } = this.state;
    const total = this.countTotalFeedback();
    return (
      <div className="container">
        <Section title="Leave your feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.changeFeedback}
          />
        </Section>

        <Section title="Statistics">
          {!total ? (
            <NotificationMessage title="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
