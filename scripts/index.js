// initial cards data — runs immediately when the page loads and stores the starter card info
const initialCards = [
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

// profile elements — runs immediately and stores the profile text elements
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

// edit profile elements — runs immediately and stores the edit profile modal elements
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

// new post elements — runs immediately and stores the new post modal elements
const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostImgInput = newPostModal.querySelector("#img-link-input");
const newPostCaption = newPostModal.querySelector("#caption-input");

// card elements — runs immediately and stores card-related elements
const newPostImgEl = document.querySelector(".card__image");
const newPostCaptionEl = document.querySelector(".card__title");

// open modal function — does not run yet; runs when called by a click or submit handler
function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

// close modal function — does not run yet; runs when called by a click or submit handler
function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

// edit profile submit handler — does not run yet; runs when the edit profile form is submitted
function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescription.value;
  closeModal(editProfileModal);
}

// new post submit handler — does not run yet; runs when the new post form is submitted
function handleNewPostSubmit(evt) {
  evt.preventDefault();
  console.log("Image URL:", newPostImgInput.value);
  console.log("Caption:", newPostCaption.value);
  newPostForm.reset();
  closeModal(newPostModal);
}

// edit profile button listener — runs immediately to set up the click event; inner function runs when clicked
editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescription.value = profileDescriptionEl.textContent;
  openModal(editProfileModal);
});

// edit profile close button listener — runs immediately to set up the click event; closes modal when clicked
editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

// new post button listener — runs immediately to set up the click event; opens modal when clicked
newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

// new post close button listener — runs immediately to set up the click event; closes modal when clicked
newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

// edit profile form listener — runs immediately to set up the submit event; handler runs when submitted
editProfileForm.addEventListener("submit", handleEditProfileSubmit);

// new post form listener — runs immediately to set up the submit event; handler runs when submitted
newPostForm.addEventListener("submit", handleNewPostSubmit);

// initial cards loop — runs immediately when the page loads and logs each card
initialCards.forEach(function (item) {
  console.log(item.name);
  console.log(item.link);
});
