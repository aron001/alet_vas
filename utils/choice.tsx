// utils/choice.ts

export interface Detail {
    header: string;
    description: string;
  }
  
  export const choices: string[] = [
    '24/7/365 support',
    'Bulk Sms',
    'Api',
    'Multiple Connectivity',
    'Automatic Long Message',
    'Schedule Campaign',
    'Languge Support',
    'Licensed by INSA',
  ];
  
  export const images: { [key: string]: string } = {
    '24/7/365 support': '/dashboard.png',
    'Bulk Sms': 'atm.png',
    'Api': 'map.png',
    'Multiple Connectivity': '/path/to/image4.jpg',
    'Automatic Long Message': '/path/to/image5.jpg',
    'Schedule Campaign': '/path/to/image6.jpg',
    'Languge Support': '/path/to/image7.jpg',
    'Licensed by INSA': '/path/to/image8.jpg'
  };
  
  export const details: { [key: string]: Detail[] } = {
    '24/7/365 support': [
      { header: 'Delight Your Custumer With Real time support', description: 'Description for Headline 1 of Choice 1 Description for Headline 1 of Choice 1 Description for Headline 1 of Choice 1 Description for Headline 1 of Choice 1' },
      { header: 'Headline 2', description: 'Description for Headline 2 of Choice 1 Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1' },
      { header: 'Headline 3', description: 'Description for Headline 3 of Choice 1 Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1' }
    ],
    'Bulk Sms': [
        { header: 'Headline 1', description: 'Description for Headline 1 of Choice 1 Description for Headline 1 of Choice 1 Description for Headline 1 of Choice 1 Description for Headline 1 of Choice 1' },
        { header: 'Headline 2', description: 'Description for Headline 2 of Choice 1 Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1' },
        { header: 'Headline 3', description: 'Description for Headline 3 of Choice 1 Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1' }
      ],
      'Api': [
        { header: 'Headline 1', description: 'Description for Headline 1 of Choice 1 Description for Headline 1 of Choice 1 Description for Headline 1 of Choice 1 Description for Headline 1 of Choice 1' },
        { header: 'Headline 2', description: 'Description for Headline 2 of Choice 1 Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1' },
        { header: 'Headline 3', description: 'Description for Headline 3 of Choice 1 Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1' }
      ],
      'Multiple Connectivity': [
        { header: 'Headline 1', description: 'Description for Headline 1 of Choice 1 Description for Headline 1 of Choice 1 Description for Headline 1 of Choice 1 Description for Headline 1 of Choice 1' },
        { header: 'Headline 2', description: 'Description for Headline 2 of Choice 1 Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1' },
        { header: 'Headline 3', description: 'Description for Headline 3 of Choice 1 Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1' }
      ],
      'Automatic Long Message': [
        { header: 'Headline 1', description: 'Description for Headline 1 of Choice 1 Description for Headline 1 of Choice 1 Description for Headline 1 of Choice 1 Description for Headline 1 of Choice 1' },
        { header: 'Headline 2', description: 'Description for Headline 2 of Choice 1 Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1' },
        { header: 'Headline 3', description: 'Description for Headline 3 of Choice 1 Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1' }
      ],
      'Schedule Campaign': [
        { header: 'Headline 1', description: 'Description for Headline 1 of Choice 1 Description for Headline 1 of Choice 1 Description for Headline 1 of Choice 1 Description for Headline 1 of Choice 1' },
        { header: 'Headline 2', description: 'Description for Headline 2 of Choice 1 Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1' },
        { header: 'Headline 3', description: 'Description for Headline 3 of Choice 1 Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1' }
      ],
      'Languge Support': [
        { header: 'Headline 1', description: 'Description for Headline 1 of Choice 1 Description for Headline 1 of Choice 1 Description for Headline 1 of Choice 1 Description for Headline 1 of Choice 1' },
        { header: 'Headline 2', description: 'Description for Headline 2 of Choice 1 Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1' },
        { header: 'Headline 3', description: 'Description for Headline 3 of Choice 1 Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1' }
      ],
      'Licensed by INSA': [
        { header: 'Headline 1', description: 'Description for Headline 1 of Choice 1 Description for Headline 1 of Choice 1 Description for Headline 1 of Choice 1 Description for Headline 1 of Choice 1' },
        { header: 'Headline 2', description: 'Description for Headline 2 of Choice 1 Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1' },
        { header: 'Headline 3', description: 'Description for Headline 3 of Choice 1 Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1Description for Headline 2 of Choice 1' }
      ],
    // Add more details for other choices similarly if needed
  };
  