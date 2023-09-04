const mapping: Record<string, string> = {
  admins: 'admin',
  'billing-managers': 'billing_manager',
  bookings: 'booking',
  platforms: 'platform',
  trainers: 'trainer',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
