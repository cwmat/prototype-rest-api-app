import { Smellprofile } from './smellprofile'

// Create mock data
export const SMELLPROFILES: Smellprofile[] = [
  {
    _id: 1,
    name: 'ajarvis',
    type: "Good",
    desc: "Dryer sheets, with a hint of jasmine. Very subtle but it has lingered for some time now.",
    lat: 37.51,
    long: -77.44
  },
  {
    _id: 2,
    name: 'kchang',
    type: "Bad",
    desc: "A smell most foul! Post-rain sewer runoff mixed with old socks.",
    lat: 37.54,
    long: -77.46
  },
  {
    _id: 3,
    name: 'gmcjeanie',
    type: "Neutral",
    desc: "Sort of chemically... I can't say it was bad, but it wasn't good either.",
    lat: 37.54,
    long: -77.43
  },
  {
    _id: 4,
    name: 'ajarvis',
    type: "Bad",
    desc: "Yuck!  This is terrible.  Rotten meat!",
    lat: 37.55,
    long: -77.45
  },
  {
    _id: 5,
    name: 'gmcjeanie',
    type: "Bad",
    desc: "I think there may be a dead possum nearby or something...",
    lat: 37.53,
    long: -77.44
  }
];