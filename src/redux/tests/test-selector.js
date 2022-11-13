export const getCurrentTest = state => state.test.currentTest;
export const getCurrectAnswer = state => state.test.results.correct;
export const getIncurrectAnswer = state => state.test.results.incorrect;
export const getType = state => state.test.currentTest.type;
export const rightAnswers = state => state.test.rightAnswers;
export const userAnswers = state => state.test.userAnswers;
