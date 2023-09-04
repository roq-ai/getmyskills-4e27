interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Trainer', 'Admin', 'Billing Manager'],
  tenantName: 'Platform',
  applicationName: 'Getmyskills',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage platform registration',
    'Manage trainers on the platform',
    'Manage admins on the platform',
    'Manage billing managers on the platform',
  ],
};
