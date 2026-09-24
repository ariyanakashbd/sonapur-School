# সোনাপুর সরকারি প্রাথমিক বিদ্যালয় - ওয়েবসাইট

React + Vite + Tailwind CSS + React Router দিয়ে তৈরি স্কুল ওয়েবসাইট।

## চালানোর নিয়ম

```bash
# ১. প্রজেক্ট ফোল্ডারে যান
cd sonapur-school

# ২. ডিপেন্ডেন্সি ইনস্টল করুন
npm install

# ৩. ডেভেলপমেন্ট সার্ভার চালান
npm run dev
```

ব্রাউজারে খুলুন: http://localhost:5173

## প্রোডাকশন বিল্ড

```bash
npm run build     # dist ফোল্ডারে বিল্ড হবে
npm run preview   # বিল্ড প্রিভিউ দেখুন
```

## ফোল্ডার স্ট্রাকচার

```
src/
├── components/     # Navbar, Footer, NoticeCard, Layout
├── pages/          # Home, About, Academics, Teachers, Admission, Notices, Contact
├── App.jsx         # Routes
├── main.jsx        # Entry point
└── index.css       # Tailwind directives
```

## নিজের তথ্য বসানোর জায়গা

- ফোন নম্বর: `src/components/Footer.jsx` ও `src/pages/Contact.jsx`-এ `০১৭XX-XXXXXX` বদলান
- ইমেইল: `sonapurschool@gmail.com` বদলান
- ঠিকানা: Contact ও Footer পেজে
- শিক্ষক তালিকা: `src/pages/Teachers.jsx`
- নোটিস: `src/pages/Notices.jsx`
