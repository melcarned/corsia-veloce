const path = '../assets/';

export default {
  menu: [
    {
      sectionTitle: 'ANTIPASTO',
      key: '0',
      items: [
        {
          title: '"Sulla Corsia Veloce"',
          subtitle: 'Una sera nella Corsia Veloce',
          description:
            'brushetta made with cheeses, olives, vegitables, herbs, fruits, smoked seafood, cured meats',
          image: require(`${path}Brushetta_Assortment.jpg`),
        },
      ],
    },
    {
      sectionTitle: 'FRUTTI DI MARE',
      key: '1',
      items: [
        {
          title: 'Scallops',
          subtitle: '(Scallops)',
          description: 'garlic, lemon, parsely, olive oil',
          image: require(`${path}Scallops.jpeg`),
        },
        {
          title: 'Baked Clams',
          subtitle: '(Baked Clam)',
          description: 'breadcrumbs, parsely, lemon, garlic, olive oil',
          image: require(`${path}Baked_Clams.jpg`),
        },
        {
          title: 'Calamari',
          subtitle: '(Squid)',
          description: 'breadcrumbs, marinara, basil, olive oil',
          image: require(`${path}Calamari.jpg`),
        },
        {
          title: 'Octopus',
          subtitle: '(Octopus)',
          description: 'olive oil, garlic, wine, pepper',
          image: require(`${path}Octopus.jpg`),
        },
        {
          title: 'Shrimp',
          subtitle: '(Shrimp)',
          description: 'butter, garlic, red pepper, parsely',
          image: require(`${path}Shrimp.jpg`),
        },
      ],
    },
    {
      sectionTitle: 'VINO',
      key: '2',
      items: [
        {
          title: 'White Wine',
          subtitle: '(House white wine)',
          description:
            'house regional selection',
          image: require(`${path}White_Wine.jpg`),
        },
      ],
    },
    {
      sectionTitle: 'FRUTTA',
      key: '3',
      items: [
        {
          title: 'Seasonal Fruit',
          subtitle: '(Seasonal fruit medley)',
          description: 'seasonal selection of fresh fruit',
          image: require(`${path}Melone_Salad.jpg`),
        },
      ],
    },
    {
      sectionTitle: 'DIGESTIVO',
      key: '4',
      items: [
        {
          title: 'Espresso',
          subtitle: '',
          description: 'house dark roast',
          image: require(`${path}Espresso.jpg`),
        },
        {
          title: 'Limoncello',
          subtitle: '',
          description: 'oraganic regional pick',
          image: require(`${path}Limoncello.jpg`),
        },
      ],
    },
  ],
};
