// prettier-ignore
export const getBuilding =
`{{#>base}}
  <ns2:getBuilding>
    <ns2:searchAddressType>
      <ns2:municipality>{{model.municipality}}</ns2:municipality>
      {{#if model.descriptionLong}}
        <ns2:street>
          <ns2:description>
            <ns2:language>{{model.streetLang}}</ns2:language>
            <ns2:descriptionLong>{{model.descriptionLong}}</ns2:descriptionLong>
          </ns2:description>
          <ns2:streetGeometry xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xs="http://www.w3.org/2001/XMLSchema" xsi:type="xs:string" />
        </ns2:street>
      {{/if}}
      {{#if model.buildingEntranceNo}}
        <ns2:buildingEntranceNo>{{model.buildingEntranceNo}}</ns2:buildingEntranceNo>
      {{/if}}
      {{#if model.nameLong}}
        <ns2:locality>
          <ns2:name>
            <ns2:nameLong>{{model.nameLong}}</ns2:nameLong>
          </ns2:name>
        </ns2:locality>
      {{/if}}
    </ns2:searchAddressType>
    {{#if model.periodOfConstruction}}
      <ns2:dateOfConstruction>
        <periodOfConstruction>{{model.periodOfConstruction}}</periodOfConstruction>
      </ns2:dateOfConstruction>
    {{/if}}
    {{#if model.officialBuildingNo}}
      <ns2:officialBuildingNo>{{model.officialBuildingNo}}</ns2:officialBuildingNo>
    {{/if}}
    {{#if model.realestateIdentification.number}}
      <ns2:realestateIdentification>
        {{#if model.realestateIdentification.EGRID}}
          <EGRID>{{model.realestateIdentification.EGRID}}</EGRID>
        {{/if}}
        {{{modelField model.realestateIdentification "number" namespace=""}}}
        {{#if model.realestateIdentification.subDistrict}}
          <subDistrict>{{model.realestateIdentification.subDistrict}}</subDistrict>
        {{/if}}
      </ns2:realestateIdentification>
    {{/if}}
    {{#if (isSet model.hasError)}}
      <ns2:hasError>{{model.hasError}}</ns2:hasError>
    {{/if}}
    {{#if (or model.createDate.dateFrom model.createDate.dateTo)}}
      <ns2:createDate>
        {{#if model.createDate.dateFrom}}
          <ns2:dateFrom>{{echDate model.createDate.dateFrom}}</ns2:dateFrom>
        {{/if}}
        {{#if model.createDate.dateTo}}
          <ns2:dateTo>{{echDate model.createDate.dateTo}}</ns2:dateTo>
        {{/if}}
      </ns2:createDate>
    {{/if}}
    {{#if (or model.modifyDate.dateFrom model.modifyDate.dateTo)}}
      <ns2:modifyDate>
        {{#if model.modifyDate.dateFrom}}
          <ns2:dateFrom>{{echDate model.modifyDate.dateFrom}}</ns2:dateFrom>
        {{/if}}
        {{#if model.modifyDate.dateTo}}
          <ns2:dateTo>{{echDate model.modifyDate.dateTo}}</ns2:dateTo>
        {{/if}}
      </ns2:modifyDate>
    {{/if}}
  </ns2:getBuilding>
{{/base}}`;

// prettier-ignore
export const bindBuildingToConstructionProject =
`{{#>base}}
  <ns2:bindBuildingToConstructionProject>
    <ns2:EPROID>{{model.EPROID}}</ns2:EPROID>
    <ns2:constructionWorkDone>{{model.buildingWork.kindOfWork}}</ns2:constructionWorkDone>
    {{#if (eq model.buildingWork.kindOfWork 6002)}}
      <ns2:energeticRestauration>{{model.buildingWork.energeticRestauration}}</ns2:energeticRestauration>
      <ns2:renovationHeatingsystem>{{model.buildingWork.renovationHeatingsystem}}</ns2:renovationHeatingsystem>
      <ns2:innerConversionRenovation>{{model.buildingWork.innerConversionRenovation}}</ns2:innerConversionRenovation>
      <ns2:conversion>{{model.buildingWork.conversion}}</ns2:conversion>
      <ns2:extensionHeighteningHeated>{{model.buildingWork.extensionHeighteningHeated}}</ns2:extensionHeighteningHeated>
      <ns2:extensionHeighteningNotHeated>{{model.buildingWork.extensionHeighteningNotHeated}}</ns2:extensionHeighteningNotHeated>
      <ns2:thermicSolarFacility>{{model.buildingWork.thermicSolarFacility}}</ns2:thermicSolarFacility>
      <ns2:photovoltaicSolarFacility>{{model.buildingWork.photovoltaicSolarFacility}}</ns2:photovoltaicSolarFacility>
      <ns2:otherWorks>{{model.buildingWork.otherWorks}}</ns2:otherWorks>
    {{/if}}
  </ns2:bindBuildingToConstructionProject>
{{/base}}`

// prettier-ignore
export const modifyBuilding =
`{{#>base}}
  <ns2:modifyBuilding>
    {{> Building}}
    <ns2:reason>
      {{reason}}
    </ns2:reason>
  </ns2:modifyBuilding>
{{/base}}`;

