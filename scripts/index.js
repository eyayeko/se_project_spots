// Initial cards displayed when the page loads
const initialCards = [
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

// Profile elements
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

// Edit Profile modal elements
const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescription = editProfileModal.querySelector(
  "#profile-description-input"
);

// New Post modal elements
const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostImgInput = newPostModal.querySelector("#img-link-input");
const newPostCaption = newPostModal.querySelector("#caption-input");

// Image Preview modal elements
const previewModal = document.querySelector("#preview-modal");
const previewImage = previewModal.querySelector(".modal__img");
const previewCaption = previewModal.querySelector(".modal__caption");
const previewCloseBtn = previewModal.querySelector(
  ".modal__close-btn_type_preview"
);

// Card template and card container
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

const cardsList = document.querySelector(".cards__list");

// Reusable function to open modals
function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

// Reusable function to close modals
function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

// Create a card using the HTML template
function getCardElement(data) {
  // Clone the card template
  const cardElement = cardTemplate.cloneNode(true);

  // Select the card elements
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImgEl = cardElement.querySelector(".card__image");
  const cardLikeBtnEl = cardElement.querySelector(".card__like-btn");
  const cardDelBtnEl = cardElement.querySelector(".card__delete-btn");

  // Assign the card's image and title
  cardImgEl.src = data.link;
  cardImgEl.alt = data.name;
  cardTitleEl.textContent = data.name;

  // Like button functionality
  cardLikeBtnEl.addEventListener("click", () => {
    cardLikeBtnEl.classList.toggle("card__like-btn_active");
  });

  // Delete button functionality
  cardDelBtnEl.addEventListener("click", () => {
    cardElement.remove();
  });

  // Image preview functionality
  cardImgEl.addEventListener("click", () => {
    previewCaption.textContent = data.name;
    previewImage.src = data.link;
    previewImage.alt = data.name;

    openModal(previewModal);
  });

  return cardElement;
}

// Handle Edit Profile form submission
function handleEditProfileSubmit(evt) {
  evt.preventDefault();

  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescription.value;

  closeModal(editProfileModal);
}

// Handle New Post form submission
function handleNewPostSubmit(evt) {
  evt.preventDefault();

  // Store the new card information
  const inputValues = {
    name: newPostCaption.value,
    link: newPostImgInput.value,
  };

  // Generate a new card and add it first
  const cardElement = getCardElement(inputValues);
  cardsList.prepend(cardElement);

  // Reset the form and close the modal
  newPostForm.reset();
  closeModal(newPostModal);
}

// Open Edit Profile modal and populate current profile information
editProfileBtn.addEventListener("click", () => {
  editProfileNameInput.value = profileNameEl.textContent.trim();
  editProfileDescription.value = profileDescriptionEl.textContent.trim();

  openModal(editProfileModal);
});

// Close Edit Profile modal
editProfileCloseBtn.addEventListener("click", () => {
  closeModal(editProfileModal);
});

// Open New Post modal
newPostBtn.addEventListener("click", () => {
  openModal(newPostModal);
});

// Close New Post modal
newPostCloseBtn.addEventListener("click", () => {
  closeModal(newPostModal);
});

// Close Image Preview modal
previewCloseBtn.addEventListener("click", () => {
  closeModal(previewModal);
});

// Form submission event listeners
editProfileForm.addEventListener("submit", handleEditProfileSubmit);
newPostForm.addEventListener("submit", handleNewPostSubmit);

// Generate the initial cards when the page loads
initialCards.forEach((item) => {
  const cardElement = getCardElement(item);
  cardsList.append(cardElement);
});
