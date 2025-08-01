
const responses = {
  greeting: "👋 Hello! How can I assist you today?",
  goodbye: "👋 Goodbye! Have a great day ahead!",
  help: "🤖 I'm here to assist you with any questions or help you with our services.",
  hours: "🕒 Our business hours are from 9 AM to 5 PM, Monday to Friday.",
  location: "📍 We are located at 123 Solar Street, Sunnytown.",
  contact: "📧 You can reach us at support@solareye.com or call us at 📞 +123456789.",
  troubleshooting: "🛠️ For troubleshooting, please check the user manual or contact our support team at support@solareye.com.",
  faq: "❓ Frequently Asked Questions (FAQ) include: How does solar energy work? What maintenance is required? Can I switch packages?",
  pricing: "💲 Pricing starts from $150 per month depending on the service package you choose. Contact us for a personalized quote.",
  terms: "📃 Our terms and conditions can be found on our website under the 'Terms & Conditions' section.",
  default: "❓ I'm sorry, I didn't understand that. Can you please rephrase?",
};

// Services (additional services added)
const services = [
  {
    packageName: "Partial",
    description: "Basic package offering essential support and monitoring.",
    features: ["Basic mentoring", "Monthly inspection"],
    price: 150,
    duration: "per month",
    contractType: "Short-term",
    contractDescription: "1-month contract",
    serviceFrequency: "Monthly",
    frequencyDescription: "Services are provided every month.",
    additionalServices: {
      mentoring: true,
      inspection: true,
      maintenance: false,
    },
  },
  {
    packageName: "Full",
    description: "Comprehensive package covering all aspects of solar energy maintenance.",
    features: ["24/7 support", "Quarterly inspection", "Full maintenance"],
    price: 300,
    duration: "per month",
    contractType: "Long-term",
    contractDescription: "12-month contract",
    serviceFrequency: "Quarterly",
    frequencyDescription: "Services are provided every three months.",
    additionalServices: {
      mentoring: true,
      inspection: true,
      maintenance: true,
    },
  },
  {
    packageName: "Premium",
    description: "All-inclusive package for high-end solar system management.",
    features: ["Advanced mentoring", "Monthly inspection", "Priority support"],
    price: 500,
    duration: "per month",
    contractType: "Long-term",
    contractDescription: "24-month contract",
    serviceFrequency: "Monthly",
    frequencyDescription: "Services are provided every month.",
    additionalServices: {
      mentoring: true,
      inspection: true,
      maintenance: true,
    },
  },
  {
    packageName: "Ultimate",
    description: "The most advanced package with complete solar energy solutions.",
    features: ["24/7 support", "Daily inspection", "Emergency maintenance", "System upgrades"],
    price: 700,
    duration: "per month",
    contractType: "Long-term",
    contractDescription: "36-month contract",
    serviceFrequency: "Weekly",
    frequencyDescription: "Services are provided every week.",
    additionalServices: {
      mentoring: true,
      inspection: true,
      maintenance: true,
    },
  },
];

// Helper functions
function getResponse(message) {
  const normalizedMessage = (typeof message === "string" ? message : String(message)).toLowerCase();

  // Responses for general questions
  if (normalizedMessage.includes("hello") || normalizedMessage.includes("hi"))
    return responses.greeting;

  if (normalizedMessage.includes("bye")) return responses.goodbye;

  if (normalizedMessage.includes("help")) return responses.help;

  if (normalizedMessage.includes("hours") || normalizedMessage.includes("time"))
    return responses.hours;

  if (normalizedMessage.includes("location") || normalizedMessage.includes("where"))
    return responses.location;

  if (normalizedMessage.includes("contact") || normalizedMessage.includes("email") || normalizedMessage.includes("phone"))
    return responses.contact;

  if (normalizedMessage.includes("troubleshoot") || normalizedMessage.includes("issue"))
    return responses.troubleshooting;

  if (normalizedMessage.includes("faq") || normalizedMessage.includes("questions"))
    return responses.faq;

  if (normalizedMessage.includes("pricing") || normalizedMessage.includes("cost"))
    return responses.pricing;

  if (normalizedMessage.includes("terms") || normalizedMessage.includes("policy"))
    return responses.terms;

  // Responses for service-related queries
  if (normalizedMessage.includes("services") || normalizedMessage.includes("packages")) {
    return listServices();
  }

  // Responses for specific service queries
  for (const service of services) {
    if (normalizedMessage.includes(service.packageName.toLowerCase())) {
      return formatServiceResponse(service);
    }
  }

  // Default response
  return responses.default;
}

function listServices() {
  return services
    .map(
      (service) =>
        `🔹 Package: ${service.packageName}\n📋 Description: ${service.description}\n💡 Features: ${service.features.join(
          ", "
        )}\n💲 Price: $${service.price} ${service.duration}\n📝 Contract: ${service.contractDescription}\n⏳ Frequency: ${service.frequencyDescription}`
    )
    .join("\n\n");
}

function formatServiceResponse(service) {
  return `🔹 Package: ${service.packageName}\n📋 Description: ${service.description}\n💡 Features: ${service.features.join(
    ", "
  )}\n💲 Price: $${service.price} ${service.duration}\n📝 Contract: ${service.contractDescription}\n⏳ Frequency: ${service.frequencyDescription}`;
}

module.exports = { getResponse, listServices, formatServiceResponse };
