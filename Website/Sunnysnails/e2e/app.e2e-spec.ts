import { SunnysnailsPage } from './app.po';

describe('sunnysnails App', () => {
  let page: SunnysnailsPage;

  beforeEach(() => {
    page = new SunnysnailsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
