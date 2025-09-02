import { subHours, subDays, addDays } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import { useConvertUnitsOfWeight } from '../hooks/use-convert-units-of-weight';

const now = new Date();

// array of [key, value] pairs
let items = new Map([
  ['CHILE_SERRANO', 'chile serrano'],
  ['FLANK_STEAK', 'flank steak'],
  ['EGGS', 'eggs'],
  ['GARLIC', 'garlic'],
  ['GRAPE_TOMATOES', 'grape tomatoes'],
  ['ONION_WHITE', 'onion (white)'],
  ['OYSTER_SAUCE', 'oyster_sauce'],
  ['RICE_NOODLES_XL', 'rice nooodles (XL)'],
  ['SHRIMP_LARGE', 'shrimp (large)'],
  ['SRIRACHA', 'sriracha'],
  ['SUGAR_GRANULATED', 'sugar (granulated)'],
  ['SWEET_SOY_SAUCE', 'sweet soy sauce'],
  ['THAI_BASIL', 'Thai basil'],
  ['TOFU', 'tofu']
]);


let sellers = new Map([
  ['99_RANCH', '99 Ranch Market'],
  ['RALPHS_MISSION_CENTER_RD', 'Ralph\'s (Mission Ctr Rd)'],
  ['SAMS_CLUB_LEMON_GROVE', 'Sam\'s Club (Lemon Grove)'],
  ['SF_SAN_DIEGO_VIETNAMESE_SUPERMARKET', 'SF San Diego (Vietnamese Supermarket)'],

])

let unitSoldAs = new Map([
  ['POUNDS', 'pounds'],
  ['KILOS', 'kilos'],
  ['GRAMS', 'grams'],
  ['OUNCES', 'ounces'],
  ['PER_DOZEN', 'per dozen'],
]);

class IngredientApi {
  getVendors() {
    let vendors = [];
    for (let [key, value] of sellers) {
      vendors.push({
        key,
        value
      })
    }

    return Promise.resolve(vendors);
  }

