export const getIngredientCategories = (getValuesOnly = false) => {
  const categoryOptions = [
    {
      label: 'Meat & Poultry',
      value: 'meat_poultry',
      children: [
        'brisket',
        'chicken',
        'chicken wings',
        'chuck roast',
        'flank steak',
        'pork belly',
        'ribeye',
        'skirt steak',
      ],
    },
    {
      label: 'Fruits, Vegetables, & Fresh Herbs',
      value: 'fruits_vegetables',
      children: [
        'carrots',
        'celery',
        'apples',
        'pears',
        'bananas',
      ],
    },
    {
      label: 'Bread, Bread Crumbs, Cake, & Pastries',
      value: 'bread_cake_pastries',
      children: [
        'baguette',
        'sourdough',
      ],
    },
    {
      label: 'Stocks & Broths',
      value: 'stocks_broths',
      children: [
        'chicken stock',
        'beef stock',
        'vegetable stock',
      ],
    },
    {
      label: 'Fish & Seafood',
      value: 'fish_seafood',
    },
    {
      label: 'Rice, Beans, Nuts, Seeds, & Grains',
      value: 'beans_nuts_grains_pasta',
    },
    {
      label: 'Pasta',
      value: 'pasta_and_noodles',
    },
    {
      label: 'Noodles',
      value: 'noodles',
    },
    {
      label: 'Cheese, Butter',
      value: 'cheese',
      children: [
        'parmesan',
        'Parmigiano-Reggiano',
        'string cheese',
        'mozzarella',
        'american cheese',
        'cheddar',
        'blue cheese',
      ],
    },
    {
      label: 'Milk, Creams, & Yogurt',
      value: 'milk_creams_yogurt',
    },
    {
      label: 'Eggs',
      value: 'eggs',
    },
    {
      label: 'Cookies, Crackers, & Chips',
      value: 'cookies_crackers_chips',
    },
    {
      label: 'Sweets, Treats, & Snacks',
      value: 'sweets_treats_snacks',
      children: [
        'tapioca pearls',
        'pudding',
        'jello',
      ]
    },
    {
      label: 'Oils, Lard, & Shortners',
      value: 'oils',
      children: [
        'olive oil',
        'vegetable oil',
        'peanut oil',
        'canola oil',
        'sesame oil',
        'flax seed oil',
        'grapeseed oil',
      ],
    },
    {
      label: 'Vinegar',
      value: 'vinegar',
    },
    {
      label: 'Condiments',
      value: 'condiments',
    },
    {
      label: 'Sauces & Dressings',
      value: 'sauces',
    },
    {
      label: 'Seasonings & Spices',
      value: 'seasonings_spices',
    },
    {
      label: 'Flour',
      value: 'flour',
    },
    {
      label: 'Corn Starch, Baking Powder/Soda & Similar',
      value: 'corn_starch_baking_powder_soda_similar',
    },
    {
      label: 'Sugar, Salt, & Pepper',
      value: 'sugar_salt_pepper_other_spices',
    },
    {
      label: 'Shorteners, Pie Crusts, & Related',
      value: 'shorteners',
    },
    {
      label: 'Coffee Beans/Grains/Instant & Tea Leaves',
      value: 'coffee_beans_grains_instant_tea_leaves',
    },
    {
      label: 'Beer, Wines, & Spirits',
      value: 'beer_wines_spirits',
      children: [
        'beer',
        'wine',
        'bourbon',
        'whiskey',
        'tequila',
        'champagne',
      ],
    },
    {
      label: 'Beverages: Bottled Water, Coffee (already prepared), Tea (already prepared), Soda, & Juices',
      value: 'drinking_water_coffee_tea_soda_juices',
    },
    {
      label: 'Miscellaneous',
      value: 'miscellaneous',
    },
  ];

  if (!getValuesOnly) {
    return categoryOptions;
  }

  const arrValues = [];

  categoryOptions.forEach((obj) => {
    if (!arrValues.includes(obj.value)) {
      arrValues.push(obj.value);
    }
  });

  /*
  for (let obj of categoryOptions) {
    if (!arrValues.includes(obj.value)) {
      arrValues.push(obj.value);
    }
  }
  */

  return arrValues;
};
