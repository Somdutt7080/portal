export interface Lead {
  purchasedOn: string;
  location: string;
  locationType: string;
  businessName: string;
  occupancyCount: string;
  price: string;
}
export interface CustomerDetail {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  joinedDate: string;
  businessName: string;
  shippingAddress: string;
  deliveryAddress: string;
  opco: string;
  taxExemption: boolean;
  addressVerificationDate: string;
  currentPlan: string;
  billingCycle: string;
  startDate: string;
  userstatus: 'Active' | 'Disabled';
  isVerified: boolean;
  leads: Lead[];
  ordersHistory: any[];
  routesBought: any[];
  routesListed: any[];
}
export const customers: CustomerDetail[] = [
  {
    id: '1',
    fullName: 'Kyle Smith',
    email: 'kyle@gmail.com',
    phone: '+91 654 678 654',
    joinedDate: '12/05/2024',
    businessName: 'Geekyants',
    shippingAddress: '1122334455667788',
    deliveryAddress: '123 Business Lane, Suite 400, Dallas, TX 75201, USA',
    opco: 'FL',
    taxExemption: true,
    addressVerificationDate: '13/02/2025',
    currentPlan: 'Platinum',
    billingCycle: 'Monthly',
    startDate: '20/05/2024',
    userstatus: 'Active',
    isVerified: true,
    leads: [
      {
        purchasedOn: '30/05/2024',
        location: 'Parkview Corporate Centre, Denver, CO',
        locationType: 'Office building',
        businessName: 'Geekyants',
        occupancyCount: '100 people',
        price: '$4,000',
      },
      
    ],
    ordersHistory: [
      {

      }
    ],
    routesBought: [],
    routesListed: [],
  },
 
  {
     id: '2',
    fullName: 'somdutt',
    email: 'somdutt@gmail.com',
    phone: '+91 654 678 654',
    joinedDate: '12/05/2024',
    businessName: 'Geekyants',
    shippingAddress: '1122334455667788',
    deliveryAddress: '123 Business Lane, Suite 400, Dallas, TX 75201, USA',
    opco: 'FL',
    taxExemption: true,
    addressVerificationDate: '13/02/2025',
    currentPlan: 'Platinum',
    billingCycle: 'Monthly',
    startDate: '20/05/2024',
    userstatus: 'Active',
    isVerified: true,
    leads: [
      {
        purchasedOn: '30/05/2024',
        location: 'Parkview Corporate Centre, Denver, CO',
        locationType: 'Office building',
        businessName: 'Geekyants',
        occupancyCount: '100 people',
        price: '$4,000',
      },
      
    ],
    ordersHistory: [
      {
        
      }
    ],
    routesBought: [],
    routesListed: [],
  
  },
];
