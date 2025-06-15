
// Mock email service for demonstration purposes
export interface EmailSubscription {
  id: string;
  artistSlug: string;
  email: string;
  subscribedAt: string;
}

class MockEmailService {
  private storageKey = 'linkInBio_subscriptions';

  private getSubscriptions(): EmailSubscription[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  private saveSubscriptions(subscriptions: EmailSubscription[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(subscriptions));
  }

  subscribe(artistSlug: string, email: string): Promise<{ success: boolean; message: string }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const subscriptions = this.getSubscriptions();
        
        // Check if email already exists for this artist
        const existingSubscription = subscriptions.find(
          sub => sub.artistSlug === artistSlug && sub.email === email
        );

        if (existingSubscription) {
          resolve({ success: false, message: 'Este email já está inscrito!' });
          return;
        }

        // Add new subscription
        const newSubscription: EmailSubscription = {
          id: Math.random().toString(36).substr(2, 9),
          artistSlug,
          email,
          subscribedAt: new Date().toISOString(),
        };

        subscriptions.push(newSubscription);
        this.saveSubscriptions(subscriptions);
        
        resolve({ success: true, message: 'Inscrição realizada com sucesso!' });
      }, 500); // Simulate network delay
    });
  }

  getSubscriptionsByArtist(artistSlug: string): Promise<EmailSubscription[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const subscriptions = this.getSubscriptions();
        const artistSubscriptions = subscriptions.filter(
          sub => sub.artistSlug === artistSlug
        );
        resolve(artistSubscriptions);
      }, 300);
    });
  }

  deleteSubscription(id: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const subscriptions = this.getSubscriptions();
        const filteredSubscriptions = subscriptions.filter(sub => sub.id !== id);
        this.saveSubscriptions(filteredSubscriptions);
        resolve(true);
      }, 300);
    });
  }
}

export const mockEmailService = new MockEmailService();
