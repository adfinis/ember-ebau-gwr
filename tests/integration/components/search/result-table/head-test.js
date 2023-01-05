import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "dummy/tests/helpers";
import { hbs } from "ember-cli-htmlbars";
import { module, todo } from "qunit";

module("Integration | Component | search/result-table/head", function (hooks) {
  setupRenderingTest(hooks);

  todo("it renders", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Search::ResultTable::Head />`);

    assert.equal(this.element.textContent.trim(), "");

    // Template block usage:
    await render(hbs`
      <Search::ResultTable::Head>
        template block text
      </Search::ResultTable::Head>
    `);

    assert.equal(this.element.textContent.trim(), "template block text");

    assert.ok(false);
  });
});
