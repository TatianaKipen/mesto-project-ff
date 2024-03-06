// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу


const cardsContainer = document.querySelector('.places__list');

function createCardElement(item, deleteCard) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  
  cardElement.querySelector('.card__image').src = item.link;
  cardElement.querySelector('.card__title').textContent = item.name;
  cardElement.querySelector('.card__image').alt = item.name;

  deleteButton.addEventListener('click', deleteCard);

  return cardElement;
}
  
function deleteCard(event) {
  const deletedCard = event.target.closest('.card');
  deletedCard.remove();
}

initialCards.forEach((item) => {
const card = createCardElement(item, deleteCard);
cardsContainer.append(card);
});