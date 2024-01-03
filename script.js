const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list1");
const tujuan = document.getElementById("list2");
const button = document.getElementById("btn");
const tes = document.getElementsByClassName("todo-app");

inputBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    // Ambil nilai dari input
    var inputValue = document.getElementById("input-box").value;
    // Tampilkan nilai pada elemen dengan id "result"
    addTask();
  }
});

function addTask() {
  if (inputBox.value === "") {
    alert("Jangan Kosong");
  } else {
    let li = document.createElement("li");
    listContainer.appendChild(li);
    li.classList.add("col-md-5");
    // li.setAttribute("style", "padding-left : 5%;");
    li.setAttribute("onclick", "pindahkan(this)");
    li.innerHTML = inputBox.value;
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  inputBox.focus();
  simpan();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      simpan();
    }
  },
  false
);
function pindahkan(liElement) {
  // Dapatkan elemen tujuan (section) berdasarkan ID

  const tujuan = document.getElementById("list2");

  // Hapus elemen li dari tempat asalnya
  liElement.parentNode.removeChild(liElement);
  liElement.classList.toggle("active");
  liElement.removeAttribute("onclick", "pindahkan(this)");
  liElement.setAttribute("onclick", "balikan(this)");

  // Sisipkan elemen li ke dalam elemen tujuan (section)
  tujuan.appendChild(liElement);
  simpan();
  sebelum.addEventListener(
    "click",
    function (i) {
      if (i.target.tagName === "SPAN") {
        i.target.parentElement.remove();
        simpan();
      }
    },
    false
  );
}

function balikan(liElement) {
  const sebelum = document.getElementById("list1");
  liElement.parentNode.removeChild(liElement);
  liElement.classList.toggle("active");
  liElement.removeAttribute("onclick", "balikan(this)");
  liElement.setAttribute("onclick", "pindahkan(this)");

  sebelum.appendChild(liElement);
  simpan();
  tujuan.addEventListener(
    "click",
    function (x) {
      if (x.target.tagName === "SPAN") {
        x.target.parentElement.remove();
        simpan();
      }
    },
    false
  );
}

function tambah() {
  const tes = document.getElementById("box");
  tes.classList.toggle("active");
}

function simpan() {
  localStorage.setItem("data", listContainer.innerHTML);
  localStorage.setItem("datas", tujuan.innerHTML);
}

function show() {
  listContainer.innerHTML = localStorage.getItem("data");
  tujuan.innerHTML = localStorage.getItem("datas");
}

show();
