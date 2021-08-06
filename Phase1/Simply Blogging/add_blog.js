function addBlog() {
    // alert("Event fired...")
    //This code create p tag 
    console.log("begin");
    var title = document.getElementById("title").value;
    var article = document.getElementById("article").value;
    var image = document.getElementById("image").value;

    var parent = document.getElementById("parent");
    console.log(parent);
    var element = document.createElement('div');
    element.classList.add('col', 'mb-3');

    var child =     `<div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                            style="background-image: url('https://images.unsplash.com/photo-1492896864827-5fc3ef540db6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHVuc3BsYXNoJTIwcGhvdG8lMjAyLmpwZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60');">
                            <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1" style="border: 2px solid black">
                                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style="color: red">${title}</h2>
                                <ul class="d-flex list-unstyled mt-auto">
                                    <li class="me-auto">
                                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32"
                                            class="rounded-circle border border-white">
                                    </li>
                                    <li class="d-flex align-items-center me-3">
                                        <svg class="bi me-2" width="1em" height="1em">
                                            <use xlink:href="#geo-fill" />
                                        </svg>
                                        <medium style="color: black">${article}</medium>
                                    </li>
                                    <li class="d-flex align-items-center">
                                        <svg class="bi me-2" width="1em" height="1em">
                                            <use xlink:href="#calendar3" />
                                        </svg>
                                        <medium><img src="${image}" height="200px" width="200px" ></img></medium>
                                    </li>
                                </ul>
                            </div>
                        </div>`;

    element.innerHTML = child;
    parent.appendChild(element);
    console.log("child added");



    // var myPTag = document.createElement("p");

    // //This code create text node 
    // var myPTagContent = document.createTextNode("Ttile: " + title + " Article: " + article + "Image: " + image);
    // myPTag.setAttribute("style", "color:red;");     //inline css 
    // //myPTag.setAttribute("class", "myPClass");        // external Css 
    // //This code add text node to p tag 
    // myPTag.appendChild(myPTagContent);

    // // refer the tag using id selector and append the p tag to div tag
    // document.getElementById("info").appendChild(myPTag);
}