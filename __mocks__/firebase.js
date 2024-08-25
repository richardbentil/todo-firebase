// __mocks__/firebase.js
export const initializeApp = jest.fn();
export const getAuth = jest.fn(() => ({
  signInWithEmailAndPassword: jest.fn(() => Promise.resolve({ user: { uid: 'testUID' } })),
}));