  getIngredients() {
    const ingredients = [

      {
        id: '5ecb868d0f437390ef3ac62c',
        currency: '$',
        customer: {
          email: 'contact@acme.com',
          name: 'ACME SRL'
        },
        dueDate: addDays(now, 5).getTime(),
        issueDate: subHours(now, 1).getTime(),
        number: 'INV-0019',
        status: 'paid',
        totalAmount: 55.50
      },
      {
        id: '59d78b0b0e15394130c373ff',
        currency: '$',
        customer: {
          email: 'sales@blind-spots.com',
          name: 'Blind Spots Inc.'
        },
        dueDate: addDays(now, 6).getTime(),
        issueDate: subHours(now, 1).getTime(),
        number: 'INV-0018',
        status: 'paid',
        totalAmount: 688.90
      },
      {
        id: '2a05e7f757c35fe823da3c5a',
        currency: '$',
        customer: {
          email: 'sales@beauty-clinic.com',
          name: 'Beauty Clinic SRL'
        },
        dueDate: addDays(now, 9).getTime(),
        issueDate: subHours(now, 1).getTime(),
        number: 'INV-0017',
        status: 'paid',
        totalAmount: 695.20
      },
      {
        id: '5ecb868ada8deedee0638502',
        currency: '$',
        customer: {
          email: 'sales@matt-jason.com',
          name: 'Matt Jason'
        },
        dueDate: addDays(now, 25).getTime(),
        issueDate: subDays(subHours(now, 5), 2).getTime(),
        number: 'INV-0021',
        status: 'pending',
        totalAmount: 23.11
      },
      {
        id: '750f519b8bc4d21af9528437',
        currency: '$',
        customer: {
          email: 'sales@matt-jason.com',
          name: 'Matt Jason'
        },
        dueDate: addDays(now, 17).getTime(),
        issueDate: subDays(subHours(now, 4), 2).getTime(),
        number: 'INV-0020',
        status: 'pending',
        totalAmount: 253.76
      },
      {
        id: '5ecb868700aba84d0f1c0e48',
        currency: '$',
        customer: {
          email: 'support@terrythomas.io',
          name: 'Terry Thomas'
        },
        dueDate: addDays(now, 11).getTime(),
        issueDate: subDays(subHours(now, 4), 6).getTime(),
        number: 'INV-0015',
        status: 'canceled',
        totalAmount: 781.50
      },
      {
        id: '5ecb8682038e1rl239438dks1',
        currency: '$',
        customer: {
          email: 'contact@dispatcher.co.uk',
          name: 'Dispatcher Inc.'
        },
        dueDate: addDays(now, 3).getTime(),
        issueDate: subDays(subHours(now, 2), 15).getTime(),
        number: 'INV-0014',
        status: 'paid',
        totalAmount: 96.64
      },
      {
        id: '5ecb8682038e1ddf4e868764',
        currency: '$',
        customer: {
          email: 'info@novelty.co.uk',
          name: 'Novelty I.S'
        },
        dueDate: addDays(now, 1).getTime(),
        issueDate: subDays(subHours(now, 2), 15).getTime(),
        number: 'INV-0013',
        status: 'canceled',
        totalAmount: 496.23
      },


      { // flank steak
        id: uuidv4(),
        product: items.get('FLANK_STEAK'),
        seller: sellers.get('SAMS_CLUB_LEMON_GROVE'),
        unitInPounds: 4.34,
        unitInGrams: 1970.36,
        costPerPoundInDollarsBeforeTaxes: 8.23,
        costPerPoundInDollarsWithTaxes: 8.87,
        costPerKiloInDolarsBeforeTaxes: undefined,
        costPerKiloInDollarsWithTaxes: 19.53,
        costPerGramInDollarsBeforeTaxes: 0.020,
        costPerGramInDollarsWithTaxes: 0.025,
        costPerOunceInDollarsBeforeTaxes: 0.03,
        costPerOunceInDollarsWithTaxes: 0.04,
        totalCostOfUnitInPoundsBeforeTaxes: 35.72,
        totalCostOfUnitInGramsBeforeTaxes: 35.72,
        taxRate: 0.0775,
        unitSoldAs: unitSoldAs.get('POUNDS'),
        dateLastChecked: new Date(2022, 1, 15),
        currency: '$',
        customer: {
          email: 'info@novelty.co.uk',
          name: 'Novelty I.S'
        },
        dueDate: addDays(now, 1).getTime(),
        issueDate: subDays(subHours(now, 2), 15).getTime(),
        number: 'USELESS-0001',
        status: 'paid',
        totalAmount: 496.23

      },
      { // shrimp (large)
        id: uuidv4(),
        product: items.get('SHRIMP_LARGE'),
        seller: sellers.get('SF_SAN_DIEGO_VIETNAMESE_SUPERMARKET'),
        unitInPounds: 4.34,
        unitInGrams: 1970.36,
        costPerPoundInDollarsBeforeTaxes: 6.99,
        costPerPoundInDollarsWithTaxes: 7.53,
        costPerKiloInDollarsBeforeTaxes: null,
        costPerKiloInDollarsWithTaxes: 16.58,
        costPerGramInDollarsBeforeTaxes: null,
        costPerGramInDollarsWithTaxes: 0.02,
        costPerOunceInDollarsBeforeTaxes: null,
        costPerOunceInDollarsWithTaxes: null,
        totalCostOfUnitInPoundsBeforeTaxes: null,
        totalCostOfUnitInGramsBeforeTaxes: null,
        taxRate: 0.0775,
        unitSoldAs: unitSoldAs.get('POUNDS'),
        dateLastChecked: new Date(2022, 1, 15),
        currency: '$',
        customer: {
          email: 'info@novelty.co.uk',
          name: 'Novelty I.S'
        },
        dueDate: addDays(now, 1).getTime(),
        issueDate: subDays(subHours(now, 2), 15).getTime(),
        number: 'USELESS-0002',
        status: 'paid',
        totalAmount: 496.23
      },
      { // thai basil
        id: uuidv4(),
        product: items.get('THAI_BASIL'),
        seller: sellers.get('99_RANCH'),
        unitInPounds: undefined,
        unitInGrams: undefined,
        costPerPoundInDollarsBeforeTaxes: 7.99,
        costPerPoundInDollarsWithTaxes: 8.61,
        costPerKiloInDollarsBeforeTaxes: null,
        costPerKiloInDollarsWithTaxes: 18.96,
        costPerGramInDollarsBeforeTaxes: null,
        costPerGramInDollarsWithTaxes: 0.02,
        costPerOunceInDollarsBeforeTaxes: null,
        costPerOunceInDollarsWithTaxes: null,
        totalCostOfUnitInPoundsBeforeTaxes: null,
        totalCostOfUnitInGramsBeforeTaxes: null,
        taxRate: 0.0775,
        unitSoldAs: unitSoldAs.get('POUNDS'),
        dateLastChecked: new Date(2022, 1, 15),
        currency: '$',
        customer: {
          email: 'info@novelty.co.uk',
          name: 'Novelty I.S'
        },
        dueDate: addDays(now, 1).getTime(),
        issueDate: subDays(subHours(now, 2), 15).getTime(),
        number: 'USELESS-0002',
        status: 'paid',
        totalAmount: 496.23
      },

    ];

    return Promise.resolve(ingredients);
  }

  getIngredient() {
    const ingredient = {
      id: '5ecb86785312dcc69b5799ad',
      currency: '$',
      customer: {
        address: '271 Richmond Rd, Grey Lynn, Auckland 1022, New Zealand',
        company: 'Countdown Grey Lynn',
        email: 'contact@acme.com',
        name: 'ACME SRL',
        taxId: '6934656584231'
      },
      dueDate: addDays(now, 5).getTime(),
      issueDate: subHours(now, 1).getTime(),
      items: [
        {
          id: '5ecb8694db1760a701dfbf74',
          currency: '$',
          description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
          unitAmount: 55.50
        }
      ],
      number: 'INV-0019',
      status: 'paid',
      subtotalAmount: 50.00,
      taxAmount: 5.50,
      totalAmount: 55.50
    };

    return Promise.resolve(ingredient);
  }
}

export const ingredientApi = new IngredientApi();
