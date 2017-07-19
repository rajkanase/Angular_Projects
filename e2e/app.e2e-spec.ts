import { ShopPage } from './app.po';

describe('shop App', () => {
  let page: ShopPage;

  beforeEach(() => {
    page = new ShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
