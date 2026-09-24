export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-6">আমাদের সম্পর্কে 🏫</h1>

      <div className="bg-white rounded-2xl shadow p-8 space-y-6 text-gray-700 leading-relaxed">
        <p>
          <strong>সোনাপুর সরকারি প্রাথমিক বিদ্যালয়</strong> ১৯৬৫ সালে প্রতিষ্ঠিত একটি ঐতিহ্যবাহী
          সরকারি প্রাথমিক বিদ্যালয়। প্রতিষ্ঠার পর থেকে আজ পর্যন্ত এলাকার হাজারো শিশুকে
          মানসম্মত প্রাথমিক শিক্ষা প্রদান করে আসছে।
        </p>
        <p>
          আমাদের লক্ষ্য শুধু পাঠ্যবইয়ের শিক্ষা নয় — শিশুদের নৈতিক মূল্যবোধ, সৃজনশীলতা,
          শারীরিক ও মানসিক বিকাশের সার্বিক যত্ন নেওয়া। আধুনিক শিক্ষা পদ্ধতি ও প্রশিক্ষিত
          শিক্ষকমণ্ডলীর মাধ্যমে আমরা প্রতিটি শিশুকে ভালো মানুষ হিসেবে গড়ে তোলার চেষ্টা করি।
        </p>

        <div className="grid sm:grid-cols-2 gap-6 pt-4">
          <div className="bg-light rounded-xl p-5">
            <h3 className="font-bold text-primary mb-3">🎯 আমাদের লক্ষ্য</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>শতভাগ শিশুর প্রাথমিক শিক্ষা নিশ্চিতকরণ</li>
              <li>ডিজিটাল শিক্ষায় অভ্যস্তকরণ</li>
              <li>সুস্থ-সুন্দর পরিবেশে শিক্ষাদান</li>
            </ul>
          </div>
          <div className="bg-light rounded-xl p-5">
            <h3 className="font-bold text-primary mb-3">🌟 আমাদের স্বপ্ন</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>প্রতিটি শিশু হবে আলোকিত মানুষ</li>
              <li>মডেল প্রাথমিক বিদ্যালয়ে পরিণত হওয়া</li>
              <li>সমাজের সচেতন নাগরিক গড়ে তোলা</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary text-white rounded-xl p-6 text-center">
          <p className="text-2xl font-bold">"শিক্ষাই জাতির মেরুদণ্ড"</p>
          <p className="text-white/80 mt-2 text-sm">— আমাদের এই স্লোগানে প্রতিষ্ঠিত প্রতিষ্ঠান</p>
        </div>
      </div>
    </div>
  )
}
