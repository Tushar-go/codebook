import { Accordion } from "./Accordion";

export const Faq = () => {
  const faqs = [
    {
      "id": 1,
      "question": "Why should I use CodeBook?",
      "answer": "CodeBook is a comprehensive tool designed to streamline your coding process. It offers a user-friendly interface, powerful features such as code snippets and version control, and seamless integration with popular development environments. Whether you're a seasoned developer or just starting out, CodeBook can help boost your productivity and organize your projects efficiently."
    },
    {
      "id": 2,
      "question": "Can I access my eBook on mobile?",
      "answer": "Yes, you can access your eBook on mobile devices using our dedicated mobile app. Whether you're using a smartphone or tablet, you can enjoy seamless reading experience with offline access to your eBooks. Simply download the app from the App Store or Google Play Store, log in with your account credentials, and access your entire eBook library on the go."
    },
    {
      "id": 3,
      "question": "Do you offer refunds?",
      "answer": "Yes, we offer a hassle-free refund policy to ensure your satisfaction. If you're not completely satisfied with your purchase for any reason, you can request a refund within 30 days of the purchase date. Simply contact our customer support team with your order details, and we'll process your refund promptly. Please note that certain conditions may apply, so be sure to review our refund policy for more information."
    },
    {
      "id": 4,
      "question": "Do you support International payments?",
      "answer": "Absolutely! We support International payments to make it convenient for customers around the world to purchase our products and services. Whether you're located in North America, Europe, Asia, or any other region, you can securely make payments using major credit cards, PayPal, or other international payment methods. Rest assured that your transactions are encrypted and processed securely to protect your sensitive information."
    }
];
    
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              { faqs.map((faq) => (
                <Accordion key={faq.id} faq={faq} /> 
              )) }
            </div>
      </section>
  )
}