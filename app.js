// async function fetchPosts() {
//     try {
//         const response = await fetch('http://localhost:3000/posts');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const posts = await response.json();
//         return posts;
//     } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//     }
// }

// // Function to display posts on the page
async function displayPosts() {
    const postList = document.getElementById('post-list');
    const posts = await fetchPosts();
    if (posts) {
        posts.forEach(post => {
            const li = document.createElement('li');
            li.textContent = `${post.title}: ${post.content}`;
            postList.appendChild(li);
        });
    }
}

// // Call the function to display posts
displayPosts();
// async function deletepost(postId){
//     const responseawaitfetch (`http://localhost:3000/posts/${postId}`),
//         {
//             method : "DELETE",
//         };
//         console.log(response)
// }
// const postIddelete=2;
// deletepost(postrIdtodelete);

// async function createPost(newProduct) {
//     const response = await fetch("("https:assets.dummyjson.com/public/qr-code.png"},"images")", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newProduct),
//     });
  
//     const createdProduct = await response.json();
//     return createdProduct;
//   }
  
//   const newProduct = 
//     {
//         "Item no":"1",
//         "title" :"Essence Mascara Lash Princess",
//         "Descripition" :"this"
//       },
//       {
//       "Item no":"1",
//       "title" :"Essence Mascara Lash Princess",
//       "Descripition" :"this"
//     },
      

//   createPost( newProduct)
    var mybtn=document.getElementById('btn')
    mybtn.onclick =btnclick

    function btnclick()
    {
      console.log();
      
    }