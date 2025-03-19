let items = [
    {
        item: "Milk",
        image: "../images/Milk1.jpg",
        description: "Fresh whole milk for coffee, cereal, and cooking",
        priority: 0,
    },
    {
        item: "Bread",
        image: "../images/bread1.jpg",
        description: "Fresh whole grain bread for healthy sandwiches.",
        priority: 0,
    },
    {
        item: "Eggs",
        image: "../images/eggs1.jpg",
        description: "Organic eggs for breakfast, baking, and cooking.",
        priority: 0,
    },
    {
        item: "Butter",
        image: "../images/butter1.jpg",
        description: "Unsalted butter for spreading and cooking.",
        priority: 0,
    },
    {
        item: "Apples",
        image: "../images/apple1.jpg",
        description: "Fresh, crispy apples for snacks and salads.",
        priority: 0,
    },
    {
        item: "Pasta",
        image: "../images/pasta1.jpg",
        description: "Whole grain pasta for quick and healthy meals.",
        priority: 0,
    },
    {
        item: "Tomatoes",
        image: "../images/tomatoes1.jpg",
        description: "Juicy tomatoes for salads and sauces.",
        priority: 0,
    },
    {
        item: "Chocolate",
        image: "../images/schoko1.jpg",
        description: "Dark chocolate for a little indulgence.",
        priority: 0,
    },
    {
        item: "Chips",
        image: "../images/chips1.jpg",
        description: "Potato chips, great salty snack.",
        priority: 0,
    }
];

function generateCard(val) {
    return `
        <div class="col">
            <div class="card mb-4">
                <img src="${val.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${val.item}</h5>
                    <p class="card-text">${val.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <button class="btn btn-primary importance-btn">Importance</button>
                        <span class="badge text-bg-${val.priority < 2 ? 'success' : val.priority < 4 ? 'warning' : 'danger'}">${val.priority}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

document.getElementById("resu").insertAdjacentHTML('beforebegin', '<div class="d-flex justify-content-start mb-3"><button id="sort" class="btn btn-secondary">Sort by Priority</button></div>');

for (const val of items) {
    document.getElementById("resu").innerHTML += generateCard(val);
}

let btns = document.querySelectorAll(".importance-btn");

btns.forEach((element, i) => {
    element.addEventListener("click", () => {
        if (items[i].priority < 5) {
            items[i].priority++;
            const badge = element.nextElementSibling;
            badge.textContent = items[i].priority;
            
            if (items[i].priority < 2) {
                badge.className = 'badge text-bg-success';
            } else if (items[i].priority < 4) {
                badge.className = 'badge text-bg-warning';
            } else {
                badge.className = 'badge text-bg-danger';
            }
        }
    });
});

document.getElementById("sort").addEventListener("click", () => {
    const sortedItems = [...items].sort((a, b) => a.priority - b.priority);
    items = sortedItems;
    document.getElementById("resu").innerHTML = '';
    for (const val of items) {
        document.getElementById("resu").innerHTML += generateCard(val);
    }
    btns = document.querySelectorAll(".importance-btn");
    btns.forEach((element, i) => {
        element.addEventListener("click", () => {
            if (items[i].priority < 5) {
                items[i].priority++;
                const badge = element.nextElementSibling;
                badge.textContent = items[i].priority;
                if (items[i].priority < 2) {
                    badge.className = 'badge text-bg-success';
                } else if (items[i].priority < 4) {
                    badge.className = 'badge text-bg-warning';
                } else {
                    badge.className = 'badge text-bg-danger';
                }
            }
        });
    });
});