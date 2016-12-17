import { Webc2Page } from './app.po';

describe('webc2 App', function() {
  let page: Webc2Page;

  beforeEach(() => {
    page = new Webc2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
