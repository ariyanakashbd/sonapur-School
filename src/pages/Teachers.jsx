const teachers = [
  { name: 'মোঃ আব্দুল করিম', role: 'প্রধান শিক্ষক', subject: 'সামারি দায়িত্ব' },
  { name: 'শারমিন আক্তার', role: 'সহকারী প্রধান শিক্ষক', subject: 'বাংলা' },
  { name: 'মোঃ রফিকুল ইসলাম', role: 'সহকারী শিক্ষক', subject: 'গণিত' },
  { name: 'ফাতেমা খাতুন', role: 'সহকারী শিক্ষিকা', subject: 'ইংরেজি' },
  { name: 'মোঃ সাইফুদ্দিন', role: 'সহকারী শিক্ষক', subject: 'বিজ্ঞান' },
  { name: 'নাসরিন সুলতানা', role: 'সহকারী শিক্ষিকা', subject: 'সামাজিক বিজ্ঞান' },
  { name: 'মোঃ হাবিবুর রহমান', role: 'সহকারী শিক্ষক', subject: 'ধর্ম ও নৈতিক শিক্ষা' },
  { name: 'রোকেয়া বেগম', role: 'সহকারী শিক্ষিকা', subject: 'প্রাক-প্রাথমিক' },
]

export default function Teachers() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">শিক্ষকমণ্ডলী 👩‍🏫</h1>
      <p className="text-gray-600 mb-10">আমাদের অভিজ্ঞ ও প্রশিক্ষিত শিক্ষকদের তালিকা</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teachers.map((t, i) => (
          <div key={t.name} className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-xl hover:-translate-y-1 transition">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-4xl">
              {i % 2 === 0 ? '👨‍🏫' : '👩‍🏫'}
            </div>
            <h3 className="font-bold text-lg text-gray-800 mt-4">{t.name}</h3>
            <p className="text-secondary font-semibold text-sm">{t.role}</p>
            <p className="text-gray-500 text-sm mt-1">বিষয়: {t.subject}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
