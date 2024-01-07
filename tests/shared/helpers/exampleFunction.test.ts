import {ALLCAPS} from 'src/shared/helpers/exampleFunction';

test('Function returns ALL CAPS name of doom', () => {
  expect(ALLCAPS('doom')).toBe('Just remember ALL CAPS when you spells DOOM');
});
