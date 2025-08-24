const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg flex justify-around py-3 md:hidden">
      <a href="tel:+918249692563" className="text-blue-600 font-bold">📞 Call</a>
      <a href="https://wa.me/918249692563" className="text-green-600 font-bold">💬 WhatsApp</a>
      <a href="/contact" className="text-gray-700 font-bold">📋 Book</a>
    </div>
  );
};

export default StickyCTA;
