import Navbar from '../components/Navbar';

export default function PricingPage() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for getting started',
      features: [
        'Up to 3 projects',
        'Basic features',
        'Community support',
        '1GB storage',
      ],
      cta: 'Get Started',
      highlighted: false
    },
    {
      name: 'Pro',
      price: '$19',
      period: '/month',
      description: 'For professional creators',
      features: [
        'Unlimited projects',
        'Advanced features',
        'Priority support',
        '50GB storage',
        'Custom domain',
        'Analytics dashboard'
      ],
      cta: 'Start Free Trial',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large teams',
      features: [
        'Everything in Pro',
        'Dedicated support',
        'Unlimited storage',
        'Custom integrations',
        'SLA guarantee',
        'Advanced security'
      ],
      cta: 'Contact Sales',
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Choose the perfect plan for your needs. Always know what you'll pay.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-sm border-2 transition-all hover:shadow-lg ${
                plan.highlighted
                  ? 'border-blue-600 scale-105'
                  : 'border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="bg-blue-600 text-white text-sm font-medium py-2 text-center rounded-t-lg">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <button
                  className={`w-full py-3 rounded-md font-medium transition-colors mb-6 ${
                    plan.highlighted
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Can I change my plan later?',
                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
              },
              {
                q: 'Is there a free trial?',
                a: 'Yes, we offer a 14-day free trial for the Pro plan with no credit card required.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
