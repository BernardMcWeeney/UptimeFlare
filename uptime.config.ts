const pageConfig = {
  title: "Website Monitoring Dashboard",
  links: [
    { link: 'https://greenberry.ie', label: 'Greenberry Website' },
    { link: 'mailto:office@greenberry.ie', label: 'Contact Support', highlight: true },
  ],
}

const workerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'greenberry',
      name: 'Greenberry',
      method: 'GET',
      target: 'https://greenberry.ie',
      timeout: 10000,
    },
    {
      id: 'mounthanoverns',
      name: 'Mount Hanoverns',
      method: 'GET',
      target: 'https://mounthanoverns.ie',
      timeout: 10000,
    },
    {
      id: 'duleek_community',
      name: 'Duleek Community Facility',
      method: 'GET',
      target: 'https://duleekcommunityfacility.ie',
      timeout: 10000,
    },
    {
      id: 'moynalvey',
      name: 'Moynalvey NS',
      method: 'GET',
      target: 'https://moynalveyns.ie',
      timeout: 10000,
    },
    {
      id: 'cudden',
      name: 'Cudden Pre Construction',
      method: 'GET',
      target: 'https://cuddenpreconstruction.ie',
      timeout: 10000,
    },
    {
      id: 'bellews_golf',
      name: 'Belllewstown Golf Club',
      method: 'GET',
      target: 'http://bellewstowngolfclub.ie',
      timeout: 10000,
    },
    {
      id: 'ballivor',
      name: 'Ballivor Kildalkey',
      method: 'GET',
      target: 'https://ballivorkildalkey.ie',
      timeout: 10000,
    },
    {
      id: 'oldcastle',
      name: 'Oldcastle Moylagh Parish',
      method: 'GET',
      target: 'https://oldcastlemoylaghparish.ie',
      timeout: 10000,
    },
    {
      id: 'donore',
      name: 'Donore Rossnare Parish',
      method: 'GET',
      target: 'https://donorerossnareeparish.com',
      timeout: 10000,
    },
    {
      id: 'duleek_bellews',
      name: 'Duleek Bellewstown Parish',
      method: 'GET',
      target: 'https://duleekbellewstownparish.com',
      timeout: 10000,
    },
    {
      id: 'gerwood',
      name: 'Ger Woodturning',
      method: 'GET',
      target: 'https://gerwoodturning.ie',
      timeout: 10000,
    },
    {
      id: 'vancouver_gaa',
      name: 'Vancouver GAA',
      method: 'GET',
      target: 'https://vancouvergaa.com',
      timeout: 10000,
    },
    {
      id: 'churchify',
      name: 'Churchify',
      method: 'GET',
      target: 'https://churchify.ie',
      timeout: 10000,
    },
    {
      id: 'st_marys',
      name: "St Mary's Drogheda",
      method: 'GET',
      target: 'https://stmarysdrogheda.ie',
      timeout: 10000,
    },
    {
      id: 'holy_family',
      name: "Holy Family Drogheda",
      method: 'GET',
      target: 'https://holyfamilydrogheda.ie',
      timeout: 10000,
    },
    {
      id: 'issc_vancouver_gaa',
      name: "ISSC Vancouver GAA",
      method: 'GET',
      target: 'https://isscvancouver.com/',
      timeout: 10000,
    },
    {
      id: 'le_cheile_vancouver_gaa',
      name: "Vancouver Le Cheile",
      method: 'GET',
      target: 'https://vancouverlecheile.com/',
      timeout: 10000,
    },
  ],
}

export { pageConfig, workerConfig }
