import { ChatappBetaPage } from './app.po';

describe('chatapp-beta App', () => {
  let page: ChatappBetaPage;

  beforeEach(() => {
    page = new ChatappBetaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
