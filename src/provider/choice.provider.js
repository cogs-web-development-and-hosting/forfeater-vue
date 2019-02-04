import { ApiProvider } from '@/provider/api.provider';

export class ChoiceProvider extends ApiProvider {
  constructor() {
    super();
    this.uri = 'choices';
  }
  find(id) {
    this.client.get(`${this.uri}/${id}`);
  }

  getFromOrder(orderId) {
    return this.client.get(`orders/${orderId}/choice`);
  }

  getFromProduct(Product) {
    return this.client.get(`vendors/${Product.vendorId}/products/${Product.id}/choices`);
  }

  store(User, Order, Product, comment) {
    return this.client.put(`orders/${Order.id}/choices`, {
      orderId: Order.id,
      userId: User.id,
      productId: Product.id,
      orderComment: comment
    });
  }

  rate(orderId, Score) {
    return this.client.patch(`orders/${orderId}/ratings`, {
      mark: Score.score,
      scoreComment: Score.comment
    });
  }

  remove(orderId, choiceId) {
    return this.client.delete(`orders/${orderId}/choices/${choiceId}`);
  }
}
