import React from 'react';
import QRCode from '..';

describe('QRCode types', () => {
  it('should correct render', () => {
    expect(() => <QRCode value="test" size="100%" />).not.toThrow();
  });
});
