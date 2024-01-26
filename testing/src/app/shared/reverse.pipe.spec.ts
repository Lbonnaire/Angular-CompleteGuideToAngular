

import { ReversePipe } from "./reverse.pipe";





describe('Pipe:reverse',() => {
    it('should create the pipe',() => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });
})



