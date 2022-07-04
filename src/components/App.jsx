import { useState } from 'react';
import Section from './Section';
import NotificationMessage from './NotificationMessage';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import feedbackOptions from 'components/feedbackGrades';

function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = state;

  const stateValues = Object.values(state);
  const total = stateValues.reduce((acc, el) => {
    return acc + el;
  }, 0);

  function changeGrade(grade) {
    setState(prevstate => ({ ...prevstate, [grade]: prevstate[grade] + 1 }));
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
