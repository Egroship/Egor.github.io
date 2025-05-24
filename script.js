document.addEventListener("DOMContentLoaded", () => {
    const memes = document.querySelectorAll(".meme");
    memes.forEach((meme, i) => {
      setTimeout(() => {
        meme.classList.remove("hidden");
        meme.classList.add("show");
      }, 500 + i * 500);
    });
  
    const status = document.getElementById("status");
    const statuses = [
      "😌 'Спасибо, Codologia!'",
      "🌈 'Храни нас Нян Кэт'",
      "🎲 'Код - понятие бесконечное'",
      "🐱‍👤 'Молюсь на GitHub'",
    ];
    let index = 0;
  
    status.addEventListener("click", () => {
      index = (index + 1) % statuses.length;
      status.textContent = statuses[index];
    });
  
    // 💡 Модальное окно
    const interestInfo = {
      "Web-разработка": "Люблю придавать сайтам красочную форму и стилистику, делая это на таких языках, как: HTML, CSS, JavaScript. Выкладываю сайты на GitHub.",
      "Воллейбол и баскетбол": "Занимаюсь данными видами спорта, потому что они затрагивают почти все группы мышц тела.",
      "Компьютерные игры": "Увлекаюсь разными жанрами игр: от платформеров и песочниц до стратегий и командных шутеров.",
      "Гулять с друзьями": "Чаще сижу дома но иногда встречаюсь с друзьями. Больше всего гуляю с ними в центре"
    };
  
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-description");
    const closeModal = document.getElementById("closeModal");
  
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const title = card.textContent.trim();
        modalTitle.textContent = title;
        modalDesc.textContent = interestInfo[title] || "Информация скоро появится.";
        modal.style.display = "flex";
      });
    });
  
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  