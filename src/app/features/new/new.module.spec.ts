import { NewModule } from './new.module';

describe('NewModule', () => {
  let newModule: NewModule;

  beforeEach(() => {
    newModule = new NewModule();
  });

  it('should create an instance', () => {
    expect(newModule).toBeTruthy();
  });
});
