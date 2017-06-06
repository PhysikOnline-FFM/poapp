import { PoappPage } from './app.po';

describe('poapp App', () => {
  let page: PoappPage;

  beforeEach(() => {
    page = new PoappPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
