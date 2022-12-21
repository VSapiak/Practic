(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-window]"),
      closeModalBtn: document.querySelector("[data-modal-close-window]"),
      modal: document.querySelector("[data-modal-window]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();


  // Todo List ul 

  const button = document.querySelector('.btn-todo');
  const input = document.querySelector('.input-todo');
  const list = document.querySelector('.todo-list');
  
  button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.className = 'todo-list-item';
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    li.innerText = input.value;
    list.appendChild(li);
    li.appendChild(deleteBtn);
    input.value = '';
    
    deleteBtn.addEventListener('click', () => {
      list.removeChild(li);
    });
  });


