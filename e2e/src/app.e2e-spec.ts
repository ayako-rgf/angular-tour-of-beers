import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display tour of beers header', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Tour of Beers');
  });
});