// prettier-ignore
export const addWorkToProject =
`{{#>base}}
  <ns2:addWorkToProject>
    <ns2:kindOfWork>{{model.kindOfWork}}</ns2:kindOfWork>
  </ns2:addWorkToProject>
{{/base}}`

// prettier-ignore
export const modifyWork =
`{{#>base}}
  <ns2:modifyWork>
    <ns2:energeticRestauration>{{model.energeticRestauration}}</ns2:energeticRestauration>
    <ns2:renovationHeatingsystem>{{model.renovationHeatingsystem}}</ns2:renovationHeatingsystem>
    <ns2:innerConversionRenovation>{{model.innerConversionRenovation}}</ns2:innerConversionRenovation>
    <ns2:conversion>{{model.conversion}}</ns2:conversion>
    <ns2:extensionHeighteningHeated>{{model.extensionHeighteningHeated}}</ns2:extensionHeighteningHeated>
    <ns2:extensionHeighteningNotHeated>{{model.extensionHeighteningNotHeated}}</ns2:extensionHeighteningNotHeated>
    <ns2:thermicSolarFacility>{{model.thermicSolarFacility}}</ns2:thermicSolarFacility>
    <ns2:photovoltaicSolarFacility>{{model.photovoltaicSolarFacility}}</ns2:photovoltaicSolarFacility>
    <ns2:otherWorks>{{model.otherWorks}}</ns2:otherWorks>
  </ns2:modifyWork>
{{/base}}`

// prettier-ignore
export const addBuildingToConstructionProject =
`{{#>base}}
  <ns2:addBuildingToConstructionProject>
    {{> Building model=model}}
  </ns2:addBuildingToConstructionProject>
{{/base}}`

// prettier-ignore
export const setToApprovedBuilding  =
`{{#>base}}
  <ns2:setToApprovedBuilding>
  </ns2:setToApprovedBuilding>
{{/base}}`;

// prettier-ignore
export const setToNotRealizedBuilding  =
`{{#>base}}
  <ns2:setToNotRealizedBuilding>
  </ns2:setToNotRealizedBuilding>
{{/base}}`;

// prettier-ignore
export const setToBuildingConstructionStarted  =
`{{#>base}}
  <ns2:setToBuildingConstructionStarted>
  </ns2:setToBuildingConstructionStarted>
{{/base}}`;

// prettier-ignore
export const setToUnusableBuilding  =
`{{#>base}}
  <ns2:setToUnusableBuilding>
  </ns2:setToUnusableBuilding>
{{/base}}`;

// prettier-ignore
export const setToCompletedBuilding =
`{{#>base}}
  <ns2:setToCompletedBuilding>
    <ns2:building>
      <ns2:municipality>{{model.municipality}}</ns2:municipality>
      {{{modelField model "officialBuildingNo"}}}
      {{{modelField model "nameOfBuilding"}}}
      {{> Coordinates model=model.coordinates}}
      {{{modelField model "localCode1"}}}
      {{{modelField model "localCode2"}}}
      {{{modelField model "localCode3"}}}
      {{{modelField model "localCode4"}}}
      {{{modelField model "neighbourhood"}}}
      <ns2:buildingCategory>{{model.buildingCategory}}</ns2:buildingCategory>
      {{{modelField model "buildingClass"}}}
      {{> DateOfConstruction model=model.dateOfConstruction}}
      {{! Returns no error but not saved by api}}
      {{{modelField model "surfaceAreaOfBuilding"}}}

      {{! TODO remove this once we have real validation}}
      {{#if (and model.volume.volume model.volume.norm)}}
        {{> Volume model=model.volume}}
      {{/if}}

      {{{modelField model "numberOfFloors"}}}
      {{{modelField model "numberOfSeparateHabitableRooms"}}}

      {{! Returns no error but not saved by api}}
      <ns2:civilDefenseShelter>{{model.civilDefenseShelter}}</ns2:civilDefenseShelter>
      {{{modelField model "energyRelevantSurface"}}}

      {{> ThermotechnicalDeviceForHeating model=model.thermotechnicalDeviceForHeating1 tagName="thermotechnicalDeviceForHeating1"}}
      {{> ThermotechnicalDeviceForHeating model=model.thermotechnicalDeviceForHeating2 tagName="thermotechnicalDeviceForHeating2"}}
      {{> ThermotechnicalDeviceForWarmWater model=model.thermotechnicalDeviceForWarmWater1 tagName="thermotechnicalDeviceForWarmWater1"}}
      {{> ThermotechnicalDeviceForWarmWater model=model.thermotechnicalDeviceForWarmWater2 tagName="thermotechnicalDeviceForWarmWater2"}}

      {{{modelField model "buildingFreeText1"}}}
      {{{modelField model "buildingFreeText2"}}}
    </ns2:building>
  </ns2:setToCompletedBuilding>
{{/base}}`;

// prettier-ignore
export const setToDemolishedBuilding =
`{{#>base}}
  <ns2:setToDemolishedBuilding>
    <ns2:dateOfDemolition>
      <year>{{model.yearOfDemolition}}</year>
    </ns2:dateOfDemolition>
  </ns2:setToDemolishedBuilding>
{{/base}}`;
