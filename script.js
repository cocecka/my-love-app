        const yesBtn = document.querySelector(".yes-btn");
        const noBtn = document.querySelector(".no-btn");
        const question = document.querySelector(".question");
        const gif = document.querySelector(".gif");

        yesBtn.addEventListener("click", () => {
            question.innerHTML = "I love you too 💋💋💋";
            gif.src = "https://media.giphy.com/media/108M7gCS1JSoO4/giphy.gif?cid=790b7611e1aaphvqz4fql0dqmlnuq6qic2o67y0fhvkhdvao&ep=v1_gifs_search&rid=giphy.gif&ct=g";
        });

        noBtn.addEventListener("mouseover", () => {
            const wrapper = document.querySelector(".wrapper");
            const wrapperRect = wrapper.getBoundingClientRect();
            const noBtnRect = noBtn.getBoundingClientRect();

            const maxX = wrapperRect.width - noBtnRect.width;
            const maxY = wrapperRect.height - noBtnRect.height;

            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);

            noBtn.style.position = "absolute";
            noBtn.style.left = randomX + "px";
            noBtn.style.top = randomY + "px";
        });
