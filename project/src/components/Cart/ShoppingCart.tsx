import React from 'react';
import { X, Trash2, CreditCard, ShoppingBag } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const ShoppingCart: React.FC = () => {
  const { items, removeItem, clearCart, total, itemCount } = useCart();

  const handleCheckout = () => {
    // Simulate checkout process
    alert('Redirecting to secure payment gateway...');
    // In a real app, this would integrate with a payment provider
    clearCart();
  };

  if (itemCount === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
            <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Discover our courses and start your learning journey today!
            </p>
            <button
              onClick={() => window.history.back()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-8 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Shopping Cart ({itemCount} {itemCount === 1 ? 'item' : 'items'})
              </h1>
              {itemCount > 0 && (
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-sm font-medium flex items-center transition-colors duration-200"
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Clear All
                </button>
              )}
            </div>
          </div>

          <div className="px-6 py-6">
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all duration-200"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      by {item.instructor}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      ${item.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-all duration-200"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Checkout Section */}
          <div className="px-6 py-8 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
            <div className="flex items-center justify-between mb-6">
              <div className="text-right">
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Amount</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${total.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center shadow-lg"
              >
                <CreditCard className="h-5 w-5 mr-2" />
                Proceed to Secure Checkout
              </button>

              <div className="text-center space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  🔒 Secure payment with 256-bit SSL encryption
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  30-day money-back guarantee on all courses
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Course Recommendations */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Frequently bought together
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'JavaScript Fundamentals', price: 49.99, instructor: 'John Doe' },
              { title: 'CSS Grid & Flexbox', price: 39.99, instructor: 'Jane Smith' }
            ].map((course, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="w-12 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded" />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">{course.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">by {course.instructor}</p>
                </div>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  ${course.price}
                </span>
                <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium">
                  Add
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;