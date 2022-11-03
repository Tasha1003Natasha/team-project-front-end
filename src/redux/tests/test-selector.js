export const getCurrentTest = state => state.test.currentTest;
// export const getTheoryTest = state => state.test.testTheory;
export const getCurrectAnswer = state => state.test.results.correct;
export const getIncurrectAnswer = state => state.test.results.incorrect;
export const getType = state => state.test.currentTest.type;
