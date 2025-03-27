document.addEventListener("DOMContentLoaded", () => {
  const levelsData = {
    "المستوى الأول": {
      books: [
        {
          name: "المفيد في اللغة العربية",
          guide: "المستوى الاول\المفيد_في_اللغة_العربية_للمستوى_الأول_ابتدائي.pdf",
          jadidat: "pdfs/1/jadidat-moufid.pdf",
          units: [] // لا توجد وحدات لهذا الكتاب
        },
        {
          name: "كتابي في اللغة العربية",
          guide: "المستوى الاول\دليل_الأستاذ_كتابي_في_اللغة_العربية_المستوى_الأول.pdf",
          jadidat: "pdfs/1/jadidat-kitabi.pdf",
          units: [
            { name: " الوحدة 1", pdf: "جذاذات_كتابي_في_اللغة_العربية_وحدة_1.pdf" },
            { name: " الوحدة 2", pdf: "المستوى الاول\جذاذات_كتابي_في_اللغة_العربية_وحدة_2.pdf" }
          ]
        }
      ]
    },
    "المستوى الثاني": {
      books: [
        {
          name: "مرشدي في اللغة العربية",
          guide: "pdfs/2/teacher-morshidi.pdf",
          jadidat: "pdfs/2/jadidat-morshidi.pdf",
          units: [] // سيتم عرض الملف مباشرة
        },
        {
          name: "كتابي في اللغة العربية",
          guide: "pdfs/2/teacher-kitabi.pdf",
          jadidat: "pdfs/2/jadidat-kitabi.pdf",
          units: [
            { name: "الوحدة 1", pdf: "pdfs/2/unit1.pdf" },
            { name: "الوحدة 2", pdf: "pdfs/2/unit2.pdf" },
            { name: "الوحدة 3", pdf: "pdfs/2/unit3.pdf" },
            { name: "الوحدة 4", pdf: "pdfs/2/unit4.pdf" },
            { name: "الوحدة 5", pdf: "pdfs/2/unit5.pdf" },
            { name: "الوحدة 6", pdf: "pdfs/2/unit6.pdf" }
          ]
        },
        {
          name: "في رحاب اللغة العربية",
          guide: "pdfs/2/teacher-firihab.pdf",
          jadidat: "pdfs/2/jadidat-firihab.pdf",
          units: [
            { name: "الوحدة 1", pdf: "pdfs/2/unit1_firihab.pdf" },
            { name: "الوحدة 2", pdf: "pdfs/2/unit2_firihab.pdf" }
          ]
        }
      ]
    },
    "المستوى الثالث": {
      books: [
        {
          name: "المفيد في اللغة العربية",
          guide: "pdfs/3/teacher-moufid.pdf",
          jadidat: "pdfs/3/jadidat-moufid.pdf",
          units: [
            { name: "الوحدة 1", pdf: "pdfs/3/unit1.pdf" },
            { name: "الوحدة 2", pdf: "pdfs/3/unit2.pdf" },
            { name: "الوحدة 3", pdf: "pdfs/3/unit3.pdf" },
            { name: "الوحدة 4", pdf: "pdfs/3/unit4.pdf" },
            { name: "الوحدة 5", pdf: "pdfs/3/unit5.pdf" },
            { name: "الوحدة 6", pdf: "pdfs/3/unit6.pdf" }
          ]
        },
        {
          name: "كتابي في اللغة العربية",
          guide: "pdfs/3/teacher-kitabi.pdf",
          jadidat: "pdfs/3/jadidat-kitabi.pdf",
          units: [
            { name: "مرشدي في اللغة العربية", pdf: "pdfs/3/merchidi.pdf" },
            { name: "الوضعية التواصلية", pdf: "pdfs/3/communication.pdf" },
            { name: "النصوص السماعية", pdf: "pdfs/3/auditory_texts.pdf" },
            { name: "الحكايات", pdf: "pdfs/3/stories.pdf" },
            { name: "الوحدة 2", pdf: "pdfs/3/unit2.pdf" },
            { name: "الوحدة 3", pdf: "pdfs/3/unit3.pdf" },
            { name: "الوحدة 4", pdf: "pdfs/3/unit4.pdf" },
            { name: "الوحدة 5", pdf: "pdfs/3/unit5.pdf" },
            { name: "الوحدة 6", pdf: "pdfs/3/unit6.pdf" }
          ]
        }
      ]
    },
    "المستوى الرابع": {
      books: [
        {
          name: "الجديد في اللغة العربية",
          guide: "pdfs/4/teacher-jadid.pdf",
          jadidat: "pdfs/4/jadidat-jadid.pdf",
          units: []  // لا توجد وحدات لهذا الكتاب
        },
        {
          name: "المفيد في اللغة العربية",
          guide: "pdfs/4/teacher-moufid.pdf",
          jadidat: "pdfs/4/jadidat-moufid.pdf",
          units: []  // لا توجد وحدات لهذا الكتاب
        },
        {
          name: "المنير في اللغة العربية",
          guide: "pdfs/4/teacher-mounir.pdf",
          jadidat: "pdfs/4/jadidat-mounir.pdf",
          units: []  // لا توجد وحدات لهذا الكتاب
        },
        {
          name: "الواضح في اللغة العربية",
          guide: "pdfs/4/teacher-wadih.pdf",
          jadidat: "pdfs/4/jadidat-wadih.pdf",
          units: []  // لا توجد وحدات لهذا الكتاب
        },
        {
          name: "واحة الكلمات",
          guide: "pdfs/4/teacher-waha.pdf",
          jadidat: "pdfs/4/jadidat-waha.pdf",
          units: []  // لا توجد وحدات لهذا الكتاب
        }
      ]
    },
    "المستوى الخامس": {
      books: [
        {
          name: "المنير في اللغة العربية",
          guide: "pdfs/5/teacher-mounir.pdf",
          jadidat: "pdfs/5/jadidat-mounir.pdf",
          units: []  // لا توجد وحدات لهذا الكتاب
        }
      ]
    },
    "المستوى السادس": {
      books: [
        {
          name: "منار اللغة العربية",
          guide: "pdfs/6/teacher-manar.pdf",
          jadidat: "pdfs/6/jadidat-manar.pdf",
          units: []  // لا توجد وحدات لهذا الكتاب
        },
        {
          name: "كتابي في اللغة العربية",
          guide: "pdfs/6/teacher-kitabi.pdf",
          jadidat: "pdfs/6/jadidat-kitabi.pdf",
          units: []  // لا توجد وحدات لهذا الكتاب
        },
        {
          name: "في رحاب اللغة العربية",
          guide: "pdfs/6/teacher-firihab.pdf",
          jadidat: "pdfs/6/jadidat-firihab.pdf",
          units: []  // لا توجد وحدات لهذا الكتاب
        }
      ]
    }
  };

  let currentLevelIndex = 0;
  const levels = Object.keys(levelsData);
  let currentType = "";
  let currentBook = null;

  const showView = (id) => {
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  };

  const generateLevels = () => {
    const container = document.getElementById("levels-container");
    container.innerHTML = "";
    levels.forEach((level, i) => {
      const btn = document.createElement("button");
      btn.textContent = level;
      btn.onclick = () => {
        currentLevelIndex = i;
        document.getElementById("selected-level-title").textContent = level;
        showView("level-options-view");
      };
      container.appendChild(btn);
    });
  };

  const showSubOptions = (type) => {
    const level = levels[currentLevelIndex];
    const books = levelsData[level].books;
    const container = document.getElementById("sub-options-container");
    container.innerHTML = "";
    document.getElementById("selected-sub-title").textContent = `${type} - ${level}`;

    // عند الضغط على "دلائل الأستاذ"، يتم عرض الكتب فقط بدون الوحدات
    if (type === "دلائل الأستاذ") {
      books.forEach(book => {
        const btn = document.createElement("button");
        btn.textContent = book.name;
        btn.onclick = () => showPDF(book.name, book.guide); // عرض دليل الأستاذ
        container.appendChild(btn);
      });
    } else {
      // عند الضغط على "جذاذات الدروس"، يتم عرض الوحدات إذا كانت موجودة
      books.forEach(book => {
        const btn = document.createElement("button");
        btn.textContent = `جذاذات ${book.name}`;
        btn.onclick = () => showUnits(book);
        container.appendChild(btn);
      });
    }

    showView("sub-options-view");
  };

  const showUnits = (book) => {
    const container = document.getElementById("sub-options-container");
    container.innerHTML = "";

    // عرض الخانات حسب الوحدات المطلوبة
    if (book.units.length > 0) {
      book.units.forEach(unit => {
        const btn = document.createElement("button");
        btn.textContent = unit.name;
        btn.onclick = () => showPDF(unit.name, unit.pdf); // عرض الجذاذات الخاصة بالوحدة
        container.appendChild(btn);
      });
    } else {
      showPDF(book.name, book.jadidat); // إذا لم توجد وحدات، عرض الـ PDF مباشرة
    }
  };

  const showPDF = (title, path) => {
    const loader = document.getElementById("pdf-loader");
    const embed = document.getElementById("lesson-pdf");

    document.getElementById("selected-pdf-title").textContent = title;
    loader.style.display = "block";
    embed.onload = () => loader.style.display = "none";
    embed.src = path;
    showView("pdf-view");
  };

  // الأحداث
  document.getElementById("start-button").onclick = () => {
    generateLevels();
    showView("levels-view");
  };

  document.getElementById("back-to-start").onclick = () => showView("start-view");
  document.getElementById("back-to-levels").onclick = () => showView("levels-view");
  document.getElementById("back-to-options").onclick = () => showView("level-options-view");
  document.getElementById("back-to-sub-options").onclick = () => showView("sub-options-view");
  document.getElementById("teacher-guides-option").onclick = () => showSubOptions("دلائل الأستاذ");
  document.getElementById("lesson-guides-option").onclick = () => showSubOptions("جذاذات الدروس");
});
