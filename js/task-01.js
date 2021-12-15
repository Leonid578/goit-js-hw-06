let categories = document.querySelector('#categories').children.length;
console.log('Number of categories:', categories)

let titleContent = document.querySelectorAll('.item').forEach((e) =>
    console.log('Category:', e.firstElementChild.textContent, 
    'Elements:', e.querySelector('ul').children.length) );

// let titleContent = document.querySelectorAll( '.item' )
//     .forEach( ( elem, index, arr ) =>
//         console.log('Category:', elem.firstElementChild.textContent,
//         'Elements:',elem.lastElementChild.children.length ) );
