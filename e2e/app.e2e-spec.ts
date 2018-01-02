import { ReminderPage } from './app.po';

describe('reminder App', function() {
  let page: ReminderPage;

  beforeEach(() => {
    page = new ReminderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
