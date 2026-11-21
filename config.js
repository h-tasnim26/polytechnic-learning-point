const DEFAULT_DATA = {
  brandName: "পলিটেকনিক লার্নিং Point",
  tagline: "জ্ঞান থেকে দক্ষতা, দক্ষতা থেকে সাফল্য",
  subtitle: "পলিটেকনিক শিক্ষার্থীদের জন্য ফ্রি YouTube ক্লাস এবং প্রিমিয়াম পেইড কোর্স, লাইভ ক্লাস ও সার্টিফিকেট প্ল্যাটফর্ম।",
  paymentNumbers: {
    bkash: "01700-000000 (Personal)",
    nagad: "01800-000000 (Personal)",
    rocket: "01900-0000000 (Personal)"
  },
  courses: [
    {
      id: "comp-web-free",
      title: "ওয়েব ডিজাইন ও ডেভেলপমেন্ট (ফ্রি কোর্স)",
      department: "Computer Science & Technology",
      instructor: "ইঞ্জি. আরিফুল ইসলাম",
      type: "free",
      price: 0,
      liveLink: "https://meet.google.com/",
      certificate: true,
      thumbnail: "💻",
      lessons: [
        { title: "১. HTML5 বেসিক ও স্ট্রাকচার", duration: "14:20", videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE" },
        { title: "২. CSS3 ফ্লেক্সবক্স ও গ্রিড", duration: "19:45", videoUrl: "https://www.youtube.com/embed/yfoY53QXEnI" },
        { title: "৩. জাভাস্ক্রিপ্ট পরিচিতি", duration: "24:10", videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk" }
      ],
      mcq: [
        {
          q: "HTML এর পূর্ণরূপ কী?",
          options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink Text Management"],
          answer: 0
        },
        {
          q: "ওয়েব পেজ স্টাইল করার জন্য কোনটি ব্যবহৃত হয়?",
          options: ["Python", "CSS", "SQL"],
          answer: 1
        }
      ]
    },
    {
      id: "eee-plc-paid",
      title: "ইন্ডাস্ট্রিয়াল অটোমেশন ও PLC প্রোগ্রামিং",
      department: "Electrical Technology",
      instructor: "ইঞ্জি. তানভীর আহমেদ",
      type: "paid",
      price: 1200,
      liveLink: "https://zoom.us/",
      certificate: true,
      thumbnail: "⚡",
      lessons: [
        { title: "১. PLC আর্কিটেকচার ও ওয়্যারিং", duration: "28:15", videoUrl: "https://www.youtube.com/embed/M988_fsOSWo" },
        { title: "২. ল্যাডার লজিক প্রোগ্রামিং", duration: "35:00", videoUrl: "https://www.youtube.com/embed/9kRgVxULbag" }
      ],
      mcq: [
        {
          q: "PLC এর পূর্ণরূপ কী?",
          options: ["Programmable Logic Controller", "Power Line Circuit", "Primary Load Control"],
          answer: 0
        },
        {
          q: "PLC প্রোগ্রামিংয়ে সবচেয়ে বেশি ব্যবহৃত ভাষা কোনটি?",
          options: ["Ladder Logic", "HTML", "Swift"],
          answer: 0
        }
      ]
    },
    {
      id: "civil-autocad-paid",
      title: "প্রফেশনাল AutoCAD 2D ও 3D বিল্ডিং ডিজাইন",
      department: "Civil Technology",
      instructor: "ইঞ্জি. সাদিয়া রহমান",
      type: "paid",
      price: 950,
      liveLink: "https://meet.google.com/",
      certificate: true,
      thumbnail: "🏗️",
      lessons: [
        { title: "১. AutoCAD ইন্টারফেস ও ড্রয়িং টুলস", duration: "21:30", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        { title: "২. ফ্লোর প্ল্যান ও এলিভেশন তৈরি", duration: "31:10", videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE" }
      ],
      mcq: [
        {
          q: "AutoCAD-এ লাইন আঁকার শর্টকাট কমান্ড কোনটি?",
          options: ["L + Enter", "C + Enter", "M + Enter"],
          answer: 0
        }
      ]
    }
  ]
};

function getSiteData() {
  const saved = localStorage.getItem("plp_site_data");
  if (saved) {
    return JSON.parse(saved);
  }
  localStorage.setItem("plp_site_data", JSON.stringify(DEFAULT_DATA));
  return DEFAULT_DATA;
}

function saveSiteData(data) {
  localStorage.setItem("plp_site_data", JSON.stringify(data));
}
