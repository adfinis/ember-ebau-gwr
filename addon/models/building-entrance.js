import { tracked } from "@glimmer/tracking";

import Coordinates from "./coordinates";
import LocalId from "./local-id";
import Locality from "./locality";
import Street from "./street";
import XMLModel from "./xml-model";

export default class BuildingEntrance extends XMLModel {
  @tracked EDID;
  @tracked EGID;
  @tracked EGAID;
  @tracked buildingEntranceNo;
  @tracked coordinates = new Coordinates();
  @tracked isOfficialAddress;
  @tracked localId = new LocalId();
  @tracked street = new Street();
  @tracked locality = new Locality();

  constructor(xmlOrObject, root = "buildingEntrance") {
    super(xmlOrObject);
    this.setFieldsFromXML({
      root,
      fields: {
        EDID: Number,
        EGID: Number,
        EGAID: Number,
        buildingEntranceNo: String,
        isOfficialAddress: Boolean,
        street: Street,
        locality: Locality,
        coordinates: Coordinates,
      },
    });
  }

  get fullAddressText() {
    const { street, buildingEntranceNo, locality } = this;
    return `${street?.description.descriptionLong ?? ""} ${
      buildingEntranceNo ?? ""
    }, ${locality.swissZipCode ?? ""} ${locality.name.nameLong ?? ""}`;
  }

  static template = `
  <ns2:buildingEntrance>
    <ns2:EGAID>{{model.EGAID}}</ns2:EGAID>
    <ns2:buildingEntranceNo>{{model.buildingEntranceNo}}</ns2:buildingEntranceNo>
    <ns2:isOfficialAddress>{{model.isOfficialAddress}}</ns2:isOfficialAddress>
    {{> Locality model=model.locality}}
    {{> Street model=model.street}}
    {{! This is not wokrking for some reason}}
    {{!> Coordinates model=model.coordinates}}
  </ns2:buildingEntrance>
  `;
}
