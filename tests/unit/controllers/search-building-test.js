import { module, test } from "qunit";

import { setupTest } from "dummy/tests/helpers";

module("Unit | Controller | search-building", function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test("it exists", function (assert) {
    const controller = this.engine.lookup("controller:search-building");
    assert.ok(controller);
  });
});
