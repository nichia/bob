/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const hey = (message) => {
  const replies = {
    sure: "Sure.",
    whoa: "Whoa, chill out!",
    calmDown: "Calm down, I know what I'm doing!",
    fine: "Fine. Be that way!",
    whatever: "Whatever."
  }

  const trimMessage = message.trim();

  const isYelling = (msg) => {
    const lettersRegex = /[A-Z]/g;

    return lettersRegex.test(msg) && msg === msg.toUpperCase();
  };

  const isQuestion = (msg) => {
    return msg.length > 0 && msg[msg.length -1] === '?';
  };

  if (trimMessage === '') {
    return replies.fine;
  } else if (isYelling(trimMessage) && isQuestion(trimMessage)) {
    return replies.calmDown;
  } else if (isYelling(trimMessage)) {
    return replies.whoa;
  } else if (isQuestion(trimMessage)) {
    return replies.sure;
  } else {
    return replies.whatever;
  };
};
