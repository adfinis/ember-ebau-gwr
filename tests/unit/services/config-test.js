import { module, test } from "qunit";

import { setupTest } from "dummy/tests/helpers";

module("Unit | Service | config", function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test("it exists", function (assert) {
    const service = this.engine.lookup("service:config");
    assert.ok(service);
  });
});
