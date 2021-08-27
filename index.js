const getUser = () => {
    fetch('https://randomuser.me/api/?results=100')
        .then(res => res.json())
        .then(data => displayData(data.results))
}

getUser();


const displayData = (data) => {
    const displayImage = document.querySelector('img');
    const subTitle = document.getElementById('subtitle');
    const title = document.getElementById('title');

    for(const users of data){
        displayImage.src = users.picture.large;
        subTitle.innerHTML = `My Name is: `;
        title.innerHTML = `${users.name.title} ${users.name.first} ${users.name.last}`;
        user(users);
        mail(users);
        calender(users);
        map(users);
        key(users)
    }
}

document.querySelector('button').addEventListener('click', () => {
    getUser();
})

const user = (users) => {
    document.getElementById('user-icon').addEventListener('click', () => {
        const subTitle = document.getElementById('subtitle');
        const title = document.getElementById('title');
    
        subTitle.innerHTML = `My Name is: `;
        title.innerHTML = `${users.name.title} ${users.name.first} ${users.name.last}`;
    })
}
const mail = (users) =>{
    document.getElementById('mail-icon').addEventListener('click', () => {
        const subTitle = document.getElementById('subtitle');
        const title = document.getElementById('title');
    
        subTitle.innerHTML = `My E-mail Address is: `;
        title.innerHTML = `${users.email}`;
    })
}
const calender = (users) =>{
    document.getElementById('calender-icon').addEventListener('click', () => {
        const subTitle = document.getElementById('subtitle');
        const title = document.getElementById('title');
    
        subTitle.innerHTML = `My Age is: `;
        title.innerHTML = `${users.dob.age}`;
    })
}
const map = (users) =>{
    document.getElementById('map-icon').addEventListener('click', () => {
        const subTitle = document.getElementById('subtitle');
        const title = document.getElementById('title');
    
        subTitle.innerHTML = `I Live In: `;
        title.innerHTML = `${users.location.street.number}, ${users.location.street.name}, ${users.location.city},${users.location.state}, ${users.location.country}`;
    })
}
const key = (users) =>{
    document.getElementById('key-icon').addEventListener('click', () => {
        const subTitle = document.getElementById('subtitle');
        const title = document.getElementById('title');
    
        subTitle.innerHTML = `My Password Is: `;
        title.innerHTML = `${users.login.password}`;
    })
}