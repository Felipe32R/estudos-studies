

function save(){
  const data = document.querySelector('#input')

  sessionStorage.setItem('userName', data.value )

}

function get(){
  const name = sessionStorage.getItem('userName')
  console.log(name);
}