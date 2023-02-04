import { FormatPhonePipe } from './format-phone.pipe';

describe('FormatPhonePipe', () => {

  let pipe: FormatPhonePipe;

  beforeEach(() => {
    pipe = new FormatPhonePipe();
  });


  it('create an instance', () => {
    const pipe = new FormatPhonePipe();
    expect(pipe).toBeTruthy();
  });

  it('Pipe gives phone format XXX-XXX-XXXX', () => {
    expect(pipe.transform('3023136102')).toBe('302-313-6102');
  })

});
