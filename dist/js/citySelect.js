const citiesByProvince = {
  tehran: ["تهران", "شهریار", "ورامین"],
  khorasan: ["مشهد", "نیشابور", "سبزوار"],
  fars: ["شیراز", "مرودشت", "کازرون"]
};

const neighborhoodsByCity = {
  تهران: ["ونک", "زعفرانیه", "نیاوران"],
  شهریار: ["اندیشه", "شهرک وائین", "باغستان"],
  ورامین: ["کهریزک", "پوئینک", "کمربندی"],
  مشهد: ["سجاد", "احمدآباد", "وکیل‌آباد"],
  نیشابور: ["عطار", "کارگر", "رازی"],
  سبزوار: ["باغملی", "خلیج فارس", "دانشگاه"],
  شیراز: ["معالی‌آباد", "زند", "قصرالدشت"],
  مرودشت: ["محله امام", "شهرک آزادی", "طالقانی"],
  کازرون: ["برم دلک", "بلوار قدس", "کوثر"]
};

function populateCities() {
  const provinceSelect = document.getElementById("province");
  const citySelect = document.getElementById("city");
  const neighborhoodSelect = document.getElementById("neighborhood");

  // فعال کردن فیلد شهر
  citySelect.disabled = false;
  neighborhoodSelect.disabled = true;

  // حذف گزینه‌های قبلی
  citySelect.innerHTML = '<option value="">انتخاب کنید...</option>';
  neighborhoodSelect.innerHTML = '<option value="">ابتدا شهر را انتخاب کنید...</option>';

  // افزودن شهرهای استان انتخاب شده
  const selectedProvince = provinceSelect.value;
  const cities = citiesByProvince[selectedProvince];

  cities.forEach(city => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    citySelect.appendChild(option);
  });
}

function populateNeighborhoods() {
  const citySelect = document.getElementById("city");
  const neighborhoodSelect = document.getElementById("neighborhood");

  // فعال کردن فیلد محله
  neighborhoodSelect.disabled = false;

  // حذف گزینه‌های قبلی
  neighborhoodSelect.innerHTML = '<option value="">انتخاب کنید...</option>';

  // افزودن محله‌های شهر انتخاب شده
  const selectedCity = citySelect.value;
  const neighborhoods = neighborhoodsByCity[selectedCity];

  neighborhoods.forEach(neighborhood => {
    const option = document.createElement("option");
    option.value = neighborhood;
    option.textContent = neighborhood;
    neighborhoodSelect.appendChild(option);
  });
}