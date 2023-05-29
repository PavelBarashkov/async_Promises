/* eslint-disable linebreak-style */
import GameSaving from './GameSaving';
import GameSavingLoader from './GameSavingLoader';

export default GameSavingLoader.load().then((saving) => {
  const data = JSON.parse(saving);
  return new GameSaving(data);
}, (error) => {
  throw error;
});
