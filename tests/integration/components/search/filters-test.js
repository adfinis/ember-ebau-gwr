import { click, fillIn, render } from "@ember/test-helpers";
import { Changeset } from "ember-changeset";
import { hbs } from "ember-cli-htmlbars";
import engineResolverFor from "ember-engines/test-support/engine-resolver-for";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

const modulePrefix = "ember-ebau-gwr";
const resolver = engineResolverFor(modulePrefix);

module("Integration | Component | search/filters", function (hooks) {
  setupRenderingTest(hooks, { resolver, integration: true });

  test("it allows toggling of the extended search fields", async function (assert) {
    this.changeset = new Changeset({});
    this.onSubmit = function () {};

    await render(hbs`
    <Search::Filters
      @changeset={{this.changeset}}
      @onSubmit={{this.onSubmit}}
      as |FilterInput ErrorSelect ExtendedSearchToggle|
    >
      <ExtendedSearchToggle />
    </Search::Filters>`);

    assert.dom('input[name="realestateIdentification.EGRID"]').isNotVisible();

    await click("button");

    assert.dom('input[name="realestateIdentification.EGRID"]').isVisible();
  });

  test("the submit button is disabled unless there are inputs", async function (assert) {
    this.changeset = new Changeset({ EGID: null });
    this.onSubmit = function () {};

    await render(hbs`
    <Search::Filters
      @changeset={{this.changeset}}
      @onSubmit={{this.onSubmit}}
      as |FilterInput ErrorSelect ExtendedSearchToggle|
    >
      <FilterInput @label="EGID" @name="EGID" />
    </Search::Filters>`);

    assert.dom("button").isDisabled();
    await fillIn("input", "some value");
    assert.dom("button").isEnabled();
  });
});
