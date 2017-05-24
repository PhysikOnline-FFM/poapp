import { PoappPage } from './app.po';

describe('poapp App', () => {
  let page: PoappPage;

  beforeEach(() => {
    page = new PoappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
