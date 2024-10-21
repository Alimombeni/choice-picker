const tagsEl = document.getElementById('tags');
const textareaEl = document.getElementById('textarea');

textareaEl.focus()

textareaEl.addEventListener('keyup' , (e)=>{

    createTags(e.target.value);

})

function createTags (input){
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    tagsEl.innerHTML = '';
    tags.forEach(tag=> {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.textContent = tag;
        tagsEl.appendChild(tagEl);



    })

}
















