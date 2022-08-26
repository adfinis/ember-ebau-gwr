import Route from "@ember/routing/route";

export default class BuildingRoute extends Route {
  queryParams = {
    projectId: {
      refreshModel: true,
    },
  };
  model({ projectId }) {
    return projectId;
  }
}
