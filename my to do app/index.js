/* user to replace class */
const replaceClass = (el, from, to) => el.classList.replace(from, to);

/* open new note modal */
const newNoteModal = document.querySelector("#new_note_modal");
let newNoteModalToggle = newNoteModal.dataset.toggle;

function newNoteModalCollapse() {

    if (newNoteModalToggle === "close") {
        newNoteModal.classList.remove("hidden");
        newNoteModalToggle = "open";
    } else {
        newNoteModal.classList.add("hidden");
        newNoteModalToggle = "close";
        titleInput.value = "";
        descriptionInput.value = "";
    }

}

/* use to add new note */
const notesContainer = document.querySelector("#notes_container");
let titleInput = document.querySelector("#note_title_input");
let descriptionInput = document.querySelector("#note_description_input");
let nowDate = new Date();
let index = 1;
let indexArray = [1];

function addNewNote() {

    index++;
    indexArray.push(index);

    if (titleInput.value == "" || descriptionInput.value == "") {
        alert("Please fill all the fields. Thanks");
    }
    else {
        notesContainer.innerHTML +=
            `<div class="px-2 w-full xs:w-1/2 md:!w-1/3 lg:!w-1/4 self-start">
                <div class="w-full h-auto rounded-xl bg-white py-3 flex flex-col gap-y-5 overflow-hidden">
                    <div class="w-full border-l-[5px] border-gray-500 h-auto pl-5 flex flex-col">
                        <span class="font-semibold">${titleInput.value}</span>
                        <span class="text-gray-400">${nowDate}</span>
                    </div>
                    <div class="w-full pl-5">
                        <p>${descriptionInput.value}</p>
                    </div>
                    <div class="w-full px-5 flex justify-between items-center">
                        <div class="">
                            <button class="hover:text-gray-600" onclick="removeNote(${index})">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg>
                            </button>
                            <button class="text-yellow-600 hover:text-yellow-500" onclick="starNote(this)" data-active="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                </svg>
                                <!-- 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                -->
                            </button>
                        </div>
                        <button 
                            data-importance="false"
                            class="text-red-500 px-3 py-2 rounded-md hover:text-red-300" 
                            onclick="importance(this, ${index})">
                            Important
                        </button>
                    </div>
                </div>
            </div>`;
        titleInput.value = "";
        descriptionInput.value = "";
        newNoteModal.classList.add("hidden");
        newNoteModalToggle = "close";
    }

}

/* use to delete a note */
function removeNote(n) {

    for (var i = 0; i < indexArray.length; i++) {

        if (indexArray[i] === n) {
            notesContainer.removeChild(notesContainer.children[i]);
            indexArray.splice(i, 1);
        }
    }

    if (n === 1) {
        index = 0;
    }

}

/* use to star a note */
const star = `<svg width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
</svg>`;
const starfill = `<svg width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>`;

function starNote(el) {

    if (el.dataset.active === "false") {
        el.innerHTML = starfill;
        el.dataset.active = "true";
    }
    else if (el.dataset.active === "true") {
        el.innerHTML = star;
        el.dataset.active = "false";
    }

}

/* to make important note */
function importance(el, n) {

    if (el.dataset.importance === "true") {
        el.classList.remove("active-importance-btn");
        el.dataset.importance = "false";
        console.log("false");

        for (var i = 0; i < indexArray.length; i++) {
            let clone = notesContainer.children[i].cloneNode(true);

            if (indexArray[i] === n) {
                importantNotesContainer.removeChild(clone);
            }
        }
    } 
    else if(el.dataset.importance === "false") {
        el.classList.add("active-importance-btn");
        el.dataset.importance = "true";
        console.log("true");

        for (var i = 0; i < indexArray.length; i++) {
            let clone = notesContainer.children[i].cloneNode(true);

            if (indexArray[i] === n) {
                importantNotesContainer.appendChild(clone);
            }
        }
    }

}

/* use to switch tab */
const importantNotesContainer = document.querySelector("#important_notes_container");
const tab = document.querySelector("#tab");
const importantTab = document.querySelector("#important_tab");

function switchTab(n) {

    if (n === 1) {
        replaceClass(notesContainer, "hidden", "flex");
        tab.classList.add("active-tab");
        replaceClass(importantNotesContainer, "flex", "hidden");
        importantTab.classList.remove("active-tab");
    } else {
        replaceClass(notesContainer, "flex", "hidden");
        tab.classList.remove("active-tab");
        replaceClass(importantNotesContainer, "hidden", "flex");
        importantTab.classList.add("active-tab");
    }

}