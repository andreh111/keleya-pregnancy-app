describe('Signup Flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  describe('Signup Steps', () => {
    it('should go with all register process', async () => {
      await element(by.id('get-started-btn')).atIndex(0).tap();
      await waitFor(element(by.id('signup-screen'))).toBeVisible();

      await element(by.id('email')).typeText('test@test.com');
      await element(by.id('password')).typeText('123456');

      await element(by.id('accept-privacy')).atIndex(0).tap();
      await element(by.id('accept-terms')).atIndex(0).tap();

      await element(by.id('continue-btn')).atIndex(0).tap();

      await waitFor(element(by.id('name-screen'))).toBeVisible();
      await element(by.id('name-input')).typeText('User Test');
      await element(by.id('continue-btn')).atIndex(0).tap();

      await waitFor(element(by.id('date-screen'))).toBeVisible();
      await element(by.id('show-date-picker-btn')).atIndex(0).tap();
      const datePickerElement = await element(by.type('_UIDatePickerView'));
      await datePickerElement.setColumnToValue(0, 'November');
      await datePickerElement.setColumnToValue(1, '3');
      await datePickerElement.setColumnToValue(2, '2021');
      await element(by.label('Confirm')).tap();
      await element(by.id('continue-btn')).atIndex(0).tap();

      await waitFor(element(by.id('workout-screen'))).toBeVisible();
      await waitFor(element(by.type('UIPickerView'))).toBeVisible();
      await element(by.type('UIPickerView')).setColumnToValue(0, 'once a week');
      await element(by.id('continue-btn')).atIndex(0).tap();
    });
  });
});
