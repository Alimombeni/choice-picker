const tagsEl = document.getElementById('tags');
const textareaEl = document.getElementById('textarea');
// section create tag
textareaEl.focus()
textareaEl.addEventListener('keyup' , (e)=>{
    createTags(e.target.value);

    if (e.key === 'Enter'){
        setTimeout( ()=>{
            e.target.value = ''
        },10)

        randomSelect()
    }

})
// ===========================create tag element
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

// section random tags

function randomSelect () {

    const times = 30;
    const interval = setInterval(()=>{
    const randomTag = pickRandomTag();

    highLightTag(randomTag)

        setTimeout(()=>{
        unHighLightTag(randomTag)

        },100)

    },100);
    setTimeout(()=>{
        clearInterval(interval)
        setTimeout(()=>{
            const randomtag = pickRandomTag()
            highLightTag(randomtag)

        },100)
    },times * 100)


}

function pickRandomTag () {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length )]


}


function  highLightTag (tag) {
    tag.classList.add('highlight')

}
function unHighLightTag (tag) {
    tag.classList.remove('highlight')
}








