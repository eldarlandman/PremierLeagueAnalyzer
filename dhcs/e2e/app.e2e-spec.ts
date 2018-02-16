import { DhcsPage } from './app.po';

describe('dhcs App', () => {
  let page: DhcsPage;

  beforeEach(() => {
    page = new DhcsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
