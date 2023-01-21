
const init = async () => {
    let data = await ( await fetch('/api/nutrition')).json()

    console.log(data);

    document.body.innerHTML += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <table>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Proteins</th>
                <th>Calories</th>
                <th>Servings</th>
            </thead>
            <tbody></tbody>
        </table>
    </div>
  </div>
    `;

    data.forEach(DataRow => {
        let row = document.createElement('tr');
        
        Object.values(DataRow).forEach(cellData => {
            row.innerHTML += `<td>${cellData}</td>`
        });

        document.querySelector('tbody').appendChild(row);
    });
};

init();