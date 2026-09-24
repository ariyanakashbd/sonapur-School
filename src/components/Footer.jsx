export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold mb-3">🏫 সোনাপুর সরকারি প্রাথমিক বিদ্যালয়</h3>
          <p className="text-white/80 text-sm leading-relaxed">
            শিক্ষাই আলো, শিক্ষাই উন্নয়ন। আমরা সোনাপুরের শিশুদের মানসম্মত প্রাথমিক শিক্ষা
            প্রদানে নিরলসভাবে কাজ করছি। প্রতিষ্ঠা সাল: ১৯৬৫।
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-secondary">যোগাযোগ</h4>
          <ul className="text-white/80 text-sm space-y-2">
            <li>📍 সোনাপুর, ঢাকা, বাংলাদেশ</li>
            <li>📞 ০১৭XX-XXXXXX</li>
            <li>✉️ sonapurschool@gmail.com</li>
            <li>🕐 রবিবার–বৃহস্পতিবার: সকাল ৯টা – বিকেল ৪টা</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-secondary">দ্রুত লিংক</h4>
          <ul className="text-white/80 text-sm space-y-2">
            <li><a href="/admission" className="hover:text-secondary">ভর্তি তথ্য</a></li>
            <li><a href="/notices" className="hover:text-secondary">নোটিস বোর্ড</a></li>
            <li><a href="/teachers" className="hover:text-secondary">শিক্ষকমণ্ডলী</a></li>
            <li><a href="/contact" className="hover:text-secondary">যোগাযোগ করুন</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20 py-4 text-center text-sm text-white/70">
        © ২০২৬ সোনাপুর সরকারি প্রাথমিক বিদ্যালয় | সর্বস্বত্ব সংরক্ষিত
      </div>
    </footer>
  )
}
