import { AngularCliPouchdbPage } from './app.po';

describe('angular-cli-pouchdb App', () => {
  let page: AngularCliPouchdbPage;

  beforeEach(() => {
    page = new AngularCliPouchdbPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
