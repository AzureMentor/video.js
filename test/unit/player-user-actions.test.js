/* eslint-env qunit */
import sinon from 'sinon';
import TestHelpers from './test-helpers';

QUnit.module('Player: User Actions', {

  beforeEach() {
    this.clock = sinon.useFakeTimers();
    this.player = TestHelpers.makePlayer({});
  },

  afterEach() {
    this.player.dispose();
    this.clock.restore();
  }
});

QUnit.test('userActions are disabled by default', function(assert) {
  assert.strictEqual(this.player.options_.userActions, undefined, 'userActions are disabled by default');
});
