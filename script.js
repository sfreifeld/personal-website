const projects = [
    {
        name: "Sample Project 1",
        img: "./assets/construction.png",
        excerpt: "This is the description of my project.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description: "This is the description of my project.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This is the description of my project.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Sample Project 2",
        img: "./assets/construction.png",
        excerpt: "This is the description of my project.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description: "This is the description of my project.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This is the description of my project.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Sample Project 3",
        img: "./assets/construction.png",
        excerpt: "This is the description of my project.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description: "This is the description of my project.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This is the description of my project.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Sample Project 4",
        img: "./assets/construction.png",
        excerpt: "This is the description of my project.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description: "This is the description of my project.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This is the description of my project.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]



projects.forEach((project)=> {
    
        const card = document.createElement('div')
        card.className = "card"

        const cardInfo = document.createElement('div')
        cardInfo.className = "cardInfo"

        const img = document.createElement('img')
        img.className = "projectImg"
        img.src = project.img

        const title = document.createElement('h2')
        title.className = "card__title"
        title.textContent = project.name
    
        
        const descriptionParagraph = document.createElement('p')
        descriptionParagraph.textContent = project.excerpt

        const more = document.createElement('p')
        more.className = 'card__apply'
        more.innerHTML = `<a class="card__link" href="#">Read More <i class="fas fa-arrow-down"></i></a>`

        
        more.querySelector('a').addEventListener('click', function(event) {
            event.preventDefault()
    
            
            const startHeight = cardInfo.offsetHeight
            descriptionParagraph.textContent = descriptionParagraph.textContent === project.excerpt ? project.description : project.excerpt
            cardInfo.style.height = 'auto'
            const endHeight = cardInfo.offsetHeight
    

            cardInfo.style.height = startHeight + 'px'
            requestAnimationFrame(() => {
                cardInfo.style.transition = 'height 0.5s ease'
                cardInfo.style.height = endHeight + 'px'
            })

            cardInfo.addEventListener('transitionend', function transitionEnd(event) {
                if (event.propertyName === 'height') {
                    cardInfo.style.height = 'auto'
                    cardInfo.style.transition = ''
                    cardInfo.removeEventListener('transitionend', transitionEnd)
                }
            })
    
            
            this.innerHTML = descriptionParagraph.textContent === project.description ? `Show Less <i class="fas fa-arrow-up"></i>` : `Read More <i class="fas fa-arrow-down"></i>`
    
            
            descriptionParagraph.classList.remove('fade-in-fast')
            setTimeout(() => {
                descriptionParagraph.classList.add('fade-in-fast')
            }, 10)
        })

        cardInfo.append(title, descriptionParagraph, more)
        card.append(img, cardInfo)

        const container = document.querySelector('#projectContainer')
        container.append(card)
        
    }
)








/* <div id="projectContainer">
        <div class="card">
          <img id="projectImg" src="./assets/construction.png">
          <div class="cardInfo">
            <h2 class="card__title">Sample Project Name</h2>
            <p> This is the description of my project.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            <p class="card__apply">
              <a class="card__link" href="#">Read More <i class="fas fa-arrow-down"></i></a>
            </p>
        </div>
    </div>
</div> */