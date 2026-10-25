import { CustomerReview, SAMPLE_CUSTOMER_REVIEWS } from './customerReviews';

let dynamicReviews: CustomerReview[] = [...SAMPLE_CUSTOMER_REVIEWS];
const listeners: ((reviews: CustomerReview[]) => void)[] = [];

// Analytics tracking initialized to 0 as requested
let visitorCount = 0;
let mailtoClicks = 0;
let formSubmits = 0;
let trackedSession = false;

export function getCustomerReviews(): CustomerReview[] {
  return dynamicReviews;
}

export function addCustomerReview(review: Omit<CustomerReview, 'id'>) {
  const newReview: CustomerReview = {
    ...review,
    id: `user-rev-${Date.now()}`,
  };
  dynamicReviews = [newReview, ...dynamicReviews];
  formSubmits += 1;
  notifyListeners();
}

export function deleteCustomerReview(id: string) {
  dynamicReviews = dynamicReviews.filter((r) => r.id !== id);
  notifyListeners();
}

export function trackMailtoClick() {
  mailtoClicks += 1;
  notifyListeners();
}

export function trackVisitor() {
  if (!trackedSession) {
    trackedSession = true;
    visitorCount += 1;
    notifyListeners();
  }
}

export function getAnalyticsData() {
  return {
    visitorCount,
    mailtoClicks,
    formSubmits,
    totalReviews: dynamicReviews.length,
  };
}

function notifyListeners() {
  listeners.forEach((listener) => listener(dynamicReviews));
}

export function subscribeReviews(listener: (reviews: CustomerReview[]) => void) {
  listeners.push(listener);
  return () => {
    const index = listeners.indexOf(listener);
    if (index !== -1) listeners.splice(index, 1);
  };
}
