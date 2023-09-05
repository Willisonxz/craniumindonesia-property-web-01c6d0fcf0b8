import React from 'react';
import PropertyPlaceholderImg from './inspection-property-placeholder.png';
import PropertyPlaceholderImg2 from './inspection-property-placeholder2.png';
import AgentImage from './agent-placeholder.png';

export const inspectionData = {
  total: 3,
  inspectionTimes: [{
    inspectionTime: '12:00am - 12:30am',
    properties: [{
      type: 'Inspection',
      address: '7/19-21 Susan St, Auburn, NSW 2144',
      facilities: {
        beds: 3,
        bathrooms: 2,
        cars: 1
      },
      propertyImg: '' || PropertyPlaceholderImg
    },
    {
      type: 'Inspection',
      address: '7/19-21 Susan St, Auburn, NSW 2144',
      facilities: {
        beds: 3,
        bathrooms: 2,
        cars: 1
      },
      propertyImg: '' || PropertyPlaceholderImg
    }]
  },
  {
    inspectionTime: '12:15am - 12:45am',
    properties: [{
      type: 'Inspection',
      address: '7/19-21 Susan St, Auburn, NSW 2144',
      facilities: {
        beds: 3,
        bathrooms: 2,
        cars: 1
      },
      propertyImg: '' || PropertyPlaceholderImg
    }]
  }]
};

export const propertiesData = {
  properties: [
    {
      name: 'Raine&Horne',
      area: 'Boradmeadows',
      address: '7/19-21 Susan St, Auburn, NSW 2144',
      price: 370,
      facilities: {
        beds: 3,
        bathrooms: 2,
        cars: 1
      },
      propertyImg: '' || PropertyPlaceholderImg2,
      agentImg: '' || AgentImage,
    },
    {
      name: 'Raine&Horne',
      area: 'Boradmeadows',
      address: '7/19-21 Susan St, Auburn, NSW 2144',
      price: 370,
      facilities: {
        beds: 3,
        bathrooms: 2,
        cars: 1
      },
      propertyImg: '' || PropertyPlaceholderImg2,
      agentImg: '' || AgentImage,
    },
    {
      name: 'Raine&Horne',
      area: 'Boradmeadows',
      address: '7/19-21 Susan St, Auburn, NSW 2144',
      price: 370,
      facilities: {
        beds: 3,
        bathrooms: 2,
        cars: 1
      },
      propertyImg: '' || PropertyPlaceholderImg2,
      agentImg: '' || AgentImage,
    }
  ]
};