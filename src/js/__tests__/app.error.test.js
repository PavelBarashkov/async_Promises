/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import GameSavingLoader from '../GameSavingLoader';

test('savingLoader error', () => GameSavingLoader.load().catch((e) => expect(e).toMatch('error')));
