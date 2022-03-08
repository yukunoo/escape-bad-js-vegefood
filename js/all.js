// TODO: 修正 ESLint 錯誤、補上分號、前輩說要改單引號 QQ
const url = 'https://hexschool.github.io/js-filter-data/data.json';

let data = [];

const table = document.querySelector('.table-content');
let showData;

let category = '';
const filter = document.querySelector('.filter');

function renderData(datalist) {
  let str = '';
  datalist.forEach((b) => {
    const content = `
    <tr><td>${b.作物名稱}
    </td><td>${b.市場名稱}
    </td><td>${b.上價}
    </td><td>${b.中價}
    </td><td>${b.下價}
    </td><td>${b.平均價}
    </td><td> ${b.交易量}
    </td></tr>
    `;
    str += content;
  });
  table.innerHTML = str;
}

function filterCategory(e) {
  if (e.target.nodeName === 'BUTTON') {
    category = e.target.dataset.category;
    showData = data.filter((i) => i.種類代碼 === category);
    renderData(showData);
  }
}

filter.addEventListener('click', filterCategory);

window.axios.get(url)
  .then((res) => {
    data = res.data.filter((a) => a.作物名稱);
    renderData(data);
  });
