# পলিটেকনিক লার্নিং Point (LMS Platform)

## প্রধান ফিচারসমূহ:
1. **পাবলিক ফ্রি কোর্স:** লগইন ছাড়াই ফ্রি YouTube ক্লাস দেখার সুবিধা।
2. **সাবস্ক্রিপশন ও সাইড পেমেন্ট ফর্ম:** bKash, Nagad এবং Rocket-এর মাধ্যমে পেইড কোর্স আনলক।
3. **Student ও Admin লোকাল লগইন:** Admin হিসেবে লগইন করে কোর্সের প্রাইস, রেকর্ডেড ভিডিও, লাইভ ক্লাস লিংক এবং সার্টিফিকেট এডিট করা যায়। (ডিফল্ট Admin: `admin` / `admin123`)।
4. **Circle Range ও অ্যাক্টিভিটি:** ভিডিও দেখার অগ্রগতি লাইভ সার্কেল প্রোগ্রেস বারে দেখায়।
5. **Short MCQ Task ও সার্টিফিকেট:** প্রতিটি কোর্সে কুইজ পরীক্ষা ও প্রিন্টযোগ্য সার্টিফিকেট সুবিধা।

## GitHub Pages-এ পাবলিশ করার নিয়ম:
1. ফোল্ডারটি আনজিপ করে CMD খুলুন এবং নিচের কমান্ড দিন:
   ```bash
   git init
   git add .
   git commit -m "Deploy Polytechnic Learning Point LMS"
   git branch -M main
   git remote add origin https://github.com/h-tasnim26/polytechnic-learning-point.git
   git push -u origin main
   ```
2. GitHub রিপোজিটরির **Settings > Pages > Branch: main** সিলেক্ট করে Save করুন।
