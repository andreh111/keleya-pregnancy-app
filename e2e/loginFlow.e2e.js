describe('Login Flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  describe('Login Steps', () => {
    // test case for wallet generation
    it('should walk in the login process', async () => {
      await element(by.id('login-btn')).atIndex(0).tap();
      await waitFor(element(by.id('login-screen'))).toBeVisible();

      await element(by.id('email')).typeText('test@test.com');
      await element(by.id('password')).typeText('123456');

      await element(by.id('continue-btn')).atIndex(0).tap();
    });
  });
});
