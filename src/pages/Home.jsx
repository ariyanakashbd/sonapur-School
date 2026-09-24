import { Link } from 'react-router-dom'
import NoticeCard from '../components/NoticeCard.jsx'

const stats = [
  { icon: '👨‍🎓', num: '৩৫০+', label: 'শিক্ষার্থী' },
  { icon: '👩‍🏫', num: '১২', label: 'শিক্ষক-শিক্ষিকা' },
  { icon: '📚', num: '৬', label: 'শ্রেণি কক্ষ' },
  { icon: '🏆', num: '৫৯ বছর', label: 'অভিজ্ঞতা' },
]

const notices = [
  { date: '২০ সেপ্টেম্বর ২০২৬', title: 'শিক্ষার্থীদের মধ্যে বিনামূল্যে বই বিতরণ', desc: 'নতুন শিক্ষাবর্ষের বিনামূল্যে পাঠ্যবই বিতরণ কার্যক্রম শুরু হয়েছে।' },
  { date: '১৫ সেপ্টেম্বর ২০২৬', title: 'অভিভাবক সমাবেশের নোটিশ', desc: 'আগামী ৩০ সেপ্টেম্বর সকাল ১০টায় অভিভাবক সমাবেশ অনুষ্ঠিত হবে। সবাইকে উপস্থিত থাকার অনুরোধ করা হচ্ছে।' },
  { date: '১০ সেপ্টেম্বর ২০২৬', title: 'শিক্ষক নিয়োগ পরীক্ষার ফলাফল', desc: 'সহকারী শিক্ষক নিয়োগ পরীক্ষার চূড়ান্ত ফলাফল প্রকাশিত হয়েছে।' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">
            সোনাপুর সরকারি প্রাথমিক বিদ্যালয়ে
            <br />
            <span className="text-secondary">স্বাগতম! 🌟</span>
          </h1>
          <p className="mt-6 text-lg text-white/85 max-w-2xl mx-auto">
            জ্ঞানই শক্তি — আমরা শিশুদের সুনাগরিক হিসেবে গড়ে তোলার লক্ষ্যে কাজ করি।
            মানসম্মত প্রাথমিক শিক্ষা, নিরাপদ পরিবেশ আর আধুনিক শিক্ষা পদ্ধতি আমাদের প্রতিশ্রুতি।
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/admission" className="bg-secondary text-primary font-bold px-8 py-3 rounded-full hover:scale-105 transition">
              ভর্তি আবেদন করুন
            </Link>
            <Link to="/about" className="border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-primary transition">
              বিদ্যালয় পরিদর্শন
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="text-3xl">{s.icon}</div>
              <div className="text-2xl font-bold text-primary mt-2">{s.num}</div>
              <div className="text-gray-500 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-primary">আমাদের বৈশিষ্ট্য 🎯</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            { icon: '📖', title: 'মানসম্মত শিক্ষা', desc: 'দক্ষ ও প্রশিক্ষিত শিক্ষকদের মাধ্যমে জাতীয় শিক্ষাক্রম অনুযায়ী পাঠদান।' },
            { icon: '🛡️', title: 'নিরাপদ পরিবেশ', desc: 'শিশুবান্ধব নিরাপদ ক্যাম্পাস, বিশুদ্ধ পানি ও পরিচ্ছন্ন পরিবেশ।' },
            { icon: '🏅', title: 'সহপাঠ কার্যক্রম', desc: 'ক্রীড়া, সাংস্কৃতিক প্রতিযোগিতা ও বৃত্তি পরীক্ষায় নিয়মিত অংশগ্রহণ।' },
            { icon: '🍎', title: 'মিড-ডে মিল', desc: 'সরকারি মিড-ডে মিল কর্মসূচির মাধ্যমে পুষ্টিকর খাবার প্রদান।' },
            { icon: '💻', title: 'ডিজিটাল শ্রেণিকক্ষ', desc: 'মাল্টিমিডিয়া প্রজেক্টরের মাধ্যমে আকর্ষণীয় ও প্রাঞ্জল পাঠদান।' },
            { icon: '🤝', title: 'অভিভাবক সম্পৃক্ততা', desc: 'নিয়মিত অভিভাবক সমাবেশ ও অগ্রগতি রিপোর্টের মাধ্যমে যোগাযোগ।' },
          ].map((f) => (
            <div key={f.title} className="bg-light rounded-2xl p-6 hover:shadow-xl transition border border-primary/10">
              <div className="text-4xl">{f.icon}</div>
              <h3 className="font-bold text-lg text-gray-800 mt-3">{f.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest notices */}
      <section className="bg-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-primary">সর্বশেষ নোটিস 📢</h2>
            <Link to="/notices" className="text-secondary font-semibold hover:underline">
              সব দেখুন →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {notices.map((n) => (
              <NoticeCard key={n.title} {...n} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
