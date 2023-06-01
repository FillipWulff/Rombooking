export default {
    
  //sanity schema. definerer forskjellige datapoints.
    name: 'Rom',
    type: 'document',
      title: 'Rom',
    fields: [
      {
        name: 'Navn',
        type: 'string',
        title: 'Name'
      }
      ,
      {
        name: 'Base',
        type: 'string',
        title: 'Base'
      }
      ,
      {
        name: 'RomNr',
        type: 'string',
        title: 'RomNr'
      }
      ,
      {
        name: 'Ledighet',
        type: 'boolean',
        title: 'Ledighet'
      }
      ,
      {
        name: 'Kapasitet',
        type: 'number',
        title: 'Kapasitet'
      }
      ,      {
        name: 'Skjerm',
        type: 'boolean',
        title: 'Skjerm'
      }
      ,      
      {
        name: 'Utstyr',
        type: 'string',
        title: 'Utstyr'
      }
      ,
      {
        name: 'Nokkelpers',
        type: 'string',
        title: 'Nokkelpers'
      }
      ,
      {
        name: "slug",
        type: "slug"
      }
    ]
  }