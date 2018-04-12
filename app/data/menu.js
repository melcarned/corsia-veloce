const MenuMain = [
  {
    brushetta: [
      {
        header: 'Brushetta',
        title: 'Una sera nella Corsia Veloce',
        Description:
          'House Bruschetta topped with assortments of regional vegetables, cheeses, olives, smoked seafood and cured meats',
      },
    ],
  },
  {
    seafood: [
      {
        title: 'Scaloppine',
        subtitle: '(Scallops)',
        Description: '',
      },
      {
        title: 'Vongole al forno',
        subtitle: '(Baked Clam)',
        Description: '',
      },
      {
        title: 'Calamari',
        subtitle: '(Squid)',
        Description: '',
      },
      {
        title: 'Polpo',
        subtitle: '(Octopus)',
        Description: '',
      },
      {
        title: 'Gamberetto',
        subtitle: '(Shrimp)',
        Description: '',
      },
    ],
  },
  {
    sauce: [
      {
        title: 'Pomodoro e basilico',
        subtitle: '(Tomato Basil)',
        Description: '',
      },
      {
        title: 'Aglio al limone',
        subtitle: '(Lemon Garlic)',
        Description: '',
      },
    ],
  },
  {
    frutta: [
      {
        title: "Macedonia dell'estate",
        subtitle: '(Seasonal fruit medley)',
        Description: '',
      },
    ],
  },
  {
    vino: [
      {
        title: 'Vino bianco',
        subtitle: '(House white wine)',
        Description: '',
      },
    ],
  },
  {
    digestivo: [
      {
        title: 'Espresso',
        subtitle: '',
        Description: '',
      },
      {
        title: 'Limoncello',
        subtitle: '',
        Description: '',
      },
    ],
  },
];

const path = '../assets/';

export default {
  menu: [
    {
      sectionTitle: 'BRUSHETTA',
      items: [
        {
          title: 'Brushetta',
          subtitle: 'Una sera nella Corsia Veloce',
          description:
            'cheeses, olives, smoked seafood and cured meats',
          image: require(`${path}Brushetta_Assortment.jpg`),
        },
      ],
    },
    {
      sectionTitle: 'FRUTTI DI MARE',
      items: [
        {
          title: 'Scaloppine',
          subtitle: '(Scallops)',
          description: 'cheeses, olives, smoked seafood and cured meats',
          image: require(`${path}Scallops.jpeg`),
        },
        {
          title: 'Vongole al forno',
          subtitle: '(Baked Clam)',
          description: 'cheeses, olives, smoked seafood and cured meats',
          image: require(`${path}Baked_Clams.jpg`),
        },
        {
          title: 'Calamari',
          subtitle: '(Squid)',
          description: 'cheeses, olives, smoked seafood and cured meats',
          image: require(`${path}Calamari.jpg`),
        },
        {
          title: 'Polpo',
          subtitle: '(Octopus)',
          description: 'cheeses, olives, smoked seafood and cured meats',
          image: require(`${path}Octopus.jpg`),
        },
        {
          title: 'Gamberetto',
          subtitle: '(Shrimp)',
          description: 'cheeses, olives, smoked seafood and cured meats',
          image: require(`${path}Shrimp.jpg`),
        },
      ],
    },

    {
      sectionTitle: 'Sauce',
      items: [
        {
          title: 'Pomodoro e basilico',
          subtitle: '(Tomato Basil)',
          description:
            'House Bruschetta topped with assortments of regional vegetables, cheeses, olives, smoked seafood and cured meats',
          image: require(`${path}Tomato_Basil.jpg`),
        },
        {
          title: 'Aglio al limone',
          subtitle: '(Lemon Garlic)',
          description:
            'House Bruschetta topped with assortments of regional vegetables, cheeses, olives, smoked seafood and cured meats',
          image: require(`${path}Lemon_Garlic.jpg`),
        },
      ],
    },

    {
      sectionTitle: 'Vino',
      items: [
        {
          title: 'Vino bianco',
          subtitle: '(House white wine)',
          description:
            'House Bruschetta topped with assortments of regional vegetables, cheeses, olives, smoked seafood and cured meats',
          image: require(`${path}White_Wine.jpg`),
        },
      ],
    },
    {
      sectionTitle: 'Frutta',
      items: [
        {
          title: "Macedonia dell'estate",
          subtitle: '(Seasonal fruit medley)',
          Description: '',
          image: require(`${path}Melone_Salad.jpg`),
        },
      ],
    },
    {
      sectionTitle: 'Digestivo',
      items: [
        {
          title: 'Espresso',
          subtitle: '',
          Description: '',
          image: require(`${path}Espresso.jpg`),
        },
        {
          title: 'Limoncello',
          subtitle: '',
          Description: '',
          image: require(`${path}Limoncello.jpg`),
        },
      ],
    },
  ],
};
