
AOS.init(
  {
    duration: 1000
  }
);
function openMenu() {
  $('aside').css('margin-left', '15rem');
}
function closeMenu() {
  $('aside').css('margin-left', '0rem');
}
$('#toggleMenu').click(function () {
  openMenu();
});
$(window).on('resize', function () {
  closeMenu();

});
$('#closeMenu').click(function () {
  closeMenu();
});

$('document').ready(function(){
  setTimeout(() => {requestUserRepos('lucmas92')},2000);
});

function requestUserRepos(username){

  // Create new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // GitHub endpoint, dynamically passing in specified username
  const url = `https://api.github.com/users/lucmas92/repos`;
  console.log(url);
  // Open a new connection, using a GET request via URL endpoint
  // Providing 3 arguments (GET/POST, The URL, Async True/False)

  xhr.open('GET', url, true);
  // xhr.setRequestHeader("Authorization", "token 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")

  // When request is received
  // Process it here
  xhr.onload = function () {

    // Parse API data into JSON
    const data = JSON.parse(this.response);

    // Loop over each object in data array
    for (let i in data) {

      // Get the ul with id of of userRepos
      let loading = document.getElementById('loadingRepos');
      loading.classList.add('hidden');

      let ul = document.getElementById('userRepos');

      // Create variable that will create li's to be added to ul
      let li = document.createElement('div');

      // Add Bootstrap list item class to each li
      li.classList.add('border')
      li.classList.add('hover:bg-gray-100')
      li.classList.add('p-3')
      // li.classList.add('p-1')

      li.setAttribute("data-aos","fade-right");
      li.setAttribute("data-aos-offset","300");

      // Create the html markup for each li
      li.innerHTML = (`
                <p><strong>Repo:</strong> ${data[i].name}</p>
                <p><strong>Description:</strong> ${data[i].description}</p>
                <p><strong>Linguaggio Utilizzato:</strong> ${data[i].language}</p>
                <p>
                    <a class="" target="_blank" href="${data[i].html_url}">
                        <img src="img/github2.png" class="w-8 h-8 mr-2" alt="">
                    </a>
                </p>
            `);

      // Append each li to the ul
      ul.appendChild(li);

    }

  }

  // Send the request to the server
  xhr.send();

}
