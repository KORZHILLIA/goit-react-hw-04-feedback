import { useState } from 'react';
import Section from './Section';
import NotificationMessage from './NotificationMessage';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import feedbackOptions from 'components/feedbackGrades';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  function changeGrade(grade) {
    switch (grade) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        return;
    }
  }

  function countPositiveFeedbackPercentage() {
    const preparedResult = `${Math.ceil((good / total) * 100)}%`;
    return total === 0 ? '0%' : preparedResult;
  }

  return (
    <div className="container">
      <Section title="Leave your feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={changeGrade}
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
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}

export { App };
