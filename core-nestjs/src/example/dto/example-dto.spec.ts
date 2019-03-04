import { ExampleDto } from './example-dto';

describe('CreateExampleDto', () => {
  it('should be defined', () => {
    expect(new ExampleDto()).toBeDefined();
  });
});
