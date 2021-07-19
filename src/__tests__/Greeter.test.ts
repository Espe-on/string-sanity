import { Greeter } from '../index';

test('My Greeter', () => {
    expect(Greeter('Joseph')).toBe('Hello Joseph');
});